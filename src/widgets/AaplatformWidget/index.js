import { AaplatformWidgetContainer } from "./styled";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";

const AaplatformWidget = () => {
  const { t } = useTranslation("menu");
  const dispatch = useDispatch();
  const cartRedux = useSelector((state) => state.cartRedux);

  return (
    <AaplatformWidgetContainer>
      <div className="">AaplatformWidgetContainer</div>
    </AaplatformWidgetContainer>
  );
};

export default AaplatformWidget;
