import { useState, type FormEvent } from "react";
import { CircleCheck, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Phase = "idle" | "submitting" | "success" | "error";

interface ApiResponse {
  status: "ok" | "error";
  duplicate?: boolean;
  message?: string;
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [duplicate, setDuplicate] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phase === "submitting") return;

    setPhase("submitting");
    setError(null);

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

      setError(
        data?.message ?? "Something went wrong on our side. Please try again."
      );
      setPhase("error");
    } catch {
      setError("Network error — check your connection and try again.");
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
            {duplicate
              ? "You're already on the list."
              : "You're on the list."}
          </p>
          <p className="mt-1 text-sm text-muted">
            One email when Pata opens its doors — nothing else until then.
          </p>
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
          aria-label="Email address"
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
              Joining…
            </>
          ) : (
            "Join the waitlist"
          )}
        </Button>
      </form>
      {phase === "error" && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
