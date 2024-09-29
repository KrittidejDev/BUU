import { CompetencyWidgetContainer } from "./styled";

const CompetencyWidget = () => {
  return (
    <CompetencyWidgetContainer>
      <div className="competency_block">
        <div className="competency_row">
          <div className="text_block">
            <div className="text">สมรรถนะหลักขององค์กร</div>
          </div>
          <div className="axis_line" />
          <div className="item_list">
            <div className="titel_text">
              ความหลากหลายของศาสตร์ภายในคณะฯ ทำให้เกิดความได้เปรียบในการพัฒนา
              หลักสูตร (ทั้งสำหรับจัดการเรียนการสอน
              การฝึกอบรมพัฒนาและเพิ่มพูนทักษะ) งานวิจัย งานบริการวิชาการ
              ที่มีความหลากหลาย และบูรณาการความรู้
              เพื่อตอบสนองความต้องการของชุมชน สังคม โดยเบ็ดเสร็จภายในคณะฯ
            </div>
          </div>
        </div>
      </div>
    </CompetencyWidgetContainer>
  );
};

export default CompetencyWidget;
