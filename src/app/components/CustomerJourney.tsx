import { 
  AlertCircle, 
  CheckCircle, 
  CreditCard, 
  Info, 
  Phone, 
  UserPlus, 
  Wifi, 
  Tv,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { customerJourneyEvents, customerData } from "../data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    AlertCircle,
    CheckCircle,
    CreditCard,
    Info,
    UserPlus,
    Wifi,
    Tv,
    Phone
  };
  return icons[iconName] || Info;
};

const getIconColor = (type: string) => {
  const colors: Record<string, string> = {
    support: "bg-yellow-100 text-yellow-600",
    billing: "bg-green-100 text-green-600",
    engagement: "bg-blue-100 text-blue-600",
    service: "bg-purple-100 text-purple-600",
    account: "bg-gray-100 text-gray-600"
  };
  return colors[type] || "bg-gray-100 text-gray-600";
};

const lifetimeValueTrend = [
  { month: "Mar 2018", value: 0 },
  { month: "Jun 2018", value: 285 },
  { month: "Dec 2018", value: 1710 },
  { month: "Jun 2019", value: 3420 },
  { month: "Dec 2019", value: 5130 },
  { month: "Jun 2020", value: 6920 },
  { month: "Dec 2020", value: 8210 },
  { month: "Jun 2021", value: 9680 },
  { month: "Dec 2021", value: 10970 },
  { month: "Jun 2022", value: 11280 },
  { month: "Dec 2022", value: 11850 },
  { month: "Jun 2023", value: 12140 },
  { month: "Mar 2026", value: 12450 }
];

const milestones = [
  {
    year: "2018",
    event: "Customer Acquisition",
    description: "Joined with Unlimited Premium Plan",
    impact: "high"
  },
  {
    year: "2020",
    event: "Service Expansion",
    description: "Added Fiber Internet 1Gbps",
    impact: "high"
  },
  {
    year: "2021",
    event: "Bundle Complete",
    description: "Added TV Premium Package - Full Bundle",
    impact: "medium"
  },
  {
    year: "2023",
    event: "Loyalty Milestone",
    description: "5 Year Customer Anniversary",
    impact: "high"
  },
  {
    year: "2026",
    event: "Premium Status",
    description: "Upgraded to Premium Segment",
    impact: "high"
  }
];

export function CustomerJourney() {
  const customerTenure = Math.floor((new Date().getTime() - new Date(customerData.customerSince).getTime()) / (1000 * 60 * 60 * 24 * 365));
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl">Customer Journey</h2>
        <p className="text-gray-500 mt-1">Complete timeline and lifecycle visualization</p>
      </div>

      {/* Journey Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Customer Since</p>
              <p className="text-2xl mt-2">{new Date(customerData.customerSince).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
              <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-100">{customerTenure} Years</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Lifetime Value</p>
              <p className="text-2xl mt-2">${customerData.lifetimeValue.toLocaleString()}</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Growing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Total Interactions</p>
              <p className="text-2xl mt-2">90</p>
              <p className="text-xs text-gray-500 mt-2">Across all channels</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Services Added</p>
              <p className="text-2xl mt-2">3</p>
              <Badge className="mt-2 bg-purple-100 text-purple-700 hover:bg-purple-100">Full Bundle</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lifetime Value Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Lifetime Value Growth</CardTitle>
          <CardDescription>Customer value progression since acquisition</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lifetimeValueTrend}>
              <defs>
                <linearGradient id="colorLTV" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="LTV ($)"
                dot={{ fill: '#3b82f6', r: 4 }}
                fill="url(#colorLTV)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Milestones */}
      <Card>
        <CardHeader>
          <CardTitle>Key Milestones</CardTitle>
          <CardDescription>Significant events in customer relationship</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    milestone.impact === "high" ? "bg-blue-600" : "bg-gray-400"
                  }`}>
                    <span className="text-white text-sm">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 my-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm">{milestone.event}</h4>
                    {milestone.impact === "high" && (
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">High Impact</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Complete Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Activity Timeline</CardTitle>
          <CardDescription>Chronological view of all customer interactions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerJourneyEvents.map((event, index) => {
              const Icon = getIcon(event.icon);
              const colorClass = getIconColor(event.type);
              
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {index < customerJourneyEvents.length - 1 && (
                      <div className="w-0.5 h-full min-h-[60px] bg-gray-200 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-sm">{event.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                      <Badge 
                        variant={event.status === "Open" ? "default" : "secondary"}
                        className={
                          event.status === "Success" || event.status === "Resolved" || event.status === "Completed" || event.status === "Activated" || event.status === "Created"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : event.status === "Open"
                            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                            : ""
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                    <Badge variant="outline" className="mt-2 text-xs capitalize">{event.type}</Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Journey Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Journey Insights</CardTitle>
          <CardDescription>AI-powered analysis of customer behavior patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="text-sm mb-2">Highly Engaged</h4>
              <p className="text-xs text-gray-600">
                Customer shows strong engagement across all services with regular usage patterns and proactive service expansions.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-sm mb-2">Growing Value</h4>
              <p className="text-xs text-gray-600">
                LTV has grown 437% since acquisition, with multiple service additions indicating strong product-market fit.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <UserPlus className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="text-sm mb-2">Retention Strength</h4>
              <p className="text-xs text-gray-600">
                Zero churn risk indicators. Perfect payment history and high satisfaction scores suggest long-term retention.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lifecycle Stage */}
      <Card>
        <CardHeader>
          <CardTitle>Current Lifecycle Stage</CardTitle>
          <CardDescription>Customer maturity and relationship status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h3 className="text-xl">Premium Loyalty</h3>
                    <p className="text-sm text-gray-500">High-value, long-term customer</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">8 years tenure - Long-term customer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Premium segment - Top 15% of customer base</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Full bundle subscriber - Maximum product adoption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">NPS Promoter (8/10) - High satisfaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Low churn risk (15%) - Stable relationship</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm mb-2">Recommended Next Actions</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Offer 5G Ultra Wideband upgrade to enhance mobile experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Present Smart Home Security bundle as natural service expansion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Apply loyalty discount to recognize 8-year relationship</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Schedule proactive check-in to maintain high satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
