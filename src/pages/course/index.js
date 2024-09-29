import React from "react";
import { CourseStyled } from "@/styles/courseStyled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BannerWidget,
  CourseCarouselWidget,
  NavbarMenuWidget,
} from "@/widgets";
import { Cards, Mainlayouts } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <CourseStyled>
        <NavbarMenuWidget />
        <BannerWidget isNotMenu data={BANNER_LIST} />
        <CourseCarouselWidget />
        <div className="course_list_block">
          {COURSE_LIST.map((e, i) => (
            <motion.div
              key={i}
              className="course_preview_item"
              initial={{ opacity: 0, y: 400 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href={e.routPath}>
                <Cards.CoursePreviewItem
                  bgColor={e.bgColor}
                  borderColor={e.borderColor}
                  isRight={e.isRight}
                  {...e}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </CourseStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

const COURSE_LIST = [
  {
    bgColor: "#38b4e7",
    borderColor: "#75c7e9",
    facultyShotNameEn: (
      <span style={{ color: "#FFFFFF" }}>
        B<span style={{ color: "#FFFFFF" }}>A</span>
      </span>
    ),
    facultyNameth: "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    departmentEn: "Business Administration",
    departmentTh: "สาขาวิชาบริหารธุรกิจ",
    imgPath: "/images/backgrounds/ba-course.jpg",
    routPath: "/course/ba",
  },
  {
    isRight: true,
    bgColor: "#66c06e",
    borderColor: "#136835",
    facultyShotNameEn: (
      <span style={{ color: "#FFFFFF" }}>
        A<span style={{ color: "#FFFFFF" }}>T</span>
      </span>
    ),
    facultyNameth: "วิทยาศาสตรบัณฑิต (วท.บ.)",
    departmentEn: "Science Program in Modern Agricultural Technology",
    departmentTh: "สาขาวิชาเทคโนโลยี การเกษตรสมัยใหม่",
    imgPath: "/images/backgrounds/at-course.jpg",
    routPath: "/course/at",
  },
  {
    bgColor: "#99999b",
    borderColor: "#4e4e4f",
    facultyShotNameEn: (
      <span style={{ color: "#FFFFFF" }}>
        L<span style={{ color: "#FFFFFF" }}>B</span>
        <span style={{ color: "#FFFFFF" }}>T</span>
      </span>
    ),
    facultyNameth: "บริหารธุรกิจบัณฑิต (บธ.บ.)",
    departmentEn: "Logistics and Cross - Border Trade Management",
    departmentTh: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายเเดน",
    imgPath: "/images/backgrounds/lbt-course.jpg",
    routPath: "/course/lbt",
  },
  {
    isRight: true,
    bgColor: "#d6a6c4",
    borderColor: "#d03493",
    facultyShotNameEn: (
      <span style={{ color: "#FFFFFF" }}>
        E<span style={{ color: "#FFFFFF" }}>B</span>
        <span style={{ color: "#FFFFFF" }}>C</span>
      </span>
    ),
    facultyNameth: "ศิลปศาสตรบัณฑิต (ศศ.บ.)",
    departmentEn: "English for Business Communication",
    departmentTh: "สาขาวิชาภาษาอังกฤษ เพื่อการสื่อสารทางธุรกิจ",
    imgPath: "/images/backgrounds/ebc-course.jpg",
    routPath: "/course/ebc",
  },
  {
    bgColor: "#fcb026",
    borderColor: "#fed58b",
    facultyShotNameEn: (
      <span style={{ color: "#FFFFFF" }}>
        IT
        <span style={{ color: "#FFFFFF" }}>&</span>
        <span style={{ color: "#FFFFFF" }}>DS</span>
      </span>
    ),
    facultyNameth: "วิทยาศาสตร์บัณฑิต (วท.บ.)",
    departmentEn: "Information Technology and Data Science",
    departmentTh: "สาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล",
    imgPath: "/images/backgrounds/it-ds-course.jpg",
    routPath: "/course/it-ds",
  },
];

const BANNER_LIST = [
  {
    imgPath: "/images/icons/course-main.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/icons/course-main.jpg",
    alt: "Buu",
  },
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "menu"])),
      // Will be passed to the page component as props
    },
  };
}
