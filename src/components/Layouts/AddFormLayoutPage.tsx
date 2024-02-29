import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import useAddPropertyStore from "../store/AddProperty/addPropertyBasicStore";

const AddFormLayoutPage = () => {
  const navigate = useNavigate();
  const propertyName = useAddPropertyStore((s) => s.propertyName);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (!propertyName && window.location.pathname !== "/admin/properties/add") {
      navigate("/admin/properties/add");
    }
  }, [propertyName, navigate]);

  return (
    <Flex flexDir="column" gap={8} alignItems="center">
      <Outlet />
      <ScrollRestoration />
    </Flex>
  );
};

export default AddFormLayoutPage;
