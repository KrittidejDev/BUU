import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { DropdownFieldStyled } from "./styled";
import { useComponentVisible } from "@/utils/functions/detectClickOutside";
import { Icons } from "@/components";

const DropdownField = ({
  theme_standard,
  theme_filter,
  label,
  options,
  placeholder,
  value,
  errors,
  disabled,
  onChange,
  onChangCus,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
    theme_filter: theme_filter,
  });

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <DropdownFieldStyled
      ref={ref}
      className={customClass}
      disabled={disabled}
      isError={errors ? true : false}
    >
      {label && <div className="label">{label}</div>}
      <div className="dropdown_input">
        <div className="">{value?.label || <span>{placeholder}</span>}</div>
        {!isComponentVisible ? (
          <div className="my_arrow_clasnName">
            <Icons.ArrowBottom />
          </div>
        ) : (
          <div className="my_arrow_clasnName">
            <Icons.ArrowBottom />
          </div>
        )}
      </div>
      {isComponentVisible && (
        <div className="dropdown_content_block">
          {options &&
            options.map((e, i) => (
              <div
                key={i}
                className="option_item"
                onClick={() => {
                  setIsComponentVisible(false);
                  onChange(e);
                  onChangCus && onChangCus(e);
                }}
              >
                <div>{e.label}</div>
              </div>
            ))}
        </div>
      )}
      {errors && <div className="errors">{errors}</div>}
    </DropdownFieldStyled>
  );
};

DropdownField.propTypes = {};

export default DropdownField;
