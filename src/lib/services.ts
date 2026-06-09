import systemRepairImg from "@/assets/service-system-repair.png";
import ramMaintenanceImg from "@/assets/service-ram-maintenance.png";
import pistonRepairImg from "@/assets/service-piston-repair.png";
import pneumaticHydraulicImg from "@/assets/service-pneumatic-hydraulic.png";
import fluidPowerImg from "@/assets/service-fluid-power.png";
import actuatorRepairImg from "@/assets/service-actuator-repair.png";
import cylinderRepairImg from "@/assets/service-cylinder-repair.png";
import ramRepairImg from "@/assets/service-ram-repair.png";
import equipmentRepairImg from "@/assets/service-equipment-repair.png";

// New Pump Images
import pumpHighPressureImg from "@/assets/pump-high-pressure.png";
import pumpSystemMaintenanceImg from "@/assets/pump-system-maintenance.png";
import pumpFluidServiceImg from "@/assets/pump-fluid-service.png";
import pumpPowerOverhaulImg from "@/assets/pump-power-overhaul.png";
import pumpRestorationImg from "@/assets/pump-restoration.png";
import pumpSystemServicingImg from "@/assets/pump-system-servicing.png";
import pumpIndustrialSolutionsImg from "@/assets/pump-industrial-solutions.png";
import pumpRepairServicesImg from "@/assets/pump-repair-services.png";
import pumpIndustrialRepairImg from "@/assets/pump-industrial-repair.png";
import pumpMaintenanceImg from "@/assets/pump-maintenance.png";

export type ServiceCategory = "cylinder" | "pump";

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceItem = {
  id: string;
  category: ServiceCategory;
  title: string;
  type: string;
  duration: string;
  warranty: string;
  description: string;
  technicalDetails: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  faqs: ServiceFAQ[];
  customFields?: { label: string; value: string }[];
};

