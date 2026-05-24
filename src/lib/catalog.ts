import pump from "@/assets/prod-pump.jpg";
import valves from "@/assets/prod-valves.jpg";
import hoses from "@/assets/prod-hoses.jpg";
import fittings from "@/assets/prod-fittings.jpg";
import seals from "@/assets/prod-seals.jpg";
import powerpack from "@/assets/prod-powerpack.jpg";
import cylinder from "@/assets/prod-cylinder.jpg";
import powerpackNew from "@/assets/prod-powerpack-new.png";
import cylinderNew from "@/assets/prod-cylinder-new.png";
import accessories from "@/assets/prod-accessories.jpg";
import handpump from "@/assets/slide-handpump.png";
import heavyCylinders from "@/assets/prod-heavy-cylinders.png";
import brassActuators from "@/assets/prod-brass-actuators.png";
import tollgatePowerpack from "@/assets/prod-tollgate-powerpack.png";
import twoWheelerBikeLifting from "@/assets/two-wheeler-bike-lifting.png";

export type ProductFAQ = {
  q: string;
  a: string;
};

export type TechnicalSpecification = {
  label: string;
  value: string;
};

export type CatalogItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  longDescription: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  technicalSpecs: TechnicalSpecification[];
  faqs: ProductFAQ[];
};

