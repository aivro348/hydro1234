import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
  Wrench,
  MessageSquare,
  Share2,
  Camera,
  Check,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { waLink, trackWhatsAppClick } from "@/lib/site";
import { SEO } from "@/components/site/SEO";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/services_/$serviceId")({
  component: ServiceDetail,
});

function ServiceDetail() {
  const { serviceId } = Route.useParams();
  const navigate = useNavigate();
  usePageReveal();

  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Find matching service
  const service = SERVICES.find((s) => s.id === serviceId);

  // If service not found, render fallback/not found state
  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-36 text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-rose-500 mb-6" />
        <h1 className="font-display text-4xl font-extrabold text-foreground mb-4">
          Service Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The hydraulic service you are seeking is either obsolete or has been moved. Check our main
          directory for active industrial services.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>
      </div>
    );
  }

  // Action WhatsApp Quote Message
  const whatsappQuoteLink = waLink(
    `Hi RVS Hydraulics, I'd like a price quote and more details for the service: ${service.title}.`,
  );

  // Action WhatsApp Photo Request Message
  const whatsappPhotoLink = waLink(
    `Hi RVS Hydraulics, I am interested in ${service.title}. Can you please share some actual photos of your servicing work and workshop?`,
  );

  // Dynamic share handler
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    image: service.image,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "RVS Hydraulics",
      telephone: "+919980848855",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "First Floor, Shop No. 2 365 7 2, TK Nagar Service Road, OPP Shoolagiri Bus Stand",
        addressLocality: "Shoolagiri",
        addressRegion: "Tamil Nadu",
        postalCode: "635117",
        addressCountry: "IN",
      },
    },
    areaServed: ["Shoolagiri", "Hosur", "Krishnagiri", "Bangalore"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.type,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        ogTitle={service.metaTitle}
        ogDescription={service.metaDescription}
        ogImage={service.image}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── GLASSMORPHIC PAGE HEADER / BREADCRUMBS ─── */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground max-w-[200px] truncate">{service.title}</span>
          </nav>

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
                {service.type}
              </div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-foreground">
                {service.title}
              </h1>
            </div>

            {/* Share Page Button */}
            <button
              onClick={handleShare}
              className="relative inline-flex items-center gap-2 self-start rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300 shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500 animate-scale" />
                  <span>Copied Link!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>Share Service</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ─── MAIN SERVICE GRID ─── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN - Visual Component Showcase & Specs */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
              {/* Image Container with Hover Effect */}
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border border-border/80 shadow-industrial bg-muted relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-xl px-3 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider">
                  Industrial Grade
                </div>
              </div>

              {/* Action Button: Ask More Actual Workshop Photos */}
              <a
                href={whatsappPhotoLink}
                target="_blank"
                rel="noopener"
                className="w-full flex items-center justify-center gap-2.5 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary rounded-2xl py-4 text-sm font-bold shadow-sm transition duration-300"
              >
                <Camera className="h-4 w-4" />
                Request Actual Workshop Photos
              </a>

              {/* Technical Specifications Board */}
              <div className="border border-border rounded-2xl p-6 bg-card">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4 pb-1 border-b border-border">
                  Service Specifications
                </h3>

                <div className="flex flex-col divide-y divide-border/60">
                  <div className="py-3 flex justify-between text-sm">
                    <span className="text-muted-foreground font-semibold">Service Type</span>
                    <span className="text-foreground font-bold">{service.type}</span>
                  </div>

                  <div className="py-3 flex justify-between text-sm">
                    <span className="text-muted-foreground font-semibold flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      Completion Time
                    </span>
                    <span className="text-foreground font-bold">{service.duration}</span>
                  </div>

                  <div className="py-3 flex justify-between text-sm">
                    <span className="text-muted-foreground font-semibold flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                      Warranty Coverage
                    </span>
                    <span className="text-foreground font-bold text-accent">
                      {service.warranty}
                    </span>
                  </div>

                  {/* Render extra parameters/custom fields if present */}
                  {service.customFields?.map((field) => (
                    <div key={field.label} className="py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground font-semibold">{field.label}</span>
                      <span className="text-foreground font-bold">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border/60 rounded-xl p-4 bg-muted/20 flex flex-col gap-2">
                  <ShieldCheck className="h-6 w-6 text-emerald-500" />
                  <div className="text-xs font-bold text-foreground">Genuine Seals</div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    We install only premium Parker/Hallite oil seal kits.
                  </p>
                </div>

                <div className="border border-border/60 rounded-xl p-4 bg-muted/20 flex flex-col gap-2">
                  <Wrench className="h-6 w-6 text-primary" />
                  <div className="text-xs font-bold text-foreground">Dyno Tested</div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    100% dynamic load testing up to 350+ Bar limits.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Narrative Copy & Detailed Technical Breakdown */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Detailed SEO Copywriting (Narrative Description) */}
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  About Our Repair & Restorative Services
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              {/* Expert Servicing Sequence (Technical Details Checklist) */}
              <div className="border border-border/80 rounded-2xl p-6 bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Wrench className="h-32 w-32" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  Our Rigorous Engineering Workflow
                </h3>
                <div className="flex flex-col gap-4 relative z-10">
                  {service.technicalDetails.map((detail, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <span className="font-bold text-foreground block">Step {idx + 1}:</span>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service-Specific FAQs */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col gap-3">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-border rounded-xl bg-card overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left p-4 font-bold text-sm text-foreground hover:bg-muted/30 transition duration-300"
                      >
                        <span>{faq.q}</span>
                        <ChevronRight
                          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                            activeFaq === idx ? "rotate-90 text-primary" : ""
                          }`}
                        />
                      </button>

                      {activeFaq === idx && (
                        <div className="p-4 pt-0 text-xs md:text-sm text-muted-foreground border-t border-border/50 leading-relaxed bg-muted/10">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Transactional WhatsApp Call-To-Action Banner */}
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-border shadow-industrial">
                <div className="absolute inset-0 bg-gradient-hero" />
                <ParticleField className="opacity-15" />
                <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      Ready to Book or Need a Price Estimate?
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Consult directly with a fluid power engineer on WhatsApp for transparent
                      quotation sheets.
                    </p>
                  </div>

                  <a
                    href={whatsappQuoteLink}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0070e0] hover:bg-[#005fb8] text-white px-5 py-3 text-sm font-bold shadow-md transition duration-300 whitespace-nowrap"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Get Best Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
