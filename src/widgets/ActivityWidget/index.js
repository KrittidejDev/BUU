import { ActivityWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import { Cards, Displays, Icons } from "@/components";

const responsive = {
  // when window width is >= 640px
  0: {
    slidesPerView: 3,
  },
  // when window width is >= 768px
  540: {
    slidesPerView: 3,
  },
  820: {
    slidesPerView: 3,
  },
  930: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 3,
  },
};

const ActivityWidget = () => {
  const { t } = useTranslation(["common", "menu"]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <ActivityWidgetContainer>
      <div className="activity_container">
        <div className="topic_wrap">
          <Displays.TopicViewAll
            title={"กิจกรรม"}
            btnLabel="ดูกิจกรรมทั้งหมด"
          />
        </div>
        <MOTION_FADE_UP>
          <div className="activity_list_block">
            <Swiper
              loop={true}
              breakpoints={responsive}
              modules={[Navigation, Pagination]}
              pagination={pagination}
              spaceBetween={69}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="mySwiper"
            >
              {ACTIVITY_LIST.map((e, i) => (
                <SwiperSlide key={i} className="activity_item_wrap">
                  <Cards.ActivityItem {...e} />
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
        </MOTION_FADE_UP>
        <div className="btn_read_all">
          {t("อ่านข่าวทั้งหมด", { ns: "common" })}
        </div>
      </div>
    </ActivityWidgetContainer>
  );
};

const ACTIVITY_LIST = [
  {
    date: "24/05/2024",
    time: "13.00 - 15.00",
    location: "ณ หอประชุมคณะวิทยาศาสตร์",
    topic: "โครงการ ส่งเสริมการสอบคุณวุฒิ วิชาชีพโลจิสติกส์ 2566",
    src: "/images/mockups/act-1.jpg",
  },
  {
    date: "22/06/2024",
    time: "13.00 - 15.00",
    location: "ณ หอประชุมคณะวิทยาศาสตร์",
    topic: "เดินหน้าพัฒนาอ้อยพันธุ์ด้วย ระบบ IOT สู่อุตสาหกรรมน้ำตาล",
    src: "/images/mockups/act-2.jpg",
  },
  {
    date: "19/07/2024",
    time: "13.00 - 15.00",
    location: "ณ หอประชุมคณะวิทยาศาสตร์",
    topic: "ม.บูรพา เดินหน้าพัฒนาการศึกษาระดับมัธยม จ.ตราด",
    src: "/images/mockups/act-3.jpg",
  },
  {
    date: "22/06/2024",
    time: "13.00 - 15.00",
    location: "ณ หอประชุมคณะวิทยาศาสตร์",
    topic: "เดินหน้าพัฒนาอ้อยพันธุ์ด้วย ระบบ IOT สู่อุตสาหกรรมน้ำตาล",
    src: "/images/mockups/act-2.jpg",
  },
];

export default ActivityWidget;
