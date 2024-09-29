import { CoursePreviewItemContainer } from "./styled";
import cx from "classnames";
import Link from "next/link";

const CoursePreviewItem = ({
  theme_standard,
  bgColor,
  borderColor,
  imgPath,
  facultyShotNameEn,
  departmentTh,
  departmentEn,
  facultyNameth,
  isRight,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  return (
    <CoursePreviewItemContainer
      className={customClass}
      bgColor={bgColor}
      borderColor={borderColor}
      isRight={isRight}
    >
      <div className="course_figture">
        <img className="course_img" alt="buu course" src={imgPath} />
      </div>
      <div className="course_info_block">
        <div className="short_name">{facultyShotNameEn}</div>
        <div className="department_th">{departmentTh}</div>
        <div className="department_en">{departmentEn}</div>
        <div className="faculty_th">{facultyNameth}</div>
        {/* <Link className="btn_read_more" href="/course/ba"> */}
        <div className="btn_read_more">ดูข้อมูลเพิ่มเติม</div>
        {/* </Link> */}
      </div>
    </CoursePreviewItemContainer>
  );
};

export default CoursePreviewItem;
