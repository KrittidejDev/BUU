import { useRef } from "react";
import { ScienceAndLiberalArtsProgramWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_RIGHT } from "@/utils/functions/motion";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ScienceAndLiberalArtsProgramWidget = () => {
  const refScroll = useRef(null);

  const { t } = useTranslation("menu");
  // ใช้ useScroll เพื่อดึง scrollYProgress ที่เป็นค่าตั้งแต่ 0 ถึง 1
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["0 1", "1.13 1"],
  });

  // แปลงค่า scrollYProgress เป็น rotate ตั้งแต่ 0 ถึง -75 องศา
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -88]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -75]);
  return (
    <ScienceAndLiberalArtsProgramWidgetContainer ref={refScroll}>
      <div className="sal_container">
        <div className="sal_row">
          <div className="sac_left_col">
            <motion.div
              style={{ rotate }}
              initial={{
                opacity: 0,
                // rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                // rotate: -75,
              }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
            >
              <img
                className="sal_img"
                alt="ScienceAndLiberalArtsProgram"
                src="/images/icons/science-buu.png"
              />
            </motion.div>
          </div>
          <div className="sac_right_col">
            <div className="sal_info_block">
              <img
                className="sal_logo_img"
                alt="ScienceAndLiberalArtsProgram img"
                src="/images/icons/science-logo.png"
              />
              <MOTION_FADE_RIGHT>
                <div className="faculty_label">
                  หลักสูตรคณะวิทยาศาตร์ และศิลปศาตร์
                </div>
                <div className="faculty_desc">
                  คณะวิทยาศาสตร์และศิลปศาสตร์ได้รับมอบหมายให้เป็นหน่วยงานจัดการศึกษาในรายวิชาพื้นฐานทางด้านวิทยาศาสตร์
                  สังคมศาสตร์และมนุษยศาสตร์ ให้กับคณะวิชาที่วิทยาเขตจันทบุรี
                  หลักสูตรที่เปิดสอนในระดับปริญญาตรี
                  ของคณะวิทยาศาสตร์และศิลปศาสตร์
                </div>
              </MOTION_FADE_RIGHT>
              <div className="btn_view_more">เพิ่มเติม</div>
            </div>
          </div>
        </div>
      </div>
    </ScienceAndLiberalArtsProgramWidgetContainer>
  );
};

export default ScienceAndLiberalArtsProgramWidget;
