import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Brand/pages/HomePage";
import BrandLayout from "./Layouts/BrandLayout";
import AdminLayout from "./Layouts/AdminLayout";
import DashBoardPage from "./Admin/pages/DashBoardPage";
import CalendarPage from "./Admin/pages/CalendarPage";
import PropertyPage from "./Admin/pages/PropertyPage";
import ManagerPage from "./Admin/pages/ManagerPage";
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
import ManagerAccountPage from "./Admin/pages/Manager/ManagerAccountPage";
import EMailVerificationPage from "./Admin/pages/Authentication/EMailVerificationPage";
import UnAuthorizedPage from "./Admin/pages/UnAuthorizedPage";
import ManagerLayout from "./Layouts/ManagerLayout";
import ApproveBookingPage from "./Admin/pages/ApproveBookingPage";
import ScheduleContainer from "./Admin/elements/SingleSchedular/ScheduleContainer";
import { SingleCalendarPage } from "./Admin/pages/SingleCalendarPage";
import ManagerLoginPage from "./Admin/pages/Authentication/ManagerLoginPage";
import EditPropertyPage from "./Admin/pages/EditPropertyPage";
import NumberOfGuestsForm from "./Admin/elements/Booking/NumberOfGuestsForm";
import ReportTimePage from "./Admin/pages/CustomerBooking/ReportTimePage";
import CustomerRoomDetailsPage from "./Admin/pages/CustomerBooking/CustomerRoomDetailsPage";
import FinalPage from "./Admin/pages/CustomerBooking/FinalPage";
import CustomerFileUpload from "./Admin/elements/Booking/CustomerFileUpload";
import GuestDetailsPage from "./Admin/pages/CustomerBooking/GuestDetailsPage";
import RoomAssignPage from "./Admin/pages/CustomerBooking/RoomAssignPage";
import EditBookingPage from "./Admin/pages/EditBookingPage";
import AddRoomsPage from "./Admin/pages/AddRoomsPage";
import AddBedsPage from "./Admin/pages/AddBedsPage";
import HostelCalendarPage from "./Admin/pages/HostelCalendarPage";
import ManagerDashBoardPage from "./Admin/pages/Manager/ManagerDashboad";
import BookingIndexPage from "./Admin/elements/Booking/BookingIndexPage";

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
      { path: "mLogin", element: <ManagerLoginPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashBoardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "calendar/single", element: <SingleCalendarPage /> },
      { path: "calendar/multi", element: <ScheduleContainer /> },
      { path: "calendar/hostel", element: <HostelCalendarPage /> },
      { path: "manager", element: <ManagerPage /> },

      { path: "notifications", element: <AdminNotificationsPage /> },
      { path: "approveBooking/:id", element: <ApproveBookingPage /> },
      { path: "editBooking/:bookingId", element: <EditBookingPage /> },

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
          { path: "edit/:id", element: <EditPropertyPage /> },
          { path: "addRooms/:id", element: <AddRoomsPage /> },
          { path: "addBeds/:id", element: <AddBedsPage /> },
        ],
      },
    ],
  },
  { path: "/unauthorized", element: <UnAuthorizedPage /> },
  {
    path: "/manager",
    element: <ManagerLayout />,
    children: [
      { index: true, element: <ManagerDashBoardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "account", element: <ManagerAccountPage /> },
      { path: "calendar/single", element: <SingleCalendarPage manager /> },
      { path: "calendar/multi", element: <ScheduleContainer manager /> },
      { path: "calendar/hostel", element: <HostelCalendarPage manager /> },
    ],
  },
  {
    path: "/booking/:propertyId",
    element: <BookingLayout />,
    children: [
      { index: true, element: <BookingIndexPage /> },
      { path: "1", element: <NumberOfGuestsForm /> },
      { path: "2", element: <CustomerFileUpload /> },
      { path: "3", element: <ReportTimePage /> },
      { path: "4", element: <GuestDetailsPage /> },
      { path: "5", element: <CustomerRoomDetailsPage /> },
      { path: "6", element: <RoomAssignPage /> },
      { path: "7", element: <FinalPage /> },
    ],
  },
]);

export default router;
