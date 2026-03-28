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
  "Health & Fitness",
  "Fintech",
  "Productivity",
  "Education",
  "Social",
  "E-commerce",
  "Travel",
  "Entertainment",
  "Utilities",
  "Food & Delivery",
];

export const portfolioApps: PortfolioApp[] = [
  // Health & Fitness (5)
  { id: 1, name: "VitalTrack", category: "Health & Fitness", description: "AI-powered health monitoring with real-time vitals tracking and personalized fitness plans.", features: ["Activity Rings & Goals", "Heart Rate Monitoring", "Sleep Analysis", "Nutrition Tracking"], image: mockups[0], version: "v2.4.1", size: "14.2MB", rating: "4.9★" },
  { id: 2, name: "FitPulse", category: "Health & Fitness", description: "Personal trainer in your pocket with adaptive workout plans and progress analytics.", features: ["Custom Workouts", "Video Tutorials", "Progress Photos", "Rep Counter"], image: mockups[1], version: "v3.0.2", size: "22.1MB", rating: "4.8★" },
  { id: 3, name: "MindCalm", category: "Health & Fitness", description: "Guided meditation and breathwork app for stress relief and mental clarity.", features: ["Guided Sessions", "Breathing Exercises", "Sleep Stories", "Mood Journal"], image: mockups[2], version: "v1.9.0", size: "18.4MB", rating: "4.7★" },
  { id: 4, name: "NutriScan", category: "Health & Fitness", description: "Scan barcodes to instantly get nutritional information and track your daily intake.", features: ["Barcode Scanner", "Meal Planner", "Calorie Tracker", "Allergy Alerts"], image: mockups[0], version: "v2.1.3", size: "16.8MB", rating: "4.6★" },
  { id: 5, name: "YogaFlow", category: "Health & Fitness", description: "Yoga sessions for every level with pose detection and personalized routines.", features: ["Pose Detection", "Custom Routines", "Progress Tracking", "Live Classes"], image: mockups[1], version: "v1.5.7", size: "25.3MB", rating: "4.8★" },

  // Fintech (5)
  { id: 6, name: "FinFlow", category: "Fintech", description: "Modern banking reimagined with instant transfers, smart budgeting, and investment insights.", features: ["Smart Budgeting", "Instant Transfers", "Investment Portfolio", "Bill Management"], image: mockups[1], version: "v3.1.0", size: "18.6MB", rating: "4.8★" },
  { id: 7, name: "CryptoVault", category: "Fintech", description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.", features: ["Multi-Chain Support", "DeFi Staking", "Price Alerts", "Hardware Wallet Sync"], image: mockups[2], version: "v2.7.4", size: "21.0MB", rating: "4.5★" },
  { id: 8, name: "TaxEasy", category: "Fintech", description: "Simplify tax filing with automatic categorization and real-time refund estimates.", features: ["Auto-Categorization", "Receipt Scanner", "Refund Estimator", "E-Filing"], image: mockups[0], version: "v4.0.1", size: "15.2MB", rating: "4.7★" },
  { id: 9, name: "SplitWise Pro", category: "Fintech", description: "Split bills effortlessly with friends and track shared expenses in real time.", features: ["Bill Splitting", "Group Expenses", "Payment Reminders", "Expense History"], image: mockups[1], version: "v2.3.8", size: "11.4MB", rating: "4.6★" },
  { id: 10, name: "WealthPilot", category: "Fintech", description: "Robo-advisor platform with personalized portfolio management and retirement planning.", features: ["Robo-Advisor", "Retirement Planning", "Risk Assessment", "Auto-Rebalance"], image: mockups[2], version: "v1.8.2", size: "19.7MB", rating: "4.9★" },

  // Productivity (5)
  { id: 11, name: "TaskForge", category: "Productivity", description: "Enterprise task management with kanban boards, calendar sync, and team collaboration.", features: ["Kanban Boards", "Calendar Integration", "Team Workspaces", "Automation Rules"], image: mockups[2], version: "v1.8.3", size: "12.1MB", rating: "4.7★" },
  { id: 12, name: "NoteVault", category: "Productivity", description: "End-to-end encrypted note-taking with rich text, code blocks, and file attachments.", features: ["E2E Encryption", "Rich Text Editor", "Code Blocks", "File Attachments"], image: mockups[0], version: "v3.2.1", size: "14.9MB", rating: "4.8★" },
  { id: 13, name: "FocusZone", category: "Productivity", description: "Pomodoro timer with distraction blocking and productivity analytics dashboard.", features: ["Pomodoro Timer", "App Blocking", "Focus Stats", "Custom Intervals"], image: mockups[1], version: "v2.0.5", size: "8.3MB", rating: "4.6★" },
  { id: 14, name: "DocuSign Lite", category: "Productivity", description: "Digital document signing with templates, audit trails, and team workflows.", features: ["E-Signatures", "Template Library", "Audit Trail", "Team Workflows"], image: mockups[2], version: "v1.4.9", size: "16.5MB", rating: "4.5★" },
  { id: 15, name: "HabitLoop", category: "Productivity", description: "Build better habits with streak tracking, reminders, and motivational insights.", features: ["Streak Tracking", "Smart Reminders", "Habit Analytics", "Community Challenges"], image: mockups[0], version: "v2.6.0", size: "10.2MB", rating: "4.7★" },

  // Education (5)
  { id: 16, name: "LearnLab", category: "Education", description: "Interactive learning platform with AI tutoring, quizzes, and progress tracking.", features: ["AI Tutor", "Interactive Quizzes", "Progress Reports", "Offline Mode"], image: mockups[1], version: "v2.9.1", size: "28.4MB", rating: "4.8★" },
  { id: 17, name: "CodeCraft", category: "Education", description: "Learn programming through hands-on coding challenges and real-world projects.", features: ["Code Playground", "Guided Projects", "Peer Reviews", "Certifications"], image: mockups[2], version: "v3.5.0", size: "32.1MB", rating: "4.9★" },
  { id: 18, name: "LinguaFlow", category: "Education", description: "Master new languages with spaced repetition, speech recognition, and native conversations.", features: ["Spaced Repetition", "Speech Recognition", "Native Speakers", "Daily Streaks"], image: mockups[0], version: "v4.1.2", size: "24.6MB", rating: "4.7★" },
  { id: 19, name: "MathGenius", category: "Education", description: "Step-by-step math solver with handwriting recognition and concept explanations.", features: ["Handwriting Input", "Step-by-Step Solutions", "Concept Videos", "Practice Problems"], image: mockups[1], version: "v2.2.8", size: "19.8MB", rating: "4.6★" },
  { id: 20, name: "ScienceLab VR", category: "Education", description: "Virtual reality science experiments with realistic simulations and guided labs.", features: ["VR Experiments", "3D Models", "Lab Reports", "Teacher Dashboard"], image: mockups[2], version: "v1.3.4", size: "45.2MB", rating: "4.8★" },

  // Social (5)
  { id: 21, name: "CircleUp", category: "Social", description: "Private social network for close friends with shared journals and memory timelines.", features: ["Private Circles", "Shared Journals", "Memory Timeline", "Photo Albums"], image: mockups[0], version: "v2.1.6", size: "20.3MB", rating: "4.5★" },
  { id: 22, name: "EventHive", category: "Social", description: "Discover and organize local events with ticketing, RSVPs, and group chats.", features: ["Event Discovery", "Ticketing", "Group Chat", "RSVP Management"], image: mockups[1], version: "v3.0.9", size: "17.8MB", rating: "4.7★" },
  { id: 23, name: "PetPals", category: "Social", description: "Social network for pet owners with playdates, vet finder, and pet profiles.", features: ["Pet Profiles", "Playdate Finder", "Vet Directory", "Photo Sharing"], image: mockups[2], version: "v1.7.3", size: "15.1MB", rating: "4.8★" },
  { id: 24, name: "BookClub", category: "Social", description: "Connect with readers worldwide through book clubs, reviews, and reading challenges.", features: ["Book Clubs", "Reading Lists", "Reviews & Ratings", "Reading Challenges"], image: mockups[0], version: "v2.4.5", size: "13.6MB", rating: "4.6★" },
  { id: 25, name: "VolunteerHub", category: "Social", description: "Find volunteer opportunities, track hours, and connect with nonprofits in your area.", features: ["Opportunity Finder", "Hour Tracking", "Nonprofit Directory", "Impact Reports"], image: mockups[1], version: "v1.9.7", size: "12.4MB", rating: "4.7★" },

  // E-commerce (5)
  { id: 26, name: "ShopSmart", category: "E-commerce", description: "AI-powered shopping assistant with price comparison and deal alerts across stores.", features: ["Price Comparison", "Deal Alerts", "Wishlist Sync", "Cashback Rewards"], image: mockups[2], version: "v3.3.1", size: "16.9MB", rating: "4.8★" },
  { id: 27, name: "ArtisanMarket", category: "E-commerce", description: "Marketplace for handcrafted goods with seller tools and secure payment processing.", features: ["Seller Dashboard", "Custom Storefronts", "Secure Payments", "Review System"], image: mockups[0], version: "v2.0.4", size: "21.5MB", rating: "4.6★" },
  { id: 28, name: "ThriftFlip", category: "E-commerce", description: "Buy and sell second-hand fashion with AR try-on and sustainability scoring.", features: ["AR Try-On", "Sustainability Score", "Size Matching", "Seller Ratings"], image: mockups[1], version: "v1.6.8", size: "26.7MB", rating: "4.7★" },
  { id: 29, name: "GroceryGo", category: "E-commerce", description: "Same-day grocery delivery with smart lists, recipe suggestions, and price tracking.", features: ["Smart Lists", "Recipe Suggestions", "Price Tracking", "Same-Day Delivery"], image: mockups[2], version: "v4.2.0", size: "14.3MB", rating: "4.9★" },
  { id: 30, name: "DropVault", category: "E-commerce", description: "Dropshipping management tool with supplier integration and automated order fulfillment.", features: ["Supplier Integration", "Auto-Fulfillment", "Profit Analytics", "Inventory Sync"], image: mockups[0], version: "v2.8.5", size: "18.1MB", rating: "4.5★" },

  // Travel (5)
  { id: 31, name: "WanderMap", category: "Travel", description: "Plan trips with interactive maps, offline guides, and local recommendations.", features: ["Interactive Maps", "Offline Guides", "Local Tips", "Trip Planner"], image: mockups[1], version: "v3.4.2", size: "35.8MB", rating: "4.8★" },
  { id: 32, name: "FlightDeal", category: "Travel", description: "Find the cheapest flights with fare predictions and mistake fare alerts.", features: ["Fare Predictions", "Mistake Fares", "Price Alerts", "Flexible Dates"], image: mockups[2], version: "v2.5.6", size: "12.9MB", rating: "4.7★" },
  { id: 33, name: "StayFinder", category: "Travel", description: "Book unique accommodations from treehouses to castles with verified reviews.", features: ["Unique Stays", "Verified Reviews", "Instant Booking", "Host Chat"], image: mockups[0], version: "v1.8.1", size: "19.4MB", rating: "4.6★" },
  { id: 34, name: "PackList", category: "Travel", description: "Smart packing assistant that creates lists based on destination, weather, and trip type.", features: ["Smart Suggestions", "Weather-Based", "Shared Lists", "Checklist Templates"], image: mockups[1], version: "v2.1.0", size: "7.8MB", rating: "4.5★" },
  { id: 35, name: "TourGuide AI", category: "Travel", description: "AI-powered audio tours for cities worldwide with AR landmark recognition.", features: ["Audio Tours", "AR Landmarks", "Offline Maps", "Custom Routes"], image: mockups[2], version: "v1.4.7", size: "42.3MB", rating: "4.9★" },

  // Entertainment (5)
  { id: 36, name: "StreamSync", category: "Entertainment", description: "Watch movies and shows together remotely with synchronized playback and voice chat.", features: ["Sync Playback", "Voice Chat", "Watch Parties", "Multi-Platform"], image: mockups[0], version: "v2.7.3", size: "23.6MB", rating: "4.7★" },
  { id: 37, name: "BeatMaker", category: "Entertainment", description: "Create music on the go with a professional DAW, samples, and collaboration tools.", features: ["Beat Sequencer", "Sample Library", "Collaboration", "Export & Share"], image: mockups[1], version: "v3.1.5", size: "48.9MB", rating: "4.8★" },
  { id: 38, name: "PodcastPro", category: "Entertainment", description: "Record, edit, and publish podcasts with AI transcription and distribution tools.", features: ["Recording Studio", "AI Transcription", "Auto-Distribution", "Analytics"], image: mockups[2], version: "v2.3.0", size: "31.2MB", rating: "4.6★" },
  { id: 39, name: "GameVault", category: "Entertainment", description: "Cloud gaming library with save sync, achievements, and social leaderboards.", features: ["Cloud Gaming", "Save Sync", "Achievements", "Leaderboards"], image: mockups[0], version: "v1.9.8", size: "15.7MB", rating: "4.5★" },
  { id: 40, name: "SketchPad", category: "Entertainment", description: "Digital art studio with pressure-sensitive brushes, layers, and animation tools.", features: ["Pressure Brushes", "Layer System", "Animation Tools", "Export Formats"], image: mockups[1], version: "v4.0.2", size: "27.4MB", rating: "4.9★" },

  // Utilities (5)
  { id: 41, name: "VaultPass", category: "Utilities", description: "Zero-knowledge password manager with biometric unlock and breach monitoring.", features: ["Zero-Knowledge", "Biometric Unlock", "Breach Alerts", "Auto-Fill"], image: mockups[2], version: "v3.6.1", size: "9.8MB", rating: "4.9★" },
  { id: 42, name: "CleanSweep", category: "Utilities", description: "Phone storage optimizer that finds duplicates, compresses media, and clears cache.", features: ["Duplicate Finder", "Media Compression", "Cache Cleaner", "Storage Maps"], image: mockups[0], version: "v2.4.3", size: "6.5MB", rating: "4.6★" },
  { id: 43, name: "ScanDoc", category: "Utilities", description: "High-quality document scanner with OCR, PDF creation, and cloud sync.", features: ["HD Scanning", "OCR Text", "PDF Export", "Cloud Sync"], image: mockups[1], version: "v1.7.9", size: "11.3MB", rating: "4.7★" },
  { id: 44, name: "WeatherNow", category: "Utilities", description: "Hyper-local weather forecasts with radar maps and severe weather alerts.", features: ["Hyper-Local", "Radar Maps", "Severe Alerts", "Hourly Forecast"], image: mockups[2], version: "v5.0.0", size: "13.1MB", rating: "4.8★" },
  { id: 45, name: "QRCraft", category: "Utilities", description: "Create and scan QR codes with custom designs, analytics, and batch generation.", features: ["Custom QR Designs", "Scan History", "Analytics", "Batch Generation"], image: mockups[0], version: "v2.2.4", size: "8.7MB", rating: "4.5★" },

  // Food & Delivery (5)
  { id: 46, name: "FeastFinder", category: "Food & Delivery", description: "Discover restaurants with AR menu preview, dietary filters, and table reservations.", features: ["AR Menu Preview", "Dietary Filters", "Table Booking", "Review Photos"], image: mockups[1], version: "v3.8.1", size: "22.6MB", rating: "4.8★" },
  { id: 47, name: "MealPrep Pro", category: "Food & Delivery", description: "Weekly meal planning with grocery lists, nutritional info, and cooking timers.", features: ["Meal Plans", "Grocery Lists", "Nutrition Info", "Cooking Timers"], image: mockups[2], version: "v2.5.3", size: "17.4MB", rating: "4.7★" },
  { id: 48, name: "QuickBite", category: "Food & Delivery", description: "Ultra-fast food delivery under 15 minutes with real-time driver tracking.", features: ["15-Min Delivery", "Live Tracking", "Group Orders", "Scheduled Orders"], image: mockups[0], version: "v4.3.0", size: "14.8MB", rating: "4.6★" },
  { id: 49, name: "RecipeAI", category: "Food & Delivery", description: "Generate recipes from ingredients you have with step-by-step video instructions.", features: ["Ingredient Scan", "Video Steps", "Serving Adjuster", "Save Favorites"], image: mockups[1], version: "v1.6.2", size: "20.9MB", rating: "4.9★" },
  { id: 50, name: "CaféHop", category: "Food & Delivery", description: "Find the best cafés nearby with Wi-Fi ratings, ambiance scores, and loyalty rewards.", features: ["Café Finder", "Wi-Fi Ratings", "Ambiance Scores", "Loyalty Cards"], image: mockups[2], version: "v2.0.7", size: "11.6MB", rating: "4.7★" },
];
