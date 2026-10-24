import { site } from "@/data/site";

export function Announcement() {
  return (
    <div className="flex h-[31px] items-center justify-center border-b border-line bg-paper-2 px-3 text-center text-[8px] tracking-[.08em] text-ink-soft uppercase tablet:h-[34px] tablet:text-[10px] tablet:tracking-[.13em]">
      {site.announcement}
      <span aria-hidden="true" className="px-2">·</span>
      <span>A softer kind of style</span>
    </div>
  );
}
