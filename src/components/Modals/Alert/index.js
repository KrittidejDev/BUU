import { useMemo, useState, forwardRef, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from 'prop-types'
import { AlertStyled } from "./styled";
import { setReduxNotiAlert } from "@/store/reducers/notiAlertReducer";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import { Icons } from "@/components";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});
const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin"],
  display: "swap",
});

const Alert = () => {
  const notiAlertRedux = useSelector((state) => state.notiAlertRedux);
  const dispatch = useDispatch();

  const [_modalVisible, _setModalVisible] = useState(false);
  const [_tempValue, _setTempValue] = useState(false);

  // ENABLE DISABLE
  // ====================================
  // ====================================
  const _handleClickEnbModal = () => {
    const body = document.body;
    body.style.overflow = "hidden";
    _setModalVisible(true);
  };
  const _handleClickDisModal = () => {
    dispatch(setReduxNotiAlert(false));
    const body = document.body;
    body.style.overflow = "auto";
    _setModalVisible(false);
  };

  useMemo(() => {
    if (notiAlertRedux) {
      _setTempValue(notiAlertRedux);
      _handleClickEnbModal();
    }
  }, [notiAlertRedux]); // eslint-disable-line react-hooks/exhaustive-deps

  // CANCEL COMFIRM
  // ====================================
  // ====================================
  const handleClickCancelModal = () => {
    _handleClickDisModal();
  };
  const _onConfirm = (key) => {
    if (key === 1) {
      _tempValue.onEvent1 && _tempValue.onEvent1();
    }
    if (key === 2) {
      _tempValue.onEvent2 && _tempValue.onEvent2();
    }
  };

  return !_modalVisible ? (
    <></>
  ) : (
    <AlertStyled>
      <div
        className="backdrop"
        onClick={() => {
          if (!_tempValue?.isForceAction) {
            _handleClickDisModal();
          }
        }}
      />
      <div
        className={`${notoSans.className} ${
          notoSansThai.className
        } alert_body ${_tempValue?.theme ? _tempValue?.theme : ""}`}
      >
        <div
          className="alert_close_wrap"
          onClick={() => {
            if (_tempValue.onEvent1) {
              _tempValue.onEvent1();
              handleClickCancelModal();
            } else {
              if (_tempValue.onEvent2) {
                _tempValue.onEvent2();
                handleClickCancelModal();
              } else {
                if (!_tempValue?.isForceAction) {
                  _handleClickDisModal();
                  handleClickCancelModal();
                }
              }
            }
          }}
        >
          {/* <Icons.ClosePage /> */}
        </div>
        {_tempValue?.nodeChildren ? (
          _tempValue.nodeChildren
        ) : (
          <>
            <div className="alert_title">{_tempValue?.title}</div>
            <div className="alert_description">{_tempValue?.description}</div>
          </>
        )}
        <div className="alert_action_row">
          {_tempValue.btnLabel1 && (
            <div className="alert_action_col">
              <button
                className="btn_md_success"
                onClick={() => {
                  _onConfirm(1);
                  handleClickCancelModal();
                }}
              >
                {_tempValue?.btnLabel1}
              </button>
            </div>
          )}
          {_tempValue.btnLabel2 && (
            <div className="alert_action_col">
              <button
                className="btn_md_cancel"
                onClick={() => {
                  _onConfirm(2);
                  handleClickCancelModal();
                }}
              >
                {_tempValue?.btnLabel2}
              </button>
            </div>
          )}
        </div>
      </div>
    </AlertStyled>
  );
};

Alert.propTypes = {};

export default Alert;
