import { ScholarshipWidgetContainer } from "./styled";

const ScholarshipWidget = ({ bgColor, title, txtColor, data }) => {
  return (
    <ScholarshipWidgetContainer bgColor={bgColor} txtColor={txtColor}>
      <div className="partner_title">{title}</div>
      <div className="partner_list">
        {data &&
          data.map((e, i) => (
            <div key={i} className="partner_item">
              <img className="partner_img" alt="scholar" src={e.img} />
              <div className="partner_label">{e.label}</div>
            </div>
          ))}
      </div>
    </ScholarshipWidgetContainer>
  );
};

export default ScholarshipWidget;
