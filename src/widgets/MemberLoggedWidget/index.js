import { MemberLoggedWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const MemberLoggedWidget = () => {
  const { t } = useTranslation(["common"]);

  return (
    <MemberLoggedWidgetContainer>
      <div className="btn_login">
        <Link href={"/login"}>{t("Login", { ns: "common" })}</Link>
      </div>
    </MemberLoggedWidgetContainer>
  );
};

export default MemberLoggedWidget;
