import { TopicViewAllContainer } from "./styled";
import cx from "classnames";

const TopicViewAll = ({ theme_standard, btnLabel, title }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <TopicViewAllContainer className={customClass}>
      <div className="topic_label">{title}</div>
      <div className="view_all_block">
        <div className="btn_view_all">{btnLabel}</div>
      </div>
    </TopicViewAllContainer>
  );
};

export default TopicViewAll;
