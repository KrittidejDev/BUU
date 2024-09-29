import { MissionQualityAssuranceWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { MOTION_FADE_UP } from "@/utils/functions/motion";
import { BannerWidget } from "@/widgets";
import { Cards, Icons } from "@/components";
import { Children } from "react";

const MissionQualityAssuranceWidget = () => {
  const { t } = useTranslation("menu");

  return (
    <MissionQualityAssuranceWidgetContainer>
      <BannerWidget data={BANNER_LIST} />
      <div className="line_horizontal" />
      <div className="misison_container">
        <MOTION_FADE_UP>
          <div className="title">การประกันคุณภาพ</div>
        </MOTION_FADE_UP>
        <div className="report_list">
          <MOTION_FADE_UP className="report_item">
            <Cards.PanelCollapeNest isExpandDefault data={REPORT} />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP className="report_item">
            <Cards.PanelCollapeNest isExpandDefault data={REPORT_DEPARTMENT} />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP className="report_item">
            <Cards.PanelCollapeNest isExpandDefault data={REPORT_QUOLITY} />
          </MOTION_FADE_UP>
          <MOTION_FADE_UP className="report_item">
            <Cards.PanelCollapeNest
              isExpandDefault
              data={REPORT_QUOLITY_COURSE}
            />
          </MOTION_FADE_UP>
        </div>
      </div>
    </MissionQualityAssuranceWidgetContainer>
  );
};

const BANNER_LIST = [
  {
    imgPath: "/images/backgrounds/banner-mission.jpg",
    alt: "Buu",
  },
  {
    imgPath: "/images/backgrounds/banner-mission.jpg",
    alt: "Buu",
  },
];

const REPORT = [
  {
    label: "รายงานผลการประเมินคุณภาพการศึกษาปีการศึกษา 2565",
    children: [
      {
        key: "1",
        label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
        children: [
          {
            label: "สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะ",
            file: "FB65-AAI.",
            icon: <Icons.DocColor color="#FCB026" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_AAI.pdf",
          },
          {
            label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
            file: "FB65-IT.",
            icon: <Icons.DocColor color="#FCB026" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_ITDS.pdf",
          },
          {
            label: "สาขาวิชาเทคโนโลยีการเกษตร",
            file: "FB65-AT.",
            icon: <Icons.DocColor color="#136835" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_AT.pdf",
          },
        ],
      },
      {
        key: "2",
        label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
        children: [
          {
            label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
            file: "FB65-BA.",
            icon: <Icons.DocColor color="#D36FAC" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_BA.pdf",
          },
          {
            label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
            file: "FB65-LBT .",
            icon: <Icons.DocColor color="#D36FAC" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_LBT.pdf",
          },
        ],
      },
      {
        key: "3",
        label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
        children: [
          {
            label: "สาขาวิชาบริหารธุรกิจ",
            file: "FB65-BA.",
            icon: <Icons.DocColor color="#38B4E7" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_BA.pdf",
          },
          {
            label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
            file: "FB65-LBT.",
            icon: <Icons.DocColor color="#8F8A9C" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/FB_AY65_LBT.pdf",
          },
        ],
      },
    ],
  },
];

const REPORT_DEPARTMENT = [
  {
    label: "ระดับคณะ",
    children: [
      {
        key: "1",
        label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
        children: [
          {
            label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
            file: "FB65 SA.",
            icon: <Icons.DocColor color="#F9D10F" />,
            routePath:
              "https://scia.chanthaburi.buu.ac.th/documents/feedback-report-sa65.pdf",
          },
        ],
      },
    ],
  },
];

const REPORT_QUOLITY = [
  {
    label: "รายงานผลการประเมินคุณภาพ",
    children: [
      {
        key: "1",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2565</span>
          </span>
        ),
        icon: <Icons.DocReport />,
      },
      {
        key: "2",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2564</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        children: [
          {
            key: "3.1",
            label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะ",
                file: "FB65-AAI.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/Feedback-Report-AY64-AAI.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
                file: "FB65-IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/Feedback-Report-AY64-ITDS-Sci-Art.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีการเกษตร",
                file: "FB65-AT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/Feedback-Report-AY64-AT.pdf",
              },
            ],
          },
          {
            key: "3.2",
            label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                file: "FB64-EBC.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/SAR-AY64-EBC.pdf",
              },
            ],
          },
          {
            key: "3.3",
            label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาบริหารธุรกิจ",
                file: "FB64-BA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/Feedback-Report-AY64-BA.pdf",
              },
              {
                label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                file: "FB64-LBT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/Feedback-Report-AY64-LBT-650616.pdf",
              },
            ],
          },
          {
            key: "3.4",
            label: "ระดับคณะ",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
                file: "FB64_SA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/Feedback-Report-UPDATE.pdf",
              },
            ],
          },
        ],
      },
      {
        key: "3",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2563</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        children: [
          {
            key: "3.1",
            label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาปัญญาประดิษฐ์ประยุกต์และเทคโนโลยีอัจฉริยะ",
                file: "CAR63-AAI.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/car-aai-2563.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
                file: "CAR63-IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/car-it-2563.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีการเกษตร",
                file: "CAR63-AT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/car-at-2563.pdf",
              },
            ],
          },
          {
            key: "3.2",
            label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                file: "CAR63-EBC .",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/car-ebc-2563.pdf",
              },
            ],
          },
          {
            key: "3.3",
            label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาบริหารธุรกิจ",
                file: "CAR63-BA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/car-ba-2563.pdf",
              },
              {
                label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                file: "CAR63-LBT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/car-lbt-2563.pdf",
              },
            ],
          },
          {
            key: "3.4",
            label: "ระดับคณะ",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
                file: "FB62_SA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/sa-car-ay63.pdf",
              },
            ],
          },
        ],
      },
      {
        key: "4",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2562</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        children: [
          {
            key: "3.1",
            label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
                file: "CAR62_IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR62-IT-final.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีการเกษตร",
                file: "CAR62_AT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR62-AT-final.pdf",
              },
            ],
          },
          {
            key: "3.2",
            label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                file: "CAR62_EBC.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR62-EBC_final.pdf",
              },
            ],
          },
          {
            key: "3.3",
            label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาบริหารธุรกิจ",
                file: "CAR62_BA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR62-BA_final.pdf",
              },
              {
                label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                file: "CAR62_LBT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR62-LBT_final.pdf",
              },
            ],
          },
          {
            key: "3.4",
            label: "ระดับคณะ",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
                file: "FB62_SA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/FB_SA62_final.pdf",
              },
            ],
          },
        ],
      },
      {
        key: "5",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2561</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        children: [
          {
            key: "3.1",
            label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
                file: "CAR61_IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_IT.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีการเกษตร",
                file: "CAR61_AT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_AT.pdf",
              },
            ],
          },
          {
            key: "3.2",
            label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                file: "CAR61_EBC.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_EBC.pdf",
              },
            ],
          },
          {
            key: "3.3",
            label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาบริหารธุรกิจ",
                file: "CAR61_BA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_BA.pdf",
              },
              {
                label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                file: "CAR61_LBT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_LBT.pdf",
              },
              {
                label: "สาขาระบบสารสนเทศ",
                file: "CAR61_IS.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_IS.pdf",
              },
            ],
          },
          {
            key: "3.4",
            label: "ระดับคณะ",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
                file: "CAR61_SA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CARBUUSA61.pdf",
              },
              {
                label: "สาขาระบบสารสนเทศ",
                file: "CAR61_IS.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR61_IS.pdf",
              },
            ],
          },
        ],
      },
      {
        key: "6",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2560</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        children: [
          {
            key: "3.1",
            label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
                file: "CAR60_IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_IT60.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีการเกษตร",
                file: "AR60_AT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_AT60.pdf",
              },
            ],
          },
          {
            key: "3.2",
            label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                file: "CAR60_EBC.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_EBC60.pdf",
              },
            ],
          },
          {
            key: "3.3",
            label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาบริหารธุรกิจ",
                file: "CAR60_BA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_BA60.pdf",
              },
              {
                label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                file: "CAR60_LBT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_LBT60.pdf",
              },
              {
                label: "สาขาระบบสารสนเทศ",
                file: "CAR60_IS.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_IS60.pdf",
              },
            ],
          },
          {
            key: "3.4",
            label: "ระดับคณะ",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
                file: "CAR60_SA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR_SA60.pdf",
              },
            ],
          },
        ],
      },
      {
        key: "7",
        label: (
          <span className="normal">
            รายงานผลการประเมินคุณภาพการศึกษา{" "}
            <span className="highlight">ปีการศึกษา 2559</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        children: [
          {
            key: "3.1",
            label: "ระดับหลักสูตร หลักสูตรวิทยาศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาเทคโนโลยีสารสนเทศ",
                file: "CAR59_IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_SA_IT.pdf",
              },
              {
                label: "สาขาวิชาเทคโนโลยีการเกษตร",
                file: "CAR59_IT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_SA_IT.pdf",
              },
            ],
          },
          {
            key: "3.2",
            label: "ระดับหลักสูตร หลักสูตรศิลปศาสตรบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
                file: "CAR59_EBC.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_SA_EBC.pdf",
              },
            ],
          },
          {
            key: "3.3",
            label: "ระดับหลักสูตร หลักสูตรบริหารธุรกิจบัณฑิต",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "สาขาวิชาบริหารธุรกิจ",
                file: "CAR59_BA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_SA_BA.pdf",
              },
              {
                label: "สาขาวิชาการจัดการโลจิสติกส์และการค้าชายแดน",
                file: "CAR59_LBT.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_SA_LBT.pdf",
              },
              {
                label: "สาขาระบบสารสนเทศ",
                file: "CAR59_IS.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_SA_IS.pdf",
              },
            ],
          },
          {
            key: "3.4",
            label: "ระดับคณะ",
            icon: <Icons.DocReport />,
            children: [
              {
                label: "คณะวิทยาศาสตร์และศิลปศาสตร์",
                file: "CAR59_SA.",
                icon: <Icons.DocColor color="#D36FAC" />,
                routePath:
                  "https://scia.chanthaburi.buu.ac.th/documents/CAR59_FAC_SA.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
];

const REPORT_QUOLITY_COURSE = [
  {
    label: "ระบบภายในประกันคุณภาพ ระดับหลักสูตร",
    children: [
      {
        label: (
          <span>
            บันทึกกิจกรรมเด่นของฝ่ายงานและสาขา{" "}
            <span className="highlight">ปีการศึกษา 2565 ปีงบประมาณ 2566</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        routePath: "https://forms.gle/HGTdG9hwdSe1sHij7",
      },
      {
        label: (
          <span>
            ระบบข้อมูลระดับหลักสูตร{" "}
            <span className="highlight">ปีการศึกษา 2564</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        routePath:
          "https://sites.google.com/go.buu.ac.th/datasetsar-buusa-major/home",
      },
      {
        label: (
          <span>
            ระบบข้อมูลระดับหลักสูตร{" "}
            <span className="highlight">ปีการศึกษา 2560 - 2563</span>
          </span>
        ),
        icon: <Icons.DocReport />,
        routePath: "https://scia.chanthaburi.buu.ac.th/qa-scia.php",
      },
    ],
  },
];

export default MissionQualityAssuranceWidget;
