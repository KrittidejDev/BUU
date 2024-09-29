import { SAMouWidgetContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "@/components";

const responsive = {
  // when window width is >= 640px
  0: {
    slidesPerView: 5,
  },
  // when window width is >= 768px
  540: {
    slidesPerView: 5,
  },
  820: {
    slidesPerView: 5,
  },
  930: {
    slidesPerView: 5,
  },
  1024: {
    slidesPerView: 5,
  },
};

const SAMouWidget = () => {
  return (
    <SAMouWidgetContainer>
      <div className="mou_title">
        <div className="s_label">S</div>
        <div className="and_label">&</div>
        <div className="a_label">A</div>
        <div className="mou_label">MOU</div>
      </div>
      <div className="carousel_block">
        <Swiper
          loop={true}
          breakpoints={responsive}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          spaceBetween={69}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper"
        >
          {MOU_LIST.map((e, i) => (
            <SwiperSlide key={i} className="pd_item_wrap">
              <img className="mou_img" alt="mou" src={e} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Arrows */}
        <div
          className="custom-prev"
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "38%",
            left: "-60px",
            zIndex: "10",
          }}
        >
          <Icons.CarouselArrowLeftCircle />
        </div>
        <div
          className="custom-next"
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "38%",
            right: "-60px",
            zIndex: "122",
          }}
        >
          <Icons.CarouselArrowRightCircle />
        </div>
      </div>
    </SAMouWidgetContainer>
  );
};

const MOU_LIST = [
  "/images/icons/mou-1.png",
  "/images/icons/mou-2.png",
  "/images/icons/mou-3.png",
  "/images/icons/mou-4.png",
  "/images/icons/mou-5.png",
  "/images/icons/mou-3.png",
];

export default SAMouWidget;
