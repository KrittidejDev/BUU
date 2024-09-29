import { useState } from 'react';
import { CheckboxContainer } from './styled';
import cx from 'classnames';
import { Icons } from '@/components';

const Checkbox = ({
  theme_standard,
  label,
  linkLabel,
  value,
  onChange,
  onClickLink,
  errors,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const _onChange = () => {
    onChange(value ? false : true);
  };

  return (
    <CheckboxContainer className={customClass}>
      <div className="checkbox_container">
        <div onClick={_onChange}>
          {value ? <Icons.Checkbox active /> : <Icons.Checkbox />}
        </div>
        <div className="checkbox_label">
          <span onClick={_onChange}>{label}</span>
          {linkLabel ? (
            <span className="cb_link" onClick={onClickLink}>
              {linkLabel}
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
      {errors && <div className="errors">{errors}</div>}
    </CheckboxContainer>
  );
};

export default Checkbox;
