import { useEffect, useState } from "react";
import { AboutUsCarouselWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { usePathname } from "next/navigation";
import { Cards, Icons } from "@/components";
import Link from "next/link";

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

const AboutUsCarouselWidget = () => {
  const pathName = usePathname();
  const { t } = useTranslation(["menu"]);

  const [_active, _setActive] = useState();

  useEffect(() => {
    if (pathName) {
      switch (pathName) {
        case "/":
          _setActive("/");
          break;
        default:
          const split = pathName.split("/");
          _setActive(`${split[split.length - 1]}`);
          break;
      }
    }
  }, [pathName]);

  return (
    <AboutUsCarouselWidgetContainer>
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
              <Link href={e.routePath}>
                <Cards.CourseMenuItem
                  label={e.label}
                  active={_active === e.key}
                />
              </Link>
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
    </AboutUsCarouselWidgetContainer>
  );
};

const COURSE_LIST = [
  {
    key: "history",
    label: "ประวัติความเป็นมา",
    routePath: "/about-us/history",
  },
  {
    key: "faculty-board",
    label: "คณะกรรมการประจำคณะ",
    routePath: "/about-us/faculty-board",
  },
  {
    key: "exective-committee",
    label: "คณะผู้บริหาร",
    routePath: "/about-us/exective-committee",
  },
  {
    key: "staff",
    label: "คณาจารย์",
    routePath: "/about-us/staff",
  },
  {
    key: "professor-at",
    label: "สาขาวิชาเทคโนโลยี การเกษตร",
    routePath: "/about-us/professor-at",
  },
  {
    key: "professor-it-ds",

    label: "สาขาวิชาเทคโนโลยีสารสนเทศ และวิทยาการข้อมูล",
    routePath: "/about-us/professor-it-ds",
  },
  {
    key: "professor-ba",

    label:
      "สาขาวิชาบริหารธุรกิจ และสาขาวิชาการจัดการ โลจิสติกส์และการค้าชายแดน",
    routePath: "/about-us/professor-ba",
  },
  {
    key: "professor-ebc",
    label: "สาขาวิชาภาษาอังกฤษ เพื่อการสื่อสารทางธุรกิจ",
    routePath: "/about-us/professor-ebc",
  },
];

export default AboutUsCarouselWidget;
