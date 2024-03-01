import {
  VStack,
  InputGroup,
  Text,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../elements/Title";
import { useVerifyEmail } from "../../../hooks/useAuth";

const EMailVerificationPage = () => {
  const email = localStorage.getItem("emailToBeVerified");
  const [otp, setOTP] = useState("");
  const [isLoading, setLoading] = useState(false);

  const callback = () => setLoading(false);
  const { mutate, isSuccess, isError, error } = useVerifyEmail(callback);

  const verifyEmail = () => {
    setLoading(true);
    if (email) {
      mutate({ email, otp });

      if (isSuccess) navigate("/admin");
      else if (isError) console.log(error);
    }
  };
  const navigate = useNavigate();

  if (!email) {
    navigate("/auth/verifyEmail");
    return null;
  }

  return (
    <>
      <VStack my={4} mb={8}>
        <InputGroup>
          <Input
            placeholder="Mail*"
            bg="gray.50"
            mb={4}
            type="email"
            pr="4.5rem"
            value={localStorage.getItem("emailToBeVerified")! || ""}
            isDisabled
          />
          <InputRightElement top={0}>@</InputRightElement>
        </InputGroup>

        <Input
          placeholder="OTP*"
          bg="gray.50"
          mb={4}
          value={otp || ""}
          onChange={(e) => setOTP(e.target.value!)}
        />
      </VStack>

      <Title
        heading="Enter OTP"
        subtitle="We have just sent an OTP to your email"
      />

      <Button
        colorScheme="primary"
        my={4}
        px={8}
        onClick={verifyEmail}
        isDisabled={!otp}
        isLoading={isLoading}
      >
        Verify
      </Button>

      <Text mt={8} fontSize="sm" color="gray">
        Got no OTP?{" "}
        <Link
          onClick={() => localStorage.removeItem("emailToBeVerified")}
          to="/auth/register"
          style={{
            color: "rgb(82, 83, 235)",
            textDecoration: "underline",
          }}
        >
          Try once more!
        </Link>
      </Text>

      <Text mb={4} fontSize="sm" color="gray">
        Already an user,{" "}
        <Link
          to="/auth/login"
          style={{
            color: "rgb(82, 83, 235)",
            textDecoration: "underline",
          }}
        >
          Login
        </Link>{" "}
        here!
      </Text>
    </>
  );
};

export default EMailVerificationPage;
