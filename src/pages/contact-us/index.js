import { ContactUsStyled } from "@/styles/contactUsStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import Link from "next/link";
import { BannerWidget } from "@/widgets";
import { Mainlayouts, Icons, Inputs } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <ContactUsStyled mapHeight={(window.innerWidth * 561) / 1920}>
        <BannerWidget data={BANNER_LIST} />
        <div className="line_horizontal" />
        <div className="contact_us_contaienr">
          <MOTION_FADE_UP>
            <div className="executive_block">
              <div className="executive_title">
                <Icons.ExclutiveCircle />
                สายตรงผู้บริหาร
              </div>
              <div className="executive_row">
                <div className="executive_col">
                  <img
                    className="executive_img"
                    alt="executive"
                    src="/images/backgrounds/executive.jpg"
                  />
                </div>
                <div className="executive_col">
                  <div className="executive_info_block">
                    <div className="executive_info_title">
                      ข้อมูลติดต่อ
                      <Icons.PhoneCircle2 />
                    </div>
                    <div className="executive_info_row">
                      <div className="executive_info_label">คณบดี </div>
                      <div className="executive_info_value">
                        : ผศ.ดร.วศิน ยุวนะเตมีย์
                      </div>
                    </div>
                    <div className="executive_info_row">
                      <div className="executive_info_label">โทรศัพท์</div>
                      <div className="executive_info_value">
                        : 0-3931-0000 ต่อ 1000
                      </div>
                    </div>
                    <div className="executive_info_row">
                      <div className="executive_info_label">โทรสาร</div>
                      <div className="executive_info_value">: 0-3931-0128</div>
                    </div>
                    <div className="executive_info_row mb_14">
                      <div className="executive_info_label">Email</div>
                      <div className="executive_info_value">
                        : vasin@go.buu.ac.th
                      </div>
                    </div>
                    <div className="btn_call_block">
                      <Link href={"mailto:vasin@go.buu.ac.th"}>
                        <button className="btn_call">
                          <Icons.Email /> สายตรงผู้บริหาร
                        </button>
                      </Link>
                      <div className="line_horizontal_black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="location_block">
              <div className="location_header">
                <div className="location_title">
                  แผนที่ <Icons.LocationCircle />
                </div>
                <div className="location_faculty">
                  คณะวิทยาศาสตร์และศิลปศาสตร์
                </div>
                <div className="location_university">
                  มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
                </div>
              </div>
              <div className="location_contact_block">
                <div className="location_map_wrap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.5539453198926!2d101.92740017592807!3d12.611622422666553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3103799c1af73f59%3A0xaf14abd70d2c8e7f!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lia4Li54Lij4Lie4LiyIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC4iOC4seC4meC4l-C4muC4uOC4o-C4tQ!5e0!3m2!1sth!2sth!4v1724329564428!5m2!1sth!2sth"
                    width="100%"
                    height="100%"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="contact_block">
                  <div className="contact_col">
                    <div className="social_block">
                      <div className="social_item">
                        <Icons.SocialBWCircleFacebook width="79" height="79" />
                      </div>
                      <div className="social_item">
                        <Icons.SocialBWCircleYoutube width="79" height="79" />
                      </div>
                      <div className="social_item">
                        <Icons.SocialBWCircleLine width="79" height="79" />
                      </div>
                    </div>
                  </div>
                  <div className="contact_col">
                    <Inputs.TextEmailField
                      label={"สมัครรับข่าวสาร"}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </MOTION_FADE_UP>
        </div>
      </ContactUsStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

const BANNER_LIST = [
  {
    imgPath: "/images/backgrounds/banner-contact-us.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/backgrounds/banner-contact-us.jpg",
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
