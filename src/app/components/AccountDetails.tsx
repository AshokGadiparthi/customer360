import { Mail, Phone, MapPin, Calendar, CreditCard, Shield, User, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { customerData, accountMetrics, deviceInfo } from "../data/mockData";

export function AccountDetails() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Account Details</h2>
          <p className="text-gray-500 mt-1">Complete customer profile and account information</p>
        </div>
        <Button className="gap-2">
          <Edit className="w-4 h-4" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={customerData.profileImage} />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl mb-4">{customerData.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{customerData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{customerData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>Customer ID: {customerData.id}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>Customer since {new Date(customerData.customerSince).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-3">Customer Segment & Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {customerData.accountStatus}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Segment:</span>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                      {customerData.segment}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">NPS Score:</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {customerData.nps}/10 - Promoter
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Address</CardTitle>
            <CardDescription>Primary service location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm">{customerData.address.street}</p>
                <p className="text-sm">{customerData.address.city}, {customerData.address.state} {customerData.address.zip}</p>
                <p className="text-sm">{customerData.address.country}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing Address</CardTitle>
            <CardDescription>Invoice and payment address</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm">{customerData.billingAddress.street}</p>
                <p className="text-sm">{customerData.billingAddress.city}, {customerData.billingAddress.state} {customerData.billingAddress.zip}</p>
                <p className="text-sm">{customerData.billingAddress.country}</p>
                <Badge className="mt-2 bg-gray-100 text-gray-700 hover:bg-gray-100">Same as Service Address</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Account Financial Metrics</CardTitle>
          <CardDescription>Revenue, billing, and payment information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">Monthly Recurring Revenue</p>
              <p className="text-2xl mt-2">${accountMetrics.monthlyRecurringRevenue}</p>
              <Separator className="my-3" />
              <p className="text-xs text-gray-500">Average Monthly Usage</p>
              <p className="text-sm mt-1">${accountMetrics.averageMonthlyUsage}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Outstanding Balance</p>
              <p className="text-2xl mt-2 text-green-600">${accountMetrics.outstandingBalance}</p>
              <Separator className="my-3" />
              <p className="text-xs text-gray-500">Credit Score</p>
              <p className="text-sm mt-1">{accountMetrics.creditScore} (Excellent)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Lifetime Value</p>
              <p className="text-2xl mt-2">${customerData.lifetimeValue.toLocaleString()}</p>
              <Separator className="my-3" />
              <p className="text-xs text-gray-500">Tenure</p>
              <p className="text-sm mt-1">{Math.floor((new Date().getTime() - new Date(customerData.customerSince).getTime()) / (1000 * 60 * 60 * 24 * 365))} years</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
          <CardDescription>Billing and payment details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm">Payment Method</p>
                  <p className="text-sm text-gray-600">{accountMetrics.paymentMethod}</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next Billing Date</span>
                  <span>{new Date(accountMetrics.nextBillingDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Billing Cycle</span>
                  <span>Monthly (28th of each month)</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm">Contract Status</p>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mt-1">Active Contract</Badge>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Contract End Date</span>
                  <span>{new Date(accountMetrics.contractEndDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Auto-Renewal</span>
                  <span className="text-green-600">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Information */}
      <Card>
        <CardHeader>
          <CardTitle>Registered Devices</CardTitle>
          <CardDescription>All devices associated with this account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deviceInfo.map((device, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{device.type}</Badge>
                      <h4 className="text-sm">{device.model}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                      <div>
                        <span className="text-gray-500">Serial/IMEI: </span>
                        <span>{device.type === "Mobile" ? device.imei : device.serial}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Status: </span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                          {device.status}
                        </Badge>
                      </div>
                      {device.type === "Mobile" && (
                        <>
                          <div>
                            <span className="text-gray-500">Purchase Date: </span>
                            <span>{device.purchaseDate}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Warranty: </span>
                            <span className={new Date(device.warrantyExpiry!) > new Date() ? "text-green-600" : "text-red-600"}>
                              {new Date(device.warrantyExpiry!) > new Date() ? "Active" : "Expired"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Insurance: </span>
                            <span className="text-green-600">{device.insuranceStatus}</span>
                          </div>
                        </>
                      )}
                      {device.type !== "Mobile" && (
                        <>
                          <div>
                            <span className="text-gray-500">Install Date: </span>
                            <span>{device.installDate}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Firmware: </span>
                            <span>{device.firmwareVersion}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle>Risk & Retention Analysis</CardTitle>
          <CardDescription>Predictive analytics for customer retention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Churn Risk</p>
              <p className="text-4xl text-green-600">{customerData.churnProbability}%</p>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mt-3">Low Risk</Badge>
              <p className="text-xs text-gray-500 mt-2">Highly engaged customer</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Health Score</p>
              <p className="text-4xl text-blue-600">{customerData.riskScore}/100</p>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mt-3">Excellent</Badge>
              <p className="text-xs text-gray-500 mt-2">Above average performance</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Upsell Propensity</p>
              <p className="text-4xl text-purple-600">78%</p>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mt-3">High Potential</Badge>
              <p className="text-xs text-gray-500 mt-2">Good candidate for upgrades</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
