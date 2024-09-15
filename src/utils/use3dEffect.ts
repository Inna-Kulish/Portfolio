import { MouseEvent, CSSProperties, Dispatch, SetStateAction } from "react";

export const handleMouseMove = (
  e: MouseEvent<HTMLLIElement>,
  index: number,
  setStylesMap: Dispatch<SetStateAction<Record<number, CSSProperties>>>
) => {
  const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
  const { offsetX: x, offsetY: y } = e.nativeEvent;

  const xRotate = ((y / height) - 0.5) * 20;
  const yRotate = ((x / width) - 0.5) * -20;
  const zTranslate = ((x / width) - 0.5) * 50;

  setStylesMap((prev) => ({
    ...prev,
    [index]: {
      transform: `rotateX(${xRotate}deg) rotateY(${yRotate}deg) translateZ(${zTranslate}px)`,
    },
  }));
};

export const handleMouseLeave = (
  index: number,
  setStylesMap: Dispatch<SetStateAction<Record<number, CSSProperties>>>
) => {
  setStylesMap((prev) => ({
    ...prev,
    [index]: {
      transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.3s ease-out',
    },
  }));
};
