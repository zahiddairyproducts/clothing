import type { Metadata } from "next";
import { Block, PageCta, PageShell } from "@/components/pages/PageShell";

export const metadata: Metadata = {
  title: "Size guide",
  description:
    "Bust and hip measurements in inches for the sizes we stock, and how to choose the right size for you.",
  alternates: { canonical: "/size-guide" },
};

/**
 * Taken from the measurements listed for the pieces currently in the collection (inches).
 * Measurements differ a little between designs, so each product page lists its own.
 */
const women = [
  ["S", "18 to 19½", "19 to 21"],
  ["M", "20 to 21½", "21 to 23"],
  ["L", "21 to 23", "23 to 25"],
  ["XL", "24", "25½"],
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
      intro="Every piece is listed with its measurements in inches. Please check the bust, hips and shirt length on the product page before you order."
    >
      <Block title="How to choose your size">
        <p>
          The simplest way to choose a size is to measure a suit you already own and like to wear, then compare it with
          the bust, hips and shirt length listed on the product page of the piece you want.
        </p>
        <p>
          Many of our pieces are available in one size only, and the size is shown on the product page along with its
          measurements.
        </p>
      </Block>
      <Block title="Womenswear measurements">
        <p>
          The table below shows the bust and hip measurements, in inches, of the pieces we currently stock in each size.
          They vary a little from one design and fabric to another, so the product page always has the exact figures for
          that piece.
        </p>
        <Table head={["Size", "Bust (inches)", "Hips (inches)"]} rows={women} />
      </Block>
      <Block title="Shirt length">
        <p>
          Shirt length depends on the design, so it is not part of the table. It is listed on each product page in
          inches.
        </p>
      </Block>
      <Block title="Menswear">
        <p>
          Please contact us with the piece you are interested in and we will confirm its measurements for you.
        </p>
      </Block>
      <Block title="Still unsure?">
        <p>
          If you have any question about the size of a piece, please get in touch through our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </Block>
      <PageCta />
    </PageShell>
  );
}
