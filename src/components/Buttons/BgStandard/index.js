import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { BgStandardStyled } from "./styled";

const BgStandard = ({
  theme_stadard,
  theme_cancel,
  theme_shortcut,
  theme_shortcut_transparent,
  disabled,
  label,
  type = "button",
  onClick,
}) => {
  const customClass = cx({
    theme_stadard: theme_stadard,
    theme_cancel: theme_cancel,
    theme_shortcut: theme_shortcut,
    theme_shortcut_transparent: theme_shortcut_transparent,
  });
  return (
    <BgStandardStyled className={customClass} disabled={disabled}>
      <button className="btn" type={type} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </BgStandardStyled>
  );
};

BgStandard.propTypes = {};

export default BgStandard;
