import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import BrandLayout from "./Layouts/BrandLayout";
import AdminLayout from "./Layouts/AdminLayout";
import LandingPage from "./Admin/pages/LandingPage";
import DashBoardPage from "./Admin/pages/DashBoardPage";
import CalendarPage from "./Admin/pages/CalendarPage";
import PropertyPage from "./Admin/pages/PropertyPage";
import CaretakerPage from "./Admin/pages/CaretakerPage";
import HotelBooking from "./Booking/HotelBooking";
import BookingLayout from "./Booking/BookingLayout";
import AddFormLayoutPage from "./Layouts/AddFormLayoutPage";
import NamePage from "./Admin/pages/AddProperty/NamePage";
import AmenitiesPages from "./Admin/pages/AddProperty/AmenitiesPages";
import CheckingTimePage from "./Admin/pages/AddProperty/CheckingTimePage";
import ManagerPage from "./Admin/pages/AddProperty/ManagerPage";
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
      { index: true, element: <LandingPage /> },
      { path: "dashboard", element: <DashBoardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "caretaker", element: <CaretakerPage /> },

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
              { path: "7", element: <ManagerPage /> },
              { path: "8", element: <SuccessfulPage /> },
            ],
          },
        ],
      },

      // {
      //   path: "add",
      //   element: <AddFormLayoutPage />,
      //   children: [
      //     {
      //       path: "property",
      //       element: <AddPropertyPage />,
      //       children: [
      //         { index: true, element: <NamePage /> },
      //         { path: "2", element: <RentalPage /> },
      //         { path: "3", element: <RoomDetailsPage /> },
      //         { path: "4", element: <CheckingTimePage /> },
      //         { path: "5", element: <AmenitiesPages /> },
      //         { path: "6", element: <PropertyAddressPage /> },
      //         { path: "7", element: <ManagerPage /> },
      //         { path: "8", element: <SuccessfulPage /> },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "/booking",
    element: <BookingLayout />,
    children: [{ index: true, element: <HotelBooking /> }],
  },
]);

export default router;
