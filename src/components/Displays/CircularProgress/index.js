import { useState, useMemo } from "react";
import { CircularProgressContainer } from "./styled";
import cx from "classnames";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ theme_small, percentage, label, total }) => {
  const customClass = cx({
    theme_small: theme_small,
  });

  const [_value, _setValue] = useState(0);

  useMemo(() => {
    if (percentage && percentage !== _value) {
      setTimeout(() => {
        _setValue(percentage);
      }, 1200);
    }
  }, [percentage]);

  return (
    <CircularProgressbarWithChildren
      counterClockwise
      styles={{
        path: {
          stroke: `#F89925`,
        },
        trail: {
          stroke: "white",
        },
      }}
      value={_value}
      strokeWidth={12}
    >
      <CircularProgressContainer className={customClass}>
        <div className="cp_total">{total}</div>
        <div className="cp_label">{label}</div>
      </CircularProgressContainer>
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgress;
