import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Students from "./components/Students";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [studentes, setStudentes] = useState([]);
  const [gryffindor, setGryffindor] = useState([]);
  const [slytherin, setSlytherin] = useState([]);
  const [hufflepuff, setHufflepuff] = useState([]);
  const [ravenclaw, setRavenclaw] = useState([]);
  const aleatorio = (multiplicador) =>
    Math.floor(Math.random() * multiplicador);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setGryffindor(
          response.filter(
            (item) => item.house === "Gryffindor" && item.image !== ""
          )
        );
        setSlytherin(
          response.filter(
            (item) => item.house === "Slytherin" && item.image !== ""
          )
        );
        setHufflepuff(
          response.filter(
            (item) => item.house === "Hufflepuff" && item.image !== ""
          )
        );
        setRavenclaw(
          response.filter(
            (item) => item.house === "Ravenclaw" && item.image !== ""
          )
        );
      });
  }, []);

  const handleClick = () => {
    setStudentes(
      [
        gryffindor[aleatorio(gryffindor.length)],
        slytherin[aleatorio(slytherin.length)],
        hufflepuff[aleatorio(hufflepuff.length)],
        ravenclaw[aleatorio(ravenclaw.length)],
      ].splice(1)
    );
  };
  return (
    <div className="App">
      <main className="App-main">
        {!isLogged && (
          <HomePage setIsLogged={setIsLogged} handleClick={handleClick} />
        )}
        {isLogged && (
          <Students setIsLogged={setIsLogged} studentes={studentes} />
        )}
      </main>
    </div>
  );
}

export default App;
