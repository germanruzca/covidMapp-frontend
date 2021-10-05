import React, { useState } from "react";
import Card from "./components/Card/index.jsx";
import Map from "./components/Map/index.jsx";
import Search from "./components/Search/index.jsx";
import axios from "axios";
import { calculatePopulation } from "./utils";

function App() {
  const [province, setProvince] = useState("");
  const [data, setData] = useState({ 
    weather: 0,
    population: 0,
    last: 0,
    deaths:0,
    recovered:0
  });

  // Get data function
  const getData = async () => {
    let population = 0;
    const time = new Date().getHours();
    const day = new Date().getDate() + 4;

    const key = "912e0dfa79ce034e760af9ddc8d0ad9b";
    const mainUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const restUrl = "&units=metric&lang=es&appid=";

    const watherData = await fetch(`${mainUrl}${province}${restUrl}${key}`);
    const watherData2 = await watherData.json();
    const weather = watherData2.main.temp;

    const apiPop =
      "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";
    const populationData = await fetch(`${apiPop}`);
    const populationData2 = await populationData.json();
    for (let i = 0; Object.keys(populationData2.data).length; i++) {
      if (populationData2.data[i].State == province) {
        population = populationData2.data[i].Population;
        break;
      }
    }
    const populationN = await calculatePopulation(population);
    console.log(province, 1);
    const info = await axios.get(
      `http://127.0.0.1:5000/datos/?population=${population}&populationN=${populationN}&weather=${weather}&hour=${time}&place=3&day=${day}&state=${province}`
    );
    setData(info.data.data);
  };
  return (
    <div>
      {/* <Map data={data}/> */}
      {/* AuzreMap */}
      <Search province={province} setProvince={setProvince} getData={getData} />
      <Card data={data} />
    </div>
  );
}

export default App;
