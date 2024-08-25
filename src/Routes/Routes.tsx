import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../components/CompanyProfile/Companyprofile";
import IncomeStatement from "../components/IncomeStatement/IncomeStatement";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import BalanceSheet from "../components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../components/CashFlowStatement/CashFlowStatement";
import ContactPage from "../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/InvestIQ",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/InvestIQ/search", element: <SearchPage /> },
      { path: "/InvestIQ/design-guide", element: <DesignGuide /> },
      { path: "/InvestIQ/contact", element: <ContactPage /> },
      {
        path: "/InvestIQ/company/:ticker",
        element: <CompanyPage />,
        children: [
          {
            path: "/InvestIQ/company/:ticker/company-profile",
            element: <CompanyProfile />,
          },
          {
            path: "/InvestIQ/company/:ticker/income-statement",
            element: <IncomeStatement />,
          },
          {
            path: "/InvestIQ/company/:ticker/balance-sheet",
            element: <BalanceSheet />,
          },
          {
            path: "/InvestIQ/company/:ticker/cashflow-statement",
            element: <CashFlowStatement />,
          },
        ],
      },
    ],
  },
]);
