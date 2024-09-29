import { HistoryAndBackgroundWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";

const HistoryAndBackgroundWidget = () => {
  const { t } = useTranslation("menu");

  return (
    <HistoryAndBackgroundWidgetContainer>
      <div className="history_title">ประวัติและความเป็นมา</div>
      <div className="title_paragraph">จังหวัดจันทบุรี</div>
      <div className="history_desc">
        <p>
          จังหวัดจันทบุรี
          ได้อนุญาตให้มหาวิทยาลัยบูรพาใช้อาคารหอประชุมทองใหญ่อนุสรณ์
          และศาลากลางจังหวัดหลังเก่าเป็นสำนักงานและอาคารเรียนชั่วคราว
          และได้เปิดทำการเรียนการสอนเมื่อ เดือนมิถุนายน พ.ศ. 2539 จนถึงปี พ.ศ.
          2544 หลักสูตรที่เปิดสอนในขณะนั้น คือ หลักสูตรวิทยาศาสตรบัณฑิต
          สาขาวิชาระบบสารสนเทศคอมพิวเตอร์ ซึ่งเป็นหลักสูตรของคณะวิทยาศาสตร์
          มหาวิทยาลัยบูรพาบางแสน 
        </p>
        <br></br>
        <p>
          ในช่วงเดือนเมษายน พ.ศ. 2544 มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
          ได้ย้ายมา ณ ที่ทำการใหม่ เลขที่ 57 หมู่ 1 ตำบลโขมง อำเภอท่าใหม่
          จังหวัดจันทบุรี จนถึงปัจจุบัน และสภามหาวิทยาลัยบูรพาได้อนุมัติจัดตั้ง
          คณะวิทยาศาสตร์และศิลปศาสตร์ คณะเทคโนโลยีทางทะเล และวิทยาลัยอัญมณี
          เป็นหน่วยงานภายในเมื่อวันที่ 13 กันยายน พ.ศ. 2543
        </p>
      </div>
      <div className="line_horizontal" />
      <div className="history_block">
        <div className="line_vertical">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
          <div className="line4" />
          <div className="line5" />
        </div>
        <div className="history_left_col">
          <div className="history_item pt_178">
            <div className="history_figture txt_right">
              <img
                className="history_img"
                alt="buu history"
                src="/images/backgrounds/history-1.jpg"
              />
            </div>
            <p className="paragraph mb_26 mw_509">
              คณะฯได้ร่วมกับคณะวิทยาการสารสนเทศ
              ในการเปิดหลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.)
              สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะและปิดหลักสูตรวิทยาศาสตรบัณฑิต
              (วท.บ.) สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะ ในปี
              พ.ศ. 2567
              <span className="semibold">จำนวน 5 สาขาวิชา ดังนี้</span>
            </p>
            <ul className="history_list mb_9">
              <li className="history_li">
                <span className="semibold">หลักสูตร </span>วิทยาศาสตรบัณฑิต
                สาขาวิชาเทคโนโลยีสารสนเทศ
              </li>
              <li className="history_li">
                <span className="semibold">หลักสูตร </span>วิทยาศาสตรบัณฑิต
                สาขาวิชาเทคโนโลยีการเกษตร
              </li>
              <li className="history_li">
                <span className="semibold">หลักสูตร </span>
                บริหารธุรกิจบัณฑิต สาขาวิชาบริหารธุรกิจ
                <div className="small">
                  (กลุ่มการจัดการ กลุ่มการตลาด และกลุ่มการเงิน)
                </div>
              </li>
              <li className="history_li">
                <span className="semibold">หลักสูตร </span>บริหารธุรกิจบัณฑิต
                สาขาวิชาระบบสารสนเทศ
              </li>
              <li className="history_li">
                <span className="semibold">หลักสูตร </span>บริหารธุรกิจบัณฑิต
                สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน
              </li>
            </ul>
            <div className="year_block txt_right">
              ปี พ.ศ. 2557
              <div className="circle right">
                <div className="sub_circle" />
              </div>
            </div>
          </div>
          <div className="history_item pt_97">
            <div className="year_block txt_right">
              ปี พ.ศ. 2563 ถึง ปัจจุบัน
              <div className="circle right">
                <div className="sub_circle" />
              </div>
            </div>
          </div>
          <div className="history_item pt_42">
            <div className="history_figture txt_right">
              <img
                className="history_img mb_0"
                alt="buu history"
                src="/images/backgrounds/history-2.jpg"
              />
            </div>
          </div>
        </div>
        <div className="history_right_col">
          <div className="history_item pt_63">
            <div className="year_block">
              <div className="circle">
                <div className="sub_circle" />
              </div>
            </div>
          </div>
          <div className="history_item pt_26 mb_26">
            <div className="paragraph mb_15 txtIndent">
              คณะวิทยาศาสตร์ และศิลปศาสตร์ ได้รับมอบหมายให้เป็นหน่วยงานจัดการ
              ศึกษาในรายวิชาพื้นฐานทางด้านวิทยาศาสตร์ สังคมศาสตร์และมนุษยศาสตร์
              ให้กับคณะวิชาที่วิทยาเขตจันทบุรี
              หลักสูตรที่เปิดสอนในระดับปริญญาตรี ของคณะวิทยาศาสตร์และศิลปศาสตร์
              มีดังนี้
            </div>
            <ul className="history_list">
              <li className="history_li">
                <span className="semibold">พ.ศ. 2539</span>{" "}
                เปิดหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาระบบสารสนเทศคอมพิวเตอร์
              </li>
            </ul>
            <div className="history_figture">
              <img
                className="history_img mb_12 mw_320"
                alt="buu history"
                src="/images/backgrounds/history-3.jpg"
              />
            </div>
            <ul className="history_list mb_47">
              <li className="history_li">
                <span className="semibold">พ.ศ. 2547 </span>
                เปิดหลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการตลาด
              </li>
              <li className="history_li">
                <span className="semibold">พ.ศ. 2549 </span>
                เปิดหลักสูตรเทคโนโลยีบัณฑิต สาขาวิชาระบบสารสนเทศทางธุรกิจ
                และหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีการเกษตร
              </li>
              <li className="history_li">
                <span className="semibold">พ.ศ. 2550 </span>
                เปิดหลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการจัดการ
                และสาขาวิชาการจัดการทรัพยากรมนุษย์
              </li>
              <li className="history_li">
                <span className="semibold">พ.ศ. 2551 </span>
                เปิดหลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการเงิน
              </li>
            </ul>
            <div className="year_block">
              <div className="circle">
                <div className="sub_circle" />
              </div>
              ปี พ.ศ. 2553
            </div>
          </div>
          <div className="history_item pt_42">
            <div className="history_figture">
              <img
                className="history_img mb_53"
                alt="buu history"
                src="/images/backgrounds/history-4.jpg"
              />
              <div className="paragraph">
                เปิดหลักสูตรศิลปศาสตรบัณฑิตเป็นครั้งแรก ได้แก่
                หลักสูตรศิลปศาสตรบัณฑิต
                สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ และในปี 2559
                ปิดหลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาระบบสารสนเทศ
                เพื่อให้สอดคล้องกับการเปลี่ยนแปลงของสภาพแวดล้อม เศรษฐกิจ
                และสังคมของประเทศ
              </div>
              <div className="paragraph mb_26">
                คณะฯได้ร่วมกับคณะวิทยาการสารสนเทศ
                ในการเปิดหลักสูตรวิทยาศาสตรบัณฑิต
                (วท.บ.)สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะและปิดหลักสูตรหลักสูตรวิทยาศาสตรบัณฑิต
                (วท.บ.) สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะ ในปี
                พ.ศ. 2567
              </div>
              <div className="paragraph mb_26">
                คณะวิทยาศาสตร์และศิลปศาสตร์
                ได้มีการปรับปรุงหลักสูตรที่จัดการเรียนการสอน รวมทั้งสิ้น 5
                หลักสูตร ดังนี้
              </div>
              <ul className="history_list">
                <li className="history_li">
                  <span className="semibold">หลักสูตรวิทยาศาสตรบัณฑิต</span>
                  สาขาวิชาเทคโนโลยีการเกษตรสมัยใหม่
                  <div className="small">
                    (กลุ่มวิชาเทคโนโลยีและการจัดการไม้ผลและกลุ่มวิชาเทคโนโลยีปรับปรุงพันธุ์และการออกแบบพืชอาหาร
                    )
                  </div>
                </li>
                <li className="history_li">
                  <span className="semibold">หลักสูตรวิทยาศาสตรบัณฑิต </span>
                  สาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล
                </li>
                <li className="history_li">
                  <span className="semibold">หลักสูตรบริหารธุรกิจบัณฑิต </span>
                  สาขาวิชาบริหารธุรกิจ (กลุ่มวิชาการตลาดและบริการ)
                </li>
                <li className="history_li">
                  <span className="semibold">หลักสูตรบริหารธุรกิจบัณฑิต </span>
                  สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน
                </li>
                <li className="history_li">
                  <span className="semibold">หลักสูตรศิลปศาสตรบัณฑิต </span>
                  สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HistoryAndBackgroundWidgetContainer>
  );
};

export default HistoryAndBackgroundWidget;
