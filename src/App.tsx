import React, { useState } from "react";
import { SeriesProps } from "./interfaces/SeriesProps";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";

function App() {
  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);

  return (
    <div className="App">
      <Form seriesList={seriesList} setSeriesList={setSeriesList} />
      <List seriesList={seriesList} />
    </div>
  );
}

export default App;
