import React from "react";
import { GifItem } from "./GifItem";

type GifsListProps = {
  gifs: any[];
};

export const GifsList: React.FC<GifsListProps> = ({ gifs }) => {
  return (
    <ul className="gifs-list">
      {gifs.map(gif => (
        <GifItem key={gif.id} imgSrc={gif.images.fixed_height.url} />
      ))}
    </ul>
  );
};
