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
import LoginPage from "./Admin/pages/Authentication/LoginPage";
import AuthLayout from "./Layouts/AuthLayout";
import RegisterPage from "./Admin/pages/Authentication/RegisterPage";
import ForgotPasswordPage from "./Admin/pages/Authentication/ForgotPasswordPage";
import AdminNotificationsPage from "./Admin/pages/AdminNotificationsPage";
import ManagerNofiticationsPage from "./Admin/pages/ManagerNofiticationsPage";
import EMailVerificationPage from "./Admin/pages/Authentication/EMailVerificationPage";
import UnAuthorizedPage from "./Admin/pages/UnAuthorizedPage";
import ManagerLayout from "./Layouts/ManagerLayout";
import ApproveBookingPage from "./Admin/pages/ApproveBookingPage";
import ScheduleContainer from "./Admin/elements/SingleSchedular/ScheduleContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BrandLayout />,
    // errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "verifyEmail", element: <EMailVerificationPage /> },
      { path: "forgotPassword", element: <ForgotPasswordPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashBoardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "calendar/single", element: <ScheduleContainer /> },
      { path: "calendar/multi", element: <CalendarPage /> },
      { path: "calendar/hostel", element: <CalendarPage /> },
      { path: "manager", element: <ManagerPage /> },

      { path: "notifications", element: <AdminNotificationsPage /> },
      { path: "approveBooking/:id", element: <ApproveBookingPage /> },

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
              { path: "success", element: <SuccessfulPage /> },
            ],
          },
        ],
      },
    ],
  },
  { path: "/unauthorized", element: <UnAuthorizedPage /> },
  {
    path: "/manager",
    element: <ManagerLayout />,
    children: [
      { index: true, element: <DashBoardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "notifications", element: <ManagerNofiticationsPage /> },
    ],
  },
  {
    path: "/booking",
    element: <BookingLayout />,
    children: [{ index: true, element: <HotelBooking /> }],
  },
]);

export default router;
