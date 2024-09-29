import { InfomationSystemsStyled } from "@/styles/infomationSystemsStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InfoSysCurrentStudetnWidget } from "@/widgets";
import { Mainlayouts } from "@/components";

export default function InfomationSystem() {
  const memberType = "1";
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <InfomationSystemsStyled>
        {memberType === "1" && <InfoSysCurrentStudetnWidget />}
      </InfomationSystemsStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "menu"])),
      // Will be passed to the page component as props
    },
  };
}
