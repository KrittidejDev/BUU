import { ProfessorITDSStyled } from "@/styles/professorITDSStyled";
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
      <ProfessorITDSStyled>
        <div className="staff_container">
          <MOTION_FADE_RIGHT>
            <div className="title_items">
              <div className="title">อาจารย์ประจำ</div>
              <div className="sub_titel">
                สาขาวิชาเทคโนโลยีสารสนเทศ และวิทยาการข้อมูล
              </div>
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
      </ProfessorITDSStyled>
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
    name: "ผศ.ไพฑูรย์ ศรีนิล",
    position: "ประธานสาขา",
    info: "คุณวุฒิ : วศ.ม.(วิศวกรรมคอมพิวเตอร์),สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง)",
    phone: "039-310000 ต่อ 2043",
    email: "phaitoon@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds01.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.ธนพล พุกเส็ง",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด.(เทคโนโลยีสารสนเทศ),มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    phone: "039-310000 ต่อ 2031",
    email: "thanaph@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds02.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.สมบัติ ฝอยทอง",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วศ.ด. (วิศวกรรมไฟฟ้า),สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    phone: "039-310000 ต่อ 2043",
    email: "sombut@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds03.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ดร.อุไรวรรณ บัวตูม",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด (วิศวกรรมศาสตร์และเทคโนโลยี), สถาบันเทคโนโลยีนานาชาติ สิรินธร (หลักสูตรนานาชาติ)มหาวิทยาลัยธรรมศาสตร์",
    phone: "039-310000 ต่อ 2070",
    email: "uraiwanu@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds04.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.กัลยารัตน์ เชี่ยวชาญ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด(คณิตศาสตร์ประยุกต์), สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    phone: "039-310000 ต่อ 2041",
    email: "kanyarat.ch@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds05.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.ภาณุพล สมัยมงคล",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Ph.D. (Physics), Virginia Polytechnic Institute and State University.",
    phone: "039-310000 ต่อ 2041",
    email: "panupon.sa@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds06.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.สิริสุดา บัวทองเกื้อ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : Ph.D. (Computer Science)Heriot-Watt University",
    phone: "039-310000 ต่อ 2032",
    email: "sirisuda@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds07.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ธารารัตน์ พวงสุวรรณ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ม. (เทคโนโลยีสารสนเทศ),สถาบันเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    phone: "039-310000 ต่อ 2027",
    email: "thararat@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds08.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์วรวิทย์ พูลสวัสด",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ม. (เทคโนโลยีสารสนเทศ),สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    phone: "039-310000 ต่อ 2051",
    email: "worawit@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds09.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ศรชัย อุดมธนาพงศ",
    position: "วิทยาศาสตร์ชำนาญการ",
    info: "คุณวุฒิ : วศ.ม. (วิศวกรรมคอมพิวเตอร์), สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    phone: "039-310000 ต่อ 2051",
    email: "sornchai.ud@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/itds10.png",
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
