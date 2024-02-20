import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import Layout from "./Brand/pages/Layout";
import AdminPage from "./Layouts/AdminLayout";
import LandingPage from "./App/pages/LandingPage";
import DashBoardPage from "./App/pages/DashBoardPage";
import CalendarPage from "./App/pages/CalendarPage";
import PropertyPage from "./App/pages/PropertyPage";
import CaretakerPage from "./App/pages/CaretakerPage";
import HotelBooking from "./App/pages/Booking/HotelBooking";
import BookingLayout from "./App/pages/Booking/BookingLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/app",
    element: <AdminPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "dashboard", element: <DashBoardPage /> },
      { path: "calender", element: <CalendarPage /> },
      { path: "property", element: <PropertyPage /> },
      { path: "caretaker", element: <CaretakerPage /> },
    ],
  },
  {
    path: "/booking",
    element: <BookingLayout />,
    children: [{ index: true, element: <HotelBooking /> }],
  },
]);

export default router;
