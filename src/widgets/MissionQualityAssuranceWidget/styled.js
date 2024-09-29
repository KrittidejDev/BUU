import styled from "styled-components";

export const MissionQualityAssuranceWidgetContainer = styled.div`
  .line_horizontal {
    height: 20px;
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
  }
  .title {
    margin-bottom: 42px;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
  }
  .misison_container {
    margin: auto;
    padding: 85px 22px 122px 22px;
    max-width: 1168px;
    .report_list {
      .report_item {
        margin-bottom: 85px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
`;