export const CATALOG: CatalogItem[] = [
  {
    slug: "hydraulic-pumps",
    title: "Hydraulic Pumps",
    short: "Gear, piston & vane pumps",
    description:
      "Premium hydraulic pumps for industrial, mobile & agricultural applications. Repair & replacement available.",
    metaTitle: "Premium Hydraulic Pumps Shoolagiri | Piston, Vane & Gear Pumps",
    metaDescription:
      "Buy and service heavy-duty hydraulic pumps in Shoolagiri & Hosur. We stock high-performance gear, piston & vane pumps from leading global brands.",
    keywords:
      "hydraulic pumps Shoolagiri, hydraulic pumps Hosur, buy gear pump Krishnagiri, piston pump sales, vane pumps Bangalore, RVS Hydraulics",
    longDescription:
      "Our range of Hydraulic Pumps represents the absolute pinnacle of fluid power transfer. We specialize in supply, diagnostic testing, maintenance, and rebuild services for all styles of hydraulic pumps, including variable displacement axial piston pumps, high-durability external gear pumps, and balanced vane pumps. Engineered to withstand continuous heavy industrial operations, our pumps deliver stable flow rates, outstanding volumetric efficiency, and exceptional pressure holding capabilities. We support systems in agricultural tractors, massive metal forming presses, construction excavators, and plastic injection machines.",
    technicalSpecs: [
      { label: "Types Available", value: "Axial Piston, External Gear, Radial Piston, Vane" },
      { label: "Max Working Pressure", value: "Up to 420 Bar (6000 PSI)" },
      { label: "Flow Rate Capacity", value: "5 LPM to 450 LPM" },
      { label: "Fluid Compatibility", value: "Mineral oils, Synthetic esters, Water-glycols" },
      { label: "OEM Brands Supported", value: "Rexroth, Yuken, Kawasaki, Vickers, Dowty" },
    ],
    image: pump,
    faqs: [
      {
        q: "What is the warranty period for new hydraulic pumps?",
        a: "All new hydraulic pumps supplied by RVS Hydraulics come with a standard 12-month manufacturer warranty covering material defects and performance.",
      },
      {
        q: "Can you assist with selecting the correct pump for a custom machine?",
        a: "Yes! Our senior design engineers will calculate your required system torque, flow rate (LPM), and operating pressure to recommend the ideal pump displacement.",
      },
      {
        q: "Do you supply replacement parts for axial piston pumps?",
        a: "Yes, we stock standard replacement cylinders, piston groups, swashplates, drive shafts, and control valve plates for immediate maintenance.",
      },
    ],
  },
  {
    slug: "valves",
    title: "All Types Of Valves",
    short: "Directional, pressure & flow control",
    description:
      "Solenoid, manual and proportional valves from trusted brands for every hydraulic circuit.",
    metaTitle: "Hydraulic Valves Sales & Service Hosur | RVS Hydraulics",
    metaDescription:
      "Complete catalog of industrial hydraulic valves in Hosur. We supply directional control solenoid valves, pressure relief valves & manual spools.",
    keywords:
      "hydraulic valves Hosur, solenoid valves Shoolagiri, pressure relief valve Krishnagiri, proportional valves Bangalore, RVS Hydraulics",
    longDescription:
      "RVS Hydraulics provides complete control solutions with our massive collection of Hydraulic Valves. Valves are the neural network of any fluid power system, regulating flow direction, system pressure limits, and exact cylinder speeds. We supply, repair, and test double-solenoid directional valves, manual multi-spool monoblocks for mobile machinery, pilot-operated pressure relief valves, needle flow controls, and high-accuracy proportional control systems. All our valves undergo strict pressure test audits before shipment to guarantee leak-free spools and rapid response times.",
    technicalSpecs: [
      {
        label: "Valve Categories",
        value: "Directional, Pressure Relief, Flow Control, Check, Proportional",
      },
      {
        label: "Actuation Types",
        value: "Solenoid (AC/DC), Manual Lever, Pilot Air, Hydraulic Pilot",
      },
      { label: "Max Pressure Rating", value: "Up to 350 Bar" },
      { label: "Interface Standard", value: "ISO 4401 (NG6, NG10, NG16, NG25) & Threaded" },
      { label: "Body Construction", value: "High-grade ductile cast iron or carbon steel" },
    ],
    image: valves,
    faqs: [
      {
        q: "What voltages are available for your solenoid valves?",
        a: "We stock solenoid coils in standard industrial voltages: 24V DC, 12V DC, 110V AC, and 220V AC, with standard DIN connector junctions.",
      },
      {
        q: "Do you repair scored spools on expensive proportional valves?",
        a: "Yes, we chroming, grind, and lap high-spec spools and valve sleeves to restore precise mechanical control tolerances.",
      },
      {
        q: "Can you supply direct replacements for standard Rexroth NG6 subplate valves?",
        a: "Yes, our valves follow standard ISO D03 (NG6) mounting footprints, offering 100% drop-in compatibility with major global brands.",
      },
    ],
  },
  {
    slug: "hose-pipes",
    title: "Hose Pipes",
    short: "High-pressure hose assemblies",
    description:
      "Custom hose pipe assemblies with brass / steel fittings — crimped to spec on demand.",
    metaTitle: "High-Pressure Hydraulic Hose Crimping Shoolagiri | Custom Assemblies",
    metaDescription:
      "Need a custom hydraulic hose crimped immediately? We specialize in single, double, and four-spiral steel wire reinforced hose assemblies in Shoolagiri.",
    keywords:
      "hydraulic hose pipes Shoolagiri, custom hose crimping Hosur, high pressure hoses Krishnagiri, steel braided hose pipes, RVS Hydraulics",
    longDescription:
      "Our High-Pressure Hose Assemblies represent the absolute safety lifeline of industrial and mobile machinery. We specialize in custom-fabricating hydraulic hose lines utilizing premium single-braided, double-braided, and high-pressure four-spiral steel wire reinforced hoses. Designed to survive severe friction, pressure spikes, and massive environmental vibration, our hose ends are precision-crimped using high-durability steel and brass couplings. Our facility offers 'while-you-wait' immediate hose crimping services for walk-in operators, keeping heavy machinery running with minimal downtime.",
    technicalSpecs: [
      { label: "Reinforcement Styles", value: "1-Wire, 2-Wire Steel Braid, 4-Spiral Steel Wire" },
      { label: "Operating Pressure Range", value: "80 Bar up to 450 Bar (6500 PSI)" },
      { label: "Hose Inside Diameters", value: "1/4 inch to 2 inches" },
      {
        label: "End Fittings Available",
        value: "BSP, NPT, JIC, Metric, Flange (Straight, 45°, 90°)",
      },
      {
        label: "Outer Cover Material",
        value: "Ozone-resistant, abrasion-resistant synthetic rubber",
      },
    ],
    image: hoses,
    faqs: [
      {
        q: "How long does it take to crimp a custom hydraulic hose assembly?",
        a: "We offer instant walk-in services! Custom assemblies are cut, cleaned, fitted, and crimped to your exact length specifications within 10 to 15 minutes.",
      },
      {
        q: "What causes a hydraulic hose to burst prematurely?",
        a: "Bursting is usually caused by routing hoses past minimum bend radius limits, external abrasion against metal frames, pressure spikes exceeding ratings, or heat hardening.",
      },
      {
        q: "Can you supply high-temperature hoses for steel foundry applications?",
        a: "Yes, we supply specialized blue-cover wire reinforced hoses rated to withstand continuous temperatures up to 135°C.",
      },
    ],
  },
  {
    slug: "fittings",
    title: "Fittings",
    short: "Adapters, elbows, unions",
    description:
      "Wide range of hydraulic fittings, adapters and connectors in brass and stainless steel.",
    metaTitle: "Premium Hydraulic Fittings & Adapters Hosur | RVS Hydraulics",
    metaDescription:
      "Massive selection of industrial-grade hydraulic fittings, steel adapters, 90-degree elbow unions, and metric-BSP connectors in Hosur & Shoolagiri.",
    keywords:
      "hydraulic fittings Hosur, hydraulic adapters Shoolagiri, steel pipe fittings Krishnagiri, BSP JIC metric connectors, RVS Hydraulics",
    longDescription:
      "Ensure absolute, leak-free connection reliability with the extensive Hydraulic Fittings catalog from RVS Hydraulics. Connections are key to system safety. A single leaking adapter can waste expensive oil and introduce dirt. We stock a huge variety of adapters, straight unions, 90-degree elbow fittings, tee-connectors, and bulkhead unions. Fabricated from premium-grade carbon steel with high-durability corrosion-resistant zinc plating, our fittings are available in BSP, JIC, Metric, NPT, and SAE flange connections to fit any metric or imperial industrial system.",
    technicalSpecs: [
      {
        label: "Materials Standard",
        value: "Carbon Steel (Zinc Plated), Stainless Steel 316, Brass",
      },
      { label: "Thread Standards", value: "BSP, JIC (37° Flare), Metric (DIN 2353), NPT, ORFS" },
      {
        label: "Working Pressure Capacity",
        value: "Light Duty (L) up to 250 Bar, Heavy Duty (S) up to 630 Bar",
      },
      {
        label: "Fittings Styles",
        value: "Straight, 45° Elbow, 90° Elbow, Equal Tee, Reducing Unions",
      },
      {
        label: "Sealing Mechanism",
        value: "Metal-to-metal flare, O-ring face seal, bite-type compression rings",
      },
    ],
    image: fittings,
    faqs: [
      {
        q: "What is the difference between BSP and JIC threads?",
        a: "BSP (British Standard Pipe) utilizes a 55-degree thread angle and uses parallel/tapered sealing, while JIC (Joint Industry Council) utilizes a 37-degree mating flare angle.",
      },
      {
        q: "Do you supply bite-type compression fittings for steel tubing?",
        a: "Yes, we stock a full line of DIN 2353 single and double-ferrule compression fittings for heavy-duty steel tube installations.",
      },
      {
        q: "Can you custom machine a reducing adapter for a unique thread size?",
        a: "Yes, our machining workshop can lathe-cut custom brass or steel reducing fittings to bridge non-standard connections.",
      },
    ],
  },
  {
    slug: "seal-kits",
    title: "Hydraulic Seal Kits",
    short: "O-rings, U-cups & wipers",
    description: "Genuine seal kits for pumps, cylinders and valves of all leading OEMs.",
    metaTitle: "Genuine Hydraulic Seal Kits Krishnagiri | O-Rings, U-Cups, Wipers",
    metaDescription:
      "Genuine hydraulic seal kits in Krishnagiri & Shoolagiri. We stock polyurethane piston seals, rod wipers & Nitrile O-rings for cylinders and pumps.",
    keywords:
      "hydraulic seal kits Krishnagiri, hydraulic O-rings Shoolagiri, cylinder seals Hosur, Parker cylinder seal kits, RVS Hydraulics",
    longDescription:
      "Our premium Hydraulic Seal Kits provide absolute leak-free protection for cylinders, pumps, and valves. Under extreme pressures and temperatures, a seal's elastomeric compounds are pushed to structural limits. Inferior seals degrade, tear, or harden, causing system drift and pressure bypass. At RVS Hydraulics, we stock and manufacture high-performance seal packages using top-grade polyurethane (PU), Viton (FKM), Nitrile (NBR), and PTFE materials. Our kits ensure high wear resistance, low friction drag, and continuous operational reliability.",
    technicalSpecs: [
      {
        label: "Seal Components",
        value: "U-cups, Piston rings, Rod wipers, Guide strips, Backup rings, O-rings",
      },
      {
        label: "Material Options",
        value: "Polyurethane (PU), Viton (FKM), Nitrile Rubber (NBR), PTFE (Teflon)",
      },
      { label: "Max Speed Rating", value: "Up to 1.5 m/s" },
      { label: "Operating Temperature", value: "-40°C to +200°C (depending on material choice)" },
      { label: "OEM Brands Supported", value: "Parker, Hallite, Trelleborg, NOK, Merkel" },
    ],
    image: seals,
    faqs: [
      {
        q: "Which seal material is best for high heat environments?",
        a: "Viton (FKM) is the premium choice for high heat, maintaining structural flexibility up to 200°C, whereas standard Nitrile seals degrade above 100°C.",
      },
      {
        q: "Can you supply seals based on custom physical measurements?",
        a: "Yes! If you bring us your worn cylinder gland or piston head, our technicians can measure the metal groove and select matching seals.",
      },
      {
        q: "Do you supply complete overhaul seal kits for JCB cylinders?",
        a: "Yes, we keep complete pre-packaged seal kits for all JCB, Tata Hitachi, CAT, and Komatsu excavator cylinders in stock.",
      },
    ],
  },
  {
    slug: "accessories",
    title: "Hydraulic Accessories",
    short: "Filters, gauges & manifolds",
    description:
      "Complete range of hydraulic accessories to keep your system running clean and reliable.",
    metaTitle: "Hydraulic Accessories Shoolagiri | Gauges, Filters & Manifolds",
    metaDescription:
      "Shop high-performance hydraulic accessories in Shoolagiri & Hosur. We stock pressure gauges, suction strainers, offline filter rigs, and oil breathers.",
    keywords:
      "hydraulic accessories Shoolagiri, hydraulic gauges Hosur, return line filters, oil level indicators Krishnagiri, RVS Hydraulics",
    longDescription:
      "A high-performance hydraulic circuit requires more than just core components. RVS Hydraulics supplies a complete selection of high-durability Hydraulic Accessories to clean, measure, and manage your fluid power. Hydraulic systems are extremely sensitive to dirt and heat. We supply high-efficiency suction strainers, spin-on return-line filters, oil level indicators, glycerin-filled pressure gauges, custom manifold blocks, and air breathers. These accessories ensure clean oil, stable temperatures, and clear system monitoring.",
    technicalSpecs: [
      {
        label: "Accessories Stocked",
        value: "Suction strainers, Return line filters, Breathers, Level gauges, Pressure gauges",
      },
      { label: "Gauge pressure ranges", value: "0-10 Bar up to 0-1000 Bar (Glycerin filled)" },
      { label: "Filtration Rating", value: "3 micron to 125 micron (absolute or nominal)" },
      { label: "Level Gauge Sizes", value: "3 inch, 5 inch, and 10 inch center-to-center" },
      {
        label: "Manifold Materials",
        value: "High-strength extruded aluminum or carbon steel blocks",
      },
    ],
    image: accessories,
    faqs: [
      {
        q: "Why are your pressure gauges filled with liquid glycerin?",
        a: "Glycerin dampens severe pressure spikes and mechanical vibrations, protecting the inner needle mechanism and ensuring clear, accurate readings.",
      },
      {
        q: "How often should suction and return line filters be replaced?",
        a: "Filters should be changed every 500 working hours or whenever the visual pressure differential indicator shows red.",
      },
      {
        q: "Do you machine custom hydraulic manifold blocks?",
        a: "Yes, we machine custom valve manifolds in both aluminum and steel, drilled exactly to mount your solenoids and relief valves.",
      },
    ],
  },
  {
    slug: "power-pack",
    title: "Power Pack Sales & Service",
    short: "Custom hydraulic power packs",
    description:
      "Design, supply and servicing of custom hydraulic power packs for any tonnage and duty cycle.",
    metaTitle: "Custom Hydraulic Power Pack Sales & Service | Hosur & Krishnagiri",
    metaDescription:
      "Specialist design, assembly and servicing of industrial hydraulic power packs. Custom reservoir systems, solenoid banks, and certified motor-pump setups.",
    keywords:
      "hydraulic power packs Hosur, custom power unit sales Krishnagiri, hydraulic power pack service Shoolagiri, RVS Hydraulics",
    longDescription:
      "Get reliable industrial force with our custom Hydraulic Power Pack Sales & Service. The power pack is the central engine of any independent hydraulic machine, integrating the electric motor, fluid reservoir, central pump, and control valves. Our engineering team designs, fabricates, and services custom AC and DC power units tailored to your exact application, operating speed, and footprint. Whether you need a compact power unit for garage car lifts or a heavy-duty multi-valve station for factory automation, we ensure high thermal efficiency, safe wiring, and continuous power output.",
    technicalSpecs: [
      { label: "Reservoir Capacity", value: "5 Liters up to 1000 Liters (Steel or Aluminum)" },
      { label: "Motor Power Options", value: "0.5 HP to 100 HP (Single Phase or Three Phase)" },
      {
        label: "Control Integration",
        value: "Solenoid valve blocks, Manual spools, Proportional cards, PLCs",
      },
      {
        label: "Cooling Systems",
        value: "Air-cooled oil heat exchangers or water-cooled shell-tube systems",
      },
      {
        label: "Applications Support",
        value: "Scrap baling presses, industrial molding machines, garage lifts",
      },
    ],
    image: powerpackNew,
    faqs: [
      {
        q: "What information is needed to design a custom power pack?",
        a: "We need your target cylinder bore size, stroke length, required travel speed, maximum force (tonnage), and your available electrical power supply.",
      },
      {
        q: "Do you service on-site power packs in Krishnagiri factories?",
        a: "Yes! Our mobile service engineers can visit your plant to troubleshoot pump wear, rebuild valve blocks, and replace hydraulic oil.",
      },
      {
        q: "Do your power units include safety systems?",
        a: "Absolutely. All our custom units feature built-in pressure relief valves, thermostatic temperature switches, and low-level oil cut-offs.",
      },
    ],
  },
  {
    slug: "cylinder",
    title: "Cylinder Sales & Service",
    short: "Single & double acting cylinders",
    description:
      "Manufacturing, repair and reconditioning of hydraulic cylinders of every bore and stroke.",
    metaTitle: "Hydraulic Cylinder Manufacturing & Rebuilding Shoolagiri | RVS",
    metaDescription:
      "Industrial-grade hydraulic cylinder manufacturing and reconditioning. Single-acting, double-acting & telescopic designs built to precise metric standards.",
    keywords:
      "hydraulic cylinder manufacturing Shoolagiri, hydraulic cylinder rebuilding Hosur, custom cylinder fabrication Krishnagiri, RVS Hydraulics",
    longDescription:
      "RVS Hydraulics provides full-scale Hydraulic Cylinder Manufacturing, Repair, and Reconditioning. The cylinder transforms fluid pressure into physical linear force. Our manufacturing line fabricates single-acting, double-acting, and multi-stage telescopic cylinders engineered for your specific tonnage, stroke, and mountings. We source premium-grade cold-drawn honed tubes and induction-hardened chrome-plated rods. Every cylinder we manufacture or rebuild undergoes strict high-pressure dynamic hold testing to guarantee absolute safety and leak-free performance.",
    technicalSpecs: [
      { label: "Bore Diameters", value: "40mm to 350mm (Custom larger bores available)" },
      { label: "Stroke Lengths", value: "Up to 6000mm (6 meters)" },
      {
        label: "Mounting Configurations",
        value: "Clevis, Trunnion, Flange, Foot mount, Spherical eye",
      },
      { label: "Working Pressure rating", value: "Standard 210 Bar, Heavy Duty up to 350 Bar" },
      {
        label: "Piston Rod options",
        value: "Induction-hardened C45 steel, Hard chrome plated (min 30 microns)",
      },
    ],
    image: cylinderNew,
    faqs: [
      {
        q: "What is the typical lead time for a custom cylinder?",
        a: "Custom cylinders are usually designed, fabricated, assembled, and pressure-tested within 5 to 7 business days, depending on sizes.",
      },
      {
        q: "Can you re-chrome a scored cylinder rod instead of replacing it?",
        a: "Yes, if the structural core is straight, we strip the worn chrome, repair scoring pits, grind, and hard chrome-plate the rod to restore original dimensions.",
      },
      {
        q: "Do you perform dynamic pressure testing on all rebuilt cylinders?",
        a: "Yes, every cylinder manufactured or serviced undergoes a rigorous 1.5x pressure hold test on our dynamic test bench prior to dispatch.",
      },
    ],
  },
  {
    slug: "hand-pump",
    title: "Hand Pump",
    short: "Manual hydraulic pumps",
    description:
      "High-pressure manual hydraulic pumps for precision lifting, testing, and pressing.",
    metaTitle: "High-Pressure Manual Hydraulic Hand Pumps | Hosur & Shoolagiri",
    metaDescription:
      "Heavy-duty manual hydraulic hand pumps for precision lifting, maintenance, and pressure testing. High-volume dual-stage pumps from RVS Hydraulics.",
    keywords:
      "hydraulic hand pumps Hosur, manual hydraulic pumps Shoolagiri, high pressure hand pumps, RVS Hydraulics",
    longDescription:
      "Our Manual Hydraulic Hand Pumps deliver high-pressure fluid power when electrical power is unavailable or when precise manual control is required. Designed for heavy lifting, maintenance pressing, and hydrostatic pressure testing, our hand pumps are built for durability and ease of use. Featuring a robust dual-stage piston system, they switch automatically from high-volume low-pressure flow for rapid stroke extension to low-volume high-pressure flow for heavy lifting, minimizing operator fatigue.",
    technicalSpecs: [
      { label: "Pumping Stage", value: "Dual-stage (High volume / Low volume automatic bypass)" },
      { label: "Max Output Pressure", value: "Up to 700 Bar (10,000 PSI)" },
      {
        label: "Oil Reservoir Volume",
        value: "0.5 Liters to 3 Liters (Steel or composite casing)",
      },
      { label: "Port Size Connection", value: "3/8 inch NPT female thread" },
      { label: "Relief Valve", value: "Integrated adjustable pressure relief control" },
    ],
    image: handpump,
    faqs: [
      {
        q: "Can this hand pump operate standard hydraulic cylinders?",
        a: "Yes, as long as the pump's oil reservoir volume exceeds the cylinder's total oil volume required to complete a full extension stroke.",
      },
      {
        q: "What is the benefit of a dual-stage hand pump?",
        a: "A dual-stage pump extends the cylinder rod rapidly at low pressure, then automatically switches to high-pressure mode once the rod meets load resistance, saving operator time.",
      },
      {
        q: "Do you supply hoses and gauges to match this hand pump?",
        a: "Yes, we supply matching 700-bar high-pressure thermoplastic hoses and glycerin-filled pressure gauges as a complete package.",
      },
    ],
  },
  {
    slug: "heavy-duty-clevis-cylinders",
    title: "Heavy-Duty Clevis Cylinders",
    short: "High-tonnage clevis cylinders",
    description:
      "Machine-green, heavy-duty industrial hydraulic cylinders with robust clevis mounts for maximum load stability.",
    metaTitle: "Heavy-Duty Clevis Mount Cylinders Hosur | RVS Hydraulics",
    metaDescription:
      "Buy industrial-grade machine-green clevis hydraulic cylinders in Hosur & Krishnagiri. Designed for heavy load stability, agricultural & earthmoving use.",
    keywords:
      "clevis hydraulic cylinders Hosur, clevis mount cylinder, heavy duty agricultural cylinder Krishnagiri, RVS Hydraulics",
    longDescription:
      "Our Heavy-Duty Clevis Cylinders are engineered specifically for applications demanding exceptional pivoting stability under extreme mechanical loads. Characterized by their signature machine-green structural finish and ultra-robust rear and front clevis mounts, these cylinders are the choice for agricultural tillage machinery, heavy earthmoving equipment, dump truck tailgates, and structural linkage systems. Fabricated with heavy-wall steel tubing and induction-hardened chrome rods, our clevis cylinders prevent mechanical twisting, resist mounting fatigue, and deliver massive push/pull capacities.",
    technicalSpecs: [
      { label: "Mounting Style", value: "Rear Clevis and Rod End Clevis with hardened steel pins" },
      { label: "Barrel Construction", value: "ST52.3 cold-drawn honed steel tubing" },
      { label: "Piston Seals", value: "High-performance multi-lip polyurethane seal package" },
      {
        label: "Working Pressure Limit",
        value: "Continuous 250 Bar (Heavy peak spikes up to 320 Bar)",
      },
      {
        label: "Finishing Paint",
        value: "Anti-corrosive machine-green industrial polyurethane coat",
      },
    ],
    image: heavyCylinders,
    faqs: [
      {
        q: "What are the advantages of a clevis-mounted cylinder?",
        a: "Clevis mounts allow the cylinder to pivot smoothly along a single plane, reducing lateral structural stress on the piston rod during load movement.",
      },
      {
        q: "Do your clevis cylinders come complete with locking pins?",
        a: "Yes, all our clevis cylinders are supplied with precision-ground steel mounting pins and retaining clips.",
      },
      {
        q: "Are these cylinders compatible with standard farm loaders?",
        a: "Yes, we manufacture standard stroke dimensions that drop directly into standard loader arms, agricultural scrapers, and farm attachments.",
      },
    ],
  },
  {
    slug: "brass-actuators",
    title: "Precision Brass Actuators",
    short: "Polished brass hydraulic cylinders",
    description:
      "High-quality, polished brass hydraulic cylinders and actuators featuring precision steel piston rods.",
    metaTitle: "Precision Brass Actuators & Cylinders Hosur | RVS",
    metaDescription:
      "Specialist brass hydraulic actuators and polished cylinders in Hosur. Precision engineered for marine, laboratory, and clean manufacturing environments.",
    keywords:
      "brass hydraulic actuators, brass cylinders Hosur, marine hydraulic actuators, polished brass cylinders Shoolagiri",
    longDescription:
      "Precision Brass Actuators and Cylinders offer exceptional corrosion resistance and high structural precision, making them ideal for specialized applications. Standard steel cylinders are vulnerable in humid, marine, laboratory, or food-processing zones. Our brass cylinders feature beautifully polished heavy-wall brass bodies and precision stainless steel piston rods. Engineered with tight mechanical tolerances and low-friction fluorocarbon seal kits, they guarantee precise, spark-free movements and long-term durability in challenging operating conditions.",
    technicalSpecs: [
      { label: "Cylinder Body Material", value: "Polished heavy-wall naval brass alloy" },
      {
        label: "Piston Rod Material",
        value: "High-grade 316 Stainless Steel (ground and polished)",
      },
      { label: "Seal Kit Package", value: "Low-friction Viton O-rings with PTFE backup guides" },
      { label: "Max Operating Pressure", value: "Up to 120 Bar" },
      {
        label: "Applications",
        value: "Marine steering systems, cleanrooms, sparking hazard zones",
      },
    ],
    image: brassActuators,
    faqs: [
      {
        q: "Why choose brass actuators over standard steel cylinders?",
        a: "Brass does not rust in saltwater or high-humidity zones. It is also non-sparking, making it safe for explosive environments, and has lower friction characteristics.",
      },
      {
        q: "What is the maximum operating pressure for these brass actuators?",
        a: "They are designed for light-to-medium hydraulic circuits, with safe working pressure levels up to 120 Bar.",
      },
      {
        q: "Can you fit custom seals for chemically active environments?",
        a: "Yes, we can customize these actuators with EPDM, Viton, or pure PTFE seals based on your fluid compatibility chart.",
      },
    ],
  },
  {
    slug: "tollgate-powerpack",
    title: "Single Phase Power Pack for Toll Gate",
    short: "Compact 1-Phase hydraulic units",
    description:
      "High-reliability single-phase hydraulic power packs designed for seamless, continuous toll gate barrier operation.",
    metaTitle: "Toll Gate Single Phase Hydraulic Power Packs | Hosur",
    metaDescription:
      "Compact 1-phase hydraulic power packs designed for toll gate barrier gates in Hosur & Krishnagiri. Extreme cycle reliability, rapid rise speeds.",
    keywords:
      "toll gate power pack Hosur, single phase hydraulic unit Krishnagiri, toll gate barrier hydraulics, 1-phase hydraulic power pack",
    longDescription:
      "Our Single Phase Hydraulic Power Pack is built for 24/7 reliability in commercial toll gate barrier systems. These compact power units must operate continuously, cycling every few seconds to lift heavy barriers. Driven by a high-efficiency 1-phase AC motor, this power pack combines a low-noise gear pump, a compact steel reservoir, and high-speed solenoid valves. It ensures rapid, smooth lifting, secure structural holding, and a built-in manual bypass to raise barriers during electrical outages.",
    technicalSpecs: [
      { label: "Motor Type", value: "High-torque 1-Phase AC motor (220V, 50Hz, 1.5 kW)" },
      { label: "Flow Rate Capacity", value: "3 LPM to 8 LPM (configured for high speed)" },
      { label: "Reservoir Volume", value: "4 Liters to 8 Liters (Compact steel casing)" },
      {
        label: "Control Valves",
        value: "Fast-acting 12V/24V DC solenoid valve with manual override",
      },
      { label: "Duty Cycle Rating", value: "S3 continuous cyclic duty (24/7 tollway standard)" },
    ],
    image: tollgatePowerpack,
    faqs: [
      {
        q: "What is the average lifting time for a toll gate barrier with this power pack?",
        a: "Our toll gate power units are configured with high-flow pumps, achieving a lifting sweep time of 1.5 to 2.5 seconds depending on cylinder sizes.",
      },
      {
        q: "Does this power pack feature a manual backup during power failures?",
        a: "Yes! It includes an integrated manual release valve allowing toll workers to raise the barrier safely by hand in emergencies.",
      },
      {
        q: "How does the power pack survive extreme summer highway temperatures?",
        a: "The unit is filled with high-viscosity-index ISO VG 46 oil and features a cast aluminum valve housing that sheds heat rapidly.",
      },
    ],
  },
  {
    slug: "two-wheeler-bike-lifting",
    title: "Two Wheeler Garage Bike Lifting",
    short: "Hydraulic bike lifting systems",
    description:
      "Durable hydraulic lifting systems specifically designed for two-wheeler garages and service stations.",
    metaTitle: "Two-Wheeler Hydraulic Garage Lifts Hosur | RVS Hydraulics",
    metaDescription:
      "Buy robust hydraulic bike lifting tables & scissor lifts for garages in Hosur & Shoolagiri. Heavy steel platforms, safety locks, 500kg lifting load.",
    keywords:
      "two wheeler bike lifting lift Hosur, garage bike lifting system Shoolagiri, hydraulic bike lift Krishnagiri, motorcycle lifting table",
    longDescription:
      "Transform workshop productivity with our heavy-duty Two Wheeler Garage Bike Lifting Systems. Traditional servicing requires mechanics to work in uncomfortable bent positions, which causes fatigue and slows down service cycles. Our professional hydraulic scissor and platform lifting tables raise motorcycles to comfortable heights. Engineered with heavy-duty structural steel plates, a robust foot-pedal pump (or optional single-phase electric unit), and multi-position safety locking slots, these lifts handle cruisers and sportbikes up to 500kg, keeping workshops safe and highly efficient.",
    technicalSpecs: [
      { label: "Lifting Load Capacity", value: "350 kg to 500 kg maximum load" },
      { label: "Platform Dimension", value: "2200mm Length x 700mm Width" },
      { label: "Max Raising Height", value: "850mm (minimum lowered height 180mm)" },
      {
        label: "Actuation Options",
        value: "Manual hydraulic foot-pedal or electro-hydraulic 1-Phase motor",
      },
      {
        label: "Safety Systems",
        value: "Mechanical safety lock bars, wheel-clamp lock, anti-skid surface",
      },
    ],
    image: twoWheelerBikeLifting,
    faqs: [
      {
        q: "Do you supply electro-hydraulic bike lifts?",
        a: "Yes, we supply both manual foot-pedal hydraulic models and fast electro-hydraulic units that plug into standard single-phase 220V wall sockets.",
      },
      {
        q: "What safety systems are built into these bike lifts?",
        a: "Each lifting platform includes mechanical drop-safety lock bars, an adjustable front wheel-clamp lock, and high-grip textured steel floors.",
      },
      {
        q: "Is any special floor anchoring required to install the lift?",
        a: "No! The lift features a stable wide-track steel foundation, allowing it to sit safely on standard garage concrete floors without permanent anchor bolts.",
      },
    ],
  },
];
