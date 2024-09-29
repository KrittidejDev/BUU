import Link from "next/link";
import { OurCourseWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_UP } from "@/utils/functions/motion";

const OurCourseWidget = () => {
  const { t } = useTranslation(["home"]);

  return (
    <OurCourseWidgetContainer>
      <div className="our_course_title">
        {t("หลักสูตรของเรา", { ns: "home" })}
      </div>
      <div className="our_course_content_block">
        {COURSE_LIST.map((e, i) => (
          <MOTION_FADE_UP key={i} className="our_course_item">
            <div className="course_figture">
              <img className="course_img" alt="buu course" src={e.imgPath} />
            </div>
            <div className="course_info_block">
              <div className={"short_name"}>{e.facultyShotNameEn}</div>
              <div className="department_th">{e.departmentTh}</div>
              <div className="department_en">{e.departmentEn}</div>
              <div className="faculty_th">{e.facultyNameth}</div>
              <Link className="btn_read_more" href="/course/ba">
                อ่านรายละเอียด
              </Link>
            </div>
          </MOTION_FADE_UP>
        ))}
      </div>
    </OurCourseWidgetContainer>
  );
};

const COURSE_LIST = [
  {
    theme: "blue",
    facultyShotNameEn: (
      <span style={{ color: "#3AB3E8" }}>
        B<span style={{ color: "#76C6EA" }}>A</span>
      </span>
    ),
    facultyNameth: "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    departmentEn: "Business Administration",
    departmentTh: "สาขาวิชาบริหารธุรกิจ",
    imgPath: "/images/backgrounds/ba-course.jpg",
  },
  {
    facultyShotNameEn: (
      <span style={{ color: "#136835" }}>
        A<span style={{ color: "#6CC06E" }}>T</span>
      </span>
    ),
    facultyNameth: "วิทยาศาสตรบัณฑิต (วท.บ.)",
    departmentEn: "Science Program in Modern Agricultural Technology",
    departmentTh: "สาขาวิชาเทคโนโลยี การเกษตรสมัยใหม่",
    imgPath: "/images/backgrounds/at-course.jpg",
  },
  {
    facultyShotNameEn: (
      <span style={{ color: "#908999" }}>
        L<span style={{ color: "#4E4E50" }}>B</span>
        <span style={{ color: "#999999" }}>T</span>
      </span>
    ),
    facultyNameth: "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    departmentEn: "Logistics and Cross - Border Trade Management",
    departmentTh: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายเเดน",
    imgPath: "/images/backgrounds/lbt-course.jpg",
  },
  {
    facultyShotNameEn: (
      <span style={{ color: "#D06EA9" }}>
        E<span style={{ color: "#D13795" }}>B</span>
        <span style={{ color: "#D8A6C3" }}>C</span>
      </span>
    ),
    facultyNameth: "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    departmentEn: "English for Business Communication",
    departmentTh: "สาขาวิชาภาษาอังกฤษ เพื่อการสื่อสารทางธุรกิจ",
    imgPath: "/images/backgrounds/ebc-course.jpg",
  },
  {
    facultyShotNameEn: (
      <span style={{ color: "#FCC66A" }}>
        IT
        <span style={{ color: "#FAB017" }}>&</span>
        <span style={{ color: "#FED48A" }}>DS</span>
      </span>
    ),
    facultyNameth: "หลักสูตรวิทยาศาสตร์บัณฑิต (วท.บ.)",
    departmentEn: "Information Technology and Data Science",
    departmentTh: "สาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล",
    imgPath: "/images/backgrounds/it-ds-course.jpg",
  },
];

export default OurCourseWidget;
