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
                  "วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาเทคโนโลยีการเกษตรสมัยใหม่",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("ชื่อปริญญา :", { ns: "course" })}
                value={t(
                  "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีการเกษตรสมัยใหม่",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("จำนวนหน่วยกิต รวมตลอดหลักสูตร :", { ns: "course" })}
                value={t("ไม่น้อยกว่า 129 หน่วยกิต", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                label={t("ระยะเวลาการศึกษา :", { ns: "course" })}
                value={t("3 ปีครึ่ง – 4 ปี", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("คุณสมบัติผู้ศึกษา :", { ns: "course" })}
                value={t(
                  "รับผู้สมัครจบมัธยมศึกษาชั้นปีที่ 6 ที่ผ่านการเรียนกลุ่มสาระการเรียนรู้วิชาคณิตศาสตร์ ไม่ต่ำกว่า 12 หน่วยกิต (6 ภาคเรียน)",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("ปรัชญาหลักสูตร :", { ns: "course" })}
                value={t(
                  "ผลิตบัณฑิตที่มีความรอบรู้วิชาการ ชำนาญปฏิบัติ ก้าวทันเทคโนโลยีการเกษตรสมัยใหม่ สามารถประยุกต์ นำพาสังคมไทยให้ปลอดภัย เข้มแข็งและยั่งยืน",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                isNotBorder
                label={t("ค่าบำรุงและค่าธรรมเนียมการศึกษา :", { ns: "course" })}
                value={t(
                  "เหมาจ่ายรายภาคเรียน ภาคต้น/ภาคปลาย ภาคเรียนละ 13,000 บาท , ภาคฤดูร้อน",
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
                theme_green
                title={t("เกี่ยวกับหลักสูตร", { ns: "course" })}
                isExpandDefault={true}
              >
                <div className="panel_info_block">
                  <div className="paragraph_label">
                    <span className="topic_label">
                      {t(
                        "1. สาระสำคัญในการปรับปรุงหลักสูตร  มีการพัฒนาจากหลักสูตรเดิมอย่างไร",
                        { ns: "course" }
                      )}
                    </span>
                  </div>
                  <div className="paragraph_label mb_30">
                    <p>
                      {t(
                        "หลักสูตรเทคโนโลยีการเกษตรสมัยใหม่ ได้พัฒนาเพื่อตอบโจทย์ตลาดแรงงานและสถานประกอบการ (หลักสูตรปรับปรุง 2563) โดยปัจจุบันการเปลี่ยนแปลงเทคโนโลยีที่เกิดขึ้นอย่างรวดเร็ว ได้แก่ เทคโนโลยีการผลิตพืชแบบแม่นยำ เทคโนโลยีการจัดการธาตุอาหารพืช เทคโนโลยีชีวภาพกับการจัดการโรคพืช เทคโนโลยีการปรับปรุงพันธุ์ และเทคโนโลยีเมล็ดพันธุ์ การเปลี่ยนแปลงทางเศรษฐกิจ สังคมและวัฒนธรรม และนโยบายของรัฐบาลไทยแลนด์ 4.0 มุ่งพัฒนาการเกษตรแบบดั้งเดิมสู่การบริหารจัดการการเกษตรแบบสมัยใหม่ โดยอาศัยเทคโนโลยีและนวัตกรรมมาสนับสนุนการผลิตสินค้าเกษตร หลักสูตรจึงพัฒนารายวิชาที่มุ่งเน้นการเรียนตั้งแต่ต้นน้ำถึงปลายน้ำ การผลิตสู่การตลาดและการเพิ่มมูลค่า และแบ่งกลุ่มวิชาเพื่อมุ่งผลิตบัณฑิตที่มีคุณสมบัติและความสามารถในการทำงานในปัจจุบันและในอนาคตที่มุ่งเน้น Smart officer, Smart researcher, Smart farmer, Smart agriculture และการตลาดสมัยใหม่",
                        { ns: "course" }
                      )}
                    </p>
                  </div>
                  <div className="paragraph_label">
                    <span className="topic_label">
                      2. หลักสูตร เด่นอย่างไร
                      เด่นกว่าหลักสูตรในมหาวิทยาลัยอื่นอย่างไร
                    </span>
                  </div>
                  <div className="paragraph_label mb_30">
                    <p>
                      เป็นหลักสูตรเดียวในประเทศไทยที่เน้นการจัดการเรียนการสอนเทคโนโลยีและการจัดการไม้ผล
                      การปรับปรุงพันธุ์พืชอาหาร
                      ซึ่งในการออกแบบหลักสูตรได้แยกออกเป็นกลุ่มวิชา
                      โดยคำนึงถึงสถานที่ตั้งของมหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
                      ซึ่งเป็นแหล่งปลูกไม้ผลและพืชเศรษฐกิจ
                      ที่สำคัญของประเทศไทยและมีมูลค่าการส่งออกสูง
                    </p>
                  </div>
                  <div className="paragraph_label pl_22">
                    <span className="topic_label">-. วิชาเอก</span>
                  </div>
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      กลุ่มวิชาเทคโนโลยีและการจัดการไม้ผล{" "}
                    </li>
                    <li className="paragraph_li">
                      กลุ่มวิชาเทคโนโลยีปรับปรุงพันธุ์และการออกแบบพืชอาหาร
                    </li>
                  </ul>
                  <div className="paragraph_label pl_22">
                    <span className="topic_label">
                      ข. สาขานี้เรียนด้านไหนบ้าง
                    </span>
                  </div>
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      การจัดการธาตุอาหารพืช เทคโนโลยีการผลิตไม้ผล
                    </li>
                    <li className="paragraph_li">
                      โรคพืช ธุรกิจเกษตร การขายสินค้าออนไลน์
                    </li>
                    <li className="paragraph_li">
                      นวัตกรรมอาหาร เกษตรอัจฉริยะ
                    </li>
                    <li className="paragraph_li">
                      การปรับปรุงพันธุ์พืช การปลูกพืชไร้ดิน
                    </li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_66">
              <ScholarshipWidget
                bgColor="linear-gradient(180deg, #6CC06E 0%, #136835 100%)"
                txtColor="#FFFFFF"
                data={PARTNER_LIST}
                title={t("ทุนการศึกษา", { ns: "course" })}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_green
                title={t("แนวทางประกอบอาชีพ", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      รับราชการในส่วนงานที่เกี่ยวข้องกับทางด้านการเกษตร
                    </li>
                    <li className="paragraph_li">
                      นักวิจัยและเจ้าหน้าที่ในองค์กรภาครัฐและเอกชน
                    </li>
                    <li className="paragraph_li">
                      ประกอบธุรกิจทางด้านการเกษตรหรือเป็นพนักงานบริษัทที่ประกอบธุรกิจการเกษตร
                    </li>
                    <li className="paragraph_li">นักวิชาการเกษตร</li>
                    <li className="paragraph_li">
                      หน่วยงานราชการ ฝ่ายตรวจสอบคุณภาพผลผลิต
                    </li>
                    <li className="paragraph_li">
                      นักปรับปรุงพันธุ์พืช บริษัทสารเคมีการเกษตร
                    </li>
                    <li className="paragraph_li">
                      บริษัทผู้ผลิตและจำหน่ายเมล็ดพันธุ์พืช
                    </li>
                    <li className="paragraph_li">ผู้ประกอบการธุรกิจเกษตร</li>
                    <li className="paragraph_li">
                      สามารถศึกษาต่อในระดับปริญญาโทและเอก
                    </li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_green
                title={t("ความน่าสนใจ และกิจกรรม", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      {t(
                        "สาขานี้เน้นการการเรียนนอกชั้นเรียนและลงพื้นที่ศึกษาดูงานในไร่และสวนจริงๆ การศึกษาในระบบโรงเรือน",
                        { ns: "course" }
                      )}
                    </li>
                    <li className="paragraph_li">
                      {t("ศึกษาดูงานโรงคัด-บรรจุผลิตผลการเกษตร", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t("การเรียนในห้องปฏิบัติการ / การเพาะเลี้ยงเนื้อเยื่อ", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "โครงการนิสิตแลกเปลี่ยนนานาชาติ ได้แก่ โครงการแลกเปลี่ยนนิสิตด้านภาษาและวัฒนธรรม ( Cultural and Language Exchange Program: CLEP) และ โครงการการแลกเปลี่ยนนิสิตด้านวิชาการ ( Academic Exchange Program: AEP)",
                        { ns: "course" }
                      )}
                    </li>
                  </ul>
                  <div className="paragraph_label mb_30">
                    <span className="topic_label">
                      {t("หมายเหตุ", { ns: "course" })}{" "}
                    </span>
                    {t(
                      "นิสิตสาขาวิชาเทคโนโลยีการเกษตรมีโอกาสเข้าร่วมโครงการสหกิจศึกษา (ปฏิบัติงานในสถานประกอบการ) เป็นเวลา 4 เดือน ในชั้นปีที่ 4 ถ้านิสิตมีคุณสมบัติเป็นไปตามเงื่อนไขของคณะฯ และผ่านการคัดเลือกให้ปฏิบัติงานจากสถานประกอบการ",
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
                iconColor="#136835"
                title={t("เล่มหลักสูตร", { ns: "course" })}
                src="/images/icons/course-hb-at.png"
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
                  themeColor="linear-gradient(87.06deg, #136835 0.63%, #6CC06E 80.55%)"
                  title="สมัครเรียน"
                  blockLabel="หน่วยรับเข้ามหาวิทยาลัยบูรพา"
                  label1="อัพเดตข่าวสาร"
                  label2="งานวิชาการและวิเทศสัมพันธ์"
                />
              </div>
              <div className="contact_info_item">
                <Cards.Contact linearColor1="#13683" linearColor2="#6CC06E" />
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
    imgPath: "/images/icons/banner-at.webp",
    alt: "Buu",
    label1: "AT",
    label2: "สาขาวิชาเทคโนโลยี",
    label3: "การเกษตรสมัยใหม่",
    label4: ["Science Program in Modern", "Agricultural Technology"],
    label5: "วิทยาศาสตรบัณฑิต (วท.บ.)",
  },
  {
    imgPath: "/images/icons/banner-at.webp",
    alt: "Buu",
    label1: "AT",
    label2: "สาขาวิชาเทคโนโลยี",
    label3: "การเกษตรสมัยใหม่",
    label4: ["Science Program in Modern", "Agricultural Technology"],
    label5: "วิทยาศาสตรบัณฑิต (วท.บ.)",
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
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "course", "menu"])),
      // Will be passed to the page component as props
    },
  };
}
