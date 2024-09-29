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
                  "หลักสูตรศิลปศาสตรบัณฑิต (ศศ.บ.) สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("ชื่อปริญญา :", { ns: "course" })}
                value={t(
                  "ศิลปศาสตรบัณฑิต (ภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ)",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("จำนวนหน่วยกิต รวมตลอดหลักสูตร :", { ns: "course" })}
                value={t("ไม่น้อยกว่า 130 หน่วยกิต", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                label={t("ระยะเวลาการศึกษา :", { ns: "course" })}
                value={t("3 ปีครึ่ง – 4 ปี", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("คุณสมบัติผู้ศึกษา :", { ns: "course" })}
                value={t(
                  "ผู้สมัครจบมัธยมศึกษาชั้นปีที่ 6 ทุกแผนการเรียนที่ผ่านการเรียนกลุ่มสาระการเรียนรู้วิชาภาษาต่างประเทศ ไม่ต่ำกว่า 9 หน่วยกิต (6 ภาคเรียน)",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("ปรัชญาหลักสูตร :", { ns: "course" })}
                value={t(
                  "ผลิตบัณฑิตที่มีความรู้ด้านภาษาอังกฤษเพื่อการสื่อสารธุรกิจ ให้มีความรอบรู้เท่าทันสถานการณ์ภายนอกที่เปลี่ยนแปลงตลอดเวลา โดยมีแนวคิดการเป็นผู้ใช้ภาษาอังกฤษในการดำเนินธุรกิจต่างๆ ได้อย่างมีประสิทธิภาพควบคู่กับการมีคุณธรรม และจริยธรรม",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                isNotBorder
                label={t("ค่าบำรุงและค่าธรรมเนียมการศึกษา :", { ns: "course" })}
                value={t(
                  "144,000 บาท (เหมาจ่ายรายภาคเรียน ภาคต้น/ภาคปลาย 18,000 บาท, ภาคฤดูร้อน",
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
                theme_pink
                title={t("เกี่ยวกับหลักสูตร", { ns: "course" })}
                isExpandDefault={true}
              >
                <div className="panel_info_block">
                  <div className="paragraph_label mb_30">
                    ศึกษาเกี่ยวกับการใช้ภาษาอังกฤษอย่างมีประสิทธิภาพทางด้านธุรกิจ
                    รวมถึงความเข้าใจวัฒนธรรมที่หลากหลาย
                    เพื่อใช้เป็นเครื่องมือในการแสวงหาความรู้ในการพัฒนาตนเองและสร้างสรรค์งานอาชีพ
                  </div>
                  <div className="paragraph_label">
                    <span className="topic_label">
                      {t("รายวิชาที่น่าสนใจ", { ns: "course" })}{" "}
                    </span>
                  </div>
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      English for Tourism Industry
                    </li>
                    <li className="paragraph_li">
                      English for Aviation Industry
                    </li>
                    <li className="paragraph_li">
                      English for Hotel Personnel
                    </li>
                    <li className="paragraph_li">
                      English for Standardized Tests
                    </li>
                    <li className="paragraph_li">
                      English for Importing and Exporting
                    </li>
                    <li className="paragraph_li">
                      English for International Trade
                    </li>
                    <li className="paragraph_li">
                      English for Logistics Management
                    </li>
                    <li className="paragraph_li">English for Mass Media</li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_66">
              <ScholarshipWidget
                txtColor="#FFFFFF"
                bgColor="linear-gradient(180deg, rgba(211, 111, 172, 0.9) 12.23%, #D03493 100%);"
                data={PARTNER_LIST}
                title={t("ทุนการศึกษา", { ns: "course" })}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_pink
                title={t("แนวทางประกอบอาชีพ", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      สามารถประกอบอาชีพที่เกี่ยวข้องกับงานด้านการใช้ภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจในภาครัฐและเอกชน
                      งานแปล งานสำนักงาน และธนาคาร
                    </li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_pink
                title={t("ความน่าสนใจ และกิจกรรม", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      {t(
                        "การศึกษาดูงานในสายงานต่างๆที่เกี่ยวข้อง เช่น สายการบิน โรงแรมระดับ5ดาว เป็นต้น",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "กิจกรรมจำลองการเป็นไกด์นำเที่ยวในรายวิชา English for Tourism Industry",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t("การฝึกงานและฝึกสหกิจศึกษาต่างประเทศ", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "ส่งนิสิตเข้าร่วมโครงการ AUN and ASEAN+3 Educational Forum and Young Speakers’ Contest",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "โครงการแลกเปลี่ยนภาษาและวัฒธรรมกับ University of Malaya และ อีกหลายมหาวิทยาลัยในสาธารณรัฐประชาชนจีน",
                        { ns: "course" }
                      )}
                    </li>
                  </ul>
                  <div className="paragraph_label mb_30">
                    <span className="topic_label">
                      {t("หมายเหตุ", { ns: "course" })}{" "}
                    </span>
                    {t(
                      "นิสิตสาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ มีโอกาสเข้าร่วมโครงการสหกิจศึกษา (ปฏิบัติงานในสถานประกอบการ) เป็นเวลา 4 เดือน ในชั้นปีที่ 4 ถ้านิสิตผ่านการคัดเลือกให้ปฏิบัติงานจากสถานประกอบการ",
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
                iconColor="#D03493"
                title={t("เล่มหลักสูตร", { ns: "course" })}
                src="/images/icons/course-hb-ebc.png"
                data={[
                  { name: "เล่มหลักสูตร 2564" },
                  { name: "เล่มหลักสูตร 2561" },
                  { name: "เล่มหลักสูตร 2556" },
                ]}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="contact_info_section">
              <div className="contact_info_item">
                <Cards.EnrollNow
                  themeColor="linear-gradient(87.06deg, #D03493 0.63%, #D36FAC 80.55%)"
                  title="สมัครเรียน"
                  blockLabel="หน่วยรับเข้ามหาวิทยาลัยบูรพา"
                  label1="อัพเดตข่าวสาร"
                  label2="งานวิชาการและวิเทศสัมพันธ์"
                />
              </div>
              <div className="contact_info_item">
                <Cards.Contact linearColor1="#D03493" linearColor2="#D36FAC" />
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
    imgPath: "/images/icons/banner-ebc.webp",
    alt: "Buu",
    label1: "EBC",
    label2: "สาขาวิชาภาษาอังกฤษ",
    label3: "เพื่อการสื่อสารทางธุรกิจ",
    label4: "English for Business Communication",
    label5: "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
  },
  {
    imgPath: "/images/icons/banner-ebc.webp",
    alt: "Buu",
    label1: "EBC",
    label2: "สาขาวิชาภาษาอังกฤษ",
    label3: "เพื่อการสื่อสารทางธุรกิจ",
    label4: "English for Business Communication",
    label5: "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
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
    img: "/images/icons/partner-5.png",
    label: "ทุนสนับสนุนการร่วม กิจกรรมของ AUN",
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
