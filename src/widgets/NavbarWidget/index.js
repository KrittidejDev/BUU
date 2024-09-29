import { NavbarWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import {
  BtnLangWidget,
  BtnPhoneDirecWidget,
  MemberLoggedWidget,
} from "@/widgets";
import { Icons } from "@/components";

const NavbarWidget = () => {
  const { t } = useTranslation(["menu"]);

  return (
    <NavbarWidgetContainer>
      <div className="nav_container">
        <div className="nav_left_col">
          <div className="nav_body_container">
            <div className="nav_body_left_col">
              <Link className="btn_register" href={"/register"}>
                สมัครเรียน
              </Link>
              <div className="nav_line_vertical" />
              <marquee className="welcom_label">
                ยินดีต้อนรับนิสิต สู่รั้วมหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
              </marquee>
            </div>
            <div className="nav_body_right_col">
              <div className="phone_block">
                <Icons.Phone />
                <Link className="phone_label" href={"tel:0897483948"}>
                  089 -748 -3948
                </Link>
              </div>
              <div className="phone_block">
                <Icons.Phone />
                <Link className="phone_label" href={"tel:039310000"}>
                  039-310-000
                </Link>
              </div>
              <div className="phone_block">
                <Icons.PhoneOffice />
                <Link className="phone_label" href={"tel:039310128"}>
                  039-310128
                </Link>
              </div>
              <BtnLangWidget />
              <BtnPhoneDirecWidget />
            </div>
          </div>
        </div>
        <div className="nav_right_col">
          <MemberLoggedWidget />
        </div>
      </div>
    </NavbarWidgetContainer>
  );
};

export default NavbarWidget;
