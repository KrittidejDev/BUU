import { useState } from "react";
import { SearchContainer } from "./styled";
import cx from "classnames";
import { useTranslation } from "next-i18next";
import { useComponentVisible } from "@/utils/functions/detectClickOutside";
import { Icons } from "@/components";

const Search = ({ theme_standard, options, onFilterEnter }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const [_value, _setValues] = useState({});

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const { t } = useTranslation(["form"]);

  const _handleChangeKeyword = (e) => {
    let temp = _value;
    temp.keyword = e.target.value;
    _setValues({ ...temp });
  };

  const _handleClickCate = (e) => {
    let temp = _value;
    temp.category = e;
    _setValues({ ...temp });
    setIsComponentVisible(false);
  };

  const _handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (onFilterEnter) {
        _renderQueryString();
      }
      event.preventDefault();
    }
  };

  const _renderQueryString = () => {
    let queryString = [];
    if (_value?.category) {
      queryString.push(`category=${_value.category.value}`);
    }
    if (_value?.keyword) {
      queryString.push(`keyword=${_value.keyword}`);
    }
    onFilterEnter &&
      onFilterEnter(
        queryString.length === 0 ? false : `?${queryString.join("&")}`
      );
  };

  return (
    <SearchContainer className={customClass} isCateFocus={isComponentVisible}>
      <div ref={ref} className="flex_1_col left">
        <div className="s_cate">
          {_value?.category?.label || t("Category", { ns: "form" })}
          <div className="cate_icon_wrap">
            <Icons.CateFilter />
          </div>
          {isComponentVisible && (
            <div className="dropdown_content_block">
              {options &&
                options.map((e, i) => (
                  <div
                    key={i}
                    className="option_item"
                    onClick={() => {
                      _handleClickCate(e);
                    }}
                  >
                    <div>{e.label}</div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex_2_col">
        <input
          className="s_course"
          placeholder={t("Course", { ns: "form" })}
          value={_value?.keyword}
          onKeyPress={_handleKeyPress}
          onChange={_handleChangeKeyword}
        />
      </div>
      <div className="flex_1_col right">
        <div className="s_word" onClick={_renderQueryString}>
          {t("Search", { ns: "form" })}
          <Icons.Search />
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
