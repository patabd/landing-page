import { cn } from "@/lib/utils";

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const EN_DIGITS = "0123456789";

interface DigitRollProps {
  value: number;
  locale: "bn" | "en";
  prefix?: string;
  className?: string;
}

/**
 * Locale-aware rolling number for the pricing table.
 *
 * NumberFlow can't render non-Latin digits ("Non-Latin digits and RTL
 * locales aren't currently supported" — number-flow issue #8), so Bangla
 * prices get their own wheel of Bengali numerals with the same motion:
 * each digit slides vertically to its target on a short ease-out.
 * The current digit is real text (kept invisible to reserve its exact
 * width and baseline); the wheel is an overlay.
 */
export function DigitRoll({ value, locale, prefix, className }: DigitRollProps) {
  const numerals = locale === "bn" ? BN_DIGITS : EN_DIGITS;
  const formatted = new Intl.NumberFormat(locale).format(value);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {prefix != null && <span className="inline-block">{prefix}</span>}
      {[...formatted].map((char, i) => {
        const index = numerals.indexOf(char);
        if (index === -1) {
          // Separators etc. render as-is.
          return <span key={i} className="inline-block">{char}</span>;
        }
        return (
          <span key={i} className="relative inline-block leading-[1em]">
            <span className="invisible">{char}</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <span
                className="digit-wheel__strip block"
                style={{ transform: `translateY(-${index}em)` }}
              >
                {[...numerals].map((numeral) => (
                  <span
                    key={numeral}
                    className="block h-[1em] leading-[1em]"
                  >
                    {numeral}
                  </span>
                ))}
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
