import { CourseLabelValueContainer } from "./styled";
import cx from "classnames";

const CourseLabelValue = ({
  theme_standard,
  theme_vertical,
  label,
  value,
  isNotBorder,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
    theme_vertical: theme_vertical,
  });
  return (
    <CourseLabelValueContainer
      className={customClass}
      isNotBorder={isNotBorder}
    >
      <div className="course_label">{label}</div>
      <div className="course_value">{value}</div>
    </CourseLabelValueContainer>
  );
};

export default CourseLabelValue;
