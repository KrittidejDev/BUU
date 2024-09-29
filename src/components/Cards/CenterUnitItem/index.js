import { CenterUnitItemContainer } from "./styled";
import cx from "classnames";

const CenterUnitItem = ({ theme_standard, name, src }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <CenterUnitItemContainer className={customClass}>
      <div className="center_unit_figture">
        <img className="center_unit_img" alt="center unit" src={src} />
      </div>
      <div className="center_unit_name">{name}</div>
    </CenterUnitItemContainer>
  );
};

export default CenterUnitItem;
