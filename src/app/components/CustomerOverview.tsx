import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Phone, 
  Wifi, 
  AlertCircle,
  CheckCircle,
  Users,
  Target,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  customerData, 
  accountMetrics, 
  activeServices,
  usageData,
  supportTickets,
  recommendations,
  networkQuality,
  interactionHistory
} from "../data/mockData";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export function CustomerOverview() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Revenue</p>
                <p className="text-2xl mt-2">${accountMetrics.monthlyRecurringRevenue}</p>
                <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+5.2% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Lifetime Value</p>
                <p className="text-2xl mt-2">${customerData.lifetimeValue.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
                  <span>{Math.floor((new Date().getTime() - new Date(customerData.customerSince).getTime()) / (1000 * 60 * 60 * 24 / 30))} months tenure</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Churn Risk</p>
                <p className="text-2xl mt-2">{customerData.churnProbability}%</p>
                <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                  <TrendingDown className="w-4 h-4" />
                  <span>Low risk</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">NPS Score</p>
                <p className="text-2xl mt-2">{customerData.nps}/10</p>
                <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
                  <span>Promoter</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue & Usage Trend</CardTitle>
            <CardDescription>Last 7 months performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={usageData.monthlyHistory}>
                <defs>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorCost)"
                  name="Revenue ($)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Active Services */}
        <Card>
          <CardHeader>
            <CardTitle>Active Services</CardTitle>
            <CardDescription>{activeServices.length} services subscribed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeServices.map((service) => (
                <div key={service.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {service.type === "Mobile" && <Phone className="w-4 h-4 text-blue-600" />}
                      {service.type === "Internet" && <Wifi className="w-4 h-4 text-green-600" />}
                      {service.type === "TV" && <div className="w-4 h-4 text-purple-600">📺</div>}
                      <p className="text-sm">{service.name}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{service.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">${service.monthlyCost}</p>
                    <Badge className="bg-green-100 text-green-700 text-xs mt-1 hover:bg-green-100">
                      {service.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Monthly</span>
                  <span className="text-lg">${accountMetrics.monthlyRecurringRevenue}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Usage Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Data Usage Distribution</CardTitle>
            <CardDescription>Current month breakdown by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageData.dataBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) => `${category} (${percentage}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="usage"
                >
                  {usageData.dataBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Network Quality */}
        <Card>
          <CardHeader>
            <CardTitle>Network Quality Metrics</CardTitle>
            <CardDescription>Performance across key indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={networkQuality.metrics}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="name" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                <Radar 
                  name="Current" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.5} 
                />
                <Radar 
                  name="Target" 
                  dataKey="target" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.2} 
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Usage & Interactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Usage Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Comparison (Last 7 Months)</CardTitle>
            <CardDescription>Data, Voice, and SMS usage trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData.monthlyHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="data" fill="#3b82f6" name="Data (GB)" />
                <Bar dataKey="voice" fill="#10b981" name="Voice (min)" />
                <Bar dataKey="sms" fill="#f59e0b" name="SMS" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Interaction Channels */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Interaction Channels</CardTitle>
            <CardDescription>Preferred communication methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {interactionHistory.map((channel) => (
                <div key={channel.channel}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{channel.channel}</span>
                    <div className="text-right">
                      <span className="text-sm">{channel.count} interactions</span>
                      <p className="text-xs text-gray-500">Last: {channel.lastUsed}</p>
                    </div>
                  </div>
                  <Progress value={(channel.count / 45) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations & Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Recommendations</CardTitle>
            <CardDescription>Personalized upsell and retention opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={rec.type === "Upgrade" ? "default" : rec.type === "Cross-sell" ? "secondary" : "outline"}>
                          {rec.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{rec.confidence}% confidence</span>
                      </div>
                      <h4 className="text-sm mt-2">{rec.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                      <p className="text-xs text-green-600 mt-2">Potential value: ${rec.potentialValue}/year</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Support Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Support Activity</CardTitle>
            <CardDescription>Latest customer service interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {ticket.status === "Open" ? (
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                        <span className="text-sm">{ticket.subject}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant={ticket.status === "Open" ? "default" : "secondary"} className="text-xs">
                          {ticket.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {ticket.priority}
                        </Badge>
                        <span className="text-xs text-gray-500">{ticket.id}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">{ticket.resolution}</p>
                      <p className="text-xs text-gray-500 mt-1">Last update: {ticket.lastUpdate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Health Score */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Health Score</CardTitle>
          <CardDescription>Comprehensive assessment across multiple dimensions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Engagement</span>
                <span className="text-sm">85/100</span>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">High app & service usage</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Payment History</span>
                <span className="text-sm">100/100</span>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">Perfect payment record</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Satisfaction</span>
                <span className="text-sm">80/100</span>
              </div>
              <Progress value={80} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">NPS score of 8/10</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Loyalty</span>
                <span className="text-sm">92/100</span>
              </div>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">8+ years customer</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
