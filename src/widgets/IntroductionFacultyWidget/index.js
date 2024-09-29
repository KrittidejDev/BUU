import { IntroductionFacultyWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";

const IntroductionFacultyWidget = () => {
  const { t } = useTranslation(["home"]);

  return (
    <IntroductionFacultyWidgetContainer>
      <div className="introduction_title">
        {t("แนะนำคณะวิทยาศาสตร์ และศิลปศาสตร์", { ns: "home" })}
      </div>
      <div className="yt_contaioner">
        <div className="yt_preview_block">
          <iframe
            className="yt_ifram"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hiZJQBYB3W8?si=ee64kmyqEJuJSZqG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </IntroductionFacultyWidgetContainer>
  );
};

export default IntroductionFacultyWidget;
