import { Box, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddPropertyButton = () => {
  const navigate = useNavigate();
  return (
    <Flex
      px={4}
      borderRadius={5}
      bg="#f6f6f6"
      border="1px solid"
      borderColor="gray.100"
      my={4}
      w="max-content"
      cursor="pointer"
      _hover={{ bg: "gray.50" }}
      transition="all 0.7s"
      onClick={() => navigate("/admin/properties/add/")}
      align="center"
    >
      <Box bg="white" borderRadius={10} mx={2} padding={{ base: 4, md: 6 }}>
        <IconButton
          bg="none"
          border="1px solid"
          borderColor="gray.100"
          _hover={{ bg: "gray.100" }}
          aria-label="addproperty-btn"
          icon={<Icon as={IoIosAddCircleOutline} />}
        />
      </Box>

      <Box p={8}>
        <Heading fontSize="2xl">
          Add New <br />
          Property
          <Icon as={BsArrowRight} ml={2} transform="rotate(320deg)" />
        </Heading>
      </Box>
    </Flex>
  );
};

export default AddPropertyButton;
