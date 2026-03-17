import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";
import { CustomerOverview } from "./components/CustomerOverview";
import { AccountDetails } from "./components/AccountDetails";
import { ServicesPlans } from "./components/ServicesPlans";
import { UsageAnalytics } from "./components/UsageAnalytics";
import { BillingPayments } from "./components/BillingPayments";
import { SupportHistory } from "./components/SupportHistory";
import { CustomerJourney } from "./components/CustomerJourney";
import { Analytics } from "./components/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: CustomerOverview },
      { path: "account", Component: AccountDetails },
      { path: "services", Component: ServicesPlans },
      { path: "usage", Component: UsageAnalytics },
      { path: "billing", Component: BillingPayments },
      { path: "support", Component: SupportHistory },
      { path: "journey", Component: CustomerJourney },
      { path: "analytics", Component: Analytics },
    ],
  },
]);
