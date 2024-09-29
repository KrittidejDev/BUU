import { CourseCarouselWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Cards, Icons } from "@/components";

const responsive = {
  // when window width is >= 640px
  0: {
    slidesPerView: 4,
  },
  // when window width is >= 768px
  540: {
    slidesPerView: 4,
  },
  820: {
    slidesPerView: 4,
  },
  930: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 4,
  },
};

const CourseCarouselWidget = () => {
  const { t } = useTranslation("menu");

  return (
    <CourseCarouselWidgetContainer>
      <div className="course_carousel_contaienr">
        <Swiper
          loop={true}
          breakpoints={responsive}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={33}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper"
        >
          {COURSE_LIST.map((e, i) => (
            <SwiperSlide key={i} className="course_item">
              <Cards.CourseMenuItem label={e.label} />
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
          <Icons.CarouselArrowLeftCircle
            width="30"
            height="30"
            bgColor="#404040"
          />
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
          <Icons.CarouselArrowRightCircle
            width="30"
            height="30"
            bgColor="#404040"
          />
        </div>
      </div>
    </CourseCarouselWidgetContainer>
  );
};

const COURSE_LIST = [
  {
    key: "all",
    label: "หลักสูตรทั้งหมด",
  },
  {
    key: "1",
    label: "หลักสูตรวิทยาศาสตรบัณฑิต",
  },
  {
    key: "2",
    label: "หลักสูตรศิลปศาสตรบัณฑิต",
  },
  {
    key: "3",
    label: "หลักสูตรบริหารธุรกิจบัณฑิต",
  },
  {
    key: "2",
    label: "หลักสูตรศิลปศาสตรบัณฑิต",
  },
];

export default CourseCarouselWidget;
