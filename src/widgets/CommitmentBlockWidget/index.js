import { CommitmentBlockWidgetContainer } from "./styled";

const CommitmentBlockWidget = () => {
  return (
    <CommitmentBlockWidgetContainer>
      <div className="commitment_block">
        <div className="commitment_title">ปณิธาน</div>
        <div className="commitment_sub_title">
          “ สร้างคนดี ทวีปัญญา เป็นที่พึ่งพาให้แผ่นดิน ”
        </div>
        <div className="line_horizontal"></div>
        <div className="commitment_title">วิสัยทัศน์</div>
        <div className="commitment_sub_title mb_7">
          “ บูรณาการต่างศาสตร์ เพื่อพัฒนาสังคมทันสมัย ”
        </div>
        <div className="commitment_sub_title_en">
          “ Interdisciplinary integration for modernized society
        </div>
      </div>
    </CommitmentBlockWidgetContainer>
  );
};

export default CommitmentBlockWidget;