export const SERVICES: ServiceItem[] = [
  // ────────────────────────────────────────────────────────────────────────
  // CYLINDER SERVICES
  // ────────────────────────────────────────────────────────────────────────
  {
    id: "hydraulic-system-repair",
    category: "cylinder",
    title: "Hydraulic System Repair",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: systemRepairImg,
    metaTitle: "Hydraulic System Repair Shoolagiri | RVS Hydraulics",
    metaDescription:
      "Professional hydraulic system repair & diagnostics in Shoolagiri & Hosur. We troubleshoot pumps, valves, hoses, and cylinders with advanced dyno testing.",
    keywords:
      "hydraulic system repair Shoolagiri, hydraulic diagnostics Hosur, fluid power troubleshooting, industrial hydraulic repairs, RVS Hydraulics",
    description:
      "Hydraulic System Repair involves the diagnostic assessment, failure analysis, and thorough restoration of industrial hydraulic circuits. When a machinery circuit suffers from sluggish movement, pressure drop, or overheating, our team employs specialized flowmeters and diagnostic blocks to isolate the issue. We analyze components, calibrate pressure reliefs, rebuild valves, and perform comprehensive fluid contamination checks. This ensures the entire system operates at peak mechanical efficiency.",
    technicalDetails: [
      "Diagnostic flow-rate and system pressure profiling using digital calibrators.",
      "Complete flushing of contaminated lines to remove abrasive particulates.",
      "Precision honing and rebuilding of central control manifolds.",
      "High-pressure circuit pressure testing up to 350 Bar for performance certification.",
    ],
    faqs: [
      {
        q: "What causes a sudden drop in hydraulic system pressure?",
        a: "Pressure drops are typically caused by internal bypassing in the cylinders, worn gear sets in the pump, or miscalibrated relief valves. Our diagnostic process targets each component under load to find the bypass source.",
      },
      {
        q: "How often should hydraulic oil be analyzed or replaced?",
        a: "For industrial environments, oil should undergo contamination analysis every 1,000 operational hours. Replacement is recommended if viscosity drops or particle counts cross ISO cleanliness standards.",
      },
      {
        q: "Do you offer emergency on-site system diagnostics?",
        a: "Yes, we dispatch engineering teams with mobile pressure testing tools to factories in Shoolagiri, Hosur, and Krishnagiri for emergency troubleshooting.",
      },
    ],
  },
  {
    id: "hydraulic-ram-maintenance",
    category: "cylinder",
    title: "Hydraulic Ram Maintenance",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: ramMaintenanceImg,
    metaTitle: "Hydraulic Ram Maintenance & Servicing | Hosur & Shoolagiri",
    metaDescription:
      "Prevent catastrophic breakdowns with expert hydraulic ram maintenance in Hosur. Inspecting rods, barrels, and custom polyurethane seal installation.",
    keywords:
      "hydraulic ram maintenance Hosur, hydraulic ram servicing, cylinder rod inspection, industrial ram maintenance, RVS Hydraulics Shoolagiri",
    description:
      "Hydraulic Ram Maintenance focuses on preventive upkeep of heavy-duty rods and cylinders. Over time, high load demands can lead to minor rod deflection, mounting wear, or micro-cracks in seals. Our proactive maintenance service addresses these vulnerabilities early. We clean internal assemblies, micro-polish the ram surface, inspect mounting bearings, and replace seals with industrial polyurethane kits. This ensures continuous, reliable operation without unexpected site failures.",
    technicalDetails: [
      "Laser alignment checks to detect rod deflection or mounting offset.",
      "Inspection of spherical eye-bearings and clevis mounts for metal fatigue.",
      "High-durability wiper seal upgrades to prevent environmental dust ingress.",
      "Performance logging to track operational pressure holds over duration.",
    ],
    faqs: [
      {
        q: "Why is preventive maintenance critical for heavy-duty hydraulic rams?",
        a: "Minor scratches or rod deflections can wear out seals rapidly. Replacing a seal during routine servicing is fractionally cheaper than recovering from a blown rod under active load.",
      },
      {
        q: "How do you check if a ram is bent?",
        a: "We mount the rod on lathe centers and use dial indicators to measure total runout. Rods exceeding OEM deviation tolerances are safely hot-straightened or replaced.",
      },
      {
        q: "Can you source custom metric and imperial ram seals?",
        a: "Yes, we keep a large inventory of premium polyurethane seals in both metric and imperial sizes, ensuring immediate turnarounds.",
      },
    ],
  },
  {
    id: "hydraulic-piston-repair",
    category: "cylinder",
    title: "Hydraulic Piston Repair",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pistonRepairImg,
    metaTitle: "Precision Hydraulic Piston & Rod Repair | RVS Hydraulics",
    metaDescription:
      "Specialist hydraulic piston repair, rod grinding, hard chrome plating, and dynamic calibration. Restoring OEM tolerances in Krishnagiri & Shoolagiri.",
    keywords:
      "hydraulic piston repair, piston rod chrome plating, cylinder rod grinding, hydraulic cylinder repair Krishnagiri, RVS Hydraulics",
    description:
      "Hydraulic Piston Repair restores severely worn or scored pistons and rods to standard dimensional tolerances. A scored piston rod allows high-pressure fluid to bypass seals, resulting in drift. Our technicians disassemble the cylinder, strip worn chrome plating, weld deep pits, and perform precision cylindrical grinding. We then apply high-thickness industrial hard chrome plating, followed by a final polish to achieve a mirror finish. This restores structural seal integrity and ensures frictionless piston travel.",
    technicalDetails: [
      "Sub-micron precision cylindrical grinding of scored rods.",
      "Industrial hard chrome plating to a thickness of 25-50 microns.",
      "Replacing piston wear bands with custom carbon-teflon composites.",
      "Zero-bypass internal sealing test to ensure holding capacity.",
    ],
    faqs: [
      {
        q: "What causes scoring on hydraulic piston rods?",
        a: "Scoring is typically caused by external dirt particles bypassing a worn dust wiper, or contaminated hydraulic oil carrying abrasive wear particles within the system.",
      },
      {
        q: "Is it better to repair a scored rod or buy a new one?",
        a: "For large or custom cylinders, precision machining and hard chrome plating can restore the rod to OEM specifications at 30-50% of the cost of a new replacement.",
      },
      {
        q: "What type of plating do you use?",
        a: "We use high-density industrial hard chrome plating, which provides exceptional hardness, corrosion resistance, and dry lubrication qualities.",
      },
    ],
  },
  {
    id: "pneumatic-hydraulic-repair",
    category: "cylinder",
    title: "Pneumatic & Hydraulic Repair",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pneumaticHydraulicImg,
    metaTitle: "Pneumatic and Hydraulic Cylinder Repair | Shoolagiri, Hosur",
    metaDescription:
      "Dual engineering capabilities in pneumatic & hydraulic cylinder repair. Restoring air cylinders, control manifolds, and complex hybrid machinery circuits.",
    keywords:
      "pneumatic cylinder repair Hosur, hydraulic pneumatic servicing, air compressor repair Shoolagiri, control manifold rebuilding",
    description:
      "Pneumatic & Hydraulic Repair addresses hybrid fluid power systems that incorporate both compressed air and liquid hydraulic systems. We restore air compressors, pneumatic cylinders, air-over-oil systems, solenoid valve banks, and central manifolds. Our facility is equipped with pressure rigs calibrated for both low-pressure pneumatic seals and high-pressure hydraulic tolerances. We ensure hybrid machines operate with balanced flow rates and synchronized actuation.",
    technicalDetails: [
      "Honing and resealing pneumatic barrels with low-friction nitrile/Viton seals.",
      "Calibrating pneumatic valves, regulators, and lubricator (FRL) units.",
      "Dual-chamber pressure testing to guarantee air-tight and oil-tight operation.",
      "Component mapping to ensure optimal flow rate synchronization between systems.",
    ],
    faqs: [
      {
        q: "What are the common failure signs in pneumatic cylinders?",
        a: "Common indicators include air bypass noise (hissing), slow or jerky strokes (slip-stick effect), and physical oil leaking from exhaust ports due to internal air-oil seal failures.",
      },
      {
        q: "Do you supply high-temperature seals for heavy foundry cylinders?",
        a: "Yes, we install Viton and custom fluoropolymer seals capable of resisting temperatures up to 200°C for pneumatic and hydraulic cylinders in high-heat zones.",
      },
      {
        q: "Can you service custom-stroke pneumatic actuators?",
        a: "Yes, we can fabricate custom piston rods, hone barrels, and manufacture seals for all custom stroke lengths and bore diameters.",
      },
    ],
  },
  {
    id: "fluid-power-cylinder-servicing",
    category: "cylinder",
    title: "Fluid Power Cylinder Servicing",
    type: "Hydraulic Cylinder Repair",
    duration: "Within 24 Hrs",
    warranty: "30 Days Post-Repair",
    image: fluidPowerImg,
    metaTitle: "Rapid Fluid Power Cylinder Servicing Shoolagiri | 24 Hr Turnaround",
    metaDescription:
      "High-priority hydraulic cylinder servicing in Shoolagiri & Hosur. 24-hour turnaround for emergency breakdowns, resealing, and certified high-pressure testing.",
    keywords:
      "fluid power cylinder servicing, urgent hydraulic repair Shoolagiri, fast cylinder resealing Hosur, emergency hydraulic service",
    description:
      "Fluid Power Cylinder Servicing is our dedicated rapid-response pathway designed to minimize industrial downtime. When a critical machine goes offline due to cylinder failure, this priority service fast-tracks your component. Our technicians immediately perform teardowns, clean parts in chemical baths, hone the cylinder bore, replace all gaskets with premium polyurethane seal kits, and verify performance on our dynamic testing rig. Perfect for construction, agricultural, and industrial operations.",
    customFields: [
      { label: "Response Time", value: "Within 24 Hrs" },
      { label: "Payment Method", value: "Online / Offline" },
    ],
    technicalDetails: [
      "Immediate priority teardown and chemical cleaning of cylinder internals.",
      "Micro-honing of cylinder barrels to remove surface glazing and restore cross-hatch.",
      "Rapid assembly with premium double-acting seal kits.",
      "Certified 240-bar static and dynamic hold tests prior to dispatch.",
    ],
    faqs: [
      {
        q: "How can you guarantee a 24-hour turnaround for cylinder servicing?",
        a: "We maintain a dedicated rapid-response bay and stock thousands of raw seal sizes, honed tubes, and chrome-plated rods. This allows us to handle standard repairs without waiting for external suppliers.",
      },
      {
        q: "Does this rapid service compromise quality?",
        a: "No. The servicing follows our exact rigorous standard, including dynamic pressure testing. We achieve speed by prioritizing labor and utilizing in-house manufacturing capabilities.",
      },
      {
        q: "What types of cylinders qualify for the 24-hour service?",
        a: "Most single-stage industrial cylinders, excavator steering cylinders, and standard farm equipment cylinders qualify. Large telescopic rams may require additional hours.",
      },
    ],
  },
  {
    id: "hydraulic-actuator-repair",
    category: "cylinder",
    title: "Hydraulic Actuator Repair",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: actuatorRepairImg,
    metaTitle: "Industrial Hydraulic Actuator Repair & Servicing | Hosur",
    metaDescription:
      "Expert hydraulic actuator repair in Hosur and Krishnagiri. We calibrate position sensors, replace rotary seals, and perform structural casing machining.",
    keywords:
      "hydraulic actuator repair Hosur, rotary actuator servicing, precise hydraulic positioning, industrial actuator calibration",
    description:
      "Hydraulic Actuator Repair restores specialized rotary and linear positioning actuators used in precise automation. These actuators require absolute positional stability and zero internal leakage to prevent drift. We specialize in precision body machining, rotary seal replacement, piston rod alignment, and structural calibration of electronic feedback sensors. We ensure high torque output, absolute positional stability, and certified performance under continuous operating cycles.",
    technicalDetails: [
      "Micrometer measurement of rotary casing tolerances to detect internal bypassing.",
      "Installation of heavy-duty dual-cup rotary seals and Teflon backing rings.",
      "Testing positional hold and micro-backlash limits on calibrated testing tables.",
      "Calibrating integrated feedback sensors and proportional valve controllers.",
    ],
    faqs: [
      {
        q: "What is the difference between repairing a cylinder and an actuator?",
        a: "Hydraulic actuators (especially rotary types) have much tighter internal clearances and complex helical or rack-and-pinion gearing systems that demand extreme precision machining during rebuilding.",
      },
      {
        q: "How do you fix rotary actuator drift?",
        a: "Rotary drift is fixed by remachining internal chambers, replacing high-wear rotary seals with custom-molded teflon seals, and adjusting the gear backlash to factory specifications.",
      },
      {
        q: "Do you service actuators with integrated proportional valves?",
        a: "Yes, our engineering team can test, clean, and rebuild both the actuator body and its mounted proportional flow control valves.",
      },
    ],
  },
  {
    id: "hydraulic-cylinder-repair-services",
    category: "cylinder",
    title: "Hydraulic Cylinder Repair & Services",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: cylinderRepairImg,
    metaTitle: "Hydraulic Cylinder Repair Services | Hosur, Krishnagiri & Bangalore",
    metaDescription:
      "Full-scale rebuilding & reconditioning of heavy-duty industrial cylinders. single/double-acting, telescopic & custom fabrications. Dyno-tested in Shoolagiri.",
    keywords:
      "hydraulic cylinder repair Hosur, industrial cylinder rebuilding Krishnagiri, telescopic cylinder repair Bangalore, RVS Hydraulics Shoolagiri",
    description:
      "Hydraulic Cylinder Repair & Services provides professional, full-scale rebuilding and reconditioning of heavy-duty industrial cylinders. We service single-acting, double-acting, telescopic, and custom-engineered cylinders used in construction, marine, agricultural, and manufacturing industries. Our workshop is equipped to handle massive cylinder bores, offering complete cylinder honing, custom rod fabrication, gland rebuilding, and comprehensive high-pressure seal replacements.",
    technicalDetails: [
      "Full disassembly, assessment, and ISO-standard particulate analysis.",
      "Heavy-duty honing of barrels up to 400mm inner diameter.",
      "Custom fabrication of piston glands and rod bushings from high-tensile bronze.",
      "High-pressure dynamic load testing up to 400 Bar with visual pressure hold log.",
    ],
    faqs: [
      {
        q: "What types of industrial cylinders can you repair?",
        a: "We repair all varieties: heavy earthmover cylinders, high-tonnage industrial press cylinders, multi-stage telescopic dump truck cylinders, and custom tie-rod manufacturing cylinders.",
      },
      {
        q: "How do you test a rebuilt cylinder for quality?",
        a: "Every cylinder is mounted on our dynamic test bench, pressurized to 1.5 times its rated working pressure, and checked with digital sensors for pressure decay or micro-leakage over 30 minutes.",
      },
      {
        q: "Can you rebuild custom cylinders that are no longer manufactured?",
        a: "Yes, we specialize in reverse-engineering and fabricating custom barrels, rods, glands, and pistons to replicate obsolete OEM specifications perfectly.",
      },
    ],
  },
  {
    id: "hydraulic-ram-repair-services",
    category: "cylinder",
    title: "Hydraulic Ram Repair Services",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: ramRepairImg,
    metaTitle: "Heavy Machinery Hydraulic Ram Repair | Hosur, Krishnagiri",
    metaDescription:
      "Heavy-duty hydraulic ram repair for earthmovers, dumpers, and cranes. Weld build-up, precision machining, and heavy structural alignment under harsh loads.",
    keywords:
      "hydraulic ram repair, excavator cylinder repair Hosur, dumper ram repair Krishnagiri, heavy machinery hydraulic service",
    description:
      "Hydraulic Ram Repair Services delivers robust, heavy-duty repair solutions for agricultural, earthmoving, and mining machinery rams. Operating in dusty, highly-stressed environments can result in bent rods, damaged clevis mounts, and deep barrel scoring. Our team performs weld build-ups, precision grinding, heavy rod straightening, and casing alignment. We utilize premium, high-wear polyurethane seals and heavy-duty wiper components to shield internal systems from environmental contamination.",
    technicalDetails: [
      "Precision structural welding of cracked mounts and damaged cylinder eyes.",
      "Heavy hydraulic press straightening of bent rods with micro-dial alignment.",
      "Installation of steel-cased wiper seals and reinforced phenolic guide rings.",
      "Dynamic stress testing under load simulation to verify mechanical strength.",
    ],
    faqs: [
      {
        q: "Can a severely bent excavator ram rod be straightened safely?",
        a: "Yes, rods with moderate bends can be cold-pressed and straightened using precise dial indicators. If the bend exceeds safety tolerances or shows micro-cracking, we recommend custom rod replacement.",
      },
      {
        q: "What seals do you use for earthmovers working in rocky/dusty zones?",
        a: "We install steel-encased scraper seals alongside nitrile-urethane multi-lip seals to wipe dirt off the rod before it can penetrate the primary high-pressure seals.",
      },
      {
        q: "Do you offer pick-up and delivery services for heavy rams?",
        a: "Yes, we coordinate pick-up and safe transport for heavy industrial and earthmoving components across Shoolagiri, Hosur, and Krishnagiri.",
      },
    ],
  },
  {
    id: "hydraulic-equipment-repair-services",
    category: "cylinder",
    title: "Hydraulic Equipment Repair Services",
    type: "Hydraulic Cylinder Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: equipmentRepairImg,
    metaTitle: "Industrial Hydraulic Equipment Repair | RVS Hydraulics Shoolagiri",
    metaDescription:
      "Comprehensive repair of industrial hydraulic machinery, power packs, valves, and circuits. Dynamic troubleshooting and preventive maintenance systems.",
    keywords:
      "hydraulic equipment repair, industrial machinery service Shoolagiri, power pack repair Hosur, valve rebuilding Krishnagiri",
    description:
      "Hydraulic Equipment Repair Services is our broad-spectrum industrial maintenance solution. We service entire hydraulic machines, central power units, valve blocks, directional manifolds, and complex mobile circuits. Our experienced field engineers perform systematic diagnostics, fluid quality testing, control calibration, and system-wide preventative overhauls. We restore optimal operational cycles, resolve energy loss, and guarantee safety compliance for all factory and manufacturing machinery.",
    technicalDetails: [
      "Systematic thermal imaging to locate internal pressure leakage and friction points.",
      "Overhauling control valves, spool setups, and pilot-operated check valves.",
      "Installing industrial offline filtration bypass rigs to purify oil reservoirs.",
      "Calibrating system operating parameters to optimize overall cycle efficiency.",
    ],
    faqs: [
      {
        q: "Why is my hydraulic equipment slowing down as the workday progresses?",
        a: "This is usually caused by thermal thinning of hydraulic oil due to internal heat generation (bypassing). As oil temperature spikes, viscosity drops, reducing volumetric efficiency of the system.",
      },
      {
        q: "Can you rebuild obsolete industrial control valves?",
        a: "Yes, we hone valve chambers, chrome-plate and regrind spools, and install custom seals to restore proper holding and pressure control in older valve banks.",
      },
      {
        q: "Do you design custom preventative maintenance schedules for factories?",
        a: "Absolutely. We build maintenance plans that include regular oil sampling, filter changes, and pressure checks to prevent costly, unplanned production halts.",
      },
    ],
  },

];
