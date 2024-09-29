import { useEffect, useState } from "react";
import { NavbarMenuWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMenuWidget = () => {
  const pathName = usePathname();
  const { t } = useTranslation(["menu"]);

  const [_active, _setActive] = useState();

  useEffect(() => {
    if (pathName) {
      switch (pathName) {
        case "/":
          _setActive("/");
          break;
        default:
          const split = pathName.split("/");
          _setActive(`/${split[1]}`);
          break;
      }
    }
  }, [pathName]);

  return (
    <NavbarMenuWidgetContainer>
      <div className="navbar_menu_container">
        <div className="navbar_menu_left_col">
          <img
            className="logo_img"
            alt="buu logo"
            src="/images/icons/logo.png"
          />
        </div>
        <div className="navbar_menu_right_col">
          {MENU_LIST.map((e, i) => (
            <Link
              key={i}
              href={e.routePath}
              className={`navbar_menu_item ${
                e.key === _active ? "active" : ""
              }`}
            >
              <div className="nbm_label">{e.label}</div>
              <div className="nbm_label_en">{e.labelEn}</div>
            </Link>
          ))}
        </div>
      </div>
    </NavbarMenuWidgetContainer>
  );
};

const MENU_LIST = [
  {
    key: "/",
    label: "หน้าเเรก",
    labelEn: "Home",
    routePath: "/",
  },
  {
    key: "/registration",
    label: "สมัครเรียน",
    labelEn: "Registration ",
    routePath: "/registration",
  },
  {
    key: "/course",
    label: "หลักสูตร",
    labelEn: "Course",
    routePath: "/course",
  },
  {
    key: "/information-systems",
    label: "ระบบสารสนเทศ",
    labelEn: "Information systems",
    routePath: "/information-systems",
  },
  {
    key: "/mission",
    label: "ภารกิจ",
    labelEn: "Mission",
    routePath: "/mission",
  },
  {
    key: "/about-us",
    label: "เกี่ยวกับเรา",
    labelEn: "About Us",
    routePath: "/about-us/exective-committee",
  },
  {
    key: "/contact-us",
    label: "ติดต่อเรา",
    labelEn: "Contact Us",
    routePath: "/contact-us",
  },
];

export default NavbarMenuWidget;
