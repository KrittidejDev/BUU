import { useState } from "react";
import { InfoSysCurrentStudetnWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import { BannerWidget } from "@/widgets";
import { Cards } from "@/components";

const InfoSysCurrentStudetnWidget = () => {
  const { t } = useTranslation("menu");

  const [_filterValue, _setFilterValue] = useState("1");

  const _handleClickFilter = (e) => {
    _setFilterValue(e);
  };

  return (
    <InfoSysCurrentStudetnWidgetContainer>
      <BannerWidget data={BANNER_LIST} />
      <div className="line_horizontal" />
      <div className="info_sys_container">
        <MOTION_FADE_UP>
          <div className="preview_wrap">
            <Cards.InfoSystemPreview
              borderColor="#F89925"
              imgPath="/images/backgrounds/doc-info-sys.jpg"
              memberType="สำหรับนิสิต"
            />
          </div>
        </MOTION_FADE_UP>
        <MOTION_FADE_UP>
          <div className="filter_block">
            <div
              className={`filter_item ${_filterValue === "1" ? "active" : ""}`}
              onClick={() => _handleClickFilter("1")}
            >
              ระบบสารสนเทศที่ใช้บ่อย
            </div>
            <div
              className={`filter_item ${_filterValue === "2" ? "active" : ""}`}
              onClick={() => _handleClickFilter("2")}
            >
              ระบบสารสนเทศทั้งหมด
            </div>
          </div>
        </MOTION_FADE_UP>

        {_filterValue === "1" && (
          <MOTION_FADE_UP>
            <div className="info_system_list">
              {INFO_SYSTEM_1.map((e, i) => (
                <div key={i} className="infoty_system_item_wrap">
                  <Cards.InfoSysItemType1 src={e.src} label={e.label} />
                </div>
              ))}
            </div>
          </MOTION_FADE_UP>
        )}
        {_filterValue === "2" && (
          <MOTION_FADE_UP>
            <div className="info_system_list2">
              {INFO_SYSTEM_2.map((e, i) => (
                <div key={i} className="infoty_system_item_wrap2">
                  <Cards.InfoSysItemType2 src={e.src} label={e.label} />
                </div>
              ))}
            </div>
          </MOTION_FADE_UP>
        )}
      </div>
    </InfoSysCurrentStudetnWidgetContainer>
  );
};

const BANNER_LIST = [
  {
    imgPath: "/images/backgrounds/banner-info-sys-1.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/backgrounds/banner-info-sys-1.jpg",
    alt: "Buu",
  },
];

const INFO_SYSTEM_1 = [
  {
    label: "ระบบบริการการศึกษา",
    src: "/images/backgrounds/info-system-27.jpg",
  },
  {
    label: "ระบบยืม - คืนหนังสือห้องสมุด",
    src: "/images/backgrounds/info-system-28.jpg",
  },
  {
    label: "ระบบ E-Learning",
    src: "/images/backgrounds/info-system-4.jpg",
  },
  {
    label: "ระบบเมลสถาบัน",
    src: "/images/backgrounds/info-system-19.jpg",
  },
];

const INFO_SYSTEM_2 = [
  {
    label: "ระบบบริการการศึกษา",
    src: "/images/backgrounds/info-system-27.jpg",
  },
  {
    label: "ประเมินการเรียน การสอน",
    src: "/images/backgrounds/info-system-8.jpg",
  },
  {
    label: "รายงานตัวนิสิตออนไลน์",
    src: "/images/backgrounds/info-system-9.jpg",
  },
  {
    label: "ระบบเมลสถาบัน",
    src: "/images/backgrounds/info-system-19.jpg",
  },
  {
    label: "ระบบ E-Learning",
    src: "/images/backgrounds/info-system-4.jpg",
  },
  {
    label: "ประเมินอาจารย์ที่ปรึกษา",
    src: "/images/backgrounds/info-system-10.jpg",
  },
  {
    label: "ระบบ Smart BUU",
    src: "/images/backgrounds/info-system-7.jpg",
  },
  {
    label: "ระบบสหกิจ และระบบฝึกงาน",
    src: "/images/backgrounds/info-system-11.jpg",
  },
  {
    label: "ระบบยืม - คืนหนังสือห้องสมุด WebOPAC",
    src: "/images/backgrounds/info-system-28.jpg",
  },
  {
    label: "ระบบจองห้องศึกษา กลุ่ม - ห้องสมุด",
    src: "/images/backgrounds/info-system-12.jpg",
  },
  {
    label: "ระบบจองห้องเรียน และห้องประชุม e-classroom",
    src: "/images/backgrounds/info-system-34.jpg",
  },
  {
    label: "ระบบแจ้งซ่อมออนไลน์",
    src: "/images/backgrounds/info-system-13.jpg",
  },
  {
    label: "ระบบ MyID",
    src: "/images/backgrounds/info-system-30.jpg",
  },
  {
    label: "ระบบการลาอิเล็กทรอนิกส์",
    src: "/images/backgrounds/info-system-32.jpg",
  },
];

export default InfoSysCurrentStudetnWidget;
