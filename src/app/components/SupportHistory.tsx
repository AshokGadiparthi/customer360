import { MessageSquare, Phone, Mail, AlertCircle, CheckCircle, Clock, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { supportTickets, interactionHistory } from "../data/mockData";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const satisfactionTrend = [
  { month: "Sep", score: 4.5 },
  { month: "Oct", score: 4.7 },
  { month: "Nov", score: 4.8 },
  { month: "Dec", score: 4.6 },
  { month: "Jan", score: 4.9 },
  { month: "Feb", score: 4.8 },
];

const resolutionStats = [
  { category: "First Contact", value: 75 },
  { category: "Follow-up", value: 20 },
  { category: "Escalated", value: 5 }
];

export function SupportHistory() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Support History</h2>
          <p className="text-gray-500 mt-1">Track tickets, interactions, and customer service quality</p>
        </div>
        <Button className="gap-2">
          <MessageSquare className="w-4 h-4" />
          Create Ticket
        </Button>
      </div>

      {/* Support Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Tickets</p>
                <p className="text-3xl mt-2">3</p>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Open Tickets</p>
                <p className="text-3xl mt-2">1</p>
                <p className="text-xs text-gray-500 mt-1">Requires attention</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg Resolution</p>
                <p className="text-3xl mt-2">1.2d</p>
                <p className="text-xs text-green-600 mt-1">Better than avg</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Satisfaction</p>
                <p className="text-3xl mt-2">4.8</p>
                <p className="text-xs text-gray-500 mt-1">Out of 5.0</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Tickets */}
      <Card>
        <CardHeader>
          <CardTitle>Active Support Tickets</CardTitle>
          <CardDescription>Tickets currently being worked on</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {supportTickets.filter(t => t.status === "Open").map((ticket) => (
              <div key={ticket.id} className="p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-sm">{ticket.subject}</h4>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" className="text-xs">{ticket.status}</Badge>
                        <Badge variant="outline" className="text-xs">{ticket.priority}</Badge>
                        <Badge variant="secondary" className="text-xs">{ticket.category}</Badge>
                        <span className="text-xs text-gray-500">{ticket.id}</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Created:</span>
                          <span>{new Date(ticket.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Last Update:</span>
                          <span>{new Date(ticket.lastUpdate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Assigned To:</span>
                          <span>{ticket.assignedTo}</span>
                        </div>
                        <div className="p-3 bg-white rounded mt-2">
                          <p className="text-xs text-gray-500 mb-1">Current Status:</p>
                          <p className="text-sm">{ticket.resolution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button size="sm">Update</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resolved Tickets */}
      <Card>
        <CardHeader>
          <CardTitle>Resolved Tickets</CardTitle>
          <CardDescription>Previously closed support cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {supportTickets.filter(t => t.status === "Resolved").map((ticket) => (
              <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-sm">{ticket.subject}</h4>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">{ticket.status}</Badge>
                        <Badge variant="outline" className="text-xs">{ticket.priority}</Badge>
                        <Badge variant="secondary" className="text-xs">{ticket.category}</Badge>
                        <span className="text-xs text-gray-500">{ticket.id}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Created:</span>
                          <p>{new Date(ticket.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Resolved:</span>
                          <p>{new Date(ticket.lastUpdate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Resolution Time:</span>
                          <p>{Math.ceil((new Date(ticket.lastUpdate).getTime() - new Date(ticket.date).getTime()) / (1000 * 60 * 60 * 24))} day(s)</p>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded mt-3">
                        <p className="text-xs text-gray-500 mb-1">Resolution:</p>
                        <p className="text-sm">{ticket.resolution}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Satisfaction Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction Trend</CardTitle>
            <CardDescription>Support experience ratings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={satisfactionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis domain={[0, 5]} stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Satisfaction Score"
                  dot={{ fill: '#10b981', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Resolution Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Resolution Statistics</CardTitle>
            <CardDescription>Ticket resolution breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resolutionStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="category" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Percentage (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Interaction Channels */}
      <Card>
        <CardHeader>
          <CardTitle>Communication Channels</CardTitle>
          <CardDescription>Customer service interaction preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {interactionHistory.map((channel) => {
              let Icon = MessageSquare;
              let colorClass = "bg-blue-100 text-blue-600";
              
              if (channel.channel === "Phone") {
                Icon = Phone;
                colorClass = "bg-green-100 text-green-600";
              } else if (channel.channel === "Email") {
                Icon = Mail;
                colorClass = "bg-purple-100 text-purple-600";
              }
              
              return (
                <div key={channel.channel} className="p-4 border border-gray-200 rounded-lg text-center hover:border-blue-300 transition-colors">
                  <div className={`w-12 h-12 ${colorClass.replace('text-', 'bg-').replace('600', '100')} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${colorClass.split(' ')[1]}`} />
                  </div>
                  <h4 className="text-sm mb-1">{channel.channel}</h4>
                  <p className="text-2xl mb-1">{channel.count}</p>
                  <p className="text-xs text-gray-500">interactions</p>
                  <Separator className="my-3" />
                  <p className="text-xs text-gray-500">Last used</p>
                  <p className="text-xs">{new Date(channel.lastUsed).toLocaleDateString()}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Support Quality Summary */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg mb-2">Excellent Support Experience</h4>
              <p className="text-sm text-gray-700 mb-4">
                This customer has consistently received high-quality support with an average satisfaction rating of 4.8/5.0. 
                Resolution times are 40% faster than average, and 75% of issues are resolved on first contact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Avg Rating</p>
                  <p className="text-xl text-green-600">4.8/5.0</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Avg Resolution</p>
                  <p className="text-xl text-green-600">1.2 days</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-500">First Contact Fix</p>
                  <p className="text-xl text-green-600">75%</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Total Interactions</p>
                  <p className="text-xl text-green-600">90</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
