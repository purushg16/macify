import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import BrandLayout from "./Layouts/BrandLayout";
import AdminPage from "./Layouts/AdminLayout";
import LandingPage from "./Admin/pages/LandingPage";
import DashBoardPage from "./Admin/pages/DashBoardPage";
import CalendarPage from "./Admin/pages/CalendarPage";
import PropertyPage from "./Admin/pages/PropertyPage";
import CaretakerPage from "./Admin/pages/CaretakerPage";
import HotelBooking from "./Booking/HotelBooking";
import BookingLayout from "./Booking/BookingLayout";
import AddPropertyPage from "./Admin/pages/AddProperty/AddPropertyPage";
import AddFormLayoutPage from "./Layouts/AddFormLayoutPage";

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
      { path: "calendar", element: <CalendarPage /> },
      { path: "properties", element: <PropertyPage /> },
      { path: "caretaker", element: <CaretakerPage /> },

      {
        path: "add",
        element: <AddFormLayoutPage />,
        children: [{ path: "property", element: <AddPropertyPage /> }],
      },
    ],
  },
  {
    path: "/booking",
    element: <BookingLayout />,
    children: [{ index: true, element: <HotelBooking /> }],
  },
]);

export default router;
