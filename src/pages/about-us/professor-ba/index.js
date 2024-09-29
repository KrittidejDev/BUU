import { ProfessorBAStyled } from "@/styles/professorBAStyled";
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
      <ProfessorBAStyled>
        <div className="staff_container">
          <MOTION_FADE_RIGHT>
            <div className="title">บุคลากรประจำคณะ</div>
            <div className="sub_title">
              สาขาวิชาบริหารธุรกิจ
              <br />
              และสาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน
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
      </ProfessorBAStyled>
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
    name: "ผศ.ดร.พัชรี ปรีเปรมโมทย",
    position: "รักษาการแทนประธาน",
    info: "คุณวุฒิ : ปร.ด. (เศรษฐศาสตร์),มหาวิทยาลัยเกษตรศาสตร์",
    phone: "037-310000 ต่อ 2067",
    email: "patcharee_p@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba01.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.เดชา พละเลิศ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : บริหารธุรกิจดุษฎีบัณฑิต, มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร",
    phone: "037-310000 ต่อ 2034",
    email: "tatapol@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba06.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.ตำหนัก มะโหฐาน",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด. (บริหารธุรกิจ), มหาวิทยาลัยเกษตรศาสตร",
    phone: "039-310000 ต่อ 2021",
    email: "tomnak.ma@go.buu.ac.th ",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba07.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.ลัญจกร สัตย์สงวน",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด. (บริหารธุรกิจอุตสาหกรรม), สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหาร ลาดกระบัง",
    phone: "039-310000 ต่อ 2050",
    email: "lanchako@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba05.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ดร.วชิราภรณ์ ศรีพุทธ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : ปร.ด. (การจัดการทรัพยากรมุนษย์), Université Paul-Valéry Montpellier 3 , France",
    phone: "039-310000 ต่อ 2055",
    email: "vajiraporn@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba04.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "ผศ.ภัญนภัส พฤกษากิจ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : M.M. (Marketing and Management-International Program), Mahidol University",
    phone: "039-310000 ต่อ 2055",
    email: "Pannapat@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba02.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์จาตุรันต์ แช่มสุ่น",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วศ.ม. (วิศวกรรมอุตสาหการ), มหาวิทยาลัยมหิดล",
    phone: "039-310000 ต่อ 2062",
    email: "jaturun.ch@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba09.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ปิยาภรณ์ รัตโนภาส",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ม. (การจัดการการขนส่งและโลจิสติกส์), มหาวิทยาลัยบูรพา",
    phone: "039-310000 ต่อ 2064",
    email: "piyaporn.ma@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba03.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ปวงปณต สอบขุนทด",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : กจ.ม. (การจัดการมหาบัณฑิต), มหาวิทยาลัยเทคโนโลยีสุรนารี",
    phone: "037-310000 ต่อ 2024",
    email: "puangpanot.so@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba10.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },

  {
    name: "อาจารย์พลอยไพลิน ยอดคำ",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : M.B.A. (Business Administration), University of Illinois at Chicago.USA",
    phone: "039-31000 ต่อ 2052",
    email: "ploypailin.yo@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba11.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์ลักษมณ บุญมา",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วศ.ม. (วิศวกรรมอุตสาหการ),มหาวิทยาลัยมหิดล",
    phone: "037-310000 ต่อ 2021",
    email: "luksamon.bo@buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba12.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
    srccv: "/images/icons/Cv.png",
  },
  {
    name: "อาจารย์อดิศักดิ์ ทูลธรรม",
    position: "อาจารย์ประจำสาขา",
    info: "คุณวุฒิ : วท.ม.(การจัดการโลจิสติกส์และโซ่อุปทาน)มหาวิทยาลัยรัตนบัณฑิ",
    phone: "039-31000 ต่อ 2071",
    email: "adisak.th@go.buu.ac.th",
    cv: "ดูข้อมูล",
    src: "/images/icons/ba13.png",
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
