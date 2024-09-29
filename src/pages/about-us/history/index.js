import { HistoryStyled } from "@/styles/historyStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import {
  AboutUsCarouselWidget,
  BannerWidget,
  CommitmentBlockWidget,
  HistoryAndBackgroundWidget,
  MissionBlockWidget,
  ValuesBlockWidget,
  OrganizationalWidget,
  CompetencyWidget,
} from "@/widgets";
import { Mainlayouts } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <BannerWidget
        data={BANNER_LIST}
        node={
          <div className="about_us_menu">
            <AboutUsCarouselWidget />
          </div>
        }
      />
      <HistoryStyled>
        <div className="about_us_menu_container">
          <MOTION_FADE_UP>
            <HistoryAndBackgroundWidget />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <CommitmentBlockWidget />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <MissionBlockWidget />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <ValuesBlockWidget />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <OrganizationalWidget />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <CompetencyWidget />
          </MOTION_FADE_UP>
        </div>
      </HistoryStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

const BANNER_LIST = [
  {
    imgPath: "/images/backgrounds/banner-about-us.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/backgrounds/banner-about-us.jpg",
    alt: "Buu",
  },
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "menu"])),
      // Will be passed to the page component as props
    },
  };
}
