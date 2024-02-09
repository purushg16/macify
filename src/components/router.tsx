import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import Layout from "./Brand/pages/Layout";
import LayoutPage from "./App/pages/LayoutPage";
import LandingPage from "./App/pages/LandingPage";
import DashBoardPage from "./App/pages/DashBoardPage";
import CalendarPage from "./App/pages/CalendarPage";
import PropertyPage from "./App/pages/PropertyPage";
import CaretakerPage from "./App/pages/CaretakerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/app",
    element: <LayoutPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "dashboard", element: <DashBoardPage /> },
      { path: "calender", element: <CalendarPage /> },
      { path: "property", element: <PropertyPage /> },
      { path: "caretaker", element: <CaretakerPage /> },
    ],
  },
]);

export default router;
