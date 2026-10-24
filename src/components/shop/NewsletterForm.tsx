"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");
  const noteId = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setNote("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), company: data.get("company") }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("success");
      setNote("Thank you — you're on the list.");
    } catch (err) {
      setStatus("error");
      setNote(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mx-2 flex max-w-[460px] border-b border-[#a99a8d] transition-colors focus-within:border-rose tablet:mx-auto"
      >
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          aria-label="Your email address"
          aria-describedby={noteId}
          className="min-w-0 flex-1 bg-transparent px-1 py-3.5 text-[12px] text-ink outline-none placeholder:text-muted/70"
        />
        {/* Honeypot: real visitors never see or fill this */}
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-1.5 px-[5px] text-[10px] tracking-[.15em] text-wine uppercase disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join us"}
          <ArrowUpRightIcon className="text-[1.3em]" />
        </button>
      </form>
      <div
        id={noteId}
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-[15px] text-[10px] ${status === "error" ? "text-rose" : "text-wine"}`}
      >
        {note}
      </div>
    </>
  );
}
