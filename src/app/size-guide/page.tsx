import type { Metadata } from "next";
import { Block, PageCta, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Size guide",
  description: "Find your fit: body measurement charts for womenswear and menswear at Rangeen Dhaage.",
  alternates: { canonical: "/size-guide" },
};

// TODO: replace with the real measurements for your stitched pieces.
const women = [
  ["S", "34–36", "27–29", "36–38"],
  ["M", "37–39", "30–32", "39–41"],
  ["L", "40–42", "33–35", "42–44"],
];
const men = [
  ["S", "36–38", "30–32"],
  ["M", "39–41", "33–35"],
  ["L", "42–44", "36–38"],
  ["XL", "45–47", "39–41"],
];

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-left text-[12px]">
        <thead>
          <tr className="border-b border-maroon/40 text-[10px] tracking-[.14em] text-maroon uppercase">
            {head.map((h) => (
              <th key={h} scope="col" className="py-3 pr-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-line">
              <th scope="row" className="py-3 pr-4 font-medium text-ink">
                {r[0]}
              </th>
              {r.slice(1).map((c, i) => (
                <td key={i} className="py-3 pr-4 text-ink-soft">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SizeGuidePage() {
  return (
    <PageShell
      crumb="Size guide"
      kicker="Need a hand?"
      title="Find your"
      emphasis="fit."
      intro="All measurements are body measurements in inches. Between sizes? Size up."
    >
      <Block title="How to measure">
        <ul>
          <li>Bust or chest: around the fullest part, keeping the tape level.</li>
          <li>Waist: around your natural waist, the narrowest part of your torso.</li>
          <li>Hip: around the fullest part of your hips.</li>
        </ul>
      </Block>
      <Block title="Womenswear">
        <Table head={["Size", "Bust", "Waist", "Hip"]} rows={women} />
      </Block>
      <Block title="Menswear">
        <Table head={["Size", "Chest", "Waist"]} rows={men} />
      </Block>
      <Block title="Still unsure?">
        <p>
          Send us your measurements and the piece you like via our <a href="/contact">contact page</a> and we will
          recommend a size.
        </p>
      </Block>
      <PageCta />
    </PageShell>
  );
}
