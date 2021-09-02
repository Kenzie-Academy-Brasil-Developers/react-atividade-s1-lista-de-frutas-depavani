import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList";

export default function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const maped = fruits.map((element) => element.name);
  console.log(maped);

  const filterRedFruits = () => {
    const filtered = fruits.filter((fruit) => fruit.color === "red");
    setFruits(filtered);
  };

  const reduced = fruits.reduce((acc, fruit) => acc + fruit.price, 0);

  const lista = maped.map((dado, indice) => {
    return <li key={indice}>{dado}</li>;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div> Preço total = {reduced}</div>
        <FruitList lista={lista}></FruitList>
        <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </header>
    </div>
  );
}
