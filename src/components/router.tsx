import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import BrandLayout from "./Layouts/BrandLayout";
import AdminPage from "./Layouts/AdminLayout";
import LandingPage from "./App/pages/Admin/LandingPage";
import DashBoardPage from "./App/pages/Admin/DashBoardPage";
import CalendarPage from "./App/pages/Admin/CalendarPage";
import PropertyPage from "./App/pages/Admin/PropertyPage";
import CaretakerPage from "./App/pages/Admin/CaretakerPage";
import HotelBooking from "./App/pages/Booking/HotelBooking";
import BookingLayout from "./App/pages/Booking/BookingLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BrandLayout />,
    // errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "dashboard", element: <DashBoardPage /> },
      { path: "calender", element: <CalendarPage /> },
      { path: "properties", element: <PropertyPage /> },
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
