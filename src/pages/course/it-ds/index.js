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
                  "หลักสูตรวิทยาศาสตรบัณฑิต  (วท.บ.) สาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("ชื่อปริญญา :", { ns: "course" })}
                value={t(
                  "วิทยาศาสตรบัณฑิต (เทคโนโลยีสารสนเทศและวิทยาการข้อมูล)",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("จำนวนหน่วยกิต รวมตลอดหลักสูตร :", { ns: "course" })}
                value={t("ไม่น้อยกว่า 125 หน่วยกิต", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                label={t("ระยะเวลาการศึกษา :", { ns: "course" })}
                value={t(
                  "กรณีเป็นผู้สำเร็จการศึกษามัธยมศึกษาตอนปลายหรือเทียบเท่า ระยะเวลาการสำเร็จการศึกษา 3 ปีครึ่ง - 4 ปี และเป็นผู้สำเร็จการศึกษาประกาศนียบัตรวิชาชีพชั้นสูงหรือเทียบเท่า ขึ้นอยุ่กับจำนวนหน่วยกิตที่เทียบโอน",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("คุณสมบัติผู้ศึกษา :", { ns: "course" })}
                value={
                  <>
                    <p>
                      เป็นผู้สำเร็จการศึกษามัธยมศึกษาตอนปลายหรือเทียบเท่า หรือ
                      เป็นผู้สำเร็จการศึกษาประกาศนียบัตรวิชาชีพชั้นสูงหรือเทียบเท่า
                      หรืออนุปริญญา และมีเกณฑ์คุณสมบัติเพิ่มเติม ดังนี้
                    </p>
                    <p>
                      กรณีเป็นผู้สำเร็จการศึกษามัธยมศึกษาตอนปลายหรือเทียบเท่า
                      จะต้องมีหน่วยกิตการเรียนในกลุ่มสาระการเรียนรู้คณิตศาสตร์หรือคอมพิวเตอร์รวมกัน
                      ไม่ต่ำกว่า 12 หน่วยกิต
                      และกลุ่มสาระการเรียนรู้ทางภาษาต่างประเทศ ไม่ต่ำกว่า 9
                      หน่วยกิต
                    </p>
                    <p>
                      กรณีเป็นผู้สำเร็จการศึกษาประกาศนียบัตรวิชาชีพชั้นสูงหรือเทียบเท่า
                      หรืออนุปริญญา จะต้องสำเร็จการศึกษาทางด้านไฟฟ้า
                      ไฟฟ้าและอิเล็กทรอนิกส์ อิเล็กทรอนิกส์
                      เทคโนโลยีสารสนเทศและการสื่อสาร แมคคาทรอนิกส์และหุ่นยนต์
                      หรือ เทคโนโลยีคอมพิวเตอร์
                      โดยที่นิสิตสามารถเทียบโอนผลการเรียนได้
                      ตามประกาศมหาวิทยาลัยบูรพา เรื่อง
                      การเทียบโอนผลการเรียนนิสิตระดับปริญญาตรี พ.ศ. 2560
                      และที่แก้ไขเพิ่มเติม (ถ้ามี)
                    </p>
                  </>
                }
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("ปรัชญาหลักสูตร :", { ns: "course" })}
                value={t(
                  "หลักสูตรนี้มุ่งสร้างบัณฑิตที่พร้อมเรียนรู้สู่สิ่งใหม่ มีความสามารถในการประยุกต์ใช้เทคโนโลยีสารสนเทศและวิทยาการข้อมูล มีมนุษยสัมพันธ์ มีทักษะพร้อมปฏิบัติงาน มีคุณธรรม มีส่วนในการขับเคลื่อนการเปลี่ยนรูปหน่วยงานให้เป็นองค์กรที่ขับเคลื่อนด้วยข้อมูลดิจิทัล มุ่งสร้างนวัตกรรมให้สอดคล้องกับความต้องการของยุทธศาสตร์ประเทศ",
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
                theme_orange
                title={t("เกี่ยวกับหลักสูตร", { ns: "course" })}
                isExpandDefault={true}
              >
                <div className="panel_info_block">
                  <div className="paragraph_label mb_12">
                    หลักสูตรวิทยาศาสตรบัณฑิต
                    สาขาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล
                    ได้พัฒนาขึ้นเพื่อตอบสนองต่อความต้องการบุคลากรในอุตสาหกรรมดิจิทัล
                    รองรับการเปลี่ยนรูปองค์การไปสู่องค์กรอัจฉริยะที่ขับเคลื่อนด้วยข้อมูล
                    (Data-driven Business)
                    บนพื้นฐานของเทคโนโลยีสารสนเทศและวิทยาการข้อมูล
                    พัฒนากำลังคนสำหรับธุรกิจดิจิทัล
                    สอดคล้องกับการใช้เทคโนโลยีสารสนเทศและวิทยาการข้อมูลเป็นเครื่องมือที่ใช้ในการขับเคลื่อนเชิงธุรกิจทั้งในระดับท้องถิ่น
                    และระดับนานาชาติ
                    ที่มีความสำคัญต่อการพัฒนาประเทศและสามารถสร้างรายได้ให้กับประเทศ
                  </div>
                  <div className="paragraph_label">
                    <span className="topic_label underline">
                      ติดต่อประธานสาขา
                    </span>{" "}
                    : อ.ไพฑูรย์ ศรีนิล
                    <span className="topic_label"> Tel</span> : 0813470881
                    <span className="topic_label"> Line-ID</span> : big.toon
                    <span className="topic_label"> Facebook</span> : ไพฑูรย์
                    ศรีนิล
                  </div>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_66">
              <ScholarshipWidget
                bgColor="linear-gradient(180deg, #FED58B 12.23%, #FCB026 100%);"
                data={PARTNER_LIST}
                title={t("ทุนการศึกษา", { ns: "course" })}
              />
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_orange
                title={t("แนวทางประกอบอาชีพ", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      นักวิชาการด้านเทคโนโลยีสารสนเทศและวิทยาการข้อมูล
                    </li>
                    <li className="paragraph_li">นักพัฒนาเว็บไซต์</li>
                    <li className="paragraph_li">
                      นักวิเคราะห์และออกแบบระบบงานด้านสารสนเทศ
                    </li>
                    <li className="paragraph_li">นักทดสอบงานระบบสารสนเทศ</li>
                    <li className="paragraph_li">นักวิทยาการข้อมูล</li>
                    <li className="paragraph_li">นักวิเคราะห์ข้อมูล</li>
                    <li className="paragraph_li">
                      นักวิเคราะห์ด้านอัจฉริยะทางธุรกิจ
                    </li>
                    <li className="paragraph_li">
                      นักพัฒนาด้านอัจฉริยะทางธุรกิจ
                    </li>
                    <li className="paragraph_li">
                      นักพัฒนาคลังข้อมูล
                      ในภาคธุรกิจที่ขับเคลื่อนด้วยข้อมูลขนาดใหญ่
                    </li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section mb_37">
              <Cards.PanelCollape
                theme_orange
                title={t("ความน่าสนใจ และกิจกรรม", { ns: "course" })}
              >
                <div className="panel_info_block">
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      {t("ศึกษาดูงานด้านเทคโนโลยีสารสนเทศและวิทยาการข้อมูล", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t("การเสริมทักษะการบังคับโดรน", { ns: "course" })}
                    </li>
                    <li className="paragraph_li">
                      {t("การเสริมทักษะการทำงานด้าน IoT", { ns: "course" })}
                    </li>
                    <li className="paragraph_li">
                      {t("การร่วมกิจกรรมค่ายพัฒนาซอฟต์แวร์", { ns: "course" })}
                    </li>
                    <li className="paragraph_li">
                      {t("การร่วมกิจกรรมนำเสนอผลงานทางวิชาการ", {
                        ns: "course",
                      })}
                    </li>
                    <li className="paragraph_li">
                      {t("กิจกรรมสานสัมพันธ์น้องพี่", { ns: "course" })}
                    </li>
                    <li className="paragraph_li">
                      {t("กิจกรรมจิตอาสา", { ns: "course" })}
                    </li>
                    <li className="paragraph_li">
                      {t(
                        "โครงการนิสิตแลกเปลี่ยนนานาชาติ เช่น โครงการแลกเปลี่ยนนิสิตด้านภาษาและวัฒนธรรม (Cultural and Language Exchange Program: CLEP) และ โครงการการแลกเปลี่ยนนิสิตด้านวิชาการ ( Academic Exchange Program: AEP)",
                        {
                          ns: "course",
                        }
                      )}
                    </li>
                  </ul>
                  <div className="paragraph_label">
                    <span className="topic_label">
                      {t("หมายเหตุ", { ns: "course" })}{" "}
                    </span>
                    {t(
                      "นิสิตสาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล มีโอกาสเข้าร่วมโครงการสหกิจศึกษา (ปฏิบัติงานในสถานประกอบการ) เป็นเวลาไม่น้อยกว่า 15 สัปดาห์ ในชั้นปีที่ 4 ถ้านิสิตมีคุณสมบัติเป็นไปตามเงื่อนไขของคณะฯ และผ่านการคัดเลือกให้ปฏิบัติงานจากสถานประกอบการ",
                      { ns: "course" }
                    )}
                  </div>
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      กรณีการฝึกสหกิจศึกษา สามารถเข้าร่วมกับสถานประกอบการ
                      ทั้งในกรุงเทพฯ ต่างจังหวัด และ
                      มีโอกาสไปฝึกสหกิจศึกษาต่างเทศ เช่น สาธารณรัฐประชาชนจีน
                      โดยสถิติหลังฝึกจบมีโอกาสได้งานทำสูง
                    </li>
                    <li className="paragraph_li">
                      กรณีไม่ไปสหกิจศึกษา สามารถเข้าร่วมฝึกประสบการณ์วิชาชีพ
                      กับสถานประกอบการโดยใช้เวลา ไม่น้อยกว่า 7 สัปดาห์
                      และทำโครงงานการจัดการเทคโนโลยีสารสนเทศและวิทยาการข้อมูลที่นิสิตสนใจ
                    </li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section">
              <CourseHandbookWidget
                iconColor="#FCB026"
                title={t("เล่มหลักสูตร", { ns: "course" })}
                src="/images/icons/course-hb-it-ds.png"
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
                  themeColor="linear-gradient(87.06deg, #FCB026 0.63%, #FED58B 80.55%)"
                  title="สมัครเรียน"
                  blockLabel="หน่วยรับเข้ามหาวิทยาลัยบูรพา"
                  label1="อัพเดตข่าวสาร"
                  label2="งานวิชาการและวิเทศสัมพันธ์"
                />
              </div>
              <div className="contact_info_item">
                <Cards.Contact linearColor1="#FCB026" linearColor2="#FED58B" />
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
    imgPath: "/images/icons/banner-it&ds.webp",
    alt: "Buu",
    label1: "IT&DS",
    label2: "สาขาวิชาเทคโนโลยีสารสนเทศ",
    label3: "และวิทยาการข้อมูล",
    label4: "Information Technology and Data Science",
    label5: "วิทยาศาสตร์บัณฑิต (วท.บ.)",
  },
  {
    imgPath: "/images/icons/banner-it&ds.webp",
    alt: "Buu",
    label1: "IT&DS",
    label2: "สาขาวิชาเทคโนโลยีสารสนเทศ",
    label3: "และวิทยาการข้อมูล",
    label4: "Information Technology and Data Science",
    label5: "วิทยาศาสตร์บัณฑิต (วท.บ.)",
  },
];

const PARTNER_LIST = [
  {
    img: "/images/icons/partner-1.png",
    label: "กยศ.",
  },
  {
    img: "/images/icons/partner-3.png",
    label: "ทุนเครือเจริญโภคภัณฑ์",
  },
  {
    img: "/images/icons/partner-2.png",
    label: "ทุนส่งเสริมการศึกษา มหาวิทยาลัยบูรพา",
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
