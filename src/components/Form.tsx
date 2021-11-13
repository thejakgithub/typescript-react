import React, {
  FC,
  ChangeEvent,
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

interface Props {
  seriesList: SeriesProps["seriesList"];
  setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>;
}

export const Form: FC<Props> = ({ seriesList, setSeriesList }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState("");
  const [imdb, setImdb] = useState<SeriesProps | any>("");
  const [seasons, setSeasons] = useState<SeriesProps | any>("");

  const setNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const setGenreInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };
  const setCoverInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCover(event.target.value);
  };
  const setImdbInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setImdb(event.target.value);
  };
  const setSeasonsInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSeasons(event.target.value);
  };

  const handleClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !genre || !cover || !imdb || !seasons) {
      alert("Please enter series info!");
      return;
    }
    const seriesData = { name, genre, cover, imdb, seasons };
    setSeriesList([...seriesList, seriesData]);
    setName("");
    setGenre("");
    setCover("");
    setImdb("");
    setSeasons("");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleClick}>
        <h1>My favorite TV Series</h1>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={setNameInputHandler}
          />

          <label htmlFor="genre">genre</label>
          <input
            type="text"
            name="genre"
            value={genre}
            placeholder="genre"
            onChange={setGenreInputHandler}
          />

          <label htmlFor="cover">cover</label>
          <input
            type="text"
            name="cover"
            value={cover}
            placeholder="cover"
            onChange={setCoverInputHandler}
          />

          <label htmlFor="imdb">imdb</label>
          <input
            type="number"
            name="imdb"
            value={imdb}
            placeholder="imdb"
            onChange={setImdbInputHandler}
          />

          <label htmlFor="seasons">seasons</label>
          <input
            type="number"
            name="seasons"
            value={seasons}
            placeholder="seasons"
            onChange={setSeasonsInputHandler}
          />
        </div>
        <button type="submit">Add Series</button>
      </form>
    </>
  );
};
