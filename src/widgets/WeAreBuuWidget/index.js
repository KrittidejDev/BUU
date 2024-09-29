import { WeAreBuuWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_UP } from "@/utils/functions/motion";

const WeAreBuuWidget = () => {
  const { t } = useTranslation(["home"]);
  return (
    <WeAreBuuWidgetContainer>
      <img
        className="we_buu_img"
        alt="we are buu"
        src="/images/icons/we-are-buu.png"
      />
      <div className="we_are_info_block">
        <div className="we_are_info_left_col">
          <img
            className="network_img"
            alt="web block"
            src="/images/icons/web-block.png"
          />
        </div>

        <div className="we_are_info_right_col">
          <MOTION_FADE_UP>
            <div className="prefix_label">{t("we are", { ns: "home" })}</div>
            <div className="name_label">
              <div className="buu_label">BUU</div>
              <div className="s_label">S</div>
              <div className="and_label">&</div>
              <div className="a_label">A</div>
            </div>
            <div className="decs">
              มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
              ศูนย์กลางการเรียนรู้ชั้นนำในภาคตะวันออก
              มอบโอกาสในการศึกษาหลากหลายระดับ ตั้งแต่ปริญญาตรีจนถึงปริญญาเอก
              ทั้งหลักสูตรภาษาไทยและนานาชาติ
              พร้อมหลักสูตรระยะสั้นและออนไลน์ที่ทันสมัย
              มุ่งผลิตบัณฑิตที่มีคุณภาพสูง
              ตอบโจทย์ความต้องการของตลาดแรงงานระดับโลก
            </div>
          </MOTION_FADE_UP>
        </div>
      </div>
    </WeAreBuuWidgetContainer>
  );
};

export default WeAreBuuWidget;
