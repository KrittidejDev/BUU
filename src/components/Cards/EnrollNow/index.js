import { EnrollNowContainer } from "./styled";
import cx from "classnames";

const EnrollNow = ({
  theme_standard,
  themeColor,
  title,
  blockLabel,
  label1,
  label2,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <EnrollNowContainer className={customClass} themeColor={themeColor}>
      <div className="card_container">
        <div className="card_title">{title}</div>
        <div className="enroll_college">{blockLabel}</div>
        <div className="enroll_new">{label1}</div>
        <div className="enroll_underline">{label2}</div>
      </div>
    </EnrollNowContainer>
  );
};

export default EnrollNow;
