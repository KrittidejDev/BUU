import { NewsItemContainer } from "./styled";
import cx from "classnames";

const NewsItem = ({ theme_standard, created_date, src, topic }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <NewsItemContainer className={customClass}>
      <div className="news_figture">
        <img className="news_img" alt="news" src={src} />
      </div>
      <div className="created_date_label">{created_date}</div>
      <div className="new_desc">{topic}</div>
      <div className="btn_read_more">อ่านต่อ</div>
    </NewsItemContainer>
  );
};

export default NewsItem;
