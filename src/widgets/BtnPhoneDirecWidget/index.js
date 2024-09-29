import { BtnLangWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Icons } from "@/components";

const BtnLangWidget = () => {
  const { t } = useTranslation(["common"]);

  return (
    <Link href={"mailto:vasin@go.buu.ac.th"}>
      <BtnLangWidgetContainer>
        <Icons.Message />
        {t("Contact Dean", { ns: "common" })}
      </BtnLangWidgetContainer>
    </Link>
  );
};

export default BtnLangWidget;
