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
    metaDescription: "Professional hydraulic system repair & diagnostics in Shoolagiri & Hosur. We troubleshoot pumps, valves, hoses, and cylinders with advanced dyno testing.",
    keywords: "hydraulic system repair Shoolagiri, hydraulic diagnostics Hosur, fluid power troubleshooting, industrial hydraulic repairs, RVS Hydraulics",
    description: "Hydraulic System Repair involves the diagnostic assessment, failure analysis, and thorough restoration of industrial hydraulic circuits. When a machinery circuit suffers from sluggish movement, pressure drop, or overheating, our team employs specialized flowmeters and diagnostic blocks to isolate the issue. We analyze components, calibrate pressure reliefs, rebuild valves, and perform comprehensive fluid contamination checks. This ensures the entire system operates at peak mechanical efficiency.",
    technicalDetails: [
      "Diagnostic flow-rate and system pressure profiling using digital calibrators.",
      "Complete flushing of contaminated lines to remove abrasive particulates.",
      "Precision honing and rebuilding of central control manifolds.",
      "High-pressure circuit pressure testing up to 350 Bar for performance certification."
    ],
    faqs: [
      {
        q: "What causes a sudden drop in hydraulic system pressure?",
        a: "Pressure drops are typically caused by internal bypassing in the cylinders, worn gear sets in the pump, or miscalibrated relief valves. Our diagnostic process targets each component under load to find the bypass source."
      },
      {
        q: "How often should hydraulic oil be analyzed or replaced?",
        a: "For industrial environments, oil should undergo contamination analysis every 1,000 operational hours. Replacement is recommended if viscosity drops or particle counts cross ISO cleanliness standards."
      },
      {
        q: "Do you offer emergency on-site system diagnostics?",
        a: "Yes, we dispatch engineering teams with mobile pressure testing tools to factories in Shoolagiri, Hosur, and Krishnagiri for emergency troubleshooting."
      }
    ]
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
    metaDescription: "Prevent catastrophic breakdowns with expert hydraulic ram maintenance in Hosur. Inspecting rods, barrels, and custom polyurethane seal installation.",
    keywords: "hydraulic ram maintenance Hosur, hydraulic ram servicing, cylinder rod inspection, industrial ram maintenance, RVS Hydraulics Shoolagiri",
    description: "Hydraulic Ram Maintenance focuses on preventive upkeep of heavy-duty rods and cylinders. Over time, high load demands can lead to minor rod deflection, mounting wear, or micro-cracks in seals. Our proactive maintenance service addresses these vulnerabilities early. We clean internal assemblies, micro-polish the ram surface, inspect mounting bearings, and replace seals with industrial polyurethane kits. This ensures continuous, reliable operation without unexpected site failures.",
    technicalDetails: [
      "Laser alignment checks to detect rod deflection or mounting offset.",
      "Inspection of spherical eye-bearings and clevis mounts for metal fatigue.",
      "High-durability wiper seal upgrades to prevent environmental dust ingress.",
      "Performance logging to track operational pressure holds over duration."
    ],
    faqs: [
      {
        q: "Why is preventive maintenance critical for heavy-duty hydraulic rams?",
        a: "Minor scratches or rod deflections can wear out seals rapidly. Replacing a seal during routine servicing is fractionally cheaper than recovering from a blown rod under active load."
      },
      {
        q: "How do you check if a ram is bent?",
        a: "We mount the rod on lathe centers and use dial indicators to measure total runout. Rods exceeding OEM deviation tolerances are safely hot-straightened or replaced."
      },
      {
        q: "Can you source custom metric and imperial ram seals?",
        a: "Yes, we keep a large inventory of premium polyurethane seals in both metric and imperial sizes, ensuring immediate turnarounds."
      }
    ]
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
    metaDescription: "Specialist hydraulic piston repair, rod grinding, hard chrome plating, and dynamic calibration. Restoring OEM tolerances in Krishnagiri & Shoolagiri.",
    keywords: "hydraulic piston repair, piston rod chrome plating, cylinder rod grinding, hydraulic cylinder repair Krishnagiri, RVS Hydraulics",
    description: "Hydraulic Piston Repair restores severely worn or scored pistons and rods to standard dimensional tolerances. A scored piston rod allows high-pressure fluid to bypass seals, resulting in drift. Our technicians disassemble the cylinder, strip worn chrome plating, weld deep pits, and perform precision cylindrical grinding. We then apply high-thickness industrial hard chrome plating, followed by a final polish to achieve a mirror finish. This restores structural seal integrity and ensures frictionless piston travel.",
    technicalDetails: [
      "Sub-micron precision cylindrical grinding of scored rods.",
      "Industrial hard chrome plating to a thickness of 25-50 microns.",
      "Replacing piston wear bands with custom carbon-teflon composites.",
      "Zero-bypass internal sealing test to ensure holding capacity."
    ],
    faqs: [
      {
        q: "What causes scoring on hydraulic piston rods?",
        a: "Scoring is typically caused by external dirt particles bypassing a worn dust wiper, or contaminated hydraulic oil carrying abrasive wear particles within the system."
      },
      {
        q: "Is it better to repair a scored rod or buy a new one?",
        a: "For large or custom cylinders, precision machining and hard chrome plating can restore the rod to OEM specifications at 30-50% of the cost of a new replacement."
      },
      {
        q: "What type of plating do you use?",
        a: "We use high-density industrial hard chrome plating, which provides exceptional hardness, corrosion resistance, and dry lubrication qualities."
      }
    ]
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
    metaDescription: "Dual engineering capabilities in pneumatic & hydraulic cylinder repair. Restoring air cylinders, control manifolds, and complex hybrid machinery circuits.",
    keywords: "pneumatic cylinder repair Hosur, hydraulic pneumatic servicing, air compressor repair Shoolagiri, control manifold rebuilding",
    description: "Pneumatic & Hydraulic Repair addresses hybrid fluid power systems that incorporate both compressed air and liquid hydraulic systems. We restore air compressors, pneumatic cylinders, air-over-oil systems, solenoid valve banks, and central manifolds. Our facility is equipped with pressure rigs calibrated for both low-pressure pneumatic seals and high-pressure hydraulic tolerances. We ensure hybrid machines operate with balanced flow rates and synchronized actuation.",
    technicalDetails: [
      "Honing and resealing pneumatic barrels with low-friction nitrile/Viton seals.",
      "Calibrating pneumatic valves, regulators, and lubricator (FRL) units.",
      "Dual-chamber pressure testing to guarantee air-tight and oil-tight operation.",
      "Component mapping to ensure optimal flow rate synchronization between systems."
    ],
    faqs: [
      {
        q: "What are the common failure signs in pneumatic cylinders?",
        a: "Common indicators include air bypass noise (hissing), slow or jerky strokes (slip-stick effect), and physical oil leaking from exhaust ports due to internal air-oil seal failures."
      },
      {
        q: "Do you supply high-temperature seals for heavy foundry cylinders?",
        a: "Yes, we install Viton and custom fluoropolymer seals capable of resisting temperatures up to 200°C for pneumatic and hydraulic cylinders in high-heat zones."
      },
      {
        q: "Can you service custom-stroke pneumatic actuators?",
        a: "Yes, we can fabricate custom piston rods, hone barrels, and manufacture seals for all custom stroke lengths and bore diameters."
      }
    ]
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
    metaDescription: "High-priority hydraulic cylinder servicing in Shoolagiri & Hosur. 24-hour turnaround for emergency breakdowns, resealing, and certified high-pressure testing.",
    keywords: "fluid power cylinder servicing, urgent hydraulic repair Shoolagiri, fast cylinder resealing Hosur, emergency hydraulic service",
    description: "Fluid Power Cylinder Servicing is our dedicated rapid-response pathway designed to minimize industrial downtime. When a critical machine goes offline due to cylinder failure, this priority service fast-tracks your component. Our technicians immediately perform teardowns, clean parts in chemical baths, hone the cylinder bore, replace all gaskets with premium polyurethane seal kits, and verify performance on our dynamic testing rig. Perfect for construction, agricultural, and industrial operations.",
    customFields: [
      { label: "Response Time", value: "Within 24 Hrs" },
      { label: "Payment Method", value: "Online / Offline" }
    ],
    technicalDetails: [
      "Immediate priority teardown and chemical cleaning of cylinder internals.",
      "Micro-honing of cylinder barrels to remove surface glazing and restore cross-hatch.",
      "Rapid assembly with premium double-acting seal kits.",
      "Certified 240-bar static and dynamic hold tests prior to dispatch."
    ],
    faqs: [
      {
        q: "How can you guarantee a 24-hour turnaround for cylinder servicing?",
        a: "We maintain a dedicated rapid-response bay and stock thousands of raw seal sizes, honed tubes, and chrome-plated rods. This allows us to handle standard repairs without waiting for external suppliers."
      },
      {
        q: "Does this rapid service compromise quality?",
        a: "No. The servicing follows our exact rigorous standard, including dynamic pressure testing. We achieve speed by prioritizing labor and utilizing in-house manufacturing capabilities."
      },
      {
        q: "What types of cylinders qualify for the 24-hour service?",
        a: "Most single-stage industrial cylinders, excavator steering cylinders, and standard farm equipment cylinders qualify. Large telescopic rams may require additional hours."
      }
    ]
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
    metaDescription: "Expert hydraulic actuator repair in Hosur and Krishnagiri. We calibrate position sensors, replace rotary seals, and perform structural casing machining.",
    keywords: "hydraulic actuator repair Hosur, rotary actuator servicing, precise hydraulic positioning, industrial actuator calibration",
    description: "Hydraulic Actuator Repair restores specialized rotary and linear positioning actuators used in precise automation. These actuators require absolute positional stability and zero internal leakage to prevent drift. We specialize in precision body machining, rotary seal replacement, piston rod alignment, and structural calibration of electronic feedback sensors. We ensure high torque output, absolute positional stability, and certified performance under continuous operating cycles.",
    technicalDetails: [
      "Micrometer measurement of rotary casing tolerances to detect internal bypassing.",
      "Installation of heavy-duty dual-cup rotary seals and Teflon backing rings.",
      "Testing positional hold and micro-backlash limits on calibrated testing tables.",
      "Calibrating integrated feedback sensors and proportional valve controllers."
    ],
    faqs: [
      {
        q: "What is the difference between repairing a cylinder and an actuator?",
        a: "Hydraulic actuators (especially rotary types) have much tighter internal clearances and complex helical or rack-and-pinion gearing systems that demand extreme precision machining during rebuilding."
      },
      {
        q: "How do you fix rotary actuator drift?",
        a: "Rotary drift is fixed by remachining internal chambers, replacing high-wear rotary seals with custom-molded teflon seals, and adjusting the gear backlash to factory specifications."
      },
      {
        q: "Do you service actuators with integrated proportional valves?",
        a: "Yes, our engineering team can test, clean, and rebuild both the actuator body and its mounted proportional flow control valves."
      }
    ]
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
    metaDescription: "Full-scale rebuilding & reconditioning of heavy-duty industrial cylinders. single/double-acting, telescopic & custom fabrications. Dyno-tested in Shoolagiri.",
    keywords: "hydraulic cylinder repair Hosur, industrial cylinder rebuilding Krishnagiri, telescopic cylinder repair Bangalore, RVS Hydraulics Shoolagiri",
    description: "Hydraulic Cylinder Repair & Services provides professional, full-scale rebuilding and reconditioning of heavy-duty industrial cylinders. We service single-acting, double-acting, telescopic, and custom-engineered cylinders used in construction, marine, agricultural, and manufacturing industries. Our workshop is equipped to handle massive cylinder bores, offering complete cylinder honing, custom rod fabrication, gland rebuilding, and comprehensive high-pressure seal replacements.",
    technicalDetails: [
      "Full disassembly, assessment, and ISO-standard particulate analysis.",
      "Heavy-duty honing of barrels up to 400mm inner diameter.",
      "Custom fabrication of piston glands and rod bushings from high-tensile bronze.",
      "High-pressure dynamic load testing up to 400 Bar with visual pressure hold log."
    ],
    faqs: [
      {
        q: "What types of industrial cylinders can you repair?",
        a: "We repair all varieties: heavy earthmover cylinders, high-tonnage industrial press cylinders, multi-stage telescopic dump truck cylinders, and custom tie-rod manufacturing cylinders."
      },
      {
        q: "How do you test a rebuilt cylinder for quality?",
        a: "Every cylinder is mounted on our dynamic test bench, pressurized to 1.5 times its rated working pressure, and checked with digital sensors for pressure decay or micro-leakage over 30 minutes."
      },
      {
        q: "Can you rebuild custom cylinders that are no longer manufactured?",
        a: "Yes, we specialize in reverse-engineering and fabricating custom barrels, rods, glands, and pistons to replicate obsolete OEM specifications perfectly."
      }
    ]
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
    metaDescription: "Heavy-duty hydraulic ram repair for earthmovers, dumpers, and cranes. Weld build-up, precision machining, and heavy structural alignment under harsh loads.",
    keywords: "hydraulic ram repair, excavator cylinder repair Hosur, dumper ram repair Krishnagiri, heavy machinery hydraulic service",
    description: "Hydraulic Ram Repair Services delivers robust, heavy-duty repair solutions for agricultural, earthmoving, and mining machinery rams. Operating in dusty, highly-stressed environments can result in bent rods, damaged clevis mounts, and deep barrel scoring. Our team performs weld build-ups, precision grinding, heavy rod straightening, and casing alignment. We utilize premium, high-wear polyurethane seals and heavy-duty wiper components to shield internal systems from environmental contamination.",
    technicalDetails: [
      "Precision structural welding of cracked mounts and damaged cylinder eyes.",
      "Heavy hydraulic press straightening of bent rods with micro-dial alignment.",
      "Installation of steel-cased wiper seals and reinforced phenolic guide rings.",
      "Dynamic stress testing under load simulation to verify mechanical strength."
    ],
    faqs: [
      {
        q: "Can a severely bent excavator ram rod be straightened safely?",
        a: "Yes, rods with moderate bends can be cold-pressed and straightened using precise dial indicators. If the bend exceeds safety tolerances or shows micro-cracking, we recommend custom rod replacement."
      },
      {
        q: "What seals do you use for earthmovers working in rocky/dusty zones?",
        a: "We install steel-encased scraper seals alongside nitrile-urethane multi-lip seals to wipe dirt off the rod before it can penetrate the primary high-pressure seals."
      },
      {
        q: "Do you offer pick-up and delivery services for heavy rams?",
        a: "Yes, we coordinate pick-up and safe transport for heavy industrial and earthmoving components across Shoolagiri, Hosur, and Krishnagiri."
      }
    ]
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
    metaDescription: "Comprehensive repair of industrial hydraulic machinery, power packs, valves, and circuits. Dynamic troubleshooting and preventive maintenance systems.",
    keywords: "hydraulic equipment repair, industrial machinery service Shoolagiri, power pack repair Hosur, valve rebuilding Krishnagiri",
    description: "Hydraulic Equipment Repair Services is our broad-spectrum industrial maintenance solution. We service entire hydraulic machines, central power units, valve blocks, directional manifolds, and complex mobile circuits. Our experienced field engineers perform systematic diagnostics, fluid quality testing, control calibration, and system-wide preventative overhauls. We restore optimal operational cycles, resolve energy loss, and guarantee safety compliance for all factory and manufacturing machinery.",
    technicalDetails: [
      "Systematic thermal imaging to locate internal pressure leakage and friction points.",
      "Overhauling control valves, spool setups, and pilot-operated check valves.",
      "Installing industrial offline filtration bypass rigs to purify oil reservoirs.",
      "Calibrating system operating parameters to optimize overall cycle efficiency."
    ],
    faqs: [
      {
        q: "Why is my hydraulic equipment slowing down as the workday progresses?",
        a: "This is usually caused by thermal thinning of hydraulic oil due to internal heat generation (bypassing). As oil temperature spikes, viscosity drops, reducing volumetric efficiency of the system."
      },
      {
        q: "Can you rebuild obsolete industrial control valves?",
        a: "Yes, we hone valve chambers, chrome-plate and regrind spools, and install custom seals to restore proper holding and pressure control in older valve banks."
      },
      {
        q: "Do you design custom preventative maintenance schedules for factories?",
        a: "Absolutely. We build maintenance plans that include regular oil sampling, filter changes, and pressure checks to prevent costly, unplanned production halts."
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────────────
  // PUMP SERVICES
  // ────────────────────────────────────────────────────────────────────────
  {
    id: "high-pressure-pump-repair",
    category: "pump",
    title: "High-Pressure Pump Repair",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpHighPressureImg,
    metaTitle: "High-Pressure Hydraulic Pump Repair | Shoolagiri & Hosur",
    metaDescription: "Expert rebuilds and dyno testing of high-pressure hydraulic pumps (piston, gear, vane). OEM components and pressure calibration up to 350 Bar.",
    keywords: "high pressure pump repair, hydraulic pump service Hosur, piston pump rebuild Shoolagiri, gear pump repair Krishnagiri, RVS Hydraulics",
    description: "High-Pressure Pump Repair delivers precision diagnostics and certified overhauls for critical high-pressure hydraulic pumps. High pressure levels place massive mechanical loads on internal components. Over time, friction leads to wear on swashplates, piston shoes, and valve plates. Our technicians perform full tear-downs, inspect tolerances using digital micrometers, lap control surfaces, replace wear items with OEM-grade components, and run dynamic pressure verification on our testing bench.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Ultra-precise lapping of valve plates and cylinder blocks to flat tolerances under 2 microns.",
      "Replacement of high-wear piston shoes, swashplates, and saddle bearings.",
      "Replacing drive shaft seals with high-pressure Viton double-lip variants.",
      "Dynamic flow-rate and pressure charting under continuous simulated working loads."
    ],
    faqs: [
      {
        q: "What causes a high-pressure pump to whine or make knocking noises?",
        a: "Whining is usually a sign of cavitation (air entering the inlet line due to dirty filters or loose fittings). Knocking points to mechanical failure of piston shoes or drive shaft bearings."
      },
      {
        q: "Do you repair variable displacement piston pumps?",
        a: "Yes, we regularly service Rexroth, Kawasaki, Vickers, and Yuken variable displacement piston pumps, including calibrating their pressure-flow compensators."
      },
      {
        q: "Is dynamic dyno-testing performed on all rebuilt pumps?",
        a: "Absolutely. We never deliver a pump without testing it under active pressure loads to ensure it holds volumetric efficiency and shows no micro-leaks."
      }
    ]
  },
  {
    id: "hydraulic-system-pump-maintenance",
    category: "pump",
    title: "Hydraulic System Pump Maintenance",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpSystemMaintenanceImg,
    metaTitle: "Hydraulic Pump Preventive Maintenance Services | Hosur",
    metaDescription: "Keep your operations running with pro hydraulic pump maintenance. Fluid contamination checks, filter cleaning, and bearing replacements in Shoolagiri.",
    keywords: "hydraulic pump maintenance, preventive pump service Hosur, pump filter replacement Shoolagiri, industrial pump maintenance",
    description: "Hydraulic System Pump Maintenance provides structured preventative upkeep for industrial and mobile pump systems. Operating continuously under high-stress conditions will gradually degrade oil quality and accelerate internal component wear. Our preventive services focus on intercepting failures before they happen. We replace shaft bearings, rebuild shaft seals, flush pump cases, inspect suction screens, and analyze operating temperatures to ensure optimal pump lifespan and prevent unexpected factory shutdowns.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Shaft runout inspection and bearing replacement to prevent casing friction.",
      "Replacement of static housing O-rings and dynamic oil shaft seals.",
      "Clearing and testing suction lines to prevent pump starvation and cavitation.",
      "Recording casing temperature and oil moisture content under normal operations."
    ],
    faqs: [
      {
        q: "How can regular maintenance prevent pump cavitation?",
        a: "Cavitation occurs when suction lines or filters are clogged, creating a vacuum that forms imploding air bubbles. Routine cleaning and filter changes keep flow lines clear."
      },
      {
        q: "What is the typical lifespan of industrial pump bearings?",
        a: "Under proper filtration and pressure bounds, standard bearings last 5,000 to 8,000 hours. Replacing them preventatively avoids catastrophic shaft lockups."
      },
      {
        q: "Do you offer maintenance plans for mobile machinery pumps?",
        a: "Yes, we offer custom service contracts for earthmovers, cement mixers, and industrial presses across Hosur and Krishnagiri."
      }
    ]
  },
  {
    id: "fluid-pump-service",
    category: "pump",
    title: "Fluid Pump Service",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpFluidServiceImg,
    metaTitle: "Fluid Transfer & Power Pump Servicing Shoolagiri | RVS",
    metaDescription: "Professional fluid pump service. We service gear, vane, and centrifugal power pumps, ensuring optimal volumetric efficiency and seal integrity.",
    keywords: "fluid pump service Shoolagiri, industrial fluid pump repair, vane pump service Hosur, gear pump maintenance Krishnagiri",
    description: "Fluid Pump Service is our specialized pathway for fluid transfer, low-pressure circulation, and hydraulic power pumps. Gear and vane pumps can lose volumetric efficiency due to widening side clearances or localized cavitation. Our technicians rebuild worn gear chambers, lap side plates, replace worn vane cartridges, and install premium dynamic seals. We ensure that transfer and power pumps run with reliable volumetric suction, minimal heat generation, and absolute sealing.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Machining and re-surfacing of worn gear pump casing faceplates.",
      "Installation of brand-new vane rotor and spring cartridges.",
      "Replacing high-temperature shaft seals with specialized Viton compounds.",
      "Volumetric testing to verify rate-of-flow matches original factory specifications."
    ],
    faqs: [
      {
        q: "Why is my fluid transfer pump losing its suction lift?",
        a: "This is usually caused by wear on side plates (widened clearance allows fluid back-slippage) or a failing shaft seal allowing air to enter the vacuum chamber."
      },
      {
        q: "Can you service high-viscosity oil pumps?",
        a: "Yes, we calibrate internal tolerances and select seal compounds designed to handle high-viscosity gear oils and specialized industrial fluids."
      },
      {
        q: "Do you stock replacement gear sets and vane cartridges?",
        a: "Yes, we stock standard gear sets, shaft assemblies, and vane cartridges for many common industrial brands for immediate replacements."
      }
    ]
  },
  {
    id: "hydraulic-power-pump-overhaul",
    category: "pump",
    title: "Hydraulic Power Pump Overhaul",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpPowerOverhaulImg,
    metaTitle: "Hydraulic Power Pump Overhaul & Rebuilds | RVS Hydraulics",
    metaDescription: "Comprehensive mechanical overhauls for large hydraulic power units and heavy pumps. We remachine housings, balance shafts, and dyno test.",
    keywords: "hydraulic power pump overhaul, heavy pump rebuilding Shoolagiri, industrial pump remachining Hosur, RVS Hydraulics",
    description: "Hydraulic Power Pump Overhaul is our complete rebuilding program for high-displacement industrial and mobile pumps. Heavy continuous use will inevitably lead to wear across multiple component interfaces. During an overhaul, the pump is completely dismantled, castings are chemically cleaned, shafts are checked for micro-cracks, and internal rotating groups are entirely renewed. We remachine housings, balance rotating masses, and rebuild the unit to restore factory-fresh flow rates and pressure capacities.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Non-destructive crack detection (magnetic particle testing) on drive shafts.",
      "Remachining of internal casing bores to fit oversized sleeve bearings.",
      "Replacing the entire cylinder block, pistons, and plate assemblies with OEM components.",
      "Dynamic load test running at max operating RPM and pressure limits."
    ],
    faqs: [
      {
        q: "When does a pump require a full overhaul instead of standard servicing?",
        a: "An overhaul is necessary if the pump has suffered catastrophic internal damage, shows severe volumetric efficiency loss (above 20%), or has run past its rated service hours."
      },
      {
        q: "How long does a full mechanical pump overhaul typically take?",
        a: "Depending on component size and parts availability, overhauls are completed within 3 to 5 business days, including dyno-test validation."
      },
      {
        q: "Do overhauled pumps carry a standard warranty?",
        a: "Yes, all our pump overhauls are backed by our comprehensive 30-day warranty covering craftsmanship and replacement parts."
      }
    ]
  },
  {
    id: "hydraulic-pump-restoration",
    category: "pump",
    title: "Hydraulic Pump Restoration & Rebuilds",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpRestorationImg,
    metaTitle: "Old Hydraulic Pump Restoration Shoolagiri | RVS Hydraulics",
    metaDescription: "Breathe new life into old, seized, or heavily worn hydraulic pumps. Precision parts fabrication, polishing, and cost-efficient OEM restorations.",
    keywords: "hydraulic pump restoration, seized pump repair Shoolagiri, old pump rebuild Hosur, custom parts fabrication",
    description: "Hydraulic Pump Restoration & Rebuilds is designed to salvage and revitalize older, rusted, or seized hydraulic pumps. Buying a brand-new high-capacity industrial pump can be extremely expensive and might involve long procurement lead times. Our restoration team specializes in stripping surface rust, honing corroded cylinder bores, building up worn surfaces via precision welding, fabricating custom internal components, and carefully fitting modern high-grade seals. We restore obsolete pumps to full operational standards.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Safe acid-bath stripping of external rust and internal oxidation.",
      "Welding metal build-ups and machining worn cast-iron casings.",
      "Precision hand-lapping of mating surfaces to ensure fluid-tight seals.",
      "Full calibration to replicate original factory flow and pressure profiles."
    ],
    faqs: [
      {
        q: "Can a completely seized pump be restored?",
        a: "Yes! In most cases, a seized pump is locked by surface corrosion or localized bearing failure. We carefully disassemble, clean, hone, and replace the locked components to restore operation."
      },
      {
        q: "Is it cost-effective to restore an older pump?",
        a: "Absolutely. Restoration generally costs only 30% to 50% of buying a new replacement pump, making it a highly cost-efficient solution, especially for obsolete machinery."
      },
      {
        q: "How do you ensure structural integrity of restored castings?",
        a: "We perform thorough dye-penetrant and pressure testing to ensure there are no micro-fractures in the restored pump casing before final assembly."
      }
    ]
  },
  {
    id: "pump-system-hydraulic-servicing",
    category: "pump",
    title: "Pump System Hydraulic Servicing",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpSystemServicingImg,
    metaTitle: "Variable Displacement Pump Servicing | Hosur & Krishnagiri",
    metaDescription: "Specialist servicing for variable displacement piston pumps & complex gear pumps. Calibrating pressure compensators for industrial systems.",
    keywords: "pump system servicing, variable displacement pump repair Hosur, compensator calibration Krishnagiri, gear pump servicing Shoolagiri",
    description: "Pump System Hydraulic Servicing focuses on variable-displacement piston pumps, complex dual-gear systems, and multi-stage pump modules. These systems utilize advanced internal controls like load-sensing compensators and horse-power limiters that require expert calibration. We calibrate compensator springs, test pilot valves, replace wear sleeves, and rebuild structural control pistons. This ensures smooth integration, steady flow response, and maximum fuel/energy efficiency.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Precision calibration of load-sensing and pressure-limiting compensators.",
      "Rebuilding internal pilot control valves and feedback linkages.",
      "Replacing high-speed rotary shaft seals and anti-friction bearings.",
      "Calibrating proportional flow controls and testing remote pressure reliefs."
    ],
    faqs: [
      {
        q: "What does load-sensing calibration do for my machine?",
        a: "Load-sensing matches pump flow and pressure exactly to the load demands. Proper calibration reduces heat buildup, saves energy, and improves control responsiveness."
      },
      {
        q: "Why is my variable displacement pump stuck at minimum stroke?",
        a: "This is usually caused by a blocked compensator orifice, a damaged pilot spring, or internal wear in the control piston that prevents the pump from stroking up."
      },
      {
        q: "Can you service multi-pump stacks?",
        a: "Yes, we can disassemble, rebuild, and align multi-stage tandem gear or piston pump assemblies, ensuring balanced performance across all stages."
      }
    ]
  },
  {
    id: "industrial-hydraulic-pump-solutions",
    category: "pump",
    title: "Industrial Hydraulic Pump Repair Solutions",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpIndustrialSolutionsImg,
    metaTitle: "Industrial Hydraulic Pump Repair Solutions | Shoolagiri & Hosur",
    metaDescription: "Swift pump repairs for manufacturing lines. Heavy-duty diagnostics, quick seal replacement, and dyno verification to eliminate factory downtime.",
    keywords: "industrial pump solutions, factory pump repair Hosur, manufacturing pump service Shoolagiri, hydraulic pump diagnostics",
    description: "Industrial Hydraulic Pump Repair Solutions provides professional, high-priority repair services tailored specifically for manufacturing and production facilities. Factory downtime is incredibly expensive, requiring swift and reliable engineering responses. We offer rapid component pickup, immediate diagnostics, high-speed seal rebuilding, and 100% dyno-tested performance verifications. Our solutions keep heavy industrial molding machines, sheet metal presses, and automated assembly lines running smoothly.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Priority express diagnostic testing upon component arrival.",
      "Replacing dynamic seals with high-durability polymer seal rings.",
      "Checking housing alignment and flatness tolerances on precision granite surface tables.",
      "Dynamically graphing pressure, flow rate, and temperature under heavy loads."
    ],
    faqs: [
      {
        q: "How quickly can you repair a pump from a downed factory line?",
        a: "We offer an Express Diagnostic & Repair service, aiming to complete critical manufacturing pump rebuilds within 24 to 36 hours when components are in stock."
      },
      {
        q: "Do you use high-spec seals to withstand 24/7 continuous operation?",
        a: "Yes, we install high-performance Viton and fluorocarbon seals designed for high temperature and chemical resistance in continuous manufacturing environments."
      },
      {
        q: "Can you help extract and reinstall heavy pumps on-site?",
        a: "Yes, our field technicians can visit your facility in Shoolagiri or Hosur to assist with safe pump isolation, extraction, and final reinstallation."
      }
    ]
  },
  {
    id: "hydraulic-pump-repair-services",
    category: "pump",
    title: "Hydraulic Pump Repair & Services",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpRepairServicesImg,
    metaTitle: "Hydraulic Pump Repair & Reconditioning | Shoolagiri, Hosur",
    metaDescription: "Core pump repair services covering gear, vane, and piston pumps. Honest assessments, transparent pricing, and fast turnaround for mobile and ag pumps.",
    keywords: "hydraulic pump repair Shoolagiri, pump reconditioning Hosur, agricultural pump repair, mobile pump service Krishnagiri",
    description: "Hydraulic Pump Repair & Services represents our core pump servicing capabilities. We specialize in providing transparent, cost-efficient, and reliable repairs for gear, vane, and piston pumps used in agricultural, construction, and mobile machinery. From rebuilding gear chambers and replacing bearing sleeves to installing seal kits and balancing drive shafts, our team delivers high-quality craftsmanship, helping you extend the service life of your machinery.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Honing pump casing walls and balancing shaft assemblies.",
      "Replacing worn bronze thrust plates and wear plates to restore clearances.",
      "Installing premium double-lip shaft seals to prevent external leakage.",
      "Dynamic flow testing to verify operational volumetric holding capacity."
    ],
    faqs: [
      {
        q: "What is the typical cost comparison between pump repair and replacement?",
        a: "Rebuilding a worn pump typically costs 30% to 50% of the price of a brand-new unit, making professional reconditioning a highly economical choice."
      },
      {
        q: "What causes a gear pump to lose volume?",
        a: "Gear pumps lose volumetric efficiency when internal clearances widen due to wear on the gear teeth, housing bore, or bronze side plates, letting oil slip backwards."
      },
      {
        q: "Do you service pumps from agricultural tractors?",
        a: "Yes, we service pumps from John Deere, Mahindra, Kubota, and all other major agricultural tractors and loaders."
      }
    ]
  },
  {
    id: "industrial-hydraulic-pump-repair",
    category: "pump",
    title: "Industrial Hydraulic Pump Repair",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpIndustrialRepairImg,
    metaTitle: "Large Industrial Hydraulic Pump Repair | Hosur & Krishnagiri",
    metaDescription: "Specialist repair of high-tonnage industrial hydraulic pumps. Massive torque tools, heavy-duty handling, and dyno-testing of continuous-flow pumps.",
    keywords: "industrial hydraulic pump repair Hosur, high tonnage pump rebuild Krishnagiri, heavy continuous flow pump service",
    description: "Industrial Hydraulic Pump Repair is our dedicated servicing program for large-scale, high-tonnage industrial hydraulic pumps. Rebuilding these massive components requires specialized heavy handling equipment, heavy-duty hydraulic pullers, and high-torque assembly tools. We dismantle massive pumps, inspect structural casings, remachining shaft interfaces, replace high-load bearings, and perform complete dynamic testing to ensure safe operation at extreme system pressures.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Heavy assembly handling and thorough chemical wash cleaning.",
      "Ultrasonic testing of cast iron casing structures to check for hairline fractures.",
      "Installing heavy-duty, double-row tapered roller shaft bearings.",
      "Simulated continuous-flow dynamic dyno testing up to 400 Bar."
    ],
    faqs: [
      {
        q: "How do you check for micro-cracks in large cast pump housings?",
        a: "We clean the housing completely and use high-sensitivity dye penetrants or magnetic particle inspections to reveal any micro-cracks under UV light."
      },
      {
        q: "Can you fabricate custom heavy shaft sleeves?",
        a: "Yes, we can machine high-tensile steel shaft sleeves on our heavy lathe systems to restore worn seal pathways on large drive shafts."
      },
      {
        q: "Do you offer transport support for massive industrial pumps?",
        a: "Yes, we coordinate transport logistics for high-tonnage industrial pump assemblies across manufacturing hubs in Krishnagiri and Hosur."
      }
    ]
  },
  {
    id: "hydraulic-pump-maintenance",
    category: "pump",
    title: "Hydraulic Pump Maintenance",
    type: "Hydraulic Pump Repair",
    duration: "Varies By Complexity",
    warranty: "30 Days Post-Repair",
    image: pumpMaintenanceImg,
    metaTitle: "Industrial Hydraulic Pump Maintenance Shoolagiri | RVS",
    metaDescription: "Professional hydraulic pump maintenance in Shoolagiri. Fluid health checks, vacuum leak tests, and bearing wear logging to extend pump lifespan.",
    keywords: "hydraulic pump maintenance Shoolagiri, pump fluid analysis Hosur, vacuum leak testing, preventative pump care",
    description: "Hydraulic Pump Maintenance is our systematic preventative servicing program designed to maximize the life of your hydraulic pumps. We inspect fluid cleanliness, replace pressure filters, check suction lines for vacuum leaks, inspect shaft alignments, and log operating parameters to track wear. By catching minor issues early, we help you avoid sudden mechanical failures, ensure smooth system pressure, and extend the lifespan of your hydraulic machinery.",
    customFields: [
      { label: "Replacement Parts", value: "OEM Quality Parts" }
    ],
    technicalDetails: [
      "Checking fluid quality and testing ISO particulate contamination counts.",
      "Checking drive shaft alignment using dual-indicator laser alignments.",
      "Replacing case drain filters and pressure filters to maintain clean lines.",
      "Logging pressure holding limits and checking housing temperature zones."
    ],
    faqs: [
      {
        q: "What causes dynamic shaft seal leakage on a hydraulic pump?",
        a: "Dynamic shaft seal leaks are typically caused by worn drive shaft bearings causing wobble, high casing pressure due to a blocked case drain filter, or normal seal wear."
      },
      {
        q: "How does oil moisture affect a pump's health?",
        a: "Water in hydraulic oil causes rust, speeds up oil breakdown, reduces lubricating power, and leads to destructive vapor bubble implosions (cavitation) inside the pump."
      },
      {
        q: "Do you provide oil testing kits for in-house checking?",
        a: "Yes, we can perform on-site fluid sampling and provide detailed ISO-grade oil contamination analysis reports for your machinery."
      }
    ]
  }
];
