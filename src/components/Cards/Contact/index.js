import { ContactContainer } from "./styled";
import cx from "classnames";
import { Icons } from "@/components";

const Contact = ({ theme_standard, linearColor1, linearColor2 }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <ContactContainer className={customClass}>
      <div className="card_container">
        <div className="card_title">ติดต่อ</div>
        <div className="phone_block mb_20">
          <div className="phone_left_col">
            <Icons.PhoneCircle
              linearColor1={linearColor1}
              linearColor2={linearColor2}
            />
            <div className="phone_label">โทรศัพท์ :</div>
          </div>
          <div className="phone_right_col">
            <div className="phone_value">0-3931-0000</div>
            <div className="phone_value">ต่อ 1609, 1611</div>
          </div>
        </div>
        <div className="phone_block center">
          <div className="phone_left_col center">
            <Icons.PhoneCircle
              linearColor1={linearColor1}
              linearColor2={linearColor2}
            />
            <div className="phone_label">โทรศัพท์ :</div>
          </div>
          <div className="phone_right_col">
            <div className="phone_value">083-3111-8205</div>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
