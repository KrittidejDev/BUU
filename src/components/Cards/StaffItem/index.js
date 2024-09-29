import { SearchContainer } from "@/components/Inputs/Search/styled";
import { StaffItemContainer } from "./styled";
import cx from "classnames";

const StaffItem = ({
  theme_standard,
  info,
  name,
  position,
  phone,
  src,
  srcphone,
  email,
  srcemail,
  cv,
  srccv,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <StaffItemContainer className={customClass}>
      <div className="staff_info_block">
        <img className="staff_img" src={src} />
        <div className="staff_info_sub_block">
          <div className="name_label">{name}</div>
          <div className="position_label">{position}</div>
          <div className="line_black" />
          <div className="info_label_block">
            {info && <div className="info_label">{info}</div>}
          </div>
          <div className="contact">
            <div className="contact_vector">
              {srcphone && (
                <div>
                  <img className="vector_logo" src={srcphone} />
                </div>
              )}
              {phone && <div className="text_vector">{phone}</div>}
            </div>
            <div className="contact_email">
              {srcemail && (
                <div>
                  <img className="email_logo" src={srcemail} />
                </div>
              )}

              {email && <div className="text_email">{email}</div>}
            </div>
            <div className="contact_cv">
              {srccv && (
                <div>
                  <img className="cv_logo" src={srccv} />
                </div>
              )}
              {cv && <div className="text_cv">{cv}</div>}
            </div>
          </div>
        </div>
      </div>
    </StaffItemContainer>
  );
};

export default StaffItem;
