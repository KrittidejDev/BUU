import { ProfessorATStyled } from "@/styles/professorATStyled";
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
      <ProfessorATStyled>
        <div className="staff_container">
          <MOTION_FADE_RIGHT>
            <div className="title">อาจารย์ประจำ</div>
            <div className="sub_titel">สาขาวิชาเทคโนโลยีการเกษตร</div>
          </MOTION_FADE_RIGHT>
          <div className="staff_list">
            {DATA.map((e, i) => (
              <MOTION_FADE_UP key={i}>
                <Cards.StaffItem {...e} />
              </MOTION_FADE_UP>
            ))}
          </div>
        </div>
      </ProfessorATStyled>
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
    name: "ผศ.ดร.ยศพล ผลาผล",
    position: "ประธานสาขา",
    info: "คุณวุฒิ : วท.ด. (พืชสวน) มหาวิทยาลัยเกษตรศาสตร์",
    phone: "039-310000 ต่อ 2034",
    email: "yossapol@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al01.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "รศ.ดร.นรินทร์ เจริญพันธ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด.(วิทยาศาสตร์และ เทคโนโลยีอาหาร), มหาวิทยาลัยสงขลานครินทร์",
    phone: "039-310000 ต่อ 2032",
    email: "narinch@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al02.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.ปัทมา ศรีน้ำเงิน",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด(เทคโนโลยีชีวภาพเกษตร), มหาวิทยาลัยเกษตรศาสตร์",
    phone: "039-310000 ต่อ 2039",
    email: "pattama@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al03.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.เมธินี จามกระโทก",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ด. (เคมี),จุฬาลงกรณ์มหาวิทยาลัย",
    phone: "039-310000 ต่อ 3010",
    email: "matinee@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al04.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.สุคนทิพย์ เถาว์โมลา",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ด. (เคมี),มหาวิทยาลัยเทคโนโลยีสุรนารี",
    phone: "039-310000 ต่อ 2015",
    email: "sukhontip@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al05.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.สุพรรณิการ์ สมใจเพ็ง",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Ph.D. (Biotechnology) Cranfield University",
    phone: "039-310000 ต่อ 2029",
    email: "supunnika@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al06.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.นิสาชล เทศศร",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ด. (เภสัชศาสตร์และเทคโนโลยี)จุฬาลงกรณ์มหาวิทยาลัย",
    phone: "039-310000 ต่อ 2045",
    email: "nisachon@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al07.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.ปริยดา สิทธิศาสตร",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด. (เทคโนโลยีอาหาร) มหาวิทยาลัยเทคโนโลยีสุรนารี",
    phone: "039-310000 ต่อ 2066",
    email: "priyada.si@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al08.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.ภาวิณี สุทธิวิริยะ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Ph.D. (Plant Pathology),The Ohio State University",
    phone: "039-310000 ต่อ 2066",
    email: "pavinee.su@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/professor-at-9.jpg",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.วิจิตรา โหราเรือง",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Ph.D. (Plant Cell and Molecular Biology), University of Glasgow, U.K.",
    phone: "039-310000 ต่อ 2045",
    email: "wijitra@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/al10.png",
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
