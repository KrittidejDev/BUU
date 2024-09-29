import { OrganizationalWidgetContainer } from "./styled";

const OrganizationalWidget = () => {
  return (
    <OrganizationalWidgetContainer>
      <div className="orgz_title">วัฒนธรรมองค์กรมหาวิทยาลัยบูรพา</div>
      <div className="orgz_subtitle">(Organization Culture)</div>
      <div className="orgz_block_list">
        <div className="text_block">
          <div className="text">“ONE”</div>
          <div className="subtext">
            ซึ่งมีนิยามและความหมาย ของแต่ละตัวอักษรย่อดังน
          </div>
        </div>
        <div className="axis_line"></div>
        <div className="item_list">
          <div className="block_item">
            <div className="titel_text">O</div>
            <div className="sub_text">Oneness -</div>
            <div className="sub_two_text"> ความเป็นหนึ่งเดียว</div>
          </div>
          <div className="block_item">
            <div className="titel_text">N</div>
            <div className="sub_text">Network -</div>
            <div className="sub_two_text"> สร้างเครือข่าย</div>
          </div>
          <div className="block_item">
            <div className="titel_text">E</div>
            <div className="sub_text">Excellent -</div>
            <div className="sub_two_text"> ความเป็นเลิศ</div>
          </div>
        </div>
      </div>
    </OrganizationalWidgetContainer>
  );
};

export default OrganizationalWidget;
