import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import BrandLayout from "./Layouts/BrandLayout";
import AdminPage from "./Layouts/AdminLayout";
import LandingPage from "./Admin/pages/Admin/LandingPage";
import DashBoardPage from "./Admin/pages/Admin/DashBoardPage";
import CalendarPage from "./Admin/pages/Admin/CalendarPage";
import PropertyPage from "./Admin/pages/Admin/PropertyPage";
import CaretakerPage from "./Admin/pages/Admin/CaretakerPage";
import HotelBooking from "./Admin/pages/Booking/HotelBooking";
import BookingLayout from "./Admin/pages/Booking/BookingLayout";
import AddPropertyPage from "./Admin/pages/Admin/AddProperty/AddPropertyPage";
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
