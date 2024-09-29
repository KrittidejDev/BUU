import React from "react";
// import PropTypes from 'prop-types'
import { LoadingStyled } from "./styled";
import cx from "classnames";
import { Icons } from "@/components";

const Loading = ({ theme_standard }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  return (
    <LoadingStyled className={customClass}>
      <Icons.Loading />
    </LoadingStyled>
  );
};

Loading.propTypes = {};

export default Loading;
