import { HomeStyled } from "@/styles/homeStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import LazyLoad from "react-lazy-load";
import {
  AcademicNewsWidget,
  ActivityWidget,
  BannerWidget,
  CenterUnitWidget,
  IntroductionFacultyWidget,
  NewsWidget,
  OurCourseWidget,
  SAMouWidget,
  ScienceAndLiberalArtsProgramWidget,
  WeAreBuuWidget,
  StatisticsWidget,
} from "@/widgets";
import { Mainlayouts } from "@/components";

export default function Home() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <HomeStyled>
        <BannerWidget data={BANNER_LIST} />
        <div className="line_horizontal" />
        <MOTION_FADE_UP>
          <IntroductionFacultyWidget />
        </MOTION_FADE_UP>
        <OurCourseWidget />
        <MOTION_FADE_UP>
          <SAMouWidget />
        </MOTION_FADE_UP>
        <ScienceAndLiberalArtsProgramWidget />
        <div className="sec_layout">
          <WeAreBuuWidget />
        </div>
        <NewsWidget />
        <AcademicNewsWidget />
        <ActivityWidget />
        <CenterUnitWidget />
        <LazyLoad>
          <StatisticsWidget />
        </LazyLoad>
      </HomeStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

const BANNER_LIST = [
  {
    imgPath: "/images/mockups/banner.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/mockups/banner.jpg",
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
