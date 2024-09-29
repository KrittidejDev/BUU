import { NewsWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";

const NewsWidget = () => {
  const { t } = useTranslation("menu");
  return (
    <NewsWidgetContainer>
      {NEW_LIST.map((e, i) => (
        <div key={i} className="news_item">
          <div className="news_figture">
            <img className="news_img" alt="news" src={e.imgPath} />
          </div>
          <div className="news_label">{e.label}</div>
        </div>
      ))}
    </NewsWidgetContainer>
  );
};

const NEW_LIST = [
  {
    label: "ข่าวประชาสัมพันธ์",
    imgPath: "/images/backgrounds/new-1.jpg",
  },
  {
    label: "ข่าวเด่น",
    imgPath: "/images/backgrounds/new-2.jpg",
  },
  {
    label: "กิจกรรม",
    imgPath: "/images/backgrounds/new-3.jpg",
  },
  {
    label: "ศูนย์/หน่วย",
    imgPath: "/images/backgrounds/new-4.jpg",
  },
];

export default NewsWidget;
