import { Icons } from "@/components";
import { InfoSystemPreviewContainer } from "./styled";
import cx from "classnames";
import Link from "next/link";

const InfoSystemPreview = ({
  theme_standard,
  bgColor,
  borderColor,
  imgPath,
  memberType,
  isRight,
}) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  return (
    <InfoSystemPreviewContainer
      className={customClass}
      bgColor={bgColor}
      borderColor={borderColor}
      isRight={isRight}
    >
      <div className="course_figture">
        <img className="course_img" alt="buu course" src={imgPath} />
      </div>
      <div className="course_info_block">
        <div className="info_system_icon">
          <Icons.Doc />
        </div>
        <div className="info_block">
          <div className="doc_label">เอกสาร</div>
          <div className="for_label">{memberType}</div>
        </div>
        <Link className="btn_read_more" href="/course/ba">
          ดูเอกสารทั้งหมด
        </Link>
      </div>
    </InfoSystemPreviewContainer>
  );
};

export default InfoSystemPreview;
