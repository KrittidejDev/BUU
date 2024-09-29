import { CountactUsContainer } from "./styled";
import cx from "classnames";
import { Icons } from "@/components";

const CountactUs = ({ theme_standard }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <CountactUsContainer className={customClass}>
      <div className="card_container">
        <div className="card_title">ติดต่อเรา</div>
        <div className="contact_block">
          <div className="contact_item">
            <div className="contact_icon">
              <Icons.ContactFacebook />
            </div>
            <div className="contact_name">Facebook</div>
          </div>
          <div className="contact_item">
            <div className="contact_icon pt_5 mb_11">
              <Icons.ContactWebsite />
            </div>
            <div className="contact_name">Website</div>
          </div>
          <div className="contact_item">
            <div className="contact_icon mb_line">
              <Icons.ContactLine />
            </div>
            <div className="contact_name">Line</div>
          </div>
        </div>
      </div>
    </CountactUsContainer>
  );
};

export default CountactUs;
