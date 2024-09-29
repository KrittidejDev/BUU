import { CenterUnitWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import { Cards, Displays } from "@/components";

const CenterUnitWidget = () => {
  const { t } = useTranslation(["home"]);

  return (
    <CenterUnitWidgetContainer>
      <div className="center_unit_header">
        <Displays.TopicViewAll
          title={t("ศูนย์/หน่วย", { ns: "home" })}
          btnLabel="ดูศูนย์ / หน่วยทั้งหมด"
        />
      </div>
      <MOTION_FADE_UP>
        <div className="center_unit_list">
          {CENTER_UNIT_LIST.map((e, i) => (
            <div key={i} className="center_unit_item_wrap">
              <Cards.CenterUnitItem {...e} />
            </div>
          ))}
        </div>
      </MOTION_FADE_UP>
    </CenterUnitWidgetContainer>
  );
};

const CENTER_UNIT_LIST = [
  {
    src: "/images/icons/center-unit-1.png",
    name: "ศูนย์ข้อมูลภาคตะวันออก",
  },
  {
    src: "/images/icons/center-unit-2.jpg",
    name: "Training Hub",
  },
  {
    src: "/images/icons/center-unit-3.jpg",
    name: "ห้องปฏิบัติการวิทยาศาสตร์",
  },
  {
    src: "/images/icons/center-unit-4.jpg",
    name: "นิสิตแลกเปลี่ยนนานาชาติ",
  },
  {
    src: "/images/icons/center-unit-5.jpg",
    name: "มหัศจันท์ แห่งรสชาติ",
  },
];

export default CenterUnitWidget;
