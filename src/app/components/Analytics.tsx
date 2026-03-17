import { TrendingUp, TrendingDown, Target, AlertTriangle, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { competitorComparison, sentimentAnalysis, recommendations } from "../data/mockData";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area
} from "recharts";

const churnIndicators = [
  { indicator: "Payment History", score: 100, threshold: 80, status: "excellent" },
  { indicator: "Usage Pattern", score: 88, threshold: 70, status: "good" },
  { indicator: "Support Satisfaction", score: 96, threshold: 75, status: "excellent" },
  { indicator: "Service Engagement", score: 92, threshold: 70, status: "excellent" },
  { indicator: "Contract Status", score: 100, threshold: 80, status: "excellent" },
  { indicator: "Sentiment Score", score: 78, threshold: 65, status: "good" }
];

const customerSegmentation = [
  { segment: "Premium", customers: 1250, revenue: 285000, ltv: 12450, color: "#8b5cf6" },
  { segment: "Standard", customers: 4200, revenue: 672000, ltv: 7200, color: "#3b82f6" },
  { segment: "Basic", customers: 2800, revenue: 336000, ltv: 3800, color: "#10b981" },
  { segment: "At Risk", customers: 750, revenue: 97500, ltv: 4200, color: "#ef4444" }
];

const predictiveMetrics = [
  { month: "Apr", churnProb: 18, upsellProb: 72, satisfactionPred: 82 },
  { month: "May", churnProb: 16, upsellProb: 75, satisfactionPred: 84 },
  { month: "Jun", churnProb: 15, upsellProb: 78, satisfactionPred: 85 },
  { month: "Jul", churnProb: 14, upsellProb: 80, satisfactionPred: 86 },
  { month: "Aug", churnProb: 13, upsellProb: 82, satisfactionPred: 87 },
  { month: "Sep", churnProb: 12, upsellProb: 85, satisfactionPred: 88 }
];

