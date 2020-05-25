import React, { useState, useCallback } from "react";

const storedCities = JSON.parse(localStorage.getItem("cities")) || [
  { id: 1, name: "Moscow" },
  { id: 2, name: "Novosibirsk" },
  { id: 3, name: "Tyumen" },
  { id: 5, name: "Tobolsk" },
  { id: 6, name: "Kurgan" },
  { id: 7, name: "Omsk" },
  { id: 8, name: "Zelenograd" },
  { id: 9, name: "Sochi" },
  { id: 10, name: "Tula" },
  { id: 11, name: "Astrahan" },
  { id: 12, name: "Kazan" },
  { id: 13, name: "Nizhniy Novgorod" },
  { id: 14, name: "Ufa" },
  { id: 15, name: "Krasnodar" },
  { id: 16, name: "Krasnoyarsk" },
  { id: 17, name: "Voronezh" },
  { id: 18, name: "Samara" },
  { id: 19, name: "Ekaterinburg" },
  { id: 20, name: "Saint-Petersburg" },
];

export const App = () => {
  const [cities, setCities] = useState(storedCities);
  const [city, setCity] = useState("");

  const saveCities = useCallback(
    (cities) => {
      setCities(cities);
      localStorage.setItem("cities", JSON.stringify(cities));
    },
    [setCities]
  );

  const onInputChange = useCallback(
    (e) => {
      setCity(e.target.value);
    },
    [setCity]
  );

  const onDelete = useCallback(
    (id, e) => {
      saveCities(cities.filter((citeItem) => citeItem.id !== id));
    },
    [cities, saveCities]
  );

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <input onChange={onInputChange} className="mt-2" />
      <div>
        {city.length < 3
          ? null
          : cities
              .filter((cityItem) =>
                cityItem.name.toLowerCase().includes(city.toLowerCase())
              )
              .map((city, idx) => (
                <li key={city.id} className="mt-2">
                  {city.name}
                  <button onClick={onDelete.bind(this, city.id)}>Delete</button>
                </li>
              ))}
      </div>
    </div>
  );
};
