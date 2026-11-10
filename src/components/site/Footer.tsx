export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img
            src="/pata-logo.svg"
            alt=""
            aria-hidden="true"
            className="size-6 rounded-md"
          />
          <span className="font-semibold">Pata</span>
          <span className="text-muted">· পাতা</span>
        </div>
        <p className="text-sm text-muted">
          <span lang="bn">বাংলাদেশে তৈরি</span> — Made in Bangladesh · © 2026
        </p>
      </div>
    </footer>
  );
}
