import moment from "moment";
import { ActivityItemContainer } from "./styled";
import cx from "classnames";

const ActivityItem = ({ theme_standard, date, location, time, topic, src }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <ActivityItemContainer className={customClass}>
      <div className="act_oragng_bg" />
      <div className="act_info_block">
        <div className="act_left_col">
          <div className="act_date">
            <div className="date_label">
              {moment(date, "DD/MM/YYYY HH:mm").format("DD")}
            </div>
            <div className="month_label">
              {moment(date, "DD/MM/YYYY HH:mm").format("MMM")}
            </div>
          </div>
        </div>
        <div className="act_right_col">
          <div className="act_topic">{topic}</div>
          <div className="act_time">เวลา {time} น.</div>
          <div className="location">{location}</div>
          <div className="btn_read_more">อ่านเพิ่มเติม</div>
        </div>
      </div>
      <div className="act_figture">
        <img className="act_img" alt="activity" src={src} />
      </div>
      <div className="act_oragng_yewllow" />
    </ActivityItemContainer>
  );
};

export default ActivityItem;
