import { useState } from "react";
import { PanelCollapeNestContainer } from "./styled";
import cx from "classnames";
import Link from "next/link";
import { Icons } from "@/components";

const PanelCollapeNest = ({
  theme_standard,
  theme_blue,
  data,
  isExpandDefault,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
    theme_blue: theme_blue,
  });

  const [_isExpand, _setIsExpand] = useState(isExpandDefault || false);
  const [_isExpandLv2, _setIsExpandLv2] = useState({});
  const [_isExpandLv3, _setIsExpandLv3] = useState({});

  const _handleClick = () => {
    _setIsExpand(!_isExpand);
  };

  const _handleClickLv2 = (e) => {
    let temp = _isExpandLv2;
    if (temp[e.key]) {
      delete temp[e.key];
    } else {
      temp[e.key] = true;
    }
    _setIsExpandLv2({ ...temp });
  };

  const _handleClickLv3 = (e) => {
    let temp = _isExpandLv3;
    if (temp[e.key]) {
      delete temp[e.key];
    } else {
      temp[e.key] = true;
    }
    _setIsExpandLv3({ ...temp });
  };

  return (
    <PanelCollapeNestContainer className={customClass} isExpand={_isExpand}>
      {data &&
        data.map((e, i) => (
          <div key={i}>
            <div class="panel_block" onClick={_handleClick}>
              <div className="panel_title">{e.label}</div>
              <div className="panel_icon">
                <Icons.CollapeArrowDown />
              </div>
            </div>
            {e.children && e.children.length > 0 && (
              <div class="panel_body">
                <div className="panel_body_sub_block">
                  {e.children.map((f, j) => (
                    <>
                      {f.children && f.children.length > 0 ? (
                        <div
                          key={j}
                          className={`panel_block_lv2 ${
                            _isExpandLv2[f.key] ? "expand" : ""
                          }`}
                          onClick={() => _handleClickLv2(f)}
                        >
                          {f.icon && (
                            <div className="panel_icon_prefix_lv2">
                              {f.icon}
                            </div>
                          )}
                          <div className="panel_title_lv2">{f.label}</div>
                          <div className="panel_icon_lv2">
                            <Icons.CollapeArrowDown />
                          </div>
                        </div>
                      ) : f.routePath ? (
                        <Link href={f.routePath} target="new_tab">
                          <div key={j} className={"panel_block_item_lv2"}>
                            <div className="panel_block_icon_item_lv2">
                              {f.icon}
                            </div>
                            <div className="panel_block_title_item_lv2">
                              {f.label}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div key={j} className={"panel_block_item_lv2"}>
                          <div className="panel_block_icon_item_lv2">
                            {f.icon}
                          </div>
                          <div className="panel_block_title_item_lv2">
                            {f.label}
                          </div>
                        </div>
                      )}
                      {f.children && f.children.length > 0 && (
                        <div
                          className={`panel_body_lv2 ${
                            _isExpandLv2[f.key] ? "expand" : ""
                          }`}
                        >
                          <div className="panel_body_sub_block_lv2">
                            {f.children.map((g, k) => (
                              <>
                                <div
                                  key={k}
                                  className={`panel_body_lv2 ${
                                    _isExpandLv2[f.key] ? "expand" : ""
                                  }`}
                                >
                                  {!g.children || g.children === 0 ? (
                                    g.routePath ? (
                                      <div className="panel_body_sub_block_lv2">
                                        <div
                                          key={k}
                                          className="panel_block_lv3"
                                          onClick={() => _handleClickLv3(f)}
                                        >
                                          <div className="panel_left_col_lv3">
                                            {g.icon}
                                          </div>
                                          <div className="panel_right_col_lv3">
                                            <div className="panel_title_lv3">
                                              {g.label}
                                            </div>
                                            <Link
                                              href={g.routePath}
                                              target="new_tab"
                                            >
                                              <div className="panel_file_lv3">
                                                {g.file}
                                              </div>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="panel_body_sub_block_lv2">
                                        <div
                                          key={k}
                                          className="panel_block_lv3"
                                        >
                                          <div className="panel_left_col_lv3">
                                            {f.icon}
                                          </div>
                                          <div className="panel_rifht_col_lv3">
                                            <div className="panel_title_lv3">
                                              {f.label}
                                            </div>
                                            <div className="panel_file_lv3">
                                              {f.file}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  ) : (
                                    <>
                                      <div
                                        // key={j}
                                        className={`panel_block_lv4 ${
                                          _isExpandLv3[g.key] ? "expand" : ""
                                        }`}
                                        onClick={() => _handleClickLv3(g)}
                                      >
                                        {g.icon && (
                                          <div className="panel_icon_prefix_lv4">
                                            {g.icon}
                                          </div>
                                        )}
                                        <div className="panel_title_lv4">
                                          {g.label}
                                        </div>
                                        <div className="panel_icon_lv4">
                                          <Icons.CollapeArrowDown />
                                        </div>
                                      </div>
                                      {g.children && g.children.length > 0 && (
                                        <div
                                          className={`panel_body_lv4 ${
                                            _isExpandLv3[g.key] ? "expand" : ""
                                          }`}
                                        >
                                          <div className="panel_body_sub_block_lv4">
                                            {g.children.map((h, l) => (
                                              <div
                                                key={l}
                                                className="panel_body_sub_block_lv4"
                                              >
                                                <div className="panel_block_lv4">
                                                  <div className="panel_left_col_lv4">
                                                    {h.icon}
                                                  </div>
                                                  <div className="panel_right_col_lv4">
                                                    <div className="panel_title_lv4">
                                                      {h.label}
                                                    </div>
                                                    {h.routePath ? (
                                                      <Link
                                                        href={h.routePath}
                                                        target="new_tab"
                                                      >
                                                        <div className="panel_file_lv4">
                                                          {h.file}
                                                        </div>
                                                      </Link>
                                                    ) : (
                                                      <div className="panel_file_lv4">
                                                        {h.file}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
    </PanelCollapeNestContainer>
  );
};

export default PanelCollapeNest;
