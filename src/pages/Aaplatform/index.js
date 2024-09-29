import { AaplatformStyled } from "@/styles/aaplatformStyled";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Mainlayouts } from "@/components";

export default function Aaplatform() {
  return (
    <Mainlayouts.NavBodyFooterLayout>
      <AaplatformStyled>Aaplatform ไทยได้ไหม</AaplatformStyled>
    </Mainlayouts.NavBodyFooterLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu'])),
      // Will be passed to the page component as props
    },
  };
}
