import { ValuesBlockWidgetContainer } from "./styled";

const ValuesBlockWidget = () => {
  return (
    <ValuesBlockWidgetContainer>
      <div className="values_block">
      <div className="values_title">ค่านิยม</div>
      <div className="value_subtitle">
        “ B - U - R - A - P - H - A - S - A ”
      </div>
      <div className="value_undertitle">
        ซึ่งมีนิยามและความหมายของแต่ละตัวอักษรย่อดังนี้
      </div>
      <div className="value_block_list">
        <div className="value_items">
          <div className="txt_rectanger">B</div>
          <div className="text_block">
            <div className="text">Benevolence</div>
            <div className="subtext">สำนึกดี</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">H</div>
          <div className="text_block">
            <div className="text">Happiness</div>
            <div className="subtext">ครบถ้วนความสุข</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">U</div>
          <div className="text_block">
            <div className="text">Unity</div>
            <div className="subtext">มีใจเป็นหนึ่ง</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">A</div>
          <div className="text_block">
            <div className="text">Agility</div>
            <div className="subtext">พร้อมปรับทุกสถานการณ์</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">R</div>
          <div className="text_block">
            <div className="text">Responsibility</div>
            <div className="subtext">คิดถึงสังคม</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">S</div>
          <div className="text_block">
            <div className="text">Synergy</div>
            <div className="subtext">ทำงานร่วมกัน ประสานกำลังกัน</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">A</div>
          <div className="text_block">
            <div className="text">Active</div>
            <div className="subtext">ทำตนใฝ่เรียนรู้</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">A</div>
          <div className="text_block">
            <div className="text">Ahead</div>
            <div className="subtext">มุ่งไปข้างหน้าเพื่อพัฒนาสังคมทันสมัย</div>
          </div>
        </div>
        <div className="value_items">
          <div className="txt_rectanger">P</div>
          <div className="text_block">
            <div className="text">Participation</div>
            <div className="subtext">อยู่อย่างมีส่วนร่วม</div>
          </div>
        </div>
      </div>
      </div>
    </ValuesBlockWidgetContainer>
  );
};

export default ValuesBlockWidget;
