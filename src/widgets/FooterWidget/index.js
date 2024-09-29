import Link from "next/link";
import { FooterWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { Icons } from "@/components";

const FooterWidget = () => {
  const { t } = useTranslation(["menu"]);
  return (
    <FooterWidgetContainer>
      <div className="footer_info_container">
        <div className="footer_info_block">
          <img
            className="footer_logo"
            alt="buu footer logo"
            src="/images/icons/logo.png"
          />
          <div className="footer_info_row">
            <div className="footer_info_left_col">
              <div className="faculty_label">คณะวิทยาศาสตร์และศิลปศาสตร์</div>
              <div className="college_label">
                มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
              </div>
              <div className="address_label">
                <div>เลขที่ 57 หมู่ 1 ถ.ชลประทาน ต.โขมง</div>
                <div>อ.ท่าใหม่ จ.จันทบุรี 22170</div>
                <div>โทร : 0-3931-0000</div>
              </div>
              <div className="contact_row">
                <Link className="contact_item" href={"https://facebook.com"}>
                  <Icons.SocialBWCircleFacebook />
                </Link>
                <Link className="contact_item" href={"https://facebook.com"}>
                  <Icons.SocialBWCircleYoutube />
                </Link>
                <Link className="contact_item" href={"https://facebook.com"}>
                  <Icons.SocialBWCircleLine />
                </Link>
                <Link className="contact_item" href={"https://facebook.com"}>
                  <Icons.SocialBWEmail />
                </Link>
              </div>
              <div className="btn_send_to_admin">
                ส่งข้อมูล เอกสารถึงผู้ดูแลเว็บไซต์
              </div>
            </div>
            <div className="footer_info_right_col">
              <div className="shortcut_block">
                <div className="shortcut_title">เอกสาร</div>
                <div className="shortcut_list">
                  <div className="shortcut_item">สำหรับนักศึกษา</div>
                  <div className="shortcut_item">สำหรับบุคลากร</div>
                </div>
              </div>
              <div className="shortcut_block">
                <div className="shortcut_title">ระบบสารสนเทศที่ใช้บ่อย</div>
                <div className="shortcut_list">
                  <div className="shortcut_item">ระบบบริการวิชาการ</div>
                  <div className="shortcut_item">
                    ระบบยืม - คืนหนังสือห้องสมุด
                  </div>
                  <div className="shortcut_item">ระบบ smart buu</div>
                  <div className="shortcut_item">ระบบสหกิจ - ระบบฝึกงาน</div>
                </div>
              </div>
              <div className="shortcut_block">
                <div className="shortcut_title">มหาวิทยาลัยบูรพา</div>
                <div className="shortcut_list">
                  <div className="shortcut_item">มหาวิทยาลัยบูรพา</div>
                  <div className="shortcut_item">
                    มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
                  </div>
                  <div className="shortcut_item">
                    มหาวิทยาลัยบูรพา วิทยาเขตสระเเก้ว
                  </div>
                  <div className="shortcut_item">
                    คณะวิทยาศาสตร์และศิลปศาสตร์
                  </div>
                  <div className="shortcut_item">คณะเทคโนโลยีทางทะเล</div>
                  <div className="shortcut_item">คณะอัญมญี</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_container">
        <div className="copyright_block">
          <div className="copyright_left_col">
            Copyright © 2023 - All rights reserved.
          </div>
          <div className="copyright_right_col">
            {t("เข้าชมเว็บไซต์ 4090999 ครั้ง", { ns: "menu" })}
          </div>
        </div>
      </div>
    </FooterWidgetContainer>
  );
};

export default FooterWidget;
