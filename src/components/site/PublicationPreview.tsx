import { Lock } from "lucide-react";

import { useI18n } from "@/i18n/I18nProvider";

const posts = [
  { title: "ফাইনাল বর্ষের থিসিস: বাংলায় NLP", date: "১০ নভেম্বার" },
  { title: "Vue দিয়ে প্রথম ফুল-স্ট্যাক প্রজেক্ট", date: "২ নভেম্বার" },
  { title: "Why I moved my writing off Facebook", date: "২৭ অক্টোবর" },
];

/**
 * A sample publication — the page every creator gets automatically at
 * signup. The ivory sheet with the folded corner mirrors the logo mark.
 * Decorative: hidden from assistive tech.
 */
export function PublicationPreview() {
  const { c } = useI18n();

  return (
    <div
      aria-hidden="true"
      className="reveal mx-auto mt-16 w-full max-w-lg sm:mt-20"
      style={{ animationDelay: "200ms" }}
    >
      <div className="mb-5 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
          <Lock className="size-3" />
          tanvir.pata.page
        </span>
      </div>
      <div className="relative overflow-hidden rounded-xl bg-[#fffdf2] text-[#22301f] [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.4))_drop-shadow(0_24px_64px_rgba(0,0,0,0.45))]">
        {/* Folded corner, echoing the logo */}
        <div className="absolute top-0 right-0 size-14 bg-background [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        <div className="absolute top-0 right-0 size-14 bg-[#aed488] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
        <div lang="bn" className="p-7 sm:p-9">
          <div>
            <p className="text-xl font-bold">তানভীর হাসান</p>
            <p className="mt-1 text-sm text-[#5f6f60]">
              টেক লেখা ও প্রজেক্ট পোর্টফোলিও
            </p>
          </div>
          <nav className="mt-6 flex gap-5 text-xs font-medium">
            <span className="text-[#137a3b]">পোস্টসমূহ</span>
            <span className="text-[#5f6f60]">About</span>
            <span className="text-[#5f6f60]">Projects</span>
            <span className="text-[#5f6f60]">যোগাযোগ</span>
          </nav>
          <ul className="mt-4 divide-y divide-[#e9e6d1] border-t border-[#e9e6d1]">
            {posts.map((post) => (
              <li
                key={post.title}
                className="flex items-baseline justify-between gap-4 py-3.5"
              >
                <span className="text-sm font-semibold">{post.title}</span>
                <span className="shrink-0 text-xs text-[#7d8a77]">
                  {post.date}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end">
            <span className="rounded-md border border-[#e2dfc8] px-2.5 py-1 text-[11px] font-medium text-[#79886f]">
              Made with Pata
            </span>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-muted/80">
        {c.mock.captionBefore}
        <span className="font-mono text-xs text-muted">you.pata.page</span>
        {c.mock.captionAfter}
      </p>
    </div>
  );
}
