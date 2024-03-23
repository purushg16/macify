import { Swiper, SwiperSlide } from "swiper/react";
import AddSlide from "./AddSlide";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@chakra-ui/react";
import property from "../../../../assets/app/Dashboard/property.png";
import manager from "../../../../assets/app/Dashboard/manager.png";
import schedule from "../../../../assets/app/Dashboard/schedule.png";
import { useNavigate } from "react-router-dom";

export default function AddSlider() {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AddSlide image={property} bottom={-43}>
            <Button
              colorScheme="primary"
              onClick={() => navigate("properties/add")}
            >
              Add Property
            </Button>
          </AddSlide>
        </SwiperSlide>
        <SwiperSlide>
          <AddSlide image={manager} bottom={-100}>
            <Button colorScheme="primary" onClick={() => navigate("manager")}>
              Add Manager
            </Button>
          </AddSlide>
        </SwiperSlide>
        <SwiperSlide>
          <AddSlide image={schedule} bottom={0}>
            <Button
              colorScheme="primary"
              onClick={() => navigate("properties")}
            >
              {" "}
              Add Booking{" "}
            </Button>
          </AddSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
