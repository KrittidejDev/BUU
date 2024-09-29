import { NavBodyFooterLayoutContainer } from "./styled";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import Head from "next/head";
import { FooterWidget, NavbarWidget, SocialVerticalWidget } from "@/widgets";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const notoSansThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const NavBodyFooterLayout = ({
  children,
  title = "มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี",
  description = "มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="canonical" href="https://www.ohothailand.com/th" /> */}
      </Head>
      <NavBodyFooterLayoutContainer
        className={`${notoSans.className} ${notoSansThai.className}`}
      >
        <NavbarWidget />
        <div className="body_mainlayout">{children}</div>
        <FooterWidget />
        <SocialVerticalWidget />
      </NavBodyFooterLayoutContainer>
    </>
  );
};

export default NavBodyFooterLayout;
