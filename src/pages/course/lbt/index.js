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
                  "หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("ชื่อปริญญา :", { ns: "course" })}
                value={t(
                  "บริหารธุรกิจบัณฑิต (การจัดการโลจิสติกส์ และ การค้าชายแดน)",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                label={t("จำนวนหน่วยกิต รวมตลอดหลักสูตร :", { ns: "course" })}
                value={t("ไม่น้อยกว่า 130 หน่วยกิต", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                label={t("ระยะเวลาการศึกษา :", { ns: "course" })}
                value={t("ตลอดหลักสูตร 4 ปี", { ns: "course" })}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("คุณสมบัติผู้ศึกษา :", { ns: "course" })}
                value={t(
                  "ผู้สมัครจบมัธยมศึกษาชั้นปีที่ 6 ทุกแผนการเรียน หรือเทียบเท่า เช่น ประกาศนียบัตรวิชาชีพ (ปวช.)",
                  { ns: "course" }
                )}
              />
              <Displays.CourseLabelValue
                theme_vertical
                label={t("ปรัชญาหลักสูตร :", { ns: "course" })}
                value={t(
                  "ผลิตบัณฑิตที่มีความรู้ความสามารถด้านการจัดการโลจิสติกส์ มีศักยภาพด้านการค้าชายแดนและการค้าระหว่างประเทศ มีทักษะในการใช้เทคโนโลยีเพื่อการจัดการโลจิสติกส์ มีความรอบรู้ควบคู่กับการมีคุณธรรมและจริยธรรม เพื่อสอดคล้องกับความต้องการ และเป็นรากฐานการพัฒนาที่ยั่งยืนของประเทศไทย",
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
                theme_gray
                title={t("เกี่ยวกับหลักสูตร", { ns: "course" })}
                isExpandDefault={true}
              >
                <div className="panel_info_block">
                  <div className="paragraph_label mb_30">
                    ศึกษาเกี่ยวกับการจัดการโลจิสติกส์และการค้ากับกลุ่มประเทศเพื่อนบ้านของไทย
                    รวมทั้งกลุ่มประเทศอาเซียนและเอเชียตะวันออก
                    เป็นหลักสูตรที่จัดทำขึ้นภายใต้กรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ
                    สาขาโลจิสติกส
                  </div>
                  <div className="paragraph_label">
                    <span className="topic_label">
                      {t("หน่วยกิต", { ns: "course" })}{" "}
                    </span>
                  </div>
                  <div className="paragraph_label">
                    จำนวนหน่วยกิตรวมตลอดหลักสูตรไม่น้อยกว่า 130 หน่วยกิต
                  </div>
                  <ul className="paragraph_list">
                    <li className="paragraph_li">
                      วิชาศึกษาทั่วไป ไม่น้อยกว่า 30 หน่วยกิต เช่น
                      ภาษาเพื่อการสื่อสาร ภูมิบูรพา
                      พลเมืองกับความรับผิดชอบต่อสังคมไทย อาเซียน และโลก เป็นต้น
                    </li>
                    <li className="paragraph_li">
                      วิชาเฉพาะ ไม่น้อยกว่า 94 หน่วยกิต เช่น
                      การจัดการโลจิสติกส์และโซ่อุปทาน
                      การจัดการเพื่อการส่งออกและการนำเข้า การจัดการคลังสินค้า
                      พิธีการศุลกากร การจัดการการขนส่งทางทะเล เป็นต้น
                    </li>
                    <li className="paragraph_li">
                      วิชาเลือกเสรี ไม่น้อยกว่า 6 หน่วยกิต
                    </li>
                  </ul>
                </div>
              </Cards.PanelCollape>
            </div>
            <MOTION_FADE_UP>
              <div className="section mb_66">
                <ScholarshipWidget
                  txtColor="#FFFFFF"
                  bgColor="linear-gradient(180deg, rgba(143, 138, 156, 0.6) 0%, #4E4E4F 100%);"
                  data={PARTNER_LIST}
                  title={t("ทุนการศึกษา", { ns: "course" })}
                />
              </div>
            </MOTION_FADE_UP>
            <MOTION_FADE_UP>
              <div className="section mb_37">
                <Cards.PanelCollape
                  theme_gray
                  title={t("แนวทางประกอบอาชีพ", { ns: "course" })}
                >
                  <div className="panel_info_block">
                    <ul className="paragraph_list">
                      <li className="paragraph_li">
                        ด้านการจัดการโลจิสติกส์ เช่น นักวางแผนการผลิต/จัดซื้อ
                        นักวิเคราะห์การจัดการโลจิสติกส์
                        การคลังสินค้าและศูนย์กระจายสินค้า
                        ผู้ควบคุมการขนส่งสินค้า ผู้ประกอบการ เป็นต้น
                      </li>
                      <li className="paragraph_li">
                        ด้านการจัดการการค้าระหว่างประเทศหรือการจัดการการค้าชายแดน
                        เช่น ตัวแทนนำเข้า-ส่งออก นักวางแผนและปฏิบัติการท่าเรือ
                        นักจัดซื้อ/จัดหาระหว่างประเทศ ฝ่ายขายต่างประเทศ
                        ฝ่ายประสานงานต่างประเทศ ผู้ประกอบการ เป็นต้น
                      </li>
                    </ul>
                  </div>
                </Cards.PanelCollape>
              </div>
            </MOTION_FADE_UP>
            <MOTION_FADE_UP>
              <div className="section mb_37">
                <Cards.PanelCollape
                  theme_gray
                  title={t("ความน่าสนใจ และกิจกรรม", { ns: "course" })}
                >
                  <div className="panel_info_block">
                    <ul className="paragraph_list">
                      <li className="paragraph_li">
                        {t(
                          "ชั้นปีที่ 1-3 ศึกษาดูงานในสายงานต่างๆ เช่น ด่านการค้าชายแดน ท่าเทียบเรือระหว่างประเทศ ท่าอากาศยาน คลังสินค้า โรงงานสายการผลิต เป็นต้น",
                          { ns: "course" }
                        )}
                      </li>
                      <li className="paragraph_li">
                        {t(
                          "ชั้นปีที่ 4 เข้าร่วมการฝึกงานและสหกิจศึกษาตามสถานประกอบการทั้งในและต่างประเทศ",
                          { ns: "course" }
                        )}
                      </li>
                      <li className="paragraph_li">
                        {t(
                          "เข้าร่วมโครงการนิสิตแลกเปลี่ยนนานาชาติ เช่น โครงการแลกเปลี่ยนนิสิตด้านภาษาและวัฒนธรรม ( Cultural and Language Exchange Program: CLEP) และ โครงการการแลกเปลี่ยนนิสิตด้านวิชาการ ( Academic Exchange Program: AEP)",
                          { ns: "course" }
                        )}
                      </li>
                      <li className="paragraph_li">
                        {t(
                          "กิจกรรมส่งเสริมทักษะต่างๆ เช่น การจัดอบรมและสอบใบประกอบคุณวุฒิวิชาชีพด้านโลจิสติกส์ ผู้ปฏิบัติการนำเข้าส่งออก ผู้ปฏิบัติคลังสินค้า",
                          { ns: "course" }
                        )}
                      </li>
                      <li className="paragraph_li">
                        {t(
                          "กิจกรรมสัมนาด้านการจัดการโลจิสติกส์ โดยเชิญวิทยากรผู้เชี่ยวชาญในสายงานต่างๆ มาแลกเปลี่ยนเรียนรู้ที่ทันสมัยตามสถานการณ์โลก",
                          { ns: "course" }
                        )}
                      </li>
                      <li className="paragraph_li">
                        {t(
                          "กิจกรรม LBT DAY จัดแสดงผลงานของนิสิต และแลกเปลี่ยนประสบการณ์กับศิษย์เก่า",
                          { ns: "course" }
                        )}
                      </li>
                      <li className="paragraph_li">
                        {t(
                          "กิจกรรมการแข่งขันทักษะด้านโลจิสติกส์ต่างๆ เช่น การแข่งขัน Lean Game การแข่งขันแก้ปัญหาด้านโลจิสติกส์ (Logistics Battle) เป็นต้น",
                          { ns: "course" }
                        )}
                      </li>
                    </ul>
                    <div className="paragraph_label mb_30">
                      <span className="topic_label">
                        {t("หมายเหตุ", { ns: "course" })}{" "}
                      </span>
                      {t(
                        "นิสิตสาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน มีโอกาสเข้าร่วมโครงการสหกิจศึกษา (ปฏิบัติงานในสถานประกอบการ) เป็นเวลา 4 เดือน ในชั้นปีที่ 4 ถ้านิสิตผ่านการคัดเลือกให้ปฏิบัติงานจากสถานประกอบการ",
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
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="section">
              <CourseHandbookWidget
                iconColor="#4E4E50"
                title={t("เล่มหลักสูตร", { ns: "course" })}
                src="/images/icons/course-hb-lbt.png"
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
                  themeColor="linear-gradient(87.06deg, #4E4E4F 0.63%, #8F8A9C 80.55%)"
                  title="สมัครเรียน"
                  blockLabel="หน่วยรับเข้ามหาวิทยาลัยบูรพา"
                  label1="อัพเดตข่าวสาร"
                  label2="งานวิชาการและวิเทศสัมพันธ์"
                />
              </div>
              <div className="contact_info_item">
                <Cards.Contact linearColor1="#4E4E4F" linearColor2="#8F8A9C" />
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
    imgPath: "/images/icons/banner-lbt.webp",
    alt: "Buu",
    label1: "LBT",
    label2: "สาขาวิชาการจัดการโลจิสติกส์",
    label3: "และการค้าชายแดน",
    label4: ["Logistics and Cross- Border Trade", "Management"],
    label5: "บริหารธุรกิจบัณฑิต (บธ.บ.)",
  },
  {
    imgPath: "/images/icons/banner-lbt.webp",
    alt: "Buu",
    label1: "LBT",
    label2: "สาขาวิชาการจัดการโลจิสติกส์",
    label3: "และการค้าชายแดน",
    label4: ["Logistics and Cross- Border Trade", "Management"],
    label5: "บริหารธุรกิจบัณฑิต (บธ.บ.)",
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
