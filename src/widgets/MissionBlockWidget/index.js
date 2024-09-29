import { MissionBlockWidgetContainer } from "./styled";

const MissionBlockWidget = () => {
  return (
    <MissionBlockWidgetContainer>
      <div className="mission_block">
        <div className="mission_title">พันธกิจ</div>
        <div className="mission_list">
          <div className="mission_list_bg" />
          <div className="mission_item">
            <div className="icon">
              <img className="icon_id" src="/images/icons/Group.png" />
            </div>
            <div className="text_info">
              ด้านการจัดการศึกษา ดำเนินการจัดการ ศึกษาอย่างเสมอภาคเท่าเทียม
              ควบคู่กับการเสริมสร้าง เสรีภาพทางวิชาการและการใฝ่เรียนรู้ตลอดชีวิต
              บนพื้นฐานของหลักคุณธรรม จริยธรรม และจรรยาบรรณวิชาชีพ
            </div>
            <div className="text_background">01</div>
          </div>
          <div className="mission_item">
            <div className="icon">
              <img className="icon_id" src="/images/icons/Group.png" />
            </div>
            <div className="text_info">
              ด้านการวิจัยและบริการวิชาการ สร้างและพัฒนา
              องค์ความรู้ในศาสตร์แขนงต่างๆ และดำเนินการ
              ให้บริการทางวิชาการและการถ่ายทอดองค์ความรู้
              เพื่อการพัฒนาศักยภาพของหน่วยงานภาครัฐ และภาคเอกชน ตลอดจนสังคมชุมชน
              ให้สามารถรองรับ ต่อการเปลี่ยนแปลงและการพัฒนาทางด้านการเมือง
              เศรษฐกิจ และสังคมที่มีความเป็นพลวัตสูง ได้อย่างมีประสิทธิภาพ
            </div>
            <div className="text_background">02</div>
          </div>
          <div className="mission_item">
            <div className="icon">
              <img className="icon_id" src="/images/icons/Group.png" />
            </div>
            <div className="con">
              <div className="text_info">
                ด้านการพัฒนาชุมชน ดำเนินการส่งเสริม
                และสนับสนุนกิจกรรมสาธารณะในรูปแบบต่าง ๆ
                โดยครอบคลุมการทำนุบำรุงศิลปะ วัฒนธรรม ศาสนา และการกีฬา
                รวมทั้งแสดงบทบาทนำในการพัฒนาสังคม ชุมชน
                และสิ่งแวดล้อมอย่างต่อเนื่อง
              </div>
              <div className="text_background">03</div>
            </div>
          </div>
        </div>
      </div>
    </MissionBlockWidgetContainer>
  );
};

export default MissionBlockWidget;
