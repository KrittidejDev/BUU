import React, { useState, useEffect } from "react";
import cx from "classnames";
import { DateTimeStyled } from "./styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTime = ({
  theme_standard,
  dateFormat = "dd/MM/yyyy",
  errors,
  label,
  placeholder,
  value,
  maxDate,
  disabled,
  isShowMonthDropdown,
  isShowYearDropdown,
  onChange,
  ...props
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const [startDate, setStartDate] = useState();

  useEffect(() => {
    if (value && value !== startDate) {
      setStartDate(new Date(value));
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const _handleChange = (e) => {
    setStartDate(e);
    onChange(e);
  };

  return (
    <DateTimeStyled className={customClass}>
      {label && <div className="label">{label}</div>}
      <DatePicker
        {...props}
        dateFormat={dateFormat}
        selected={startDate}
        placeholder={placeholder}
        onChange={(date) => _handleChange(date)}
        // customInput={<ExampleCustomInput />}
        showMonthDropdown={isShowMonthDropdown}
        showYearDropdown={isShowYearDropdown}
        dropdownMode="select"
        disabled={disabled}
        maxDate={maxDate}
      />
      {errors && <div className="errors">{errors}</div>}
    </DateTimeStyled>
  );
};

DateTime.propTypes = {};

export default DateTime;
