// Comprehensive mock data for Customer 360 Dashboard

export const customerData = {
  id: "CUST-847392",
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  accountStatus: "Active",
  customerSince: "2018-03-15",
  segment: "Premium",
  lifetimeValue: 12450,
  riskScore: 23,
  churnProbability: 15,
  nps: 8,
  profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  address: {
    street: "742 Evergreen Terrace",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    country: "USA"
  },
  billingAddress: {
    street: "742 Evergreen Terrace",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    country: "USA"
  }
};

export const accountMetrics = {
  monthlyRecurringRevenue: 189.99,
  averageMonthlyUsage: 245.50,
  outstandingBalance: 0,
  creditScore: 780,
  paymentMethod: "Auto-pay (Visa ****4532)",
  nextBillingDate: "2026-03-28",
  contractEndDate: "2027-03-15"
};

export const activeServices = [
  {
    id: "SVC-001",
    name: "Unlimited Premium Plan",
    type: "Mobile",
    status: "Active",
    monthlyCost: 85.00,
    startDate: "2018-03-15",
    features: ["Unlimited Data", "5G Access", "Mobile Hotspot 50GB", "International Calling"],
    phoneNumber: "+1 (555) 123-4567",
    device: "iPhone 15 Pro Max"
  },
  {
    id: "SVC-002",
    name: "Fiber Internet 1Gbps",
    type: "Internet",
    status: "Active",
    monthlyCost: 79.99,
    startDate: "2020-06-01",
    features: ["1000 Mbps Download", "1000 Mbps Upload", "No Data Caps", "Free Router"],
    installationAddress: "742 Evergreen Terrace"
  },
  {
    id: "SVC-003",
    name: "TV Premium Package",
    type: "TV",
    status: "Active",
    monthlyCost: 24.99,
    startDate: "2021-01-10",
    features: ["200+ Channels", "4K Streaming", "DVR 500hrs", "HBO Max Included"],
    devices: 3
  }
];

export const usageData = {
  currentMonth: {
    data: 45.2, // GB
    voice: 850, // minutes
    sms: 234, // messages
    period: "March 1-11, 2026"
  },
  monthlyHistory: [
    { month: "Sep", data: 52, voice: 920, sms: 445, cost: 189.99 },
    { month: "Oct", data: 48, voice: 875, sms: 398, cost: 189.99 },
    { month: "Nov", data: 65, voice: 1050, sms: 512, cost: 189.99 },
    { month: "Dec", data: 71, voice: 1180, sms: 634, cost: 189.99 },
    { month: "Jan", data: 58, voice: 980, sms: 423, cost: 189.99 },
    { month: "Feb", data: 62, voice: 1025, sms: 478, cost: 189.99 },
    { month: "Mar", data: 45.2, voice: 850, sms: 234, cost: 189.99 }
  ],
  dataBreakdown: [
    { category: "Video Streaming", usage: 18.5, percentage: 41 },
    { category: "Social Media", usage: 12.3, percentage: 27 },
    { category: "Web Browsing", usage: 8.1, percentage: 18 },
    { category: "Email", usage: 3.2, percentage: 7 },
    { category: "Other", usage: 3.1, percentage: 7 }
  ],
  peakUsageHours: [
    { hour: "12AM", usage: 2 },
    { hour: "3AM", usage: 1 },
    { hour: "6AM", usage: 8 },
    { hour: "9AM", usage: 15 },
    { hour: "12PM", usage: 25 },
    { hour: "3PM", usage: 20 },
    { hour: "6PM", usage: 42 },
    { hour: "9PM", usage: 55 },
  ]
};

export const billingHistory = [
  { 
    id: "INV-2026-03",
    date: "2026-02-28",
    amount: 189.99,
    status: "Paid",
    dueDate: "2026-03-15",
    paidDate: "2026-03-01",
    method: "Auto-pay"
  },
  { 
    id: "INV-2026-02",
    date: "2026-01-28",
    amount: 189.99,
    status: "Paid",
    dueDate: "2026-02-15",
    paidDate: "2026-02-01",
    method: "Auto-pay"
  },
  { 
    id: "INV-2026-01",
    date: "2025-12-28",
    amount: 189.99,
    status: "Paid",
    dueDate: "2026-01-15",
    paidDate: "2026-01-02",
    method: "Auto-pay"
  },
  { 
    id: "INV-2025-12",
    date: "2025-11-28",
    amount: 189.99,
    status: "Paid",
    dueDate: "2025-12-15",
    paidDate: "2025-12-01",
    method: "Auto-pay"
  }
];

export const supportTickets = [
  {
    id: "TKT-89234",
    date: "2026-03-08",
    subject: "Internet speed slower than expected",
    status: "Open",
    priority: "Medium",
    assignedTo: "Tech Support Team",
    category: "Technical",
    lastUpdate: "2026-03-10",
    resolution: "In Progress - Technician scheduled for 2026-03-13"
  },
  {
    id: "TKT-87651",
    date: "2026-02-15",
    subject: "Billing inquiry - duplicate charge",
    status: "Resolved",
    priority: "High",
    assignedTo: "Billing Department",
    category: "Billing",
    lastUpdate: "2026-02-16",
    resolution: "Resolved - Credit issued to account"
  },
  {
    id: "TKT-85923",
    date: "2026-01-22",
    subject: "Request for plan upgrade information",
    status: "Resolved",
    priority: "Low",
    assignedTo: "Sales Team",
    category: "Sales",
    lastUpdate: "2026-01-23",
    resolution: "Resolved - Information provided, customer upgraded"
  }
];

