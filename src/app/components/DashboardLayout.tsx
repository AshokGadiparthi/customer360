import { Outlet, Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  User, 
  WifiIcon, 
  BarChart3, 
  CreditCard, 
  MessageSquare, 
  Route,
  TrendingUp,
  Bell,
  Settings,
  Search,
  ChevronRight
} from "lucide-react";
import { customerData } from "../data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const navItems = [
  { path: "/", label: "Overview", icon: LayoutDashboard },
  { path: "/account", label: "Account Details", icon: User },
  { path: "/services", label: "Services & Plans", icon: WifiIcon },
  { path: "/usage", label: "Usage Analytics", icon: BarChart3 },
  { path: "/billing", label: "Billing & Payments", icon: CreditCard },
  { path: "/support", label: "Support History", icon: MessageSquare },
  { path: "/journey", label: "Customer Journey", icon: Route },
  { path: "/analytics", label: "Advanced Analytics", icon: TrendingUp },
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl text-blue-600">TelecomPro 360</h1>
          <p className="text-xs text-gray-500 mt-1">Customer Intelligence Platform</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-gray-200">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              {/* Search */}
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search customers, tickets, invoices..."
                  className="pl-10"
                />
              </div>

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Customer 360</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900">{customerData.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              {/* User Avatar */}
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">Agent: David Miller</p>
                  <p className="text-xs text-gray-500">Customer Success</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Customer Quick Info Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={customerData.profileImage} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm">{customerData.name}</p>
                <p className="text-xs text-gray-500">{customerData.id}</p>
              </div>
            </div>

            <div className="h-8 w-px bg-gray-200"></div>

            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-gray-500">Status: </span>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
              </div>
              <div>
                <span className="text-gray-500">Segment: </span>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">{customerData.segment}</Badge>
              </div>
              <div>
                <span className="text-gray-500">LTV: </span>
                <span className="text-gray-900">${customerData.lifetimeValue.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-500">Risk Score: </span>
                <span className={customerData.riskScore < 30 ? "text-green-600" : customerData.riskScore < 60 ? "text-yellow-600" : "text-red-600"}>
                  {customerData.riskScore}/100
                </span>
              </div>
              <div>
                <span className="text-gray-500">NPS: </span>
                <span className="text-green-600">{customerData.nps}/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
