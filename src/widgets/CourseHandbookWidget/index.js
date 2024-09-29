import { Icons } from "@/components";
import { CourseHandbookWidgetContainer } from "./styled";

const CourseHandbookWidget = ({ title, src, data, iconColor }) => {
  return (
    <CourseHandbookWidgetContainer>
      <div className="course_hanbook_title">{title}</div>
      <div className="course_hanbook_latest">
        <div className="btn_download_course mb_12">
          <Icons.Download color={iconColor} />
          {data && data[0]?.name}
        </div>
      </div>
      <img className="course_hanbook_plan_img" alt="Course Hanbook" src={src} />
      <div className="course_hanbook_history_list">
        {data &&
          data.splice(1, data.length).map((e, i) => (
            <div key={i} className="course_hanbook_history_item">
              <div className="btn_download_course">
                <Icons.Download color={iconColor} />
                {e?.name}
              </div>
            </div>
          ))}
      </div>
    </CourseHandbookWidgetContainer>
  );
};

export default CourseHandbookWidget;
