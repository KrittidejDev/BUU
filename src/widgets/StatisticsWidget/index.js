import { Icons } from "@/components";
import { StatisticsWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_LEFT, MOTION_FADE_RIGHT } from "@/utils/functions/motion";
import { Displays } from "@/components";

const StatisticsWidget = () => {
  const { t } = useTranslation(["home"]);

  return (
    <StatisticsWidgetContainer>
      <div className="statistics_left_col">
        <div className="statistics_title">
          {t("ข้อมูลและสถิติ", { ns: "home" })} <Icons.Statistic />
        </div>
        <div className="statistic_figture">
          <img
            className="statistic_img"
            alt="bg"
            src="/images/icons/web-block-gray.png"
          />
        </div>
        <MOTION_FADE_LEFT>
          <div className="statistic_contaienr">
            <div className="statistic_block">
              <div style={{ width: 220 }}>
                <Displays.CircularProgress
                  label="นิสิตปัจจุบัน"
                  total={"2,860"}
                  percentage={20}
                />
              </div>
              <div style={{ width: 170 }}>
                <Displays.CircularProgress
                  label="หลักสูตร"
                  total={"89"}
                  percentage={20}
                />
              </div>
            </div>
            <div className="statistic_line_horizontal" />
            <div className="statistic_block">
              <div style={{ width: 170 }}>
                <Displays.CircularProgress
                  label="ส่วนงาน"
                  total={"20"}
                  percentage={20}
                />
              </div>
              <div style={{ width: 170 }}>
                <Displays.CircularProgress
                  label="บุคลากร"
                  total={"36"}
                  percentage={20}
                />
              </div>
            </div>
          </div>
        </MOTION_FADE_LEFT>
      </div>
      <div className="statistics_right_col">
        <MOTION_FADE_RIGHT>
          <img
            className="statistics_img"
            alt="statistic"
            src="/images/icons/statistic.png"
          />
        </MOTION_FADE_RIGHT>
      </div>
    </StatisticsWidgetContainer>
  );
};

export default StatisticsWidget;
