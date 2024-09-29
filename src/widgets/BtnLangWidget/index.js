import { BtnLangWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BtnLangWidget = () => {
  const router = useRouter();
  const { i18n } = useTranslation("menu");

  const _handleClickLang = () => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      locale: i18n.language === "th" ? "en" : "th",
    });
  };

  return (
    <BtnLangWidgetContainer
      className={i18n.language === "en" ? "flex_end" : ""}
      onClick={_handleClickLang}
    >
      {i18n.language === "th" ? (
        <>
          <div className="circle_icon" />
          ภาษาไทย
        </>
      ) : (
        <>
          English
          <div className="circle_icon" />
        </>
      )}
    </BtnLangWidgetContainer>
  );
};

export default BtnLangWidget;
