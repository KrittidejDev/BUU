import { StaffStyled } from "@/styles/staffStyled";
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
      <StaffStyled>
        <div className="staff_container">
          <MOTION_FADE_RIGHT>
            <div className="title">บุคลากรประจำคณะ</div>
          </MOTION_FADE_RIGHT>
          <div className="staff_list">
            {DATA.map((e, i) => (
              <MOTION_FADE_UP key={i}>
                <Cards.StaffItem {...e} />
              </MOTION_FADE_UP>
            ))}
          </div>
        </div>
      </StaffStyled>
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
    name: "คุณชนัญชิดา ปาณะวงค",
    position: "วิทยาศาสตร์ชำนาญการ",
    info: "คุณวุฒิ : Master of Arts (Global Intercultural Communication) University of East Anglia, UK",
    phone: "037-310000 ต่อ 2024",
    email: "chanunchida@buu.ac.th",
    src: "/images/icons/Rectangle 1055.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
  },
  {
    name: "คุณทัตพล พุ่มดารา",
    position: "นักวิทยาศาสตร์ชำนาญการ",
    info: "คุณวุฒิ : วท.บ.(เทคโนโลยีการเกษตร), มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี",
    phone: "037-310000 ต่อ 2034",
    email: "tatapol@buu.ac.th",
    src: "/images/icons/Rectangle 1054.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
  },
  {
    name: "คุณเพ็ญนภา ไกรฉวี",
    position: "นักวิทยาศาสตร์ชำนาญการ",
    info: "คุณวุฒิ : วท.บ.(เทคโนโลยีการเกษตร), มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี",
    phone: "037-310000 ต่อ 2024",
    email: "pennapap@buu.ac.th",
    src: "/images/icons/Rectangle 1053.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
  },
  {
    name: "คุณวลัยลักษณ์ ถึงคุณ",
    position: "นักวิทยาศาสตร์",
    info: "คุณวุฒิ : วท.บ (วาริชศาสตร์), มหาวิทยาลัยบูรพา",
    phone: "037-310000 ต่อ 6010",
    email: "walailuk@buu.ac.th",
    src: "/images/icons/Rectangle 1052.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
  },
  {
    name: "คุณสิรวิชญ์ มุสิกพงศ์",
    position: "นักวิชาการศึกษา",
    info: "คุณวุฒิ : วท.บ (การจัดการโลจิสติกส์และการค้าชายแดน), มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี",
    phone: "037-310000 ต่อ 2024",
    email: "sirawich@buu.ac.th",
    src: "/images/icons/Rectangle 1051.png",
    srcphone: "/images/icons/Vector.png",
    srcemail: "/images/icons/Email.png",
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
