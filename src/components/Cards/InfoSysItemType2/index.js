import { InfoSysItemType2Container } from "./styled";
import cx from "classnames";

const InfoSysItemType2 = ({ theme_standard, label, src }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <InfoSysItemType2Container className={customClass}>
      <div className="info_sys_figture">
        <img className="info_sys_img" alt="info system" src={src} />
      </div>
      <div className="info_system_label">{label}</div>
    </InfoSysItemType2Container>
  );
};

export default InfoSysItemType2;
