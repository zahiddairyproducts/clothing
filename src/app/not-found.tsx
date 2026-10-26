import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto grid min-h-[60vh] max-w-[1440px] place-items-center px-5 py-24 text-center">
      <div>
        <p className="text-[10px] font-semibold tracking-[.2em] text-maroon uppercase">404</p>
        <h1 className="my-3 font-serif text-[clamp(36px,6vw,64px)] leading-[1.08] font-medium tracking-[-.04em]">
          This thread leads nowhere.
        </h1>
        <p className="mx-auto mb-7 max-w-[380px] text-[13px] leading-[1.9] text-muted">
          The page you were looking for has moved or never existed. The collection is a good place to start again.
        </p>
        <ButtonLink href="/">Back to the shop</ButtonLink>
      </div>
    </main>
  );
}
