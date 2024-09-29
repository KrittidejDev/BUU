import { LoginStyled } from "@/styles/loginStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Mainlayouts } from "@/components";
import Image from "next/image";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <LoginStyled>
        <div className="block_container">
          <div className="left_section">
            <div className="banner_title">
              <p className="title">เข้าสู่ระบบเพื่อดูข้อมูลเฉพาะ</p>
              <p className="p1">คณะวิทยาศาสตร์และศิลปศาสตร์</p>
              <p className="p2">มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี</p>
            </div>
            <Image
              className="left_logo"
              src="/images/backgrounds/banner-logo.png"
              alt="Banner Logo"
              layout="fixed"
              width={187}
              height={187}
            />
          </div>
          <div className="right_section">
            <Image
              className="form_logo"
              src="/images/icons/logo.png"
              alt="Logo"
              layout="fixed" // Use "fixed" if you want a specific size
              width={300} // Set width to 187px
              height={100} // Set height to 187px
            />
            <form action="">
              <h2 className="title">ลงชื่อเข้าสู่ระบบ</h2>
              <div className="input_group">
                <label className="label">Email Address</label>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="input_group">
                <label className="label">Password</label>
                <div className="password_input">
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <div className="check_group">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>
      </LoginStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "menu"])),
      // Will be passed to the page component as props
    },
  };
}
