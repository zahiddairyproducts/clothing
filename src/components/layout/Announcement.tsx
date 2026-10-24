import { site } from "@/data/site";

export function Announcement() {
  return (
    <div className="flex h-[31px] items-center justify-center border-b border-[#5c2635] bg-[#260b12] px-3 text-center text-[8px] tracking-[.08em] text-[#f3e4e8] uppercase tablet:h-[34px] tablet:text-[10px] tablet:tracking-[.13em]">
      {site.announcement}
      <span aria-hidden="true" className="px-2">·</span>
      <span>A little colour, delivered</span>
    </div>
  );
}
