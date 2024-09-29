import styled from "styled-components";

export const TopicViewAllContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 16px;
  .topic_label {
    padding-top: 4px;
    color: ${({ theme }) => theme.COLORS.BLACK_7};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S40};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .view_all_block {
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_3};
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    .btn_view_all {
      padding-bottom: 2px;
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S22};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      cursor: pointer;
    }
  }
`;
