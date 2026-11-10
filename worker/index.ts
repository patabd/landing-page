import type { Env } from "./env";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBMISSIONS_PER_IP_PER_DAY = 10;

interface WaitlistRequest {
  email?: unknown;
  hp?: unknown;
}

type ApiErrorCode =
  | "invalid_body"
  | "invalid_email"
  | "rate_limited"
  | "storage_error"
  | "not_found";

type WaitlistResponse =
  | { status: "ok"; duplicate?: boolean }
  | { status: "error"; code: ApiErrorCode; message: string };

function json(data: WaitlistResponse, status = 200): Response {
  return Response.json(data, { status });
}

async function hashIp(ip: string, salt: string): Promise<string> {
  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function handleWaitlist(request: Request, env: Env): Promise<Response> {
  let body: WaitlistRequest;
  try {
    body = await request.json<WaitlistRequest>();
  } catch {
    return json(
      {
        status: "error",
        code: "invalid_body",
        message: "Invalid request body.",
      },
      400
    );
  }

  // Honeypot: bots fill hidden fields. Answer success without touching the DB.
  if (typeof body.hp === "string" && body.hp.length > 0) {
    return json({ status: "ok" });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > MAX_EMAIL_LENGTH) {
    return json(
      {
        status: "error",
        code: "invalid_email",
        message: "Please enter a valid email address.",
      },
      400
    );
  }

  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const ipHash = await hashIp(ip, env.WAITLIST_IP_SALT ?? "");

  try {
    const recent = await env.DB.prepare(
      "SELECT COUNT(*) AS count FROM waitlist WHERE ip_hash = ?1 AND created_at >= datetime('now', '-1 day')"
    )
      .bind(ipHash)
      .first<{ count: number }>();
    if ((recent?.count ?? 0) >= MAX_SUBMISSIONS_PER_IP_PER_DAY) {
      return json(
        {
          status: "error",
          code: "rate_limited",
          message: "Too many attempts — try again tomorrow.",
        },
        429
      );
    }

    const result = await env.DB.prepare(
      "INSERT INTO waitlist (email, ip_hash, user_agent) VALUES (?1, ?2, ?3) ON CONFLICT (email) DO NOTHING"
    )
      .bind(email, ipHash, request.headers.get("User-Agent"))
      .run();

    return json({ status: "ok", duplicate: (result.meta.changes ?? 0) === 0 });
  } catch (error) {
    console.error("waitlist insert failed", error);
    return json(
      {
        status: "error",
        code: "storage_error",
        message: "Something went wrong on our side. Please try again.",
      },
      500
    );
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/api/")) {
      if (pathname === "/api/waitlist" && request.method === "POST") {
        return handleWaitlist(request, env);
      }
      return json(
        {
          status: "error",
          code: "not_found",
          message: "Not found.",
        },
        404
      );
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
