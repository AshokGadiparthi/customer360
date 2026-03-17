import { Phone, Wifi, Tv, CheckCircle, TrendingUp, Plus, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { activeServices, recommendations } from "../data/mockData";

const availableAddOns = [
  {
    id: "addon-1",
    name: "International Roaming Plus",
    description: "Unlimited data and calling in 200+ countries",
    price: 10,
    category: "Mobile"
  },
  {
    id: "addon-2",
    name: "Premium Security Suite",
    description: "Advanced threat protection, VPN, and identity monitoring",
    price: 15,
    category: "Security"
  },
  {
    id: "addon-3",
    name: "Cloud Storage 1TB",
    description: "Secure cloud backup for all your devices",
    price: 8,
    category: "Storage"
  },
  {
    id: "addon-4",
    name: "Sports Package Premium",
    description: "All major sports channels and live streaming",
    price: 20,
    category: "TV"
  }
];

const usageAllowances = [
  {
    service: "Mobile Data",
    used: 45.2,
    total: "Unlimited",
    percentage: 0,
    status: "unlimited"
  },
  {
    service: "Mobile Hotspot",
    used: 28,
    total: 50,
    percentage: 56,
    status: "good"
  },
  {
    service: "Cloud DVR Storage",
    used: 320,
    total: 500,
    percentage: 64,
    status: "good"
  },
  {
    service: "International Minutes",
    used: 0,
    total: "Unlimited",
    percentage: 0,
    status: "unlimited"
  }
];

export function ServicesPlans() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Services & Plans</h2>
          <p className="text-gray-500 mt-1">Manage subscriptions, view usage, and explore upgrades</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Service
        </Button>
      </div>

      {/* Active Services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {activeServices.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {service.type === "Mobile" && (
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                    )}
                    {service.type === "Internet" && (
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-5 h-5 text-green-600" />
                      </div>
                    )}
                    {service.type === "TV" && (
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Tv className="w-5 h-5 text-purple-600" />
                      </div>
                    )}
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {service.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.type} Service</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">${service.monthlyCost}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Features:</p>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service ID:</span>
                    <span>{service.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Start Date:</span>
                    <span>{new Date(service.startDate).toLocaleDateString()}</span>
                  </div>
                  {service.phoneNumber && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Phone:</span>
                      <span>{service.phoneNumber}</span>
                    </div>
                  )}
                  {service.device && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Device:</span>
                      <span>{service.device}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                  <Button size="sm" className="flex-1">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Upgrade
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Allowances */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Allowances</CardTitle>
          <CardDescription>Current usage across all services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageAllowances.map((item) => (
              <div key={item.service} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{item.service}</span>
                  {item.status === "unlimited" ? (
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Unlimited</Badge>
                  ) : (
                    <span className="text-sm text-gray-600">
                      {item.used} / {item.total} {item.service.includes("Data") || item.service.includes("Hotspot") ? "GB" : item.service.includes("Storage") ? "hrs" : "min"}
                    </span>
                  )}
                </div>
                {item.status !== "unlimited" && (
                  <>
                    <Progress value={item.percentage} className="h-2" />
                    <p className="text-xs text-gray-500">
                      {item.percentage < 50 ? "Low usage" : item.percentage < 80 ? "Moderate usage" : "High usage"}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Upgrades */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Upgrades</CardTitle>
          <CardDescription>Personalized service recommendations based on usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((rec) => (
              <div key={rec.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={rec.type === "Upgrade" ? "default" : rec.type === "Cross-sell" ? "secondary" : "outline"}>
                    {rec.type}
                  </Badge>
                  <span className="text-xs text-gray-500">{rec.confidence}% match</span>
                </div>
                <h4 className="text-sm mb-2">{rec.title}</h4>
                <p className="text-xs text-gray-600 mb-3">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Potential Annual Value</p>
                    <p className="text-sm text-green-600">${rec.potentialValue}</p>
                  </div>
                  <Button size="sm">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Add-ons */}
      <Card>
        <CardHeader>
          <CardTitle>Available Add-ons</CardTitle>
          <CardDescription>Enhance your services with premium features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableAddOns.map((addon) => (
              <div key={addon.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-sm">{addon.name}</h4>
                      <Badge variant="outline" className="text-xs">{addon.category}</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{addon.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">${addon.price}<span className="text-sm text-gray-500">/mo</span></span>
                      <Button size="sm" variant="outline">
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Plan Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Current Plan vs. Available Upgrades</CardTitle>
          <CardDescription>Compare features and pricing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 text-gray-500">Feature</th>
                  <th className="text-center p-3">
                    <div className="flex flex-col items-center">
                      <span>Current Plan</span>
                      <span className="text-xs text-gray-500">Premium</span>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mt-1 text-xs">Active</Badge>
                    </div>
                  </th>
                  <th className="text-center p-3">
                    <div className="flex flex-col items-center">
                      <span>Ultimate Plan</span>
                      <span className="text-xs text-gray-500">+$25/mo</span>
                    </div>
                  </th>
                  <th className="text-center p-3">
                    <div className="flex flex-col items-center">
                      <span>Business Plan</span>
                      <span className="text-xs text-gray-500">+$45/mo</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3">Mobile Data</td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">5G Ultra Wideband</td>
                  <td className="text-center p-3 text-gray-400">—</td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">Mobile Hotspot</td>
                  <td className="text-center p-3">50 GB</td>
                  <td className="text-center p-3">100 GB</td>
                  <td className="text-center p-3">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">International Calling</td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">Premium Support</td>
                  <td className="text-center p-3 text-gray-400">—</td>
                  <td className="text-center p-3 text-gray-400">—</td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">Device Protection</td>
                  <td className="text-center p-3 text-gray-400">—</td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-3"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3"></td>
                  <td className="text-center p-3">
                    <p className="text-lg mb-2">$85.00</p>
                  </td>
                  <td className="text-center p-3">
                    <p className="text-lg mb-2">$110.00</p>
                    <Button size="sm">Upgrade</Button>
                  </td>
                  <td className="text-center p-3">
                    <p className="text-lg mb-2">$130.00</p>
                    <Button size="sm">Upgrade</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
