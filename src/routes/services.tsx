import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { SERVICES, ServiceCategory } from "@/lib/services";
import { waLink } from "@/lib/site";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";
import { SEO } from "@/components/site/SEO";

const TITLE = "Professional Hydraulic Repair & Services | RVS Hydraulics Shoolagiri";
const DESC =
  "Expert hydraulic cylinder repair, pump maintenance, rod honing, hydraulic piston repair, and high-pressure hose assembly in Shoolagiri & Hosur.";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  usePageReveal();
  const navigate = useNavigate();
  

  // Retro-compatibility redirect for old modal share links (e.g., /services?id=hydraulic-ram-repair-services)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get("id");
    if (serviceId) {
      const match = SERVICES.find((s) => s.id === serviceId);
      if (match) {
        navigate({ to: "/services/$serviceId", params: { serviceId } });
      }
    }
  }, [navigate]);

  return (
    <>
      <SEO
        title={TITLE}
        description={DESC}
        keywords="hydraulic service Shoolagiri, pump repair Hosur, cylinder maintenance Krishnagiri, fluid power service Tamil Nadu, RVS Hydraulics"
      />

      <section className="pt-32 pb-24 md:pt-36 md:pb-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
              Premium Solutions
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-6xl text-foreground">
              Our Professional <span className="text-gradient-brand">Hydraulic Services</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              State-of-the-art repair, reconditioning, and diagnostics of industrial fluid power
              systems. Handled by highly experienced technicians.
            </p>
          </div>

          <div className="flex flex-col gap-16 mb-24">
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-border/80 pb-4">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Hydraulic Repair & Maintenance Services ({SERVICES.length})
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {SERVICES.map((s, idx) => (
                  <Link
                    key={s.id}
                    to="/services/$serviceId"
                    params={{ serviceId: s.id }}
                    className="reveal-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-glow-gold hover:border-primary/30 transition-all duration-300 cursor-pointer text-left"
                    data-delay={idx * 60}
                  >
                    <div>
                      {/* Card Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={s.image}
                          alt={s.title}
                          width={600}
                          height={450}
                          loading={idx < 4 ? "eager" : "lazy"}
                          fetchPriority={idx < 4 ? "high" : "auto"}
                          decoding="async"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md rounded-lg px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                          Premium Service
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col gap-3">
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {s.title}
                        </h3>

                        <div className="flex flex-col gap-1 text-xs border-t border-border/60 pt-3">
                          <div className="text-muted-foreground font-medium">
                            Request for Price
                          </div>
                          <div className="text-foreground">
                            <span className="font-semibold text-muted-foreground">Type : </span>
                            {s.type}
                          </div>
                          <div className="text-foreground">
                            <span className="font-semibold text-muted-foreground">
                              Duration :{" "}
                            </span>
                            {s.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Button */}
                    <div className="p-5 pt-0">
                      <div className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0070e0] hover:bg-[#005fb8] text-white px-4 py-3 text-sm font-bold shadow-md transition duration-300">
                        Get Best Price
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="reveal-section mt-24 relative overflow-hidden rounded-3xl border border-border shadow-industrial">
            <div className="absolute inset-0 bg-gradient-hero" />
            <ParticleField className="opacity-20" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
            <div className="relative grid items-center gap-8 p-10 md:grid-cols-[1fr_auto] md:p-16">
              <div>
                <h3 className="font-display text-3xl font-extrabold md:text-4xl text-foreground">
                  Need a Custom Hydraulic{" "}
                  <span className="text-gradient-brand">Service or Solution?</span>
                </h3>
                <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl">
                  Contact our expert engineering team in Shoolagiri, Hosur today. We specialize in
                  custom cylinder fabrication, power pack design, and high-pressure hose assemblies.
                </p>
              </div>
              <a
                href={waLink(
                  "Hi RVS Hydraulics, I need assistance with a custom hydraulic servicing requirement.",
                )}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-4 text-sm font-bold text-primary-foreground shadow-industrial hover:shadow-glow-gold transition-all duration-300 animate-pulse-subtle"
              >
                Inquire on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
