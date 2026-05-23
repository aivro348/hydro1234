import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CATALOG } from "@/lib/catalog";
import shop from "@/assets/gallery-shop.jpg";
import service from "@/assets/gallery-service.jpg";
import hero from "@/assets/hero-hydraulics.jpg";
import { usePageReveal } from "@/hooks/useScrollReveal";

const TITLE = "Gallery | RVS Hydraulics Workshop & Products";
const DESC =
  "Photos of our workshop, products and on-site hydraulic service work at RVS Hydraulics, Shoolagiri.";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  usePageReveal();

  useEffect(() => {
    document.title = TITLE;
  }, []);

  const items = [
    { src: hero, alt: "Hydraulic power pack" },
    { src: service, alt: "Cylinder service" },
    { src: shop, alt: "RVS Hydraulics shop" },
    ...CATALOG.map((c) => ({ src: c.image, alt: c.title })),
  ];

  return (
    <>
      <section className="pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Gallery
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl lg:text-6xl">
              Inside Our <span className="text-gradient-brand">Workshop</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto md:text-base">
              A look at the products we supply and the service work we deliver.
            </p>
          </div>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {items.map((it, i) => (
              <figure
                key={i}
                className="reveal-scale group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold"
                data-delay={i * 60}
              >
                <div className="overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <figcaption className="border-t border-border/50 px-5 py-4 text-sm font-medium">
                  {it.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
