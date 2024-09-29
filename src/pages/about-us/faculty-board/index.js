import { FacultyBoardStyled } from "@/styles/facultyBoardStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_RIGHT, MOTION_FADE_UP } from "@/utils/functions/motion";
import { AboutUsCarouselWidget, BannerWidget } from "@/widgets";
import { Cards, Mainlayouts } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <FacultyBoardStyled>
        <BannerWidget
          data={BANNER_LIST}
          node={
            <div className="about_us_menu">
              <AboutUsCarouselWidget />
            </div>
          }
        />
        <div className="about_us_body_container">
          <div className="about_us_committee_container">
            <MOTION_FADE_RIGHT>
              <div className="title">คณะกรรมการประจำคณะ</div>
            </MOTION_FADE_RIGHT>
            <MOTION_FADE_UP>
              <div className="banner_block">
                <img className="imgs" src="/images/icons/Rectangle 1038.png" />
                <div className="banner_info_block">
                  <div className="banner_info_name">ผศ.ดร.วศิน ยุวนะเตมีย์</div>
                  <div className="banner_info_positoin">ประธานกรรมการ</div>
                  <div className="banner_info_phone">03-931- 000 ต่อ 1000</div>
                </div>
              </div>
            </MOTION_FADE_UP>
            <div className="committee_list">
              {DATA.map((e, i) => (
                <MOTION_FADE_UP key={i} className="committee_item">
                  <Cards.StaffItem {...e} />
                </MOTION_FADE_UP>
              ))}
            </div>
          </div>
        </div>
      </FacultyBoardStyled>
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

const DATA = [
  {
    name: "อาจารย์วิรัช คารวะพิทยากุล",
    position: "กรรมการผู้ทรงคุณวุฒิภายนอก",
    src: "/images/icons/faculty-board-1.jpg",
  },
  {
    name: "ผศ.ดร. พิชาญ สว่างวงศ์",
    position: "กรรมการผู้ทรงคุณวุฒิภายนอก",
    src: "/images/icons/faculty-board-2.jpg",
  },
  {
    name: "ดร.พิชัย สนแจ้ง",
    position: "กรรมการผู้ทรงคุณวุฒิภายนอก",
    src: "/images/icons/faculty-board-3.jpg",
  },
  {
    name: "ดร.ธนาวิชญ์ จินดาประดิษฐ",
    position: "กรรมการผู้ทรงคุณวุฒิภายนอก",
    src: "/images/icons/faculty-board-4.jpg",
  },
  {
    name: "ผศ.ดร.พัชรี ปรีเปรมโมทย์",
    position: "กรรมการรองคณบดี",
    src: "/images/icons/Rectangle 1132.png",
  },
  {
    name: "ผศ.ดร.ยศพล ผลาผล",
    position: "กรรมการประธานสาขา",
    src: "/images/icons/al01.png",
  },
  {
    name: "อาจารย์สุทธิรักษ์ สุวรรณเดชา",
    position: "กรรมการประธานสาขา",
    src: "/images/icons/Rectangle 1120.png",
  },
  {
    name: "ผศ.ไพฑูรย์ ศรีนิล",
    position: "กรรมการประธานสาขา",
    src: "/images/icons/Rectangle 1121.png",
  },
  {
    name: "ผศ.ดร.เมธินี จามกระโทก",
    position: "กรรมการผู้แทนคณาจารย์ประจำภายในส่วนงาน",
    src: "/images/icons/Rectangle 1122.png",
  },
  {
    name: "ผศ.ดร.สุคนทิพย์ เถาว์โมลา",
    position: "กรรมการผู้แทนคณาจารย์ประจำภายในส่วนงาน",
    src: "/images/icons/Rectangle 1126.png",
  },
  {
    name: "ผศ.ดร.ธนพล พุกเส็ง",
    position: "กรรมการผู้แทนคณาจารย์ประจำภายในส่วนงาน",
    src: "/images/icons/Rectangle 1127.png",
  },
  {
    name: "ดร.วชิราภรณ์ ศรีพุทธ",
    position: "กรรมการและเลขานุการ",
    src: "/images/icons/Rectangle 1128.png",
  },
  {
    name: "ผศ.ดร.อุไรวรรณ  บัวตูม",
    position: "ผู้ช่วยเลขานุการ",
    src: "/images/icons/Rectangle 1116.png",
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
