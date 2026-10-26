import { cx } from "@/lib/cx";

/**
 * A decorative running-stitch border sewn inside its parent (parent must be `relative`).
 * `tone="maroon"` is the brand thread; `tone="ivory"` is for use over photographs.
 */
export function Stitch({ className, tone = "maroon" }: { className?: string; tone?: "maroon" | "ivory" }) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute z-[3] border-[1.5px] border-dashed",
        tone === "maroon" ? "border-maroon/65" : "border-paper/85",
        className,
      )}
    />
  );
}
