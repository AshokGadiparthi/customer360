import { Download, Upload, Phone, MessageSquare, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { usageData, networkQuality } from "../data/mockData";
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
  ComposedChart
} from "recharts";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export function UsageAnalytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Usage Analytics</h2>
          <p className="text-gray-500 mt-1">Detailed insights into data, voice, and messaging usage</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Current Period Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Data Usage</p>
                <p className="text-2xl mt-2">{usageData.currentMonth.data} GB</p>
                <p className="text-xs text-gray-500 mt-1">{usageData.currentMonth.period}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Voice Minutes</p>
                <p className="text-2xl mt-2">{usageData.currentMonth.voice}</p>
                <p className="text-xs text-gray-500 mt-1">{usageData.currentMonth.period}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">SMS Messages</p>
                <p className="text-2xl mt-2">{usageData.currentMonth.sms}</p>
                <p className="text-xs text-gray-500 mt-1">{usageData.currentMonth.period}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg Daily Usage</p>
                <p className="text-2xl mt-2">{(usageData.currentMonth.data / 11).toFixed(1)} GB</p>
                <div className="flex items-center gap-1 mt-1 text-green-600 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12% vs avg</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Usage Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Usage Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Data Usage Trend</CardTitle>
            <CardDescription>Monthly data consumption over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={usageData.monthlyHistory}>
                <defs>
                  <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" label={{ value: 'GB', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="data" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorData)"
                  name="Data (GB)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Voice & SMS Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Voice & SMS Trend</CardTitle>
            <CardDescription>Communication usage patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={usageData.monthlyHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis yAxisId="left" stroke="#6b7280" />
                <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="voice" fill="#10b981" name="Voice (min)" />
                <Line yAxisId="right" type="monotone" dataKey="sms" stroke="#f59e0b" strokeWidth={2} name="SMS" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Data Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Breakdown */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Data by Category</CardTitle>
            <CardDescription>Usage distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageData.dataBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percentage }) => `${percentage}%`}
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
            <div className="space-y-2 mt-4">
              {usageData.dataBreakdown.map((item, index) => (
                <div key={item.category} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span>{item.category}</span>
                  </div>
                  <span className="text-gray-600">{item.usage} GB</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Peak Usage Hours */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Peak Usage Hours</CardTitle>
            <CardDescription>Data consumption by time of day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData.peakUsageHours}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#6b7280" />
                <YAxis stroke="#6b7280" label={{ value: 'GB', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="usage" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Network Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Network Performance & Speed Tests</CardTitle>
          <CardDescription>Recent network quality measurements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm mb-4">Network Quality Score: {networkQuality.overall}%</h4>
              <div className="space-y-4">
                {networkQuality.metrics.map((metric) => (
                  <div key={metric.name}>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span>{metric.name}</span>
                      <span className="text-gray-600">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          metric.value >= metric.target ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: {metric.target}%</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm mb-4">Recent Speed Tests</h4>
              <div className="space-y-3">
                {networkQuality.speedTests.map((test) => (
                  <div key={test.date} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{test.date}</span>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Download</p>
                        <p className="flex items-center gap-1 mt-1">
                          <Download className="w-3 h-3 text-blue-600" />
                          {test.download} Mbps
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Upload</p>
                        <p className="flex items-center gap-1 mt-1">
                          <Upload className="w-3 h-3 text-green-600" />
                          {test.upload} Mbps
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Ping</p>
                        <p className="mt-1">{test.ping} ms</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Insights & Recommendations</CardTitle>
          <CardDescription>AI-powered analysis of your usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm mb-2">Peak Usage Time</h4>
              <p className="text-2xl mb-1">9PM - 11PM</p>
              <p className="text-xs text-gray-600">Your highest data consumption occurs during evening hours, primarily for video streaming.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-sm mb-2">Data Saver Opportunity</h4>
              <p className="text-2xl mb-1">~15 GB/mo</p>
              <p className="text-xs text-gray-600">Enable HD quality settings only on WiFi to potentially save data on mobile network.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="text-sm mb-2">Network Efficiency</h4>
              <p className="text-2xl mb-1">Excellent</p>
              <p className="text-xs text-gray-600">You're connected to 5G 92% of the time, ensuring optimal speeds and performance.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
