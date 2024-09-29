import { ExectiveCommitteeStyled } from "@/styles/exectiveCommitteeStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import { AboutUsCarouselWidget, BannerWidget } from "@/widgets";
import { Mainlayouts } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <ExectiveCommitteeStyled>
        <BannerWidget
          data={BANNER_LIST}
          node={
            <div className="about_us_menu">
              <AboutUsCarouselWidget />
            </div>
          }
        />
        <div className="executive_body_container">
          <div className="executive_content_container">
            <MOTION_FADE_UP>
              <div className="title">คณะผู้บริหาร</div>
            </MOTION_FADE_UP>
            <div className="executive_list">
              {PERSON_LIST.map((e, i) => (
                <MOTION_FADE_UP key={i} className={"executive_item"}>
                  <img className="banner_img" src={e.src} />
                  <div className="info_block">
                    <div className="info_name">{e.name}</div>
                    <div className="info_positoin">{e.position}</div>
                  </div>
                </MOTION_FADE_UP>
              ))}
            </div>
          </div>
        </div>
      </ExectiveCommitteeStyled>
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

const PERSON_LIST = [
  {
    name: "ผศ.ดร.วศิน ยุวนะเตมีย์",
    position: "คณบดีคณะวิทยาศาสตร์และศิลปศาสตร์",
    src: "/images/icons/Rectangle 1038.png",
  },
  {
    name: "ดร.วชิราภรณ์ ศรีพุทธ",
    position: "รองคณบดีฝ่ายวิชาการและวิเทศสัมพันธ์",
    src: "/images/icons/exective-1.jpg",
  },
  {
    name: "ดร.พัชรี ปรีเปรมโมทย",
    position: "รองคณบดีฝ่ายบริหาร",
    src: "/images/icons/exective-2.jpg",
  },
  {
    name: "ผศ.ดร.ปัทมา ศรีน้ำเงิน",
    position: "ผู้ช่วยคณบดีฝ่ายวิจัยและบริการวิชาการแก่สังคม",
    src: "/images/icons/exective-3.jpg",
  },
  {
    name: "ผศ.ดร.สุคนทิพย์ เถาว์โมลา",
    position: "ผู้ช่วยคณบดีฝ่ายกิจการนิสิตและทำนุบำรุงศิลปวัฒนธรรม",
    src: "/images/icons/exective-4.jpg",
  },
  {
    name: "ผศ.ดร.อุไรวรรณ บัวตูม",
    position: "ผู้ช่วยคณบดีฝ่ายพัฒนานวัตกรรมการศึกษาและบริหารความเสี่ยง",
    src: "/images/icons/exective-5.jpg",
  },
  {
    name: "ผศ.ดร.ธนพล พุกเส็ง",
    position: "ผู้ช่วยคณบดีฝ่ายประกันคุณภาพการศึกษา",
    src: "/images/icons/exective-6.jpg",
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
