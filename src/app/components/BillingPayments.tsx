import { CreditCard, Download, Receipt, AlertCircle, CheckCircle, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { billingHistory, accountMetrics } from "../data/mockData";
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

const paymentTrend = [
  { month: "Sep", amount: 189.99, onTime: true },
  { month: "Oct", amount: 189.99, onTime: true },
  { month: "Nov", amount: 189.99, onTime: true },
  { month: "Dec", amount: 189.99, onTime: true },
  { month: "Jan", amount: 189.99, onTime: true },
  { month: "Feb", amount: 189.99, onTime: true },
];

const costBreakdown = [
  { service: "Mobile Plan", cost: 85.00 },
  { service: "Internet", cost: 79.99 },
  { service: "TV Package", cost: 24.99 },
  { service: "Taxes & Fees", cost: 0.01 }
];

export function BillingPayments() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Billing & Payments</h2>
          <p className="text-gray-500 mt-1">Manage invoices, payment methods, and billing history</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Download Statement
        </Button>
      </div>

      {/* Current Balance & Next Bill */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Current Balance</p>
                <p className="text-3xl mt-2 text-green-600">${accountMetrics.outstandingBalance}</p>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mt-2">Paid in Full</Badge>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Next Bill Date</p>
                <p className="text-2xl mt-2">{new Date(accountMetrics.nextBillingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                <p className="text-xs text-gray-500 mt-2">Estimated: ${accountMetrics.monthlyRecurringRevenue}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Recurring</p>
                <p className="text-2xl mt-2">${accountMetrics.monthlyRecurringRevenue}</p>
                <p className="text-xs text-gray-500 mt-2">Auto-pay enabled</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Your primary payment method for auto-pay</CardDescription>
            </div>
            <Button variant="outline">Update</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Visa ending in 4532</p>
              <p className="text-sm text-gray-500 mt-1">Expires 08/2027</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Auto-pay Active</Badge>
                <Badge variant="outline">Primary</Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Next charge</p>
              <p className="text-lg">${accountMetrics.monthlyRecurringRevenue}</p>
              <p className="text-xs text-gray-500 mt-1">{new Date(accountMetrics.nextBillingDate).toLocaleDateString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment History Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Last 6 months billing amounts</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={paymentTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[180, 200]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Amount ($)"
                  dot={{ fill: '#3b82f6', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Cost Breakdown</CardTitle>
            <CardDescription>Current billing period charges</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={costBreakdown} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="service" type="category" stroke="#6b7280" width={100} />
                <Tooltip />
                <Bar dataKey="cost" fill="#10b981" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Recent invoices and payment records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {billingHistory.map((bill) => (
              <div key={bill.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm">{bill.id}</h4>
                        <Badge className={
                          bill.status === "Paid" 
                            ? "bg-green-100 text-green-700 hover:bg-green-100" 
                            : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                        }>
                          {bill.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span>Invoice Date: {new Date(bill.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Due: {new Date(bill.dueDate).toLocaleDateString()}</span>
                        {bill.paidDate && (
                          <>
                            <span>•</span>
                            <span className="text-green-600">Paid: {new Date(bill.paidDate).toLocaleDateString()}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p className="text-lg">${bill.amount}</p>
                      <p className="text-xs text-gray-500">{bill.method}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">View All Invoices</Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Bill Details */}
      <Card>
        <CardHeader>
          <CardTitle>Current Bill Details</CardTitle>
          <CardDescription>Itemized charges for current billing period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {costBreakdown.map((item) => (
              <div key={item.service}>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm">{item.service}</p>
                    {item.service === "Mobile Plan" && (
                      <p className="text-xs text-gray-500 mt-1">Unlimited Premium • Line 1</p>
                    )}
                    {item.service === "Internet" && (
                      <p className="text-xs text-gray-500 mt-1">Fiber 1Gbps • 742 Evergreen Terrace</p>
                    )}
                    {item.service === "TV Package" && (
                      <p className="text-xs text-gray-500 mt-1">Premium Package • 200+ Channels</p>
                    )}
                  </div>
                  <p className="text-sm">${item.cost.toFixed(2)}</p>
                </div>
                <Separator />
              </div>
            ))}
            <div className="flex items-center justify-between py-4">
              <p className="text-lg">Total Amount Due</p>
              <p className="text-2xl">${accountMetrics.monthlyRecurringRevenue}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Insights</CardTitle>
          <CardDescription>Your payment history and reliability metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl text-green-600">100%</p>
              <p className="text-sm text-gray-600 mt-1">On-time Payments</p>
              <p className="text-xs text-gray-500 mt-2">Last 12 months</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl text-blue-600">48</p>
              <p className="text-sm text-gray-600 mt-1">Consecutive Payments</p>
              <p className="text-xs text-gray-500 mt-2">Since 2022</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl text-purple-600">$9,120</p>
              <p className="text-sm text-gray-600 mt-1">Total Paid (YTD)</p>
              <p className="text-xs text-gray-500 mt-2">Last 12 months</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <CreditCard className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl text-yellow-600">Excellent</p>
              <p className="text-sm text-gray-600 mt-1">Payment Rating</p>
              <p className="text-xs text-gray-500 mt-2">Premium customer</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auto-pay Benefits */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg mb-2">Auto-pay is Active</h4>
              <p className="text-sm text-gray-700 mb-3">
                Your payment of ${accountMetrics.monthlyRecurringRevenue} will be automatically processed on {new Date(accountMetrics.nextBillingDate).toLocaleDateString()} using your Visa ending in 4532.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Never miss a payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>No late fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Hassle-free billing</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
