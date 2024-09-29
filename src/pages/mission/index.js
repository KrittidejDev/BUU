import { MissionStyled } from "@/styles/missionStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MissionQualityAssuranceWidget } from "@/widgets";
import { Mainlayouts } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <MissionStyled>
        <MissionQualityAssuranceWidget />
      </MissionStyled>
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
