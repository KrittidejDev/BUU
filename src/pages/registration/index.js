import { RegistrationStyled } from "@/styles/registrationStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import { BannerWidget } from "@/widgets";
import { Cards, Buttons, Mainlayouts } from "@/components";

export default function Registration() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <RegistrationStyled>
        <BannerWidget data={BANNER_LIST} />
        <div className="line_horizontal" />
        <div className="registration_body_container">
          <MOTION_FADE_UP>
            <div className="btn_regis_wrap">
              <Buttons.BgStandard label={"สมัครเรียน"} />
            </div>
          </MOTION_FADE_UP>
          <div className="academic_year_block">
            <MOTION_FADE_UP>
              <div className="academic_title">ประจำปีการศึกษา 2567</div>
              <img
                className="buu_img"
                alt="buu logo"
                src="/images/icons/science-logo.png"
              />
              <ul className="academic_list">
                <li className="academic_item">
                  ปฏิทินการรับสมัครอาจมีการเปลี่ยนแปลงตามความเหมาะสม
                </li>
                <li className="academic_item">
                  สอบถามรายละเอียดเพิ่มเติม
                  <span>
                    งานวิชาการและวิเทศสัมพันธ์ มหาวิทยาลัยบูรพาวิทยาเขตจันทบุรี
                  </span>
                </li>
                <li className="academic_item">ค่าธรรมเนียมการสมัคร 500 บาท</li>
              </ul>
              <div className="line_horizontal" />
            </MOTION_FADE_UP>

            <MOTION_FADE_UP>
              <div className="content_block">
                <div className="header_block">
                  <div className="header_label_normal">
                    คุณสมบัติทั่วไปของผู้สมัคร
                  </div>
                  <div className="header_label_big">
                    รอบที่ 2 โควต้า (Quota)
                  </div>
                  <div className="header_label_date">
                    (รับสมัคร 13 ก.พ. – 19 เม.ย.67)
                  </div>
                </div>
                <div className="figture_content">
                  <img
                    className="content_img"
                    alt="property student"
                    src="/images/backgrounds/bg-reg-quotar.jpg"
                  />
                </div>
                <ul className="content_list">
                  <li className="content_item underline">
                    โครงการขยายโอกาสทางการศึกษาในท้องถิ่น วิทยาเขตจันทบุรี
                    (ครั้งที่ 2)
                  </li>
                  <li className="content_item underline">
                    โครงการรับตรงในภาคตะวันออก 12 จังหวัด
                  </li>
                  <li className="content_item underline">
                    การคัดเลือกบุคคลที่สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง
                    (ปวส.) หรือเทียบเท่าเข้าศึกษาในหลักสูตรระดับปริญญาตรี
                    หลักสูตรต่อเนื่อง และเทียบโอนผลการเรียน (ครั้งที่ 2)
                  </li>
                </ul>
              </div>
              <div className="line_horizontal" />
            </MOTION_FADE_UP>
            <MOTION_FADE_UP>
              <div className="content_block">
                <div className="header_block">
                  <div className="header_label_normal">
                    คุณสมบัติทั่วไปของผู้สมัคร
                  </div>
                  <div className="header_label_big">
                    รอบที่ 1 แฟ้มสะสมผลงาน (Portfolio)
                  </div>
                  <div className="header_label_date">
                    (รับสมัคร 25 ต.ค.-27 พ.ย.66)
                  </div>
                </div>
                <div className="figture_content">
                  <img
                    className="content_img"
                    alt="property student"
                    src="/images/backgrounds/bg-reg-portfolio.jpg"
                  />
                </div>
                <ul className="content_list">
                  <li className="content_item underline">
                    โครงการนักเรียนที่มีความสามารถพิเศษทั่วประเทศ (ส่งแฟ้มผลงาน
                    : Portfolio)
                  </li>
                  <li className="content_item underline">
                    โครงการเพชรตะวันออก (ไม่ต้องส่งแฟ้มสะสมผลงาน
                    โดยผู้สมัครต้องมีหนังสือรับรองเปอร์เซ็นไทล์จากโรงเรียน)
                  </li>
                  <li className="content_item underline">
                    โครงการรับบุคคลเข้าศึกษาตามข้อตกลงความร่วมมือทางวิชาการ
                    (MOU) (ไม่ต้องส่งแฟ้มผลงาน)
                  </li>
                  <li className="content_item underline">
                    โครงการ PRE BUU (ส่งแฟ้มผลงาน : Portfolio)
                  </li>
                  <li className="content_item underline">
                    {`โครงการโควตาพิเศษโรงเรียนสาธิต "พิบูลบำเพ็ญ"
                  (ไม่ต้องส่งแฟ้มผลงาน)`}
                  </li>
                  <li className="content_item underline">
                    โครงการส่งเสริมนักเรียนที่มีคุณธรรม และจริยธรรม
                    (โครงการเด็กดีมีที่เรียน) (โรงเรียนรวบรวมใบสมัคร
                    ส่งให้สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาชลบุรี ระยอง
                    และให้ผู้ผ่านการคัดเลือกนำแฟ้มผลงานมาแสดงในวันสอบสัมภาษณ์กับมหาวิทยาลัยบูรพา)
                  </li>
                  <li className="content_item underline">
                    โครงการการรับนักเรียนมูลนิธิส่งเสริมโอลิมปิกวิชาการ
                    และพัฒนามาตรฐานวิทยาศาสตร์ ในพระอุปถัมภ์
                    สมเด็จพระเจ้าพี่นางเธอ เจ้าฟ้ากัลยาณิวัฒนา
                    กรมหลวงนราธิวาสราชนครินทร์ (สอวน.)
                    และการรับนักเรียนที่ผ่านเข้าค่ายโครงการวิทยาศาสตร์โลกและอวกาศโอลิมปิกระหว่างประเทศ(ไม่ต้องส่งแฟ้มผลงาน
                    แต่จะต้องมีเอกสารรับรองจากมูลนิธิ สอวน.แสดงในวันสอบสัมภาษณ์)
                  </li>
                  <li className="content_item underline">
                    โครงการสนับสนุนการจัดตั้งห้องเรียนวิทยาศาสตร์ในโรงเรียนโดยการกำกับดูแล
                    ของมหาวิทยาลัย(โครงการ วมว.) (ไม่ต้องส่งแฟ้มผลงาน)
                  </li>
                  <li className="content_item underline">
                    โครงการขยายโอกาสทางการศึกษาในท้องถิ่น วิทยาเขตจันทบุรี
                    (ไม่ต้องส่งแฟ้มผลงาน)
                  </li>
                  <li className="content_item underline">
                    โครงการรับบุคคลที่สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง
                    (ปวส.) หรือเทียบเท่าเข้าศึกษาต่อระดับปริญญาตรี
                    หลักสูตรต่อเนื่อง และเทียบโอนผลการเรียน
                    (สำหรับผู้สำเร็จการศึกษาระดับ ปวส.)
                  </li>
                </ul>
              </div>
              <div className="line_horizontal" />
            </MOTION_FADE_UP>
            <MOTION_FADE_UP>
              <div className="content_block">
                <div className="header_block">
                  <div className="header_label_big">
                    การรับสมัครคัดเลือกเข้าศึกษา
                  </div>
                </div>
                <div className="figture_content">
                  <img
                    className="content_img"
                    alt="property student"
                    src="/images/backgrounds/bg-reg-test.jpg"
                  />
                </div>
                <ul className="content_list mb_30">
                  <li className="content_item">
                    ผู้สมัครต้องทำการลงทะเบียนในระบบ mytcas ตั้งแต่วันที่ 23
                    ตุลาคม พ.ศ. 2566 เป็นต้นไป ทางเว็บไซต์
                    <span className="underline">
                      ระบบการคัดเลือกกลางบุคคลเข้าศึกษาในสถาบันอุดมศึกษา
                    </span>
                  </li>
                  <li className="content_item">
                    ผู้สมัครกรอกข้อมูลการสมัครที่เว็บไซต์
                    <span className="underline">
                      งานรับเข้าศึกษา มหาวิทยาลัยบูรพา หรือ ระบบรับสมัคร
                      มหาวิทยาลัยบูรพา
                    </span>
                  </li>
                </ul>
                <div className="header_block">
                  <div className="header_label_normal">
                    ค่าธรรมเนียมการสมัคร
                  </div>
                  <div className="header_label_normal">
                    และวิธีการชำระค่าธรรมเนียมการสมัคร
                  </div>
                </div>
                <ul className="content_list mb_12">
                  <li className="content_item">
                    ค่าธรรมเนียมการสมัครคัดเลือก{" "}
                    <span className="txt_big">500 บาท</span>
                  </li>
                  <li className="content_item">
                    นำใบสมัครไปชำระเงินผ่านแอพลิเคชัน Krungthai NEXT
                    เคาน์เตอร์ธนาคารกรุงไทย เคาน์เตอร์เซอร์วิส (ร้าน 7-eleven)
                    และที่ทำการไปรษณีย์ (ดูวันที่แต่ละโครงการฯ)
                    (การชำระค่าสมัครผ่านแอพลิเคชัน Krungthai NEXT
                    ใน(ดูวันที่แต่ละโครงการฯ) จะต้องชำระไม่เกินเวลา 22.30 น.)
                  </li>
                </ul>
                <div className="topic_label">*หมายเหตุ</div>
                <ul className="content_list decimal_style ">
                  <li className="content_item">
                    ในกรณีที่มีการชำระเงินค่าสมัครหลายครั้ง
                    มหาวิทยาลัยจะใช้ใบสมัครที่มีการชำระเงิน
                    ครั้งสุดท้ายเป็นสำคัญ
                  </li>
                  <li className="content_item">
                    มหาวิทยาลัยบูรพาจะไม่คืนเงินค่าธรรมเนียมในการสมัครให้
                    ไม่ว่ากรณีใดๆ ทั้งสิ้น
                  </li>
                </ul>
              </div>
              <div className="line_horizontal" />
            </MOTION_FADE_UP>
            <MOTION_FADE_UP>
              <div className="content_block">
                <div className="header_block">
                  <div className="header_label_normal">
                    การตรวจสอบข้อมูลการสมัคร ข้อมูลการชำระเงิน
                    และการแก้ไขข้อมูลการสมัคร
                  </div>
                </div>
                <ul className="content_list">
                  <li className="content_item">
                    ผู้สมัครสามารถตรวจสอบข้อมูลการสมัครและข้อมูลการชำระเงินทางเว็บไซต์
                    <span className="underline">
                      งานรับเข้าศึกษา มหาวิทยาลัยบูรพา
                    </span>
                    หรือ
                    <span className="underline">
                      ระบบรับสมัคร มหาวิทยาลัยบูรพา หลังจากชำระเงิน 3 วันทำการ
                    </span>
                  </li>
                  <li className="content_item">
                    หากผู้สมัครต้องการแก้ไขข้อมูลการสมัคร
                    (กรณีกรอกข้อมูลการสมัครไม่ถูกต้อง หรือต้องการ
                    เปลี่ยนแปลงข้อมูลทั่วไป)
                    ให้ดาวน์โหลดแบบฟอร์มขอแก้ไขข้อมูลจากเว็บไซต์
                    <span className="underline">
                      งานรับเข้าศึกษา มหาวิทยาลัยบูรพา
                    </span>
                    แล้วส่งแฟกซ์มายังหมายเลข 038-102721 หรือส่งอีเมลมายัง
                    regservice@buu.ac.th (ดูวันที่แต่ละโครงการฯ)
                    หากพ้นกำหนดจะไม่สามารถแก้ไข ข้อมูลการสมัครได้
                  </li>
                </ul>
              </div>
              <div className="line_horizontal" />
            </MOTION_FADE_UP>
            <MOTION_FADE_UP>
              <div className="content_block">
                <div className="header_block">
                  <div className="header_label_normal">
                    ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์
                  </div>
                </div>
                <div className="content_list">
                  <div className="content_item">
                    มหาวิทยาลัยบูรพาจะประกาศรายชื่อผู้มีสิทธิ์เข้ารับการสัมภาษณ์
                    ในวันที่ (ดูวันที่แต่ละโครงการฯ) ทางเว็บไซต์
                    <span className="underline">
                      งานรับเข้าศึกษา มหาวิทยาลัยบูรพา
                    </span>
                    หรือ ระบบรับสมัคร มหาวิทยาลัยบูรพา หรือ
                    <span className="underline">
                      เว็บไซต์มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
                    </span>{" "}
                    เวลา 16.00 น. เป็นต้นไป
                  </div>
                </div>
              </div>
            </MOTION_FADE_UP>
          </div>
          <MOTION_FADE_UP>
            <div className="contact_info_section">
              <div className="contact_info_item">
                <Cards.EnrollNow
                  themeColor="linear-gradient(360deg, #F89925 12.5%, #F9D10F 70.45%)"
                  title="สอบถามเพิ่มเติม"
                  blockLabel="งานวิชาการและวิเทศสัมพันธ์"
                />
              </div>
              <div className="contact_info_item">
                <Cards.Contact
                  themeColor="linear-gradient(360deg, #F89925 12.5%, #F9D10F 70.45%)"
                  linearColor1="#F89925"
                  linearColor2="#F9D10F"
                />
              </div>
              <div className="contact_info_item">
                <Cards.CountactUs />
              </div>
            </div>
          </MOTION_FADE_UP>
          <MOTION_FADE_UP>
            <div className="shortcut_block">
              <div className="shortcut_item">
                <Buttons.BgStandard
                  theme_shortcut_transparent
                  label="“ รวมหลักสูตรที่เปิดการเรียนการสอน ”"
                />
              </div>
              <div className="shortcut_item">
                <Buttons.BgStandard
                  theme_shortcut
                  label="“ รวมข่าวรับสมัครนิสิตใหม่ 2567 ”"
                />
              </div>
            </div>
          </MOTION_FADE_UP>
        </div>
      </RegistrationStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

const BANNER_LIST = [
  {
    imgPath: "/images/backgrounds/banner-registrarion.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/backgrounds/banner-registrarion.jpg",
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
