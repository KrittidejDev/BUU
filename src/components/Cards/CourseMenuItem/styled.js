import styled from "styled-components";

export const CourseMenuItemContainer = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE_1};
  margin: 10px 3px;
  padding: 0 6px;
  height: 75px;
  min-width: 286px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active ? "0px 4px 4px 0px #00000040" : "unset"};
  background: ${({ active, theme }) =>
    active ? theme.COLORS.WHITE_1 : "transparent"};
  .menu_label {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_11};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }

  &:hover {
    box-shadow: 0px 4px 4px 0px #00000040;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
  }
`;
