export const SITE = {
  name: "RVS Hydraulics",
  tagline: "All Kinds of Hydraulic Parts Sales & Service",
  phone: "9980848855",
  phoneIntl: "+919980848855",
  whatsapp: "919980848855",
  email: "rvshydraulicsalesservice@gmail.com",
  gst: "33JNIPS6881K1Z2",
  address:
    "First Floor, Shop No. 2 365 7 2, TK Nagar Service Road, OPP Shoolagiri Bus Stand, Shoolagiri-635117, Krishnagiri Dist, Tamil Nadu",
  city: "Shoolagiri",
  region: "Tamil Nadu",
  postal: "635117",
  country: "IN",
  mapsQuery: "RVS+Hydraulics,+Shoolagiri",
  developer: "E Charan Kumar Reddy",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const waLink = (text = "Hi RVS Hydraulics, I'd like a quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: "WhatsApp_Contact",
      value: 1,
    });
  }
};

export const SEO_LOCATIONS = [
  { id: "electronic-city", name: "Electronic City" },
  { id: "bommasandra", name: "Bommasandra" },
  { id: "attibele", name: "Attibele" },
  { id: "chandapura", name: "Chandapura" },
  { id: "anekal", name: "Anekal" },
  { id: "jigani", name: "Jigani" },
  { id: "sarjapur", name: "Sarjapur" },
  { id: "whitefield", name: "Whitefield" },
  { id: "bellandur", name: "Bellandur" },
  { id: "hsr-layout", name: "HSR Layout" },
  { id: "hosur", name: "Hosur" },
  { id: "sipcot-hosur", name: "SIPCOT Hosur" },
  { id: "krishnagiri", name: "Krishnagiri" },
  { id: "koramangala", name: "Koramangala" },
  { id: "btm-layout", name: "BTM Layout" },
  { id: "madiwala", name: "Madiwala" },
  { id: "kudlu-gate", name: "Kudlu Gate" },
  { id: "singasandra", name: "Singasandra" },
  { id: "begur", name: "Begur" },
  { id: "haralur", name: "Haralur" },
  { id: "kasavanahalli", name: "Kasavanahalli" },
  { id: "varthur", name: "Varthur" },
  { id: "marathahalli", name: "Marathahalli" },
  { id: "kr-puram", name: "KR Puram" },
  { id: "mahadevapura", name: "Mahadevapura" },
  { id: "hoodi", name: "Hoodi" },
  { id: "kadugodi", name: "Kadugodi" },
  { id: "peenya", name: "Peenya Industrial Area" },
  { id: "yeshwanthpur", name: "Yeshwanthpur" },
  { id: "rajajinagar", name: "Rajajinagar" },
  { id: "mysore-road", name: "Mysore Road" },
  { id: "kengeri", name: "Kengeri" },
  { id: "bidadi", name: "Bidadi" },
  { id: "kumbalgodu", name: "Kumbalgodu" },
  { id: "harohalli", name: "Harohalli" },
  { id: "kanakapura-road", name: "Kanakapura Road" },
  { id: "bannerghatta-road", name: "Bannerghatta Road" },
  { id: "jp-nagar", name: "JP Nagar" },
  { id: "jayanagar", name: "Jayanagar" },
  { id: "dabaspet", name: "Dabaspet" },
  { id: "nelamangala", name: "Nelamangala" },
  { id: "yelahanka", name: "Yelahanka" },
  { id: "devanahalli", name: "Devanahalli" },
  { id: "hoskote", name: "Hoskote" },
  { id: "malur", name: "Malur" },
  { id: "kolar", name: "Kolar" },
  { id: "tumkur", name: "Tumkur" },
  { id: "ramanagara", name: "Ramanagara" },
  { id: "channapatna", name: "Channapatna" },
  { id: "maddur", name: "Maddur" },
] as const;
