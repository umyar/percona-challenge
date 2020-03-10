import React from "react";

type GifItemProps = {
  imgSrc: string;
};

export const GifItem: React.FC<GifItemProps> = ({ imgSrc }) => {
  return (
    <li>
      <img src={imgSrc} height="200" />
    </li>
  );
};
