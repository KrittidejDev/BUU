import { CoursePrWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";

const CoursePrWidget = ({ title, url }) => {
  const { t } = useTranslation(["home"]);

  return (
    <CoursePrWidgetContainer>
      <div className="introduction_title">{title}</div>
      <div className="yt_contaioner">
        <div className="yt_preview_block">
          <iframe
            className="yt_ifram"
            width="100%"
            height="100%"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </CoursePrWidgetContainer>
  );
};

export default CoursePrWidget;
