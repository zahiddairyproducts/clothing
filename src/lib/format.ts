import { site } from "@/data/site";

const money = new Intl.NumberFormat(site.locale, {
  style: "currency",
  currency: site.currency,
});

const moneyWhole = new Intl.NumberFormat(site.locale, {
  style: "currency",
  currency: site.currency,
  maximumFractionDigits: 0,
});

/** £79.00 */
export const formatPrice = (amount: number) => money.format(amount);
/** £79 */
export const formatPriceShort = (amount: number) => moneyWhole.format(amount);
