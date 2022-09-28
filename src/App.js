import "./App.css";
import Watch from "./components/watch/Watch";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [watches, setWatches] = useState([
    { cityName: "Москва", timeZone: "3", id: nanoid() },
  ]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const cityName = evt.target.cityName.value;
    const timeZone = +evt.target.timeZone.value;
    const item = {
      cityName: cityName,
      timeZone: +timeZone,
      id: nanoid(),
    };
    if (cityName.length > 1 && timeZone > -13 && timeZone < 13) {
      evt.target.cityName.value = "";
      evt.target.timeZone.value = "";
      setWatches((prev) => [...prev, item]);
    }
  };

  const onDelete = (id) => {
    setWatches((prevWatches) => prevWatches.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form-input" onSubmit={onSubmit}>
          <div className="form-block">
            <label htmlFor="name">Название</label>
            <input
              placeholder="Например, Москва"
              id="cityName"
              name="cityName"
            />
          </div>

          <div className="form-block">
            <label htmlFor="time-zone">Временная зона</label>
            <input
              placeholder="-3"
              type="number"
              id="timeZone"
              name="timeZone"
            />
          </div>
          <button type="submit" className="form-block-btn">
            Добавить
          </button>
        </form>
      </div>
      <div className="wathces-block">
        {watches.map((item) => {
          return (
            <Watch
              timeZone={item.timeZone}
              key={item.id}
              cityName={item.cityName}
              onDelete={onDelete}
              id={item.id}
            />
          );
        })}
        {watches.length < 1
          ? "Введите город и разницу по времени в формате UDC"
          : null}
      </div>
    </div>
  );
};

export default App;
