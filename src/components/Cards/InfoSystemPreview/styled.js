import styled from "styled-components";

export const InfoSystemPreviewContainer = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .course_figture {
      .course_img {
        transform: scale(1.2, 1.2);
      }
    }
  }
  .course_figture {
    overflow: hidden;
    .course_img {
      display: block;
      width: 100%;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }
  .course_info_block {
    position: absolute;
    top: 0px;
    left: ${({ isRight }) => (isRight ? "unset" : "0px")};
    right: ${({ isRight }) => (isRight ? "0px" : "unset")};
    z-index: 2;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
    border-left: ${({ isRight, borderColor }) =>
      isRight ? "unset" : `40px solid ${borderColor}`};
    border-right: ${({ isRight, borderColor }) =>
      isRight ? `26px solid ${borderColor}` : "unset"};
    padding: 16px 16px 16px 107px;;
    max-width: calc(680px - 32px - 26px - 14px);
    width: 100%;
    height: calc(100% - 32px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url(/images/icons/info-sys-doc.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .info_system_icon {
      margin-bottom: 21px;
      border-radius: 90px;
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.GRAY_1};
    }
    .info_block {
      margin-bottom: 29px;
      line-height: 70px;
      .doc_label {
        color: ${({ theme }) => theme.COLORS.BLACK_7};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S58};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      }
      .for_label {
        color: ${({ theme }) => theme.COLORS.ORANGE_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S73};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
    }
    .btn_read_more {
      border-radius: 9px;
      box-shadow: 0px 1px 4px 0px #00000026;
      padding: 10px 47px;
      width: fit-content;
      background: ${({ theme }) => theme.COLORS.YELLOW_2};
      color: ${({ theme }) => theme.COLORS.BLACK_14};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S27};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      cursor: pointer;
    }
  }
`;
