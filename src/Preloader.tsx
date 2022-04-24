/** @format */

import { useCallback } from "react";
import "./styles.css";
import { PreloaderProps } from "./types";
import { isString, convertPxToNumber } from "./utils";

const Preloader: React.FC<PreloaderProps> = ({
  variant,
  label,
  size,
  color,
}) => {
  const isArray = useCallback(() => {
    if (Array.isArray(color)) return true;
    return false;
  }, [color]);

  const Element = useCallback(
    () => (
      <>
        <div
          style={{
            width: isString(size),
            height: isString(size),
            borderWidth: size ? (convertPxToNumber(size) / 100) * 5 : 5,
            borderTopColor: isArray() ? (color?.[0] as any) : color,
          }}
          className={variant as string}
        >
          <div
            style={{
              borderWidth: size ? (convertPxToNumber(size) / 100) * 5 : 5,
              borderTopColor: isArray() ? (color?.[1] as any) : color,
            }}
            className={`${variant}Absloute`}
          ></div>
        </div>
        {label && <span className="label">{label}</span>}
      </>
    ),
    [variant, label, size, color, isArray]
  );

  return <Element />;
};

Preloader.defaultProps = {
  size: 300,
  label: "LOADING ....",
  variant: "circle",
  color: ["#eee", "#eee"],
};

export default Preloader;
