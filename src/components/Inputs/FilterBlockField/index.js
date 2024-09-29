import { useState, useEffect } from 'react';
import { FilterBlockFieldContainer } from './styled';
import cx from 'classnames';

const FilterBlockField = ({
  theme_standard,
  options,
  onChange,
  value,
  isMulti,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const [_value, _setValue] = useState({});

  useEffect(() => {
    if (value && Object.keys(_value).length === 0) {
      _setValue(value);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const _onChange = (e) => {
    if (isMulti) {
      let temp = _value;
      if (temp[e.value]) {
        delete temp[e.value];
      } else {
        temp[e.value] = e;
      }
      _setValue({ ...temp });
      onChange && onChange(temp);
    } else {
      let temp = {
        [e.value]: e,
      };
      _setValue(temp);
      onChange && onChange(temp);
    }
  };

  return (
    <FilterBlockFieldContainer className={customClass}>
      {options &&
        options.map((e, i) => (
          <div
            key={i}
            className={`fb_option_item ${_value[e.value] ? 'active' : ''}`}
            onClick={() => _onChange(e)}
          >
            {e.label}
          </div>
        ))}
    </FilterBlockFieldContainer>
  );
};

export default FilterBlockField;
