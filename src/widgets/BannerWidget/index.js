import { BannerWidgetContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NavbarMenuWidget } from "@/widgets";

const BannerWidget = ({ data, node, isNotMenu }) => {
  return (
    <BannerWidgetContainer>
      {!isNotMenu && (
        <div className="navbar_menu_wrap">
          <NavbarMenuWidget />
        </div>
      )}
      <Swiper
        className="mySwiper"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={3000}
        slidesPerView={"auto"}
        modules={[Autoplay]}
      >
        {data &&
          data.map((e, i) => (
            <SwiperSlide key={i}>
              <img className="banner_img" alt={e.alt} src={e.imgPath} />
            </SwiperSlide>
          ))}
      </Swiper>
      {node}
    </BannerWidgetContainer>
  );
};

export default BannerWidget;
