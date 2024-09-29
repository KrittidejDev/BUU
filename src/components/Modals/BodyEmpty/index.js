import React, { useEffect } from "react";
// import PropTypes from 'prop-types'
import { BodyEmptyStyled } from "./styled";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import { Icons } from "@/components";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const notoSansThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const BodyEmpty = ({
  isShowModal,
  isCloseBtn,
  onCloseModal,
  children,
  isForceAction,
}) => {
  useEffect(() => {
    if (isShowModal) {
      _handleClickEnbModal();
    } else {
      _handleClickDisModal();
    }
  }, [isShowModal]); // eslint-disable-line react-hooks/exhaustive-deps

  const _handleClickEnbModal = () => {};

  const _handleClickDisModal = () => {
    if (!isForceAction) {
      onCloseModal && onCloseModal();
    }
  };

  return !isShowModal ? (
    <></>
  ) : (
    <BodyEmptyStyled
      className={`${notoSans.className} ${notoSansThai.className}`}
    >
      <div className="backdrop" onClick={_handleClickDisModal} />
      <div className="modal_body_layout">
        {isCloseBtn && (
          <div className="btn_close_modal" onClick={onCloseModal}>
            <Icons.Close />
          </div>
        )}
        {children}
      </div>
    </BodyEmptyStyled>
  );
};

BodyEmpty.propTypes = {};

export default BodyEmpty;
