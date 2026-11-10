import { useState, type FormEvent } from "react";
import { CircleCheck, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/i18n/I18nProvider";

type Phase = "idle" | "submitting" | "success" | "error";

type ApiErrorCode =
  | "invalid_email"
  | "rate_limited"
  | "invalid_body"
  | "storage_error";

type Failure = { kind: "api"; code: ApiErrorCode | null } | { kind: "network" };

interface ApiResponse {
  status: "ok" | "error";
  duplicate?: boolean;
  code?: ApiErrorCode;
}

export function WaitlistForm() {
  const { c } = useI18n();
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [duplicate, setDuplicate] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);

  // Derived at render time, so an error shown before a language switch
  // re-renders in the new locale.
  const errorMessage =
    failure?.kind === "network"
      ? c.errors.network
      : failure?.code === "invalid_email"
        ? c.errors.invalid_email
        : failure?.code === "rate_limited"
          ? c.errors.rate_limited
          : c.errors.generic;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phase === "submitting") return;

    setPhase("submitting");
    setFailure(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, hp: honeypot }),
      });
      const data = (await response
        .json()
        .catch(() => null)) as ApiResponse | null;

      if (response.ok && data?.status === "ok") {
        setDuplicate(Boolean(data.duplicate));
        setPhase("success");
        return;
      }

      setFailure({ kind: "api", code: data?.code ?? null });
      setPhase("error");
    } catch {
      setFailure({ kind: "network" });
      setPhase("error");
    }
  }

  if (phase === "success") {
    return (
      <div
        role="status"
        className="flex items-start justify-center gap-3 text-left"
      >
        <CircleCheck
          className="mt-0.5 size-5 shrink-0 text-accent"
          aria-hidden="true"
        />
        <div>
          <p className="font-semibold">
            {duplicate ? c.form.duplicateTitle : c.form.successTitle}
          </p>
          <p className="mt-1 text-sm text-muted">{c.form.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          required
          autoComplete="email"
          aria-label={c.form.emailLabel}
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={phase === "submitting"}
          className="sm:flex-1"
        />
        {/* Honeypot — hidden from people, irresistible to bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          className="hidden"
        />
        <Button
          type="submit"
          disabled={phase === "submitting"}
          className="w-full sm:w-auto"
        >
          {phase === "submitting" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              {c.form.submitting}
            </>
          ) : (
            c.form.submit
          )}
        </Button>
      </form>
      {phase === "error" && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
