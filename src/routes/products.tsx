import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CATALOG } from "@/lib/catalog";
import { usePageReveal } from "@/hooks/useScrollReveal";
import { SEO } from "@/components/site/SEO";

const TITLE = "Hydraulic Products & Component Supplies | RVS Hydraulics";
const DESC =
  "Purchase industrial-grade hydraulic products including axial piston pumps, control valves, high-pressure crimped hoses, fittings, seal kits, and power packs in Hosur.";

export const Route = createFileRoute("/products")({
  component: Products,
});

function Products() {
  usePageReveal();

  return (
    <>
      <SEO
        title={TITLE}
        description={DESC}
        keywords="buy hydraulic pumps Hosur, hydraulic valves Shoolagiri, seal kits Krishnagiri, custom power packs Bangalore, RVS Hydraulics"
      />

      <section className="pt-32 pb-24 md:pt-36 md:pb-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-3">
              Products Catalog
            </div>
            <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl lg:text-6xl text-foreground">
              Hydraulic <span className="text-gradient-brand">Products Catalog</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto md:text-base">
              Industrial-grade hydraulic components, spares, and customized power assemblies. Sourced from certified manufacturers and dynamically tested.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CATALOG.map((c, idx) => (
              <Link
                key={c.slug}
                to="/products/$productId"
                params={{ productId: c.slug }}
                className="reveal-card group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-glow-gold cursor-pointer flex flex-col justify-between text-left"
                data-delay={idx * 80}
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.title}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-md">
                        {c.short}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-primary/20 group-hover:border-primary bg-card group-hover:bg-primary/5 text-primary py-3 text-sm font-bold transition duration-300">
                    View Specifications{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