export const customerJourneyEvents = [
  {
    date: "2026-03-08",
    type: "support",
    title: "Support Ticket Created",
    description: "Internet speed issue reported",
    icon: "AlertCircle",
    status: "Open"
  },
  {
    date: "2026-02-28",
    type: "billing",
    title: "Payment Processed",
    description: "$189.99 auto-payment successful",
    icon: "CreditCard",
    status: "Success"
  },
  {
    date: "2026-02-15",
    type: "support",
    title: "Billing Issue Resolved",
    description: "Duplicate charge credited back",
    icon: "CheckCircle",
    status: "Resolved"
  },
  {
    date: "2026-01-28",
    type: "billing",
    title: "Payment Processed",
    description: "$189.99 auto-payment successful",
    icon: "CreditCard",
    status: "Success"
  },
  {
    date: "2026-01-23",
    type: "engagement",
    title: "Plan Information Requested",
    description: "Customer inquired about upgrade options",
    icon: "Info",
    status: "Completed"
  },
  {
    date: "2025-12-28",
    type: "billing",
    title: "Payment Processed",
    description: "$189.99 auto-payment successful",
    icon: "CreditCard",
    status: "Success"
  },
  {
    date: "2021-01-10",
    type: "service",
    title: "New Service Activated",
    description: "TV Premium Package added",
    icon: "Tv",
    status: "Activated"
  },
  {
    date: "2020-06-01",
    type: "service",
    title: "New Service Activated",
    description: "Fiber Internet 1Gbps installed",
    icon: "Wifi",
    status: "Activated"
  },
  {
    date: "2018-03-15",
    type: "account",
    title: "Customer Account Created",
    description: "Unlimited Premium Plan activated",
    icon: "UserPlus",
    status: "Created"
  }
];

export const networkQuality = {
  overall: 98.5,
  metrics: [
    { name: "5G Coverage", value: 99.2, target: 95 },
    { name: "Call Quality", value: 97.8, target: 95 },
    { name: "Data Speed", value: 98.5, target: 90 },
    { name: "Network Reliability", value: 99.1, target: 98 }
  ],
  speedTests: [
    { date: "2026-03-11", download: 987, upload: 945, ping: 8 },
    { date: "2026-03-04", download: 1024, upload: 978, ping: 7 },
    { date: "2026-02-25", download: 956, upload: 923, ping: 9 },
    { date: "2026-02-18", download: 1001, upload: 967, ping: 8 }
  ]
};

export const deviceInfo = [
  {
    type: "Mobile",
    model: "iPhone 15 Pro Max",
    imei: "***********4521",
    status: "Active",
    purchaseDate: "2023-09-22",
    warrantyExpiry: "2025-09-22",
    insuranceStatus: "Active"
  },
  {
    type: "Router",
    model: "Quantum Gateway G3100",
    serial: "***********7829",
    status: "Active",
    installDate: "2020-06-01",
    firmwareVersion: "3.2.1"
  },
  {
    type: "Set-Top Box",
    model: "Stream TV 4K",
    serial: "***********9342",
    status: "Active",
    installDate: "2021-01-10",
    firmwareVersion: "5.1.8"
  }
];

export const recommendations = [
  {
    id: "REC-001",
    type: "Upgrade",
    title: "5G Ultra Wideband Upgrade",
    description: "Get 10x faster speeds in major cities. Only $15/month more.",
    potentialValue: 180,
    confidence: 87,
    category: "Mobile"
  },
  {
    id: "REC-002",
    type: "Cross-sell",
    title: "Smart Home Security Bundle",
    description: "Add home security with 24/7 monitoring. Special rate for existing customers.",
    potentialValue: 360,
    confidence: 72,
    category: "Home Security"
  },
  {
    id: "REC-003",
    type: "Retention",
    title: "Loyalty Discount Available",
    description: "You qualify for a 15% loyalty discount on your next 12 months.",
    potentialValue: 342,
    confidence: 95,
    category: "Retention"
  }
];

export const competitorComparison = [
  {
    provider: "Our Company",
    price: 189.99,
    data: "Unlimited",
    speed: "1000 Mbps",
    satisfaction: 4.5
  },
  {
    provider: "Competitor A",
    price: 205.00,
    data: "Unlimited",
    speed: "500 Mbps",
    satisfaction: 4.1
  },
  {
    provider: "Competitor B",
    price: 175.00,
    data: "100 GB",
    speed: "300 Mbps",
    satisfaction: 3.8
  }
];

export const interactionHistory = [
  { channel: "App", count: 45, lastUsed: "2026-03-11" },
  { channel: "Phone", count: 8, lastUsed: "2026-03-08" },
  { channel: "Website", count: 23, lastUsed: "2026-03-09" },
  { channel: "Store", count: 2, lastUsed: "2026-01-15" },
  { channel: "Chat", count: 12, lastUsed: "2026-02-28" }
];

export const sentimentAnalysis = {
  overall: "Positive",
  score: 7.8,
  trend: [
    { month: "Sep", score: 7.2 },
    { month: "Oct", score: 7.5 },
    { month: "Nov", score: 7.8 },
    { month: "Dec", score: 8.1 },
    { month: "Jan", score: 7.9 },
    { month: "Feb", score: 7.6 },
    { month: "Mar", score: 7.8 }
  ],
  recentFeedback: [
    { date: "2026-03-05", sentiment: "Positive", comment: "Great customer service!" },
    { date: "2026-02-20", sentiment: "Neutral", comment: "Internet works fine, pricing could be better." },
    { date: "2026-01-18", sentiment: "Positive", comment: "Love the 5G speed!" }
  ]
};