const clvSegments = [
  { range: "$0-$3k", count: 2800, avgValue: 2100 },
  { range: "$3k-$7k", count: 3200, avgValue: 5400 },
  { range: "$7k-$12k", count: 1500, avgValue: 9200 },
  { range: "$12k+", count: 500, avgValue: 15800 }
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl">Advanced Analytics</h2>
        <p className="text-gray-500 mt-1">Predictive insights, benchmarking, and strategic intelligence</p>
      </div>

      {/* Key Predictive Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Churn Risk</p>
                <p className="text-3xl mt-2 text-green-600">15%</p>
                <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                  <TrendingDown className="w-4 h-4" />
                  <span>Decreasing</span>
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
                <p className="text-sm text-gray-500">Upsell Propensity</p>
                <p className="text-3xl mt-2 text-blue-600">78%</p>
                <div className="flex items-center gap-1 mt-2 text-blue-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>High potential</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Predicted CLV (12mo)</p>
                <p className="text-3xl mt-2">$2,280</p>
                <div className="flex items-center gap-1 mt-2 text-purple-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+5% growth</span>
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
                <p className="text-sm text-gray-500">Satisfaction Trend</p>
                <p className="text-3xl mt-2">7.8</p>
                <div className="flex items-center gap-1 mt-2 text-yellow-600 text-sm">
                  <span>Stable</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Churn Risk Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Churn Risk Indicators</CardTitle>
          <CardDescription>Multi-dimensional risk assessment across key factors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {churnIndicators.map((item) => (
              <div key={item.indicator}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{item.indicator}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Threshold: {item.threshold}</span>
                    <span className={`text-sm font-medium ${
                      item.status === "excellent" ? "text-green-600" : 
                      item.status === "good" ? "text-blue-600" : "text-yellow-600"
                    }`}>
                      {item.score}/100
                    </span>
                    {item.status === "excellent" && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">Excellent</Badge>
                    )}
                    {item.status === "good" && (
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">Good</Badge>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Progress value={item.score} className="h-2" />
                  <div 
                    className="absolute top-0 h-2 w-0.5 bg-red-500" 
                    style={{ left: `${item.threshold}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Predictive Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Predictions */}
        <Card>
          <CardHeader>
            <CardTitle>6-Month Predictive Trends</CardTitle>
            <CardDescription>AI-forecasted customer behavior metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={predictiveMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="satisfactionPred" 
                  fill="#10b981" 
                  stroke="#10b981" 
                  fillOpacity={0.2}
                  name="Satisfaction Forecast (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="upsellProb" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Upsell Probability (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="churnProb" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Churn Risk (%)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sentiment Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Analysis Trend</CardTitle>
            <CardDescription>Customer satisfaction sentiment over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sentimentAnalysis.trend}>
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis domain={[0, 10]} stroke="#6b7280" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  name="Sentiment Score"
                  dot={{ fill: '#8b5cf6', r: 5 }}
                  fill="url(#colorSentiment)"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <h4 className="text-sm mb-2">Current Sentiment: {sentimentAnalysis.overall}</h4>
              <p className="text-xs text-gray-600">Overall score: {sentimentAnalysis.score}/10</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Benchmarking */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Benchmarking</CardTitle>
          <CardDescription>How this customer's plan compares to competitor offerings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 text-gray-500">Provider</th>
                  <th className="text-center p-3 text-gray-500">Price</th>
                  <th className="text-center p-3 text-gray-500">Data</th>
                  <th className="text-center p-3 text-gray-500">Speed</th>
                  <th className="text-center p-3 text-gray-500">Satisfaction</th>
                  <th className="text-center p-3 text-gray-500">Competitive Position</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((provider) => (
                  <tr key={provider.provider} className={`border-b border-gray-100 ${provider.provider === "Our Company" ? "bg-blue-50" : ""}`}>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {provider.provider}
                        {provider.provider === "Our Company" && (
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Current</Badge>
                        )}
                      </div>
                    </td>
                    <td className="text-center p-3">${provider.price}/mo</td>
                    <td className="text-center p-3">{provider.data}</td>
                    <td className="text-center p-3">{provider.speed}</td>
                    <td className="text-center p-3">
                      <div className="flex items-center justify-center gap-1">
                        <span>{provider.satisfaction}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      {provider.provider === "Our Company" ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Best Value</Badge>
                      ) : provider.price > 189.99 ? (
                        <Badge variant="outline" className="text-red-600 border-red-300">More Expensive</Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-600">Lower Quality</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h4 className="text-sm mb-2">Competitive Analysis</h4>
            <p className="text-xs text-gray-700">
              Customer is receiving excellent value with unlimited data and premium speeds at a competitive price point. 
              Satisfaction rating is highest among competitors. Low risk of switching.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Customer Segmentation */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Segmentation Analysis</CardTitle>
          <CardDescription>Position within broader customer base</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customerSegmentation}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="segment" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="ltv" fill="#3b82f6" name="Avg LTV ($)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {customerSegmentation.map((seg) => (
              <div key={seg.segment} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: seg.color }}></div>
                  <span className="text-sm">{seg.segment}</span>
                </div>
                <p className="text-xs text-gray-500">{seg.customers.toLocaleString()} customers</p>
                <p className="text-sm mt-1">${(seg.revenue / 1000).toFixed(0)}k revenue</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CLV Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Lifetime Value Distribution</CardTitle>
          <CardDescription>Where this customer ranks in the CLV spectrum</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={clvSegments}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="range" stroke="#6b7280" />
              <YAxis yAxisId="left" stroke="#6b7280" />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="count" fill="#10b981" name="Customer Count" radius={[8, 8, 0, 0]} />
              <Bar yAxisId="right" dataKey="avgValue" fill="#3b82f6" name="Avg Value ($)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="text-sm mb-2">CLV Positioning</h4>
            <p className="text-xs text-gray-700">
              This customer ($12,450 LTV) ranks in the top tier ($12k+) representing the top 6% of the customer base. 
              Retention is critical as these customers drive 45% of total revenue.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Strategic Recommendations</CardTitle>
          <CardDescription>Data-driven actions to maximize customer value</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recommendations.map((rec) => (
              <div key={rec.id} className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={rec.type === "Upgrade" ? "default" : rec.type === "Cross-sell" ? "secondary" : "outline"}>
                        {rec.type}
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                        {rec.confidence}% Confidence
                      </Badge>
                    </div>
                    <h4 className="text-sm mb-2">{rec.title}</h4>
                    <p className="text-xs text-gray-700 mb-3">{rec.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-gray-500">Potential Annual Value:</span>
                        <p className="text-sm text-green-600">${rec.potentialValue}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Success Probability:</span>
                        <p className="text-sm">{rec.confidence}%</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Expected ROI:</span>
                        <p className="text-sm">8.5x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk & Opportunity Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="text-sm mb-1">High Upsell Potential (78%)</h4>
                  <p className="text-xs text-gray-600">Strong candidate for 5G Ultra Wideband and premium add-ons</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="text-sm mb-1">Referral Opportunity</h4>
                  <p className="text-xs text-gray-600">NPS score of 8/10 indicates likely to recommend to others</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="text-sm mb-1">Loyalty Program Eligible</h4>
                  <p className="text-xs text-gray-600">8-year tenure qualifies for premium rewards tier</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              Monitoring Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-sm mb-1">Open Support Ticket</h4>
                  <p className="text-xs text-gray-600">Internet speed issue - ensure timely resolution to maintain satisfaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-sm mb-1">Competitive Pressure</h4>
                  <p className="text-xs text-gray-600">Monitor competitor offers in market to prevent switching</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-sm mb-1">Contract Renewal Approaching</h4>
                  <p className="text-xs text-gray-600">Contract ends March 2027 - prepare retention offer 6 months prior</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
