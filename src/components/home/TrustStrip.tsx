import { ArrowUpRightIcon, AsteriskIcon, DiamondIcon, HeartIcon } from "@/components/ui/icons";

const items = [
  { icon: AsteriskIcon, label: "Thoughtful prints" },
  { icon: DiamondIcon, label: "Made for your moments" },
  { icon: ArrowUpRightIcon, label: "UK delivery" },
  { icon: HeartIcon, label: "Colour, always" },
];

export function TrustStrip() {
  return (
    <ul className="mt-2 grid grid-cols-2 gap-x-1.5 gap-y-[17px] border-y border-dashed border-maroon/40 px-1.5 py-[19px] tablet:mt-[22px] tablet:gap-5 tablet:px-3 tablet:py-[22px] desktop:grid-cols-4 desktop:gap-[15px] desktop:px-[clamp(20px,7vw,105px)] desktop:py-[29px]">
      {items.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center justify-center gap-[7px] text-center text-[8px] tracking-[.04em] text-muted uppercase tablet:gap-2.5 tablet:text-[9px] tablet:tracking-[.07em] desktop:text-[10px]"
        >
          <Icon className="text-[15px] text-maroon tablet:text-[17px]" />
          {label}
        </li>
      ))}
    </ul>
  );
}
