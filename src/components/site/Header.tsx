import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const { locale, setLocale, c } = useI18n();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#why", label: c.nav.why },
    { href: "#pricing", label: c.nav.pricing },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5 rounded-md">
          <img
            src="/pata-logo.svg"
            alt=""
            aria-hidden="true"
            className="size-7 rounded-lg"
          />
          <span className="text-base font-semibold tracking-tight">Pata</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors duration-150 ease-out hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label={c.language.switchLabel}
              className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
            >
              {(["bn", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLocale(option)}
                  aria-pressed={locale === option}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
                    locale === option
                      ? "bg-surface text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {option === "bn" ? "বাংলা" : "EN"}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setTheme(theme === "day" ? "night" : "day")}
              aria-label={c.theme.toggleLabel}
              title={c.theme.toggleLabel}
              className="flex size-7 items-center justify-center rounded-full border border-border text-muted transition-colors duration-150 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
            >
              {theme === "day" ? (
                <Moon className="size-3.5" aria-hidden="true" />
              ) : (
                <Sun className="size-3.5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
