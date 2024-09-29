import { BaStyled } from "@/styles/baStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  BannerCourseWidget,
  CourseHandbookWidget,
  CoursePrWidget,
  NavbarMenuWidget,
  ScholarshipWidget,
} from "@/widgets";
import { Cards, Displays, Mainlayouts } from "@/components";

export default function Aaplatform() {
  const { t } = useTranslation(["course"]);
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <BaStyled>
        <NavbarMenuWidget />
        <BannerCourseWidget isNotMenu data={BANNER_LIST} />
        <div className="body_contaienr">
          <MOTION_FADE_UP>
            <div className="section mb_83">
              <Displays.CourseLabelValue
                label={t("ชื่อหลักสูตร :", { ns: "course" })}
                value={t(
                  "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) กลุ่มวิชา การตลาดและบริการ / กลุ่มวิชา การประกอบการ",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("ชื่อปริญญา :", { ns: "course" })}
                value={t("บริหารธุรกิจบัณฑิต", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                label={t("จำนวนหน่วยกิต รวมตลอดหลักสูตร :", { ns: "course" })}
                value={t("ไม่น้อยกว่า 130 หน่วยกิต", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                label={t("ระยะเวลาการศึกษา :", { ns: "course" })}
                value={t("ไม่น้อยกว่า 15 สัปดาห์", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("คุณสมบัติผู้ศึกษา :", { ns: "course" })}
                value={t(
                  "รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียม ข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้เพิ่มเติม รบกวนเตรียมข้อมูลส่วนนี้ เพิ่มเติม",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("ปรัชญาหลักสูตร :", { ns: "course" })}
                value={t(
                  "รอบรู้ด้านการตลาดและการบริการ หรือ การประกอบธุรกิจ มีทักษะการทำงานหลายด้าน สามารถบูรณาการศาสตร์ต่างๆ มีบุคลิกภาพที่ดีในการทำงาน ชำนาญการใช้ เทคโนโลยีดิจิทัล เพื่อให้การทำงานในองค์กรและการประกอบธุรกิจมีประสิทธิภาพอย่างยั่งยืน",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                isNotBorder
                label={t("ค่าบำรุงและค่าธรรมเนียมการศึกษา :", { ns: "course" })}
                value={t(
                  "เหมาจ่ายรายภาคเรียน ภาคต้น/ภาคปลาย ภาคเรียนละ 12,000 บาท , ภาคฤดูร้อน 6,000 บาท",
                  { ns: "course" }
                )}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_68">
              <CoursePrWidget
                title={t("แนะนำหลักสูตร", { ns: "course" })}
                url={
                  "https://www.youtube.com/embed/Dn4ZtrQyGFE?si=gjwx2ZvNpdeHyyfJ"
                }
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_blue
                title={t("เกี่ยวกับหลักสูตร", { ns: "course" })}
                isExpandDefault={false}
              >
                <div className="panel_info_block">
                  <div className="paragraph_label">
                    <p>
                      ศึกษาสาระสำคัญด้านบริหารธุรกิจเสริมสร้างความเชี่ยวชาญในศาสตร์เฉพาะด้าน
                      (การตลาดและบริการ / การประกอบการ) และเน้นการปฏิบัติ
                    </p>
                  </div>
                  <div className="paragraph_label">
                    <span className="topic_label">
                      กลุ่มวิชาการตลาดและบริการ
                    </span>
                  </div>
                  <div className="paragraph_label mb_30">
                    <p>
                      ผู้เรียนมีองค์ความรู้ด้านการตลาด และมีทักษะการบริการ
                      รวมถึงใช้เทคโนโลยีดิจิทัลในการประกอบอาชีพได้ เช่น
                      การจัดการข้อมูลขนาดใหญ่ (Big Data)
                      การใช้โปรแกรมสำเร็จรูปในการจัดการด้านการตลาดและบริการ
                      เป็นต้น
                    </p>
                  </div>
                  <div className="paragraph_label">
                    <span className="topic_label">กลุ่มวิชาการประกอบการ</span>
                  </div>
                  <div className="paragraph_label">
                    <p>
                      ผู้เรียนบูรณาการความรู้ด้านการจัดการ การตลาด การเงินบัญชี
                      และระบบสารสนเทศทางธุรกิจได้
                      เพิ่มเติมความรู้และฝึกทักษะด้านการเป็นผู้ประกอบการ
                      ในรายวิชาต่างๆ เช่น การพัฒนาผลิตภัณฑ์เพื่อการจำหน่าย
                      การพาณิชย์อิเล็กทรอนิกส์ การประกอบการและวิสาหกิจเพื่อสังคม
                      การวินิจฉัยสถานประกอบการ การเขียนแผนธุรกิจ เป็นต้น
                    </p>
                  </div>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_66">
              <ScholarshipWidget
                bgColor="linear-gradient(180deg, #C3EAFA 0%, #75C7E9 100%)"
                data={PARTNER_LIST}
                title={t("ทุนการศึกษา", { ns: "course" })}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_blue
                title={t("แนวทางประกอบอาชีพ", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <div className="paragraph_label mb_30">
                    <span className="topic_label">
                      {t("กลุ่มวิชาการตลาดและบริการ", { ns: "course" })}{" "}
                    </span>
                    {t(
                      "ประกอบอาชีพด้านการตลาดและบริการต่าง ๆ เช่น งานขาย วางแผนการตลาด โฆษณา ประชาสัมพันธ์ บริหารผลิตภัณฑ์ พัฒนาช่องทางการจำหน่าย วิจัยตลาด บริหารความสัมพันธ์ลูกค้า การตลาดในธุรกิจบริการ งานบริการต่าง ๆ เป็นต้น ประกอบธุรกิจส่วนตัว",
                      { ns: "course" }
                    )}
                  </div>
                  <div className="paragraph_label mb_30">
                    <span className="topic_label">
                      {t("กลุ่มวิชาการประกอบการ", { ns: "course" })}{" "}
                    </span>
                    {t(
                      "ประกอบธุรกิจส่วนตัวหรือทำงานด้านการจัดการในองค์กร เช่น การขายออนไลน์ พัฒนาผลิตภัณฑ์ วินิจฉัยองค์กร วิจัยธุรกิจ วางแผนและพัฒนาธุรกิจ เป็นต้น",
                      { ns: "course" }
                    )}
                  </div>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_blue
                title={t("ความน่าสนใจ และกิจกรรม", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      {t(
                        "หางานง่าย เนื่องจากทุกองค์กรทั้งภาครัฐและเอกชนมีตำแหน่งงานด้านการตลาด การบริการ และด้านการจัดการ และตอบโจทย์ผู้ที่ต้องการเป็นผู้ประกอบการ หรือบริหารธุรกิจของครอบครัวต่อไป",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "สอนหรือแบ่งปันประสบการณ์ในหลายรายวิชาโดยผู้มีประสบการณ์ตรงจากภายนอก",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "ชั้นปีที่ 1 ก่อนเปิดภาคเรียน คณาจารย์ของคณะฯ สอนปรับพื้นฐานวิชาคณิตศาสตร์ ภาษาอังกฤษ และคอมพิวเตอร์",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "ชั้นปีที่ 2 การแบ่งปันประสบการณ์การเรียนจากตัวแทนนิสิตรุ่นพี่ และประสบการณ์การทำงานจากศิษย์เก่า",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "ชั้นปีที่ 3 การถ่ายทอดประสบการณ์การฝึกงาน (ทำงานระยะสั้น) และการปฏิบัติสหกิจศึกษา (ทำงานระยะยาว) จากนิสิตรุ่นพี่",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "ชั้นปีที่ 4 สัมมนาสาขาบริหารธุรกิจโดยเชิญวิทยากรด้านบริหารธุรกิจทั้งบุคคลภายนอกและ/หรือศิษย์เก่ามาแบ่งปันความรู้และประสบการณ์ให้กับนิสิตทั้ง 4 ชั้นปี และนิสิตต่างสาขาให้คำแนะนำการวางแผนและเตรียมความพร้อมในการประกอบอาชีพ และมีกิจกรรมพัฒนานิสิตตลอดช่วงเวลาที่เรียน เช่น พัฒนาบุคลิกภาพทั้งภายนอกและภายในเพื่อเป็นนักบริหารธุรกิจที่ดี สร้างทักษะการทำงานร่วมกับผู้อื่น การทำงานภายใต้ความกดดัน การทำงานท่ามกลางสภาพแวดล้อมที่เปลี่ยนแปลง เขียนจดหมายสมัครงานและresume เตรียมตัวสัมภาษณ์งาน ส่งเสริมการสอบ License เพื่อการประกอบอาชีพ ศึกษาดูงาน เป็นต้น",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "เปิดโอกาสให้ลงมือทำธุรกิจ และมีรายได้จริง รวมถึงบูรณาการองค์ความรู้ด้านบริหารธุรกิจกับศาสตร์ต่างๆ ได้",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t("ส่งเสริมการนำความรู้ด้านบริหารธุรกิจไปพัฒนาชุมชน", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "ฝึกฝนการนำเสนองาน การจัดรายการ การจัดทำคลิปวิดีโอ และอื่น ๆ ในห้องสตูดิโอของคณะฯ",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t("สนับสนุนการแข่งขันด้านบริหารธุรกิจในเวทีต่าง ๆ", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "สามารถเข้าร่วมโครงการนิสิตแลกเปลี่ยนนานาชาติ ได้แก่ โครงการแลกเปลี่ยนนิสิตด้านภาษาและวัฒนธรรม และ โครงการการแลกเปลี่ยนนิสิตด้านวิชาการ",
                        { ns: "course" }
                      )}
                    </li>
                  </ul>
                  <div className="paragraph_label mb_30">
                    <span className="topic_label">
                      {t("หมายเหตุ", { ns: "course" })}{" "}
                    </span>
                    {t(
                      "มีโอกาสเข้าร่วมโครงการสหกิจศึกษา (ปฏิบัติงานในสถานประกอบการ) เป็นเวลาอย่างน้อย 4 เดือน ในชั้นปีที่ 4 ถ้าผู้เรียนมีคุณสมบัติเป็นไปตามเงื่อนไขของคณะฯ และผ่านการคัดเลือกให้ปฏิบัติงานจากสถานประกอบการ",
                      { ns: "course" }
                    )}
                  </div>
                  <div className="panel_img_list">
                    <Zoom>
                      <div className="panel_figture">
                        <img
                          alt="ba activity"
                          src="/images/backgrounds/ba-act-1.jpg"
                        />
                      </div>
                    </Zoom>
                    <Zoom>
                      <div className="panel_figture">
                        <img
                          alt="ba activity"
                          src="/images/backgrounds/ba-act-2.jpg"
                        />
                      </div>
                    </Zoom>
                    <Zoom>
                      <div className="panel_figture">
                        <img
                          alt="ba activity"
                          src="/images/backgrounds/ba-act-3.jpg"
                        />
                      </div>
                    </Zoom>
                    <Zoom>
                      <div className="panel_figture">
                        <img
                          alt="ba activity"
                          src="/images/backgrounds/ba-act-4.jpg"
                        />
                      </div>
                    </Zoom>
                  </div>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section">
              <CourseHandbookWidget
                iconColor="#38B4E7"
                title={t("เล่มหลักสูตร", { ns: "course" })}
                src="/images/icons/course-hb-ba.png"
                data={[
                  { name: "เล่มหลักสูตร 2564" },
                  { name: "เล่มหลักสูตร 2559" },
                ]}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="contact_info_section">
              <div className="contact_info_item">
                <Cards.EnrollNow
                  themeColor="linear-gradient(90deg, #38B4E7 0%, #75C7E9 58.5%)"
                  title="สมัครเรียน"
                  blockLabel="หน่วยรับเข้ามหาวิทยาลัยบูรพา"
                  label1="อัพเดตข่าวสาร"
                  label2="งานวิชาการและวิเทศสัมพันธ์"
                />
              </div>
              <div className="contact_info_item">
                <Cards.Contact themeColor="linear-gradient(90deg, #38B4E7 0%, #75C7E9 58.5%)" />
              </div>
              <div className="contact_info_item">
                <Cards.CountactUs />
              </div>
            </div>
          </MOTION_FADE_UP>
        </div>
      </BaStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

const BANNER_LIST = [
  {
    imgPath: "/images/icons/banner-ba.webp",
    alt: "Buu",
    label1: "BA",
    label2: "สาขาวิชาบริหารธุรกิจ",
    label3: "กลุ่มวิชาการตลาดและบริการ",
    label4: "Business Administration",
    label5: "บริหารธุรกิจบัณฑิต",
  },
  {
    imgPath: "/images/icons/banner-ba.webp",
    alt: "Buu",
    label1: "BA",
    label2: "สาขาวิชาบริหารธุรกิจ",
    label3: "กลุ่มวิชาการตลาดและบริการ",
    label4: "Business Administration",
    label5: "บริหารธุรกิจบัณฑิต",
  },
];

const PARTNER_LIST = [
  {
    img: "/images/icons/partner-1.png",
    label: "กยศ.",
  },
  {
    img: "/images/icons/partner-2.png",
    label: "ทุนส่งเสริมการศึกษา มหาวิทยาลัยบูรพา",
  },
  {
    img: "/images/icons/partner-3.png",
    label: "ทุนเครือเจริญโภคภัณฑ์",
  },
  {
    img: "/images/icons/partner-4.png",
    label: "ทุนอายิโนโมะโต๊ะ",
  },
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "course", "menu"])),
      // Will be passed to the page component as props
    },
  };
}
