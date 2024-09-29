import { ProfessorEBCStyled } from "@/styles/professorEBCStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_RIGHT, MOTION_FADE_UP } from "@/utils/functions/motion";
import { AboutUsCarouselWidget, BannerWidget } from "@/widgets";
import { Cards, Mainlayouts } from "@/components";

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
      <ProfessorEBCStyled>
        <div className="staff_container">
          <MOTION_FADE_RIGHT>
            <div className="title">อาจารย์ประจำ</div>
            <div className="sub_title">
              สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ
            </div>
          </MOTION_FADE_RIGHT>
          <div className="staff_list">
            {DATA.map((e, i) => (
              <MOTION_FADE_UP key={i}>
                <Cards.StaffItem {...e} />
              </MOTION_FADE_UP>
            ))}
          </div>
        </div>
      </ProfessorEBCStyled>
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
    name: "อาจารย์สุทธิรักษ์ สุวรรณเดชา",
    position: "ประธานสาขา",
    info: "คุณวุฒิ : ศศ.ม. (ภาษาศาสตร์ประยุกต์),มหาวิทยาลัยมหิดล",
    phone: "039-310000 ต่อ 2050",
    email: "sutthirak@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc01.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ธนนท์รัฐ นาคทั่ง",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : IMAS (ASEAN Studies),University of Malaya, Malaysia",
    phone: "039-310000 ต่อ 2058",
    email: "tanonratn@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc02.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ธีระวรรธน์ บุญไชยโรจน์",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ศศ.ม. (ภาษาอังกฤษเพื่อการสื่อสาร), มหาวิทยาลัยบูรพา",
    phone: "039-310000 ต่อ 2057",
    email: "theerawat.bo@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc03.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ปิยธิดา เสรีเบญจพล",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : M.A. (Applied Linguistics), มหาวิทยาลัยมหิดล),",
    phone: "039-310000 ต่อ 2054",
    email: "piyathida.se@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc04.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ภาณุพงศ์ ศีลสังวรณ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ศศ.ม. (ภาษาอังกฤษ),มหาวิทยาลัยศรีนครินทรวิโรฒ",
    phone: "039-310000 ต่อ 2063",
    email: "seensangworn@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc05.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ศตวรรษ ไชยสิทธิ์",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ศศ.ม. (ภาษาอังกฤษ),มหาวิทยาลัยศรีนครินทรวิโรฒ",
    phone: "039-310000 ต่อ 2057",
    email: "sattawat.ch@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc06.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์อักษิพร อุมานนท์",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Master of Arts (Global Intercultural Communication) University of East Anglia, UK",
    phone: "039-310000 ต่อ 2057",
    email: "auksiporn.um@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc07.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "Mr. Steven John Bodley",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Graduate Diploma (Southeast Asian Studies) Australian National University",
    phone: "039-310000 ต่อ  -",
    email: "srijulakhota@yahoo.com.au",
    cv: "ดูข้อมูล",
    src: "/images/icons/ebc08.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
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
