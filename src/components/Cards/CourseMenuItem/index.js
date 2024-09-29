import { CourseMenuItemContainer } from "./styled";
import cx from "classnames";

const CourseMenuItem = ({ theme_standard, active, label }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <CourseMenuItemContainer className={customClass} active={active}>
      <div className="menu_label">{label}</div>
    </CourseMenuItemContainer>
  );
};

export default CourseMenuItem;
