import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Truck,
  Wrench,
  BadgeCheck,
  Clock,
  IndianRupee,
  MapPin,
  Star,
  Zap,
  ChevronRight,
  Compass,
  Layers,
  Settings,
  Cpu,
  Play,
  Pause,
  ChevronLeft,
  AlertTriangle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import galleryService from "@/assets/gallery-service.jpg";
import { CATALOG } from "@/lib/catalog";
import { SERVICES } from "@/lib/services";
import { SITE, waLink, trackWhatsAppClick, SEO_LOCATIONS } from "@/lib/site";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";
import useEmblaCarousel from "embla-carousel-react";
import { SEO } from "@/components/site/SEO";

// The HERO slider now uses CATALOG dynamically

export const Route = createFileRoute("/locations_/$locationId")({
  component: LocationPage,
});

function LocationPage() {
  const { locationId } = Route.useParams();
  const locationData = SEO_LOCATIONS.find((l) => l.id === locationId) || { name: "Bengaluru", id: "bengaluru" };
  const locName = locationData.name;
  usePageReveal();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPlaying, setIsSliderPlaying] = useState(true);
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState<
    "pump" | "cylinder" | "hose" | "powerpack"
  >("pump");
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const goToSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % CATALOG.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + CATALOG.length) % CATALOG.length);
  }, []);

  useEffect(() => {
    if (!isSliderPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CATALOG.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isSliderPlaying]);

  const faqs = [
    {
      q: "What is the typical turnaround time for a hydraulic pump repair?",
      a: "Most standard hydraulic pump and motor repairs are completed within 2 to 4 business days. Emergency rebuild services are available for critical factory breakdowns to minimize downtime.",
    },
    {
      q: "Do you supply genuine OEM seal kits?",
      a: "Yes, we supply only genuine, high-grade OEM seal kits (including Parker, Hallite, and Trelleborg seals) to guarantee high temperature and pressure tolerance for long-lasting operation.",
    },
    {
      q: `Do you offer on-site hydraulic cylinder inspection and hose crimping in ${locName}?`,
      a: `Yes! Our mobile service engineers offer on-site diagnostics, high-pressure hose crimping, oil filtration support, and cylinder extraction across industrial corridors in and around ${locName}.`,
    },
    {
      q: "Do you provide a warranty on your rebuild services?",
      a: "Absolutely. All our hydraulic repairs, pump rebuilds, and power pack installations are pressure-tested in our workshop and come with a comprehensive warranty covering craftsmanship and replacement parts.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const advisoryData = {
    pump: {
      title: `Hydraulic Pump Diagnostics`,
      symptom: `Losing pressure, overheating, or making loud whining noises? These are critical signs of internal wear or fluid cavitation.`,
      procedure:
        `Our certified engineers run high-precision pressure calibrations, inspect internal tolerances, and replace wear parts (pistons, vanes, swashplates) using genuine OEM components. We bench-test every unit to verify it meets factory volumetric efficiency before dispatch.`,
      features: [
        `Vane, Piston & Gear Pump calibration`,
        "Dynamic flow-rate & pressure testing",
        "OEM sealing & contamination check",
      ],
      ctaText: `Request Pump Diagnostics`,
      waMessage:
        `Hi RVS Hydraulics, I am looking for hydraulic pump repair in ${locName}. My pump is losing pressure/making noise.`,
    },
    cylinder: {
      title: `Cylinder Honing & Resealing`,
      symptom: `Experiencing external leakage, piston drift under load, or slow/jerky cylinder actuation.`,
      procedure:
        `We provide complete cylinder extraction, internal bore honing, piston rod re-chroming, and installation of premium, high-temperature poly-urethane seal kits. Every cylinder undergoes a static pressure hold test to guarantee zero drift.`,
      features: [
        `Cylinder bore honing & re-chroming`,
        "Heavy-duty poly-urethane seal kits",
        "Static pressure hold testing",
      ],
      ctaText: `Schedule Cylinder Service`,
      waMessage:
        `Hi RVS Hydraulics, I'd like to get a quote for hydraulic cylinder repair service in ${locName}.`,
    },
    hose: {
      title: `High-Pressure Hose Assembly`,
      symptom: `Visible steel braiding wear, weeping crimps, or catastrophic hose bursts causing fluid loss.`,
      procedure:
        `We engineer custom high-pressure hoses utilizing high-tensile steel wire braiding. Our strict crimping tolerances and heavy-duty brass/steel fittings match exact OEM machinery specs to provide superior impulse life and leak protection.`,
      features: [
        `Custom on-demand hose assemblies`,
        "High-tensile steel & brass fittings",
        "Double-braided high-impulse hoses",
      ],
      ctaText: `Order Hose Assembly`,
      waMessage:
        `Hi RVS Hydraulics, I need high-pressure hose assembly services in ${locName}.`,
    },
    powerpack: {
      title: `Custom Power Pack Engineering`,
      symptom: `Need a reliable localized fluid power source for presses, lifts, or specialized industrial automation.`,
      procedure:
        `Our engineering team designs and fabricates tailored hydraulic power units (HPUs). This includes load calculations, selecting high-efficiency AC/DC motors, designing logic valve manifolds, and building robust reservoirs for continuous heavy-duty cycles.`,
      features: [
        `Custom HPU design & fabrication`,
        "Complete electrical & manifold logic",
        "On-site installation & tuning",
      ],
      ctaText: `Discuss HPU Requirements`,
      waMessage:
        `Hi RVS Hydraulics, I want to inquire about custom hydraulic power pack engineering for our facility in ${locName}.`,
    },
  };

  return (
    <>
      <SEO
        title={`best Hydraulics in ${locName} | RVS Hydraulics`}
        description={`Looking for the best hydraulics in ${locName}? RVS Hydraulics specializes in high-pressure cylinder repair, pump diagnostics, and custom power packs for ${locName} businesses.`}
        keywords={`best hydraulics in ${locName}, nearest hydraulic repair ${locName}, hydraulic cylinder repair near me ${locName}, hydraulic pump repair near me ${locName}, hydraulic repair ${locName}, hydraulic hose near me ${locName}, local hydraulic service ${locName}, Bengaluru hydraulic engineers`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── FULL-SCREEN IMMERSIVE HERO SLIDESHOW ─── */}
      <section className="relative h-[70vh] min-h-[500px] md:h-screen md:min-h-0 w-full overflow-hidden bg-black">
        {/* Slide Images — full viewport, cross-fade with Ken Burns */}
        {CATALOG.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1.4s] ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
              decoding={idx === 0 ? "sync" : "async"}
              className={`h-full w-full object-cover ${
                currentSlide === idx ? "slide-kenburns" : ""
              }`}
              key={`img-${idx}-${currentSlide === idx ? "active" : "idle"}`}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white backdrop-blur-md transition hover:bg-black/50 sm:left-8"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white backdrop-blur-md transition hover:bg-black/50 sm:right-8"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-wrap justify-center gap-1.5 sm:gap-2 sm:bottom-10 max-w-[90%]">
          {CATALOG.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 transition-all rounded-full ${
                currentSlide === idx
                  ? "w-6 bg-primary shadow-glow-gold"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/40 to-transparent" />

        {/* ─ Central Content Overlay ─ */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end pb-20 sm:pb-24 md:pb-32 lg:pb-36">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12">
            {/* Product name + description — each slide gets unique key to restart animation */}
            <div
              key={`text-${currentSlide}`}
              className="max-w-2xl pt-12 md:pt-16"
              onMouseEnter={() => setIsSliderPlaying(false)}
              onMouseLeave={() => setIsSliderPlaying(true)}
            >
              {/* Tag pill */}
              <span className="slide-text-enter mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                <Zap className="h-3 w-3" />
                {CATALOG[currentSlide].short}
              </span>

              {/* Product Title */}
              <h1 className="slide-text-enter-delay font-display text-3xl font-extrabold leading-[1.08] tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                {CATALOG[currentSlide].title}
              </h1>

              {/* One-line description */}
              <p className="slide-text-enter-delay-2 mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                {CATALOG[currentSlide].description}
              </p>

              {/* CTA: View Product */}
              <Link
                to="/products/$productId"
                params={{ productId: CATALOG[currentSlide].slug }}
                className="slide-text-enter-delay-2 group mt-8 inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.03] hover:shadow-glow-gold"
              >
                View Product
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIAGNOSTIC DESK (HIGH-FIDELITY INTERACTIVE CONSOLE) ─── */}
      <section className="relative border-t border-border py-24 md:py-28 bg-steel/30 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="reveal-section mx-auto max-w-3xl text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
              Diagnostic Desk
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
              Identify & Solve Your <span className="text-gradient-accent">Hydraulic Problems</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base max-w-2xl mx-auto">
              View our engineering diagnostics, professional troubleshooting steps, and standard
              service guidelines for common industrial and mobile issues in {locName}.
            </p>
          </div>

          {/* Interactive Console Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT SIDEBAR - Category Selector Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {[
                {
                  id: "pump",
                  label: "Hydraulic Pump Diagnostics",
                  icon: Cpu,
                  desc: "Symptom logs, pressure drops, wear groups",
                },
                {
                  id: "cylinder",
                  label: "Cylinder Honing & Resealing",
                  icon: Layers,
                  desc: "External leakage checks, piston drift",
                },
                {
                  id: "hose",
                  label: "High-Pressure Hose Assembly",
                  icon: Settings,
                  desc: "Steel braiding, crimping specs, fittings",
                },
                {
                  id: "powerpack",
                  label: "Custom Power Pack Engineering",
                  icon: Compass,
                  desc: "AC/DC reservoirs, valve stack manifolds",
                },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeDiagnosticTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDiagnosticTab(tab.id as "cylinder" | "pump" | "hose" | "powerpack")}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 flex gap-4 items-center group cursor-pointer ${
                      isActive
                        ? "bg-card border-primary/40 shadow-glow-gold scale-[1.02]"
                        : "bg-card/45 border-border hover:bg-card hover:border-primary/20"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary group-hover:bg-primary/25"
                      }`}
                    >
                      <TabIcon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {tab.label}
                      </h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-normal pr-2 line-clamp-1">
                        {tab.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT MONITOR - Engineering Readout Screen */}
            <div className="lg:col-span-8">
              {(() => {
                const activeData = advisoryData[activeDiagnosticTab];
                const activeIcons = {
                  pump: Cpu,
                  cylinder: Layers,
                  hose: Settings,
                  powerpack: Compass,
                };
                const PanelIcon = activeIcons[activeDiagnosticTab];

                return (
                  <div className="h-full flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-industrial relative overflow-hidden animate-in fade-in duration-300">
                    {/* Monitor Decorative Scanning Lines */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary/5 rounded-full px-2.5 py-1 text-[9px] font-bold text-primary tracking-widest uppercase border border-primary/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live Readout
                    </div>

                    <div>
                      {/* Active Header Block */}
                      <div className="flex items-center gap-4 border-b border-border pb-5 mb-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <PanelIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-extrabold tracking-wide text-foreground leading-none">
                            {activeData.title}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1.5 block">
                            Certified Troubleshooting Protocol
                          </span>
                        </div>
                      </div>

                      {/* Content Panels */}
                      <div className="grid gap-6 md:grid-cols-2 items-start">
                        <div className="flex flex-col gap-6">
                          {/* Common Symptom Card */}
                          <div className="border border-rose-500/20 rounded-2xl p-5 bg-rose-500/5 relative overflow-hidden group">
                            <div className="flex items-center gap-2 mb-2.5 text-rose-500">
                              <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                              <h4 className="text-xs font-bold uppercase tracking-widest leading-none">
                                Common Symptom
                              </h4>
                            </div>
                            <p className="text-sm font-semibold leading-relaxed text-foreground/90 pl-6 border-l border-rose-500/35">
                              {activeData.symptom}
                            </p>
                          </div>

                          {/* Engineering Fix Card */}
                          <div className="border border-primary/20 rounded-2xl p-5 bg-primary/5 relative overflow-hidden group">
                            <div className="flex items-center gap-2 mb-2.5 text-primary">
                              <Wrench className="h-4.5 w-4.5 shrink-0" />
                              <h4 className="text-xs font-bold uppercase tracking-widest leading-none">
                                Engineering Fix
                              </h4>
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pl-6 border-l border-primary/35">
                              {activeData.procedure}
                            </p>
                          </div>
                        </div>

                        {/* Service Capabilities Checklist */}
                        <div className="border border-border/60 rounded-2xl p-5 bg-muted/15 h-full">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 border-b border-border/80 pb-2">
                            Service Capabilities
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {activeData.features.map((feat, index) => (
                              <li
                                key={index}
                                className="flex gap-3 items-center text-xs md:text-sm leading-relaxed text-foreground/80 font-bold"
                              >
                                <BadgeCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-muted-foreground leading-relaxed">
                        * Immediate dispatch advice and engineering cost analysis reports are
                        standard.
                      </div>

                      <a
                        onClick={trackWhatsAppClick} href={waLink(activeData.waMessage)}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto justify-center"
                      >
                        <WhatsAppIcon className="h-4.5 w-4.5" />
                        {activeData.ctaText}
                        <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY CAPABILITIES (COMPLETELY REDESIGNED PRODUCT GRID) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-border/50 pb-8 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Hydraulic Services
              </div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-wide md:text-5xl text-foreground">
                Engineering Excellence for <span className="text-gradient-brand">Industrial Hydraulics</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Browse our comprehensive catalog of high-pressure components, custom design builds,
                and precision calibration services.
              </p>
            </div>
            <Link
              to="/services"
              className="group shrink-0 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted/30 transition shadow-sm"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Embla Auto Slider */}
          <div className="relative group py-4 px-2 md:px-6">
            {/* Left and Right navigation arrows */}
            <div className="absolute inset-y-0 left-0 z-10 flex items-center">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="bg-background/80 hover:bg-background text-foreground border border-border rounded-full p-2.5 shadow-md -ml-2 transition hover:scale-105 cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 z-10 flex items-center">
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="bg-background/80 hover:bg-background text-foreground border border-border rounded-full p-2.5 shadow-md -mr-2 transition hover:scale-105 cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6">
                {SERVICES.map((s, idx) => (
                  <div
                    key={`${s.id}-${idx}`}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-6"
                  >
                    <Link
                      to="/services/$serviceId"
                      params={{ serviceId: s.id }}
                      className="h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-glow-gold cursor-pointer text-left"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={s.image}
                          alt={s.title}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display text-xl font-extrabold tracking-wide text-foreground group-hover:text-primary transition-colors">
                            {s.title}
                          </h3>
                          <p className="text-xs text-primary font-semibold uppercase mt-0.5 tracking-wider">
                            {s.type}
                          </p>
                          <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                            {s.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                          <a
                            href={waLink(
                              `Hi RVS Hydraulics, I am interested in your "${s.title}" service. Could I get details and pricing?`,
                            )}
                            target="_blank"
                            rel="noopener"
                            onClick={(e) => {
                              e.stopPropagation();
                              trackWhatsAppClick();
                            }}
                            className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all"
                          >
                            Instant Quote <ArrowRight className="h-3 w-3" />
                          </a>
                          <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded font-medium">
                            {s.duration}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (HIGH PERFORMANCE METRIC TILES) ─── */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section mx-auto max-w-2xl text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Core Value Proposition
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Built for <span className="text-gradient-accent">Industrial Reliability</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Factories, heavy workshops, and fleet operators choose RVS Hydraulics because we build
              absolute structural security and high-fidelity calibration into every job.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              {
                idx: "01",
                icon: ShieldCheck,
                title: "Quality Service",
                desc: "Every dynamic component is completely pressure-tested & warrantied before delivery.",
                color: "text-primary",
              },
              {
                idx: "02",
                icon: Clock,
                title: "Rapid Lead Times",
                desc: "Same-day quotation feedback & prioritized breakdown repairs to reduce downtime.",
                color: "text-accent",
              },
              {
                idx: "03",
                icon: BadgeCheck,
                title: "100% Genuine",
                desc: "All replacement seal-kits, brass fittings and accessories are certified OEM-grade.",
                color: "text-primary",
              },
              {
                idx: "04",
                icon: Wrench,
                title: "Engineering Expertise",
                desc: "Experienced technicians specializing in heavy industrial machinery circuits.",
                color: "text-accent",
              },
              {
                idx: "05",
                icon: IndianRupee,
                title: "Honest Pricing",
                desc: "Transparent bills of materials, cost efficiency suggestions and zero hidden fees.",
                color: "text-primary",
              },
            ].map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.idx}
                  className="reveal-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-glow-gold"
                  data-delay={parseInt(metric.idx) * 80}
                >
                  {/* Floating Number Overlay */}
                  <div className="absolute right-4 top-2 select-none font-display text-6xl font-extrabold text-foreground/5">
                    {metric.idx}
                  </div>

                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 ${metric.color} shadow-sm transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </div>

                  <h3 className="mt-5 font-display text-base font-bold tracking-wide text-foreground md:text-lg">
                    {metric.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {metric.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── E-E-A-T EXPERTISE & LOCAL DISPATCH LOGISTICS (WHO, HOW, WHY) ─── */}
      <section className="border-t border-border py-20 bg-background overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-section flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit border border-primary/20">
                <BadgeCheck className="h-4 w-4" /> Editorial & Engineering Standards
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-wide text-foreground md:text-4xl leading-tight">
                Reviewed by <span className="text-gradient-brand">Certified Experts</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                This page content and technical troubleshooting protocols have been authored and verified by <strong>Ramesh V., Senior Lead Engineer</strong> at RVS Hydraulics. With over 15 years of hands-on experience in high-pressure fluid dynamics and heavy machinery diagnostics, our team ensures that all service information adheres strictly to OEM specifications and international safety standards.
              </p>
              
              <div className="mt-4 p-5 rounded-xl border border-border bg-card/50 shadow-sm flex gap-4 items-start">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Mobile Dispatch Logistics to {locName}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1.5">
                    We know that downtime costs you money. Operating from our central facility, we deploy rapid-response mobile service units directly to your site in {locName}. For critical breakdowns, our engineers typically arrive on-site within 2-4 hours equipped with diagnostics gear and emergency seal kits.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual Technical Workflow */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand rounded-[2rem] opacity-5 blur-3xl" />
              <div className="relative border border-border bg-card/60 backdrop-blur-md rounded-2xl p-8 shadow-card flex flex-col gap-6">
                <h3 className="font-bold text-lg text-foreground border-b border-border/50 pb-4">Our Proven 4-Step Process</h3>
                {[
                  { title: "Symptom Assessment", desc: "Detailed mechanical interrogation to identify root causes like cavitation or fluid contamination." },
                  { title: "Precision Bench-Testing", desc: "Using dynamic dyno-stands to verify volumetric efficiency and flow-rate tolerances." },
                  { title: "OEM Restoration", desc: "Executing micro-honing and resealing strictly with original manufacturer-grade components." },
                  { title: "Static Hold Calibration", desc: "Applying peak-pressure hold tests to guarantee zero internal drift before final sign-off." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs shadow-glow-gold transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK CTA SECTION ─── */}
      <section className="relative overflow-hidden border-t border-border py-20 bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

        <div className="reveal-section relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:items-center md:text-left md:px-6">
          <div>
            <h3 className="font-display text-3xl font-extrabold tracking-wide md:text-4xl text-foreground">
              Facing a Critical Hydraulic Breakdown{" "}
              <span className="text-gradient-brand">Today?</span>
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Consult with our senior service engineer now. Get instant troubleshooting guidance and
              rapid procurement support.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial transition hover:shadow-glow-gold hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> Call Hotline
            </a>
            <a
              onClick={trackWhatsAppClick} href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-industrial hover:scale-[1.02] transition"
            >
              <WhatsAppIcon className="h-4 w-4" /> Instant Chat
            </a>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS / TESTIMONIALS (AIRY MODERN TILES) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Client Testimonials
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Trusted by <span className="text-gradient-brand">Industrial Leaders</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto md:text-base">
              Read how RVS Hydraulics helps factories maintain high performance and minimize
              operational bottlenecks across all regions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: `Plant Operations Manager`,
                q: `Our entire production line was halted due to a high-pressure pump seal bypass. RVS diagnosed the internal wear, completed micro-resealing, and dyno-tested it within 18 hours. Outstanding response time and technical competence.`,
                initial: "P",
              },
              {
                n: `Heavy Equipment Workshop`,
                q: `For years, we've sourced custom seal kits and high-pressure hose couplings from RVS. Their brass fittings hold up under continuous 350-bar duty without sweating a drop. Truly a reliable partner for our operations.`,
                initial: "H",
              },
              {
                n: `Maintenance Lead`,
                q: `We commissioned a 7.5HP multi-station AC hydraulic power unit from RVS. The engineering was tidy, wiring was perfectly safe, and their on-site technician calibrated the pressure settings cleanly.`,
                initial: "M",
              },
            ].map((t, idx) => (
              <figure
                key={t.n}
                className="reveal-card flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card transition hover:border-primary/10 hover:shadow-glow-gold text-left"
                data-delay={idx * 120}
              >
                <div>
                  <div className="flex gap-1 text-primary mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80 italic">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-5 border-t border-border/40 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display font-bold text-xs text-primary-foreground">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">{t.n}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                      Verified Client
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC FAQ ACCORDION ─── */}
      <section className="border-t border-border py-24 md:py-28 bg-steel/20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="reveal-section text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Technical Knowledge Base
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Frequently Asked <span className="text-gradient-brand">Insights</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-muted-foreground md:text-base">
              Technical answers to common hydraulic pressure maintenance, valve assembly, and
              product procurement inquiries.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="reveal-card overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:border-primary/20"
                  data-delay={idx * 50}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base font-bold md:text-lg transition cursor-pointer"
                  >
                    <span
                      className={
                        isOpen
                          ? "text-primary transition-colors font-extrabold tracking-wide"
                          : "text-foreground tracking-wide font-extrabold"
                      }
                    >
                      {faq.q}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "text-muted-foreground/80"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[300px] border-t border-border/50 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-5 text-sm leading-relaxed text-muted-foreground/90 bg-muted/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
