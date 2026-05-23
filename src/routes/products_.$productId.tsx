import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Cpu,
  MessageSquare,
  Share2,
  Camera,
  Check,
  CheckCircle2,
  AlertCircle,
  Package,
  BadgeCheck
} from "lucide-react";
import { CATALOG } from "@/lib/catalog";
import { waLink } from "@/lib/site";
import { SEO } from "@/components/site/SEO";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/products_/$productId")({
  component: ProductDetail,
});

function ProductDetail() {
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  usePageReveal();

  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Find matching product by slug
  const product = CATALOG.find((p) => p.slug === productId);

  // If product not found, render fallback
  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-36 text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-rose-500 mb-6" />
        <h1 className="font-display text-4xl font-extrabold text-foreground mb-4">
          Product Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The hydraulic component you are seeking is either out of stock or does not exist. Check our catalogue for available items.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>
    );
  }

  // Pre-filled WhatsApp message for booking or details
  const whatsappQuoteLink = waLink(
    `Hi RVS Hydraulics, I'd like a price quote and stock availability details for the product: ${product.title}.`
  );

  // Pre-filled WhatsApp message for workshop photos
  const whatsappPhotoLink = waLink(
    `Hi RVS Hydraulics, I am interested in procuring ${product.title}. Can you please share some actual photos of this product in your workshop?`
  );

  // Handle URL share
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.image,
    "description": product.metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "RVS Hydraulics"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "priceRange": "₹₹",
      "areaServed": ["Shoolagiri", "Hosur", "Krishnagiri", "Bangalore"]
    }
  };

  return (
    <>
      <SEO
        title={product.metaTitle}
        description={product.metaDescription}
        keywords={product.keywords}
        ogTitle={product.metaTitle}
        ogDescription={product.metaDescription}
        ogImage={product.image}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── PREMIUM PAGE HEADER & BREADCRUMBS ─── */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          {/* Breadcrumb row */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground max-w-[200px] truncate">{product.title}</span>
          </nav>

          {/* Title Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
                Premium Component Catalogue
              </div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-foreground animate-slide-up">
                {product.title}
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                {product.short}
              </p>
            </div>
            
            {/* Share product */}
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
                  <span>Share Product</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ─── MAIN PRODUCT GRID ─── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN - Product Image & Tech Specs */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Product Showcase card */}
              <div className="aspect-square w-full rounded-3xl overflow-hidden border border-border/80 shadow-industrial bg-muted relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-xl px-3 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider">
                  Industrial Stock
                </div>
              </div>

              {/* Photo request link */}
              <a
                href={whatsappPhotoLink}
                target="_blank"
                rel="noopener"
                className="w-full flex items-center justify-center gap-2.5 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary rounded-2xl py-4 text-sm font-bold shadow-sm transition duration-300"
              >
                <Camera className="h-4 w-4" />
                Ask Stock Photos & Inventory Check
              </a>

              {/* Specs Table */}
              <div className="border border-border rounded-2xl p-6 bg-card">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4 pb-1 border-b border-border">
                  Technical Specifications
                </h3>
                
                <div className="flex flex-col divide-y divide-border/60">
                  {product.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground font-semibold">{spec.label}</span>
                      <span className="text-foreground font-bold text-right pl-4">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Seal */}
              <div className="border border-border/60 rounded-2xl p-5 bg-muted/20 flex gap-4 items-center">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  <BadgeCheck className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Certified OEM Quality</div>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                    We supply only certified genuine mechanical materials and spare parts, ensuring durability in extreme operating cycles.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Sales Copy & Product details */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Product Deep Sales Copy */}
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Product Overview & Application Scope
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {product.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="border border-border/85 rounded-2xl p-6 bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Package className="h-32 w-32" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  Why Sourcing from RVS Hydraulics is Superior
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  <div className="flex gap-2 items-start text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block">Dynamic Load Rating</span>
                      Engineered for zero pressure fatigue under high cycles.
                    </div>
                  </div>
                  
                  <div className="flex gap-2 items-start text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block">Rust & Wear Shielding</span>
                      Electro-chemical zinc plating or polished marine casing.
                    </div>
                  </div>

                  <div className="flex gap-2 items-start text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block">Wide Heat Tolerances</span>
                      Viton seal inserts capable of resisting extreme temp profiles.
                    </div>
                  </div>

                  <div className="flex gap-2 items-start text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block">100% Brand Compatible</span>
                      Manufactured according to standard ISO industrial threads.
                    </div>
                  </div>
                </div>
              </div>

              {/* Product FAQs */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Technical Queries Answered
                </h3>
                <div className="flex flex-col gap-3">
                  {product.faqs.map((faq, idx) => (
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

              {/* Transactional Call to Action Banner */}
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-border shadow-industrial">
                <div className="absolute inset-0 bg-gradient-hero" />
                <ParticleField className="opacity-15" />
                <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      Ready to Order or Request a Stock Quote?
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Connect with RVS sales representatives on WhatsApp to receive quick price and availability quotes.
                    </p>
                  </div>
                  
                  <a
                    href={whatsappQuoteLink}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0070e0] hover:bg-[#005fb8] text-white px-5 py-3 text-sm font-bold shadow-md transition duration-300 whitespace-nowrap"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Inquire Price & Stock
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
