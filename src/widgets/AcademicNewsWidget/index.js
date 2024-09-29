import { Cards } from "@/components";
import { AcademicNewsWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_LEFT, MOTION_FADE_RIGHT } from "@/utils/functions/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Displays, Icons } from "@/components";

const responsive = {
  // when window width is >= 640px
  0: {
    slidesPerView: 2,
  },
  // when window width is >= 768px
  540: {
    slidesPerView: 2,
  },
  820: {
    slidesPerView: 2,
  },
  920: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2,
  },
};

const AcademicNewsWidget = () => {
  const { t } = useTranslation("menu");
  return (
    <AcademicNewsWidgetContainer>
      <div className="academic_news_container mb_68">
        <div className="academic_topic_block">
          <div className="academic_topic_wrap">
            <Displays.TopicViewAll
              title={t("ข่าวสารวิชาการ", { ns: "home" })}
              btnLabel="ดูข่าวสารทั้งหมด"
            />
          </div>
        </div>
        <MOTION_FADE_LEFT>
          <div className="acadmic_news_list_block">
            <Swiper
              loop={true}
              breakpoints={responsive}
              modules={[Navigation]}
              spaceBetween={69}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="mySwiper"
            >
              {NEW_1_LIST.map((e, i) => (
                <SwiperSlide key={i} className="new_item_wrap">
                  <Cards.NewsItem {...e} />
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
              <Icons.CarouselArrowLeft />
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
              <Icons.CarouselArrowRight />
            </div>
          </div>
        </MOTION_FADE_LEFT>
      </div>
      <div className="academic_news_container">
        <div className="academic_topic_wrap">
          <Displays.TopicViewAll
            title={t("ข่าวปักหมุด", { ns: "home" })}
            btnLabel="ดูข่าวสารทั้งหมด"
          />
        </div>
        <MOTION_FADE_RIGHT>
          <div className="acadmic_news_list_block">
            <Swiper
              loop={true}
              breakpoints={responsive}
              modules={[Navigation]}
              spaceBetween={69}
              navigation={{
                nextEl: ".custom-next2",
                prevEl: ".custom-prev2",
              }}
              className="mySwiper"
            >
              {NEW_2_LIST.map((e, i) => (
                <SwiperSlide key={i} className="new_item_wrap">
                  <Cards.NewsItem {...e} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Arrows */}
            <div
              className="custom-prev2"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "38%",
                left: "-60px",
                zIndex: "10",
              }}
            >
              <Icons.CarouselArrowLeft />
            </div>
            <div
              className="custom-next2"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "38%",
                right: "-60px",
                zIndex: "122",
              }}
            >
              <Icons.CarouselArrowRight />
            </div>
          </div>
        </MOTION_FADE_RIGHT>
      </div>
    </AcademicNewsWidgetContainer>
  );
};

const NEW_1_LIST = [
  {
    src: "/images/mockups/new-1.jpg",
    created_date: "may 2, 2024 / blog",
    topic:
      "ประกาศรายชื่อผู้มีสิทธิเข้ารับการคัดเลือกบุคคลเพื่อบรรจุเป็นพนักงานมหาวิทยาลัย ตำแหน่งอาจารย์ ด้านโลจิสติกส์",
  },
  {
    src: "/images/mockups/new-2.jpg",
    created_date: "may 2, 2024 / blog",
    topic: "ข่าวสถิติการให้บริการ งานห้องสมุด ประจำเดือน มิถุนายน พ.ศ. 2567",
  },
  {
    src: "/images/mockups/new-1.jpg",
    created_date: "may 2, 2024 / blog",
    topic:
      "ประกาศรายชื่อผู้มีสิทธิเข้ารับการคัดเลือกบุคคลเพื่อบรรจุเป็นพนักงานมหาวิทยาลัย ตำแหน่งอาจารย์ ด้านโลจิสติกส์",
  },
];

const NEW_2_LIST = [
  {
    src: "/images/mockups/new-3.jpg",
    created_date: "may 2, 2024 / blog",
    topic: "B-U-R-A-P-H-A “ค่านิยม” ของมหาวิทยาลัยบูรพา",
  },
  {
    src: "/images/mockups/new-4.jpg",
    created_date: "may 2, 2024 / blog",
    topic: "สร้างคุณค่าให้ป่าและเป็นแหล่งศึกษาด้านธรรมชาติวิทยา",
  },
  {
    src: "/images/mockups/new-3.jpg",
    created_date: "may 2, 2024 / blog",
    topic: "B-U-R-A-P-H-A “ค่านิยม” ของมหาวิทยาลัยบูรพา",
  },
];

export default AcademicNewsWidget;
