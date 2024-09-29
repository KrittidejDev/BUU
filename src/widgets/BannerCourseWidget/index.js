import { BannerCourseWidgetContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NavbarMenuWidget } from "@/widgets";

const BannerCourseWidget = ({ data, node, isNotMenu }) => {
  return (
    <BannerCourseWidgetContainer>
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
            <SwiperSlide key={i} className="banner_item">
              <img className="banner_img" alt={e.alt} src={e.imgPath} />
              <div className="bn_content_block">
                <div className="bn_label_p1">
                  {e.label1}
                  <div className="bn_underline" />
                </div>
                <div className="bnp2p3_block">
                  <div className="bn_label_p2">{e.label2}</div>
                  <div className="bn_label_p3">{e.label3}</div>
                </div>
                <div className="bn_label_p4">
                  {e.label4 &&
                    (typeof e.label4 === "string"
                      ? e.label4
                      : e.label4.map((f, j) => <div key={j}>{f}</div>))}
                </div>
                <div className="bn_label_p5">
                  <div className="bn_underline_p5" />
                  {e.label5}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {node}
    </BannerCourseWidgetContainer>
  );
};

export default BannerCourseWidget;
