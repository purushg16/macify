import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import BrandLayout from "./Layouts/BrandLayout";
import AdminLayout from "./Layouts/AdminLayout";
import DashBoardPage from "./Admin/pages/DashBoardPage";
import CalendarPage from "./Admin/pages/CalendarPage";
import PropertyPage from "./Admin/pages/PropertyPage";
import ManagerPage from "./Admin/pages/ManagerPage";
import HotelBooking from "./Booking/HotelBooking";
import BookingLayout from "./Booking/BookingLayout";
import AddFormLayoutPage from "./Layouts/AddFormLayoutPage";
import NamePage from "./Admin/pages/AddProperty/NamePage";
import AmenitiesPages from "./Admin/pages/AddProperty/AmenitiesPages";
import CheckingTimePage from "./Admin/pages/AddProperty/CheckingTimePage";
import AssignManagerPage from "./Admin/pages/AddProperty/AssignManagerPage";
import PropertyAddressPage from "./Admin/pages/AddProperty/PropertyAddressPage";
import RentalPage from "./Admin/pages/AddProperty/RentalPage";
import RoomDetailsPage from "./Admin/pages/AddProperty/RoomDetailsPage";
import SuccessfulPage from "./Admin/pages/AddProperty/SuccessfulPage";
import PropertiesLayout from "./Layouts/PropertiesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BrandLayout />,
    // errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashBoardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "manager", element: <ManagerPage /> },

      {
        path: "properties",
        element: <PropertiesLayout />,
        children: [
          { index: true, element: <PropertyPage /> },
          {
            path: "add",
            element: <AddFormLayoutPage />,
            children: [
              { index: true, element: <NamePage /> },
              { path: "2", element: <RentalPage /> },
              { path: "3", element: <RoomDetailsPage /> },
              { path: "4", element: <CheckingTimePage /> },
              { path: "5", element: <AmenitiesPages /> },
              { path: "6", element: <PropertyAddressPage /> },
              { path: "7", element: <AssignManagerPage /> },
              { path: "8", element: <SuccessfulPage /> },
            ],
          },
        ],
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
