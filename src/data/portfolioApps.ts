import mockupApp1 from "@/assets/mockup-app1.png";
import mockupApp2 from "@/assets/mockup-app2.png";
import mockupApp3 from "@/assets/mockup-app3.png";

const mockups = [mockupApp1, mockupApp2, mockupApp3];

export interface PortfolioApp {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  version: string;
  size: string;
  rating: string;
}

export const categories = [
  "All",
  "Astrology",
  "Numerology",
  "Lal Kitab",
  "Living Space",
  "Insights",
  "Energy Scan",
  "Climate",
  "Religious",
  "Utilities",
  "Miscellaneous",
];

export const portfolioApps: PortfolioApp[] = [
  // Astrology (5)
  { id: 1, name: "Cosmic Compass", category: "Astrology", description: "Personalized astrology navigator that translates your birth chart into daily wellbeing actions.", features: ["Birth-chart wellbeing insights", "Daily astro-guided routines", "Planetary transit alerts", "Personalized wellbeing tips"], image: mockups[0], version: "v2.4.1", size: "14.2MB", rating: "4.9★" },
  { id: 2, name: "Vedic Insights", category: "Astrology", description: "Vedic astrology readings focused on life purpose, timing, and practical remedies.", features: ["Deep Vedic chart analysis", "Timing & muhurtam tools", "Daily remedial suggestions", "Career & relationship guidance"], image: mockups[1], version: "v3.0.2", size: "22.1MB", rating: "4.8★" },
  { id: 3, name: "Cosmic Report", category: "Astrology", description: "Concise, AI-generated natal and transit reports you can share with friends or advisors.", features: ["One-tap natal summary", "Transit impact overview", "Shareable PDF reports", "Actionable weekly guidance"], image: mockups[2], version: "v1.9.0", size: "18.4MB", rating: "4.7★" },
  { id: 4, name: "Veda Tips", category: "Astrology", description: "Short daily tips and rituals based on your horoscope to improve health and focus.", features: ["Morning ritual suggestions", "Food & lifestyle tips", "Short remedial exercises", "Daily luck indicators"], image: mockups[0], version: "v2.1.3", size: "16.8MB", rating: "4.6★" },
  { id: 5, name: "Jyotish Darshan", category: "Astrology", description: "Visual Jyotish insights with charts, yogas and narrated explanations for beginners.", features: ["Interactive birth chart viewer", "Visual yoga highlights", "Narrated chart lessons", "Live Q&A sessions"], image: mockups[1], version: "v1.5.7", size: "25.3MB", rating: "4.8★" },

  // Numerology (5)
  { id: 6, name: "Numerology", category: "Numerology", description: "Core numerology calculator that derives life path, destiny and yearly cycles for decisions.", features: ["Life-path & destiny numbers", "Yearly/monthly cycle forecasts", "Compatibility checks", "Practical decision nudges"], image: mockups[1], version: "v3.1.0", size: "18.6MB", rating: "4.8★" },
  { id: 7, name: "Luck Point", category: "Numerology", description: "Quick luck and timing indicators using numerology to plan launches and important days.", features: ["Daily luck score", "Best-date finder", "Event-timing suggestions", "Personal lucky numbers"], image: mockups[2], version: "v2.7.4", size: "21.0MB", rating: "4.5★" },
  { id: 8, name: "Compatibility", category: "Numerology", description: "Compatibility reports blending names and numbers to reveal relationship dynamics.", features: ["Name-number matching", "Relationship compatibility score", "Strengths & friction points", "Practical compatibility tips"], image: mockups[0], version: "v4.0.1", size: "15.2MB", rating: "4.7★" },
  { id: 9, name: "Cheiro Calculator", category: "Numerology", description: "Classic Cheiro-style numerology calculator for personal forecasts and name analysis.", features: ["Traditional Cheiro methods", "Name & birth-date analysis", "Career & wealth indicators", "Printable reports"], image: mockups[1], version: "v2.3.8", size: "11.4MB", rating: "4.6★" },
  { id: 10, name: "MAgic Numbers", category: "Numerology", description: "Actionable number sets that surface growth opportunities and cautionary periods.", features: ["Personal power numbers", "Monthly opportunity alerts", "Number-based goals", "Quick ritual suggestions"], image: mockups[2], version: "v1.8.2", size: "19.7MB", rating: "4.9★" },

  // Lal Kitab (5)
  { id: 11, name: "Lal Kitab", category: "Lal Kitab", description: "Comprehensive Lal Kitab readings with remedies, house-wise advice and daily remedies.", features: ["House-level remedies", "Daily actionable remedies", "Remedy tracker", "Family & home guidance"], image: mockups[2], version: "v1.8.3", size: "12.1MB", rating: "4.7★" },
  { id: 12, name: "LK Tips", category: "Lal Kitab", description: "Short Lal Kitab tips and fixes you can apply at home for immediate benefit.", features: ["Quick household remedies", "Dos & don’ts list", "Simple ritual checklist", "Progress notes"], image: mockups[0], version: "v3.2.1", size: "14.9MB", rating: "4.8★" },
  { id: 13, name: "Lal Kitab Kundali", category: "Lal Kitab", description: "Generate Lal Kitab-style kundali charts and targeted remedial plans for every house.", features: ["Lal Kitab kundali generator", "House-specific remedies", "Timeline of effects", "Remedy scheduling"], image: mockups[1], version: "v2.0.5", size: "8.3MB", rating: "4.6★" },
  { id: 14, name: "Lal Kitab Insight", category: "Lal Kitab", description: "In-depth insights from Lal Kitab texts translated into modern, actionable steps.", features: ["Text-to-remedy translation", "Contextual explanations", "Personalized action plan", "Historical references"], image: mockups[2], version: "v1.4.9", size: "16.5MB", rating: "4.5★" },
  { id: 15, name: "Lal Kitab Guide", category: "Lal Kitab", description: "Guided Lal Kitab routines and checklists to implement remedies consistently and safely.", features: ["Step-by-step remedy guide", "Checklist & reminders", "Safety notes", "Progress tracking"], image: mockups[0], version: "v2.6.0", size: "10.2MB", rating: "4.7★" },

  // Living Space (5)
  { id: 16, name: "Cartography", category: "Living Space", description: "Spatial mapping tools that visualize home and workspace energy to optimize layout.", features: ["Room energy maps", "Layout improvement suggestions", "Sunlight & airflow tips", "Cost-effective changes"], image: mockups[1], version: "v2.9.1", size: "28.4MB", rating: "4.8★" },
  { id: 17, name: "Flying Stars", category: "Living Space", description: "Flying Stars analysis and remedies to harmonize your home across time cycles.", features: ["Annual flying stars map", "Room-by-room advice", "Remedy recommendations", "Trend forecasts"], image: mockups[2], version: "v3.5.0", size: "32.1MB", rating: "4.9★" },
  { id: 18, name: "Kirlian Vision", category: "Living Space", description: "Visualize subtle energy around objects and people and get tips to balance it.", features: ["Aura visualization tools", "Energy imbalance alerts", "Balancing suggestions", "Before/after comparisons"], image: mockups[0], version: "v4.1.2", size: "24.6MB", rating: "4.7★" },
  { id: 19, name: "Vastu Flow", category: "Living Space", description: "Practical Vastu recommendations for rooms, entrances and furniture placement.", features: ["Vastu room analysis", "Placement suggestions", "Element balancing tips", "Quick improvement checklist"], image: mockups[1], version: "v2.2.8", size: "19.8MB", rating: "4.6★" },
  { id: 20, name: "Star Harmony", category: "Living Space", description: "Combine star charts and home layout to suggest long-term harmony improvements.", features: ["Chart-to-layout recommendations", "Harmony score tracker", "Seasonal adjustments", "Professional report export"], image: mockups[2], version: "v1.3.4", size: "45.2MB", rating: "4.8★" },

  // Insights (5)
  { id: 21, name: "Tarot Luck", category: "Insights", description: "Tarot-based micro-readings that give daily guidance and short-term forecasts.", features: ["Daily tarot draws", "Card meaning summaries", "Actionable advice", "Shareable readings"], image: mockups[0], version: "v2.1.6", size: "20.3MB", rating: "4.5★" },
  { id: 22, name: "Cosmic Insight", category: "Insights", description: "Curated cosmic insights combining astrology, numerology and practical tips.", features: ["Multi-system synthesis", "Daily insight briefs", "Topic-specific deep dives", "Save & share notes"], image: mockups[1], version: "v3.0.9", size: "17.8MB", rating: "4.7★" },
  { id: 23, name: "Insight Bloom", category: "Insights", description: "Personal insight engine that surfaces growth opportunities from your data.", features: ["Personal growth prompts", "Trend detection", "Weekly insight digest", "Action plan templates"], image: mockups[2], version: "v1.7.3", size: "15.1MB", rating: "4.8★" },
  { id: 24, name: "Face Reading", category: "Insights", description: "Face-reading summaries that translate visible cues into personality and health hints.", features: ["Feature-based trait analysis", "Health signal highlights", "Quick reading snapshots", "Privacy-first processing"], image: mockups[0], version: "v2.4.5", size: "13.6MB", rating: "4.6★" },
  { id: 25, name: "Lucky Gemstone", category: "Insights", description: "Gemstone recommendations based on your chart and practical usage guidance.", features: ["Personalized gem matches", "Wearing & care tips", "Safety & contraindications", "Where to source guidance"], image: mockups[1], version: "v1.9.7", size: "12.4MB", rating: "4.7★" },

  // Energy Scan (5)
  { id: 26, name: "Shiva Nadi", category: "Energy Scan", description: "Subtle-energy scanner that maps energetic nodes and suggests clearing rituals.", features: ["Energy hotspot detection", "Clearing ritual suggestions", "Session history", "Before/after metrics"], image: mockups[2], version: "v3.3.1", size: "16.9MB", rating: "4.8★" },
  { id: 27, name: "EMF Scanner", category: "Energy Scan", description: "Detect EMF sources nearby and get mitigation tips for healthy spaces.", features: ["Real-time EMF meter", "Source identification", "Mitigation recommendations", "Log & export readings"], image: mockups[0], version: "v2.0.4", size: "21.5MB", rating: "4.6★" },
  { id: 28, name: "Aura Scanner", category: "Energy Scan", description: "Visual aura capture and analysis to help identify emotional and energetic states.", features: ["Aura color capture", "State interpretation", "Energy balance tips", "Progress tracking"], image: mockups[1], version: "v1.6.8", size: "26.7MB", rating: "4.7★" },
  { id: 29, name: "Ambient Energy Meter", category: "Energy Scan", description: "Measures ambient energy (noise, fields, EMF) and recommends environment tweaks.", features: ["Ambient sensor fusion", "Comfort scoring", "Improvement suggestions", "Historical trends"], image: mockups[2], version: "v4.2.0", size: "14.3MB", rating: "4.9★" },
  { id: 30, name: "Face Fortune AI", category: "Energy Scan", description: "AI face analysis combined with energy metrics to offer situational insights.", features: ["Face-energy correlation", "Momentary fortune indicators", "Personalized nudges", "Privacy-safe AI"], image: mockups[0], version: "v2.8.5", size: "18.1MB", rating: "4.5★" },

  // Climate (5)
  { id: 31, name: "Air Quality View", category: "Climate", description: "Hyper-local air-quality maps and health advisories for your routes and home.", features: ["Live AQI maps", "Health advisory alerts", "Route cleaner suggestions", "Indoor/outdoor comparisons"], image: mockups[1], version: "v3.4.2", size: "35.8MB", rating: "4.8★" },
  { id: 32, name: "Earth Resonance Scanner", category: "Climate", description: "Detect ground and environmental resonances that can affect wellbeing and structures.", features: ["Ground resonance mapping", "Stress point alerts", "Remediation tips", "Exportable reports"], image: mockups[2], version: "v2.5.6", size: "12.9MB", rating: "4.7★" },
  { id: 33, name: "Geo Stress", category: "Climate", description: "Identify geo-stress zones for property planning and personal health precautions.", features: ["Geo-stress heatmaps", "Site safety recommendations", "Historical data overlay", "Alert subscriptions"], image: mockups[0], version: "v1.8.1", size: "19.4MB", rating: "4.6★" },
  { id: 34, name: "City Air Quality", category: "Climate", description: "City-level air monitoring with neighborhood comparisons and exposure estimators.", features: ["Neighborhood AQ comparisons", "Exposure calculators", "Trend alerts", "Public data integrations"], image: mockups[1], version: "v2.1.0", size: "7.8MB", rating: "4.5★" },
  { id: 35, name: "Air Count", category: "Climate", description: "Simple air-particle counter and dashboard for monitoring indoor environments.", features: ["Particle count sensor", "Dashboard & thresholds", "Alert notifications", "Historical logs"], image: mockups[2], version: "v1.4.7", size: "42.3MB", rating: "4.9★" },

  // Religious (5)
  { id: 36, name: "Shiva Shakti", category: "Religious", description: "Daily spiritual practices, chants and guided sessions tailored to traditions.", features: ["Guided chants & mantras", "Daily practice plans", "Audio & text rituals", "Progress tracking"], image: mockups[0], version: "v2.7.3", size: "23.6MB", rating: "4.7★" },
  { id: 37, name: "Jyoti Tales", category: "Religious", description: "Story-driven devotional audio and narrated cultural tales for reflection and learning.", features: ["Curated devotional stories", "Narrated sessions", "Offline listening", "Thematic playlists"], image: mockups[1], version: "v3.1.5", size: "48.9MB", rating: "4.8★" },
  { id: 38, name: "Rituals", category: "Religious", description: "Step-by-step ritual guides with materials lists and timings for meaningful observance.", features: ["Ritual checklists", "Timing & muhurat guidance", "Material preparation lists", "Remembrance alerts"], image: mockups[2], version: "v2.3.0", size: "31.2MB", rating: "4.6★" },
  { id: 39, name: "Divine Darshan", category: "Religious", description: "Live darshan schedules, temple info, and virtual viewing options for devotees.", features: ["Live darshan streams", "Temple schedules", "Pilgrimage planning tools", "Community reviews"], image: mockups[0], version: "v1.9.8", size: "15.7MB", rating: "4.5★" },
  { id: 40, name: "Divinity", category: "Religious", description: "Creative devotional toolkit for music, art and reflective practice.", features: ["Devotional music studio", "Reflective journaling", "Art-guided practices", "Community showcases"], image: mockups[1], version: "v4.0.2", size: "27.4MB", rating: "4.9★" },

  // Utilities (5)
  { id: 41, name: "Smart Paper Creator", category: "Utilities", description: "Generate professional documents, templates and printable papers with ease.", features: ["Template library", "Auto-formatting tools", "Export to PDF/Print", "Collaboration links"], image: mockups[2], version: "v3.6.1", size: "9.8MB", rating: "4.9★" },
  { id: 42, name: "Invoice Craft", category: "Utilities", description: "Create, send and track invoices with customizable templates and tax support.", features: ["Custom invoice templates", "Tax & currency support", "Payment reminders", "Export & accounting sync"], image: mockups[0], version: "v2.4.3", size: "6.5MB", rating: "4.6★" },
  { id: 43, name: "Quick QR Creator", category: "Utilities", description: "Design and generate QR codes with analytics and custom branding options.", features: ["Custom QR design", "Scan analytics", "Batch generation", "Branding & logos"], image: mockups[1], version: "v1.7.9", size: "11.3MB", rating: "4.7★" },
  { id: 44, name: "Splashgen Resizer", category: "Utilities", description: "Resize and optimize images for splash screens, social and app assets quickly.", features: ["Presets for platforms", "Quality & size optimization", "Batch resizing", "Export profiles"], image: mockups[2], version: "v5.0.0", size: "13.1MB", rating: "4.8★" },
  { id: 45, name: "Pixel Magnifier", category: "Utilities", description: "Precision magnifier for pixel-level inspection and quick asset QC.", features: ["Zoom & grid overlays", "Pixel color picker", "Annotation tools", "Save & share snapshots"], image: mockups[0], version: "v2.2.4", size: "8.7MB", rating: "4.5★" },

  // Miscellaneous (5)
  { id: 46, name: "AE Connect", category: "Miscellaneous", description: "Connect professionals and enthusiasts around experiential events and meetups.", features: ["Event discovery", "RSVP & ticketing", "Host tools", "Community messaging"], image: mockups[1], version: "v3.8.1", size: "22.6MB", rating: "4.8★" },
  { id: 47, name: "Visa Predictor", category: "Miscellaneous", description: "Estimate visa outcomes and checklist steps based on destination and profile.", features: ["Outcome likelihood estimator", "Required document checklist", "Timeline planner", "Country-specific tips"], image: mockups[2], version: "v2.5.3", size: "17.4MB", rating: "4.7★" },
  { id: 48, name: "Pilgrimage Explorer", category: "Miscellaneous", description: "Plan sacred journeys with maps, rituals, packing lists and local guidance.", features: ["Route planner", "Ritual & site info", "Packing templates", "Local accommodation finder"], image: mockups[0], version: "v4.3.0", size: "14.8MB", rating: "4.6★" },
  { id: 49, name: "Mystic Atlas", category: "Miscellaneous", description: "Global atlas of sacred sites with stories, coordinates and visiting tips.", features: ["Sacred site database", "Travel tips & stories", "Offline maps", "Bookmark & share"], image: mockups[1], version: "v1.6.2", size: "20.9MB", rating: "4.9★" },
  { id: 50, name: "Peace Keeper", category: "Miscellaneous", description: "Mindful micro-practices to reduce stress and cultivate calm throughout the day.", features: ["Short guided practices", "Breathing exercises", "Focus reminders", "Daily calm streaks"], image: mockups[2], version: "v2.0.7", size: "11.6MB", rating: "4.7★" },
];
