import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { TextEmailFieldStyled } from "./styled";
import { Icons } from "@/components";

const TextEmailField = ({
  theme_standard,
  label,
  disabled,
  errors,
  value,
  require,
  onChangeCus,
  onChange,
  ...props
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <TextEmailFieldStyled
      className={customClass}
      disabled={disabled}
      isError={errors ? true : false}
    >
      {label && (
        <div className="label">
          {label} {require && <span>*</span>}
        </div>
      )}
      <div className="input_container">
        <div className="input_icon_wrap">
          <Icons.SocialBWEmail />
        </div>
        <input
          {...props}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            onChange(e.target.value);
            onChangeCus && onChangeCus(e.target.value);
          }}
        />
      </div>
      {errors && <div className="errors">{errors}</div>}
    </TextEmailFieldStyled>
  );
};

TextEmailField.propTypes = {};

export default TextEmailField;
