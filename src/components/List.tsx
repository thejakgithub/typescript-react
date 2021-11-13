import React, { FC } from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

export const List: FC<SeriesProps> = ({ seriesList }) => {
  return (
    <div className="series-list">
      {seriesList.map((series, idx) => (
        <div key={idx} className="series-item">
            <div className="series-cover">
          <img src={series.cover} alt="series-cover" />
          </div>
          <p>
            <b> Name : {series.name}</b>
          </p>
          <p>Genre : {series.genre}</p>
          <p>Season : {series.seasons}</p>
          <p>Imdb : {series.imdb}</p>
          {series.imdb == 1 && <p>⭐</p>}
          {series.imdb == 2 && <p>⭐⭐</p>}
          {series.imdb == 3 && <p>⭐⭐⭐</p>}
          {series.imdb == 4 && <p>⭐⭐⭐⭐</p>}
          {series.imdb == 5 && <p>⭐⭐⭐⭐⭐</p>}
        </div>
      ))}
    </div>
  );
};
