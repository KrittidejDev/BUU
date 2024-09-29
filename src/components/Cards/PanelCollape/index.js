import { useState } from "react";
import { PanelCollapeContainer } from "./styled";
import cx from "classnames";
import { Icons } from "@/components";

const PanelCollape = ({
  theme_standard,
  theme_blue,
  theme_green,
  theme_gray,
  theme_pink,
  theme_orange,
  children,
  title,
  isExpandDefault,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
    theme_blue: theme_blue,
    theme_green: theme_green,
    theme_gray: theme_gray,
    theme_pink: theme_pink,
    theme_orange: theme_orange,
  });

  const [_isExpand, _setIsExpand] = useState(isExpandDefault || false);

  const _handleClick = () => {
    _setIsExpand(!_isExpand);
  };

  return (
    <PanelCollapeContainer className={customClass} isExpand={_isExpand}>
      <div class="panel_block" onClick={_handleClick}>
        <div className="panel_title">{title}</div>
        <div className="panel_icon">
          <Icons.PanelDownCircle />
        </div>
      </div>
      <div class="panel_body">
        <div className="panel_body_sub_block">{children}</div>
      </div>
    </PanelCollapeContainer>
  );
};

export default PanelCollape;
