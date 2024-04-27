import { useLocation, Link } from "react-router-dom";
import { useGetNotificationCount } from "../../../hooks/useAdmin";
import NotificationIcon from "../../../../assets/icons/notification.json";
import IconWrapper from "../Icons";

const NotificationButton = () => {
  const location = useLocation().pathname.split("/")[2];
  const { data: notificationCount } = useGetNotificationCount(true);

  return (
    <Link to="notifications">
      <IconWrapper
        count={notificationCount}
        icon={NotificationIcon}
        active={location === "notifications"}
        bg="#f6f6f6"
      />
    </Link>
  );
};

export default NotificationButton;
