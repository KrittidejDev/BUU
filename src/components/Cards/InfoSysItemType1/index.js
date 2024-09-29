import { InfoSysItemType1Container } from "./styled";
import cx from "classnames";

const InfoSysItemType1 = ({ theme_standard, label, src }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <InfoSysItemType1Container className={customClass}>
      <div className="info_sys_figture">
        <img className="info_sys_img" alt="info system" src={src} />
      </div>
      <div className="info_system_label">{label}</div>
    </InfoSysItemType1Container>
  );
};

export default InfoSysItemType1;
