import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Students from "./components/Students";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [students, setStudents] = useState([]);
  const [gryffindor, setGryffindor] = useState([]);
  const [slytherin, setSlytherin] = useState([]);
  const [hufflepuff, setHufflepuff] = useState([]);
  const [ravenclaw, setRavenclaw] = useState([]);

  const random = (multiplicador) => Math.floor(Math.random() * multiplicador);
  const random2 = Math.floor(Math.random() * 4);

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
    setStudents(
      [
        gryffindor[random(gryffindor.length)],
        slytherin[random(slytherin.length)],
        hufflepuff[random(hufflepuff.length)],
        ravenclaw[random(ravenclaw.length)],
      ].filter((e, i) => i !== random2)
    );
  };
  return (
    <div className="App">
      <main className="App-main">
        {!isLogged && (
          <HomePage setIsLogged={setIsLogged} handleClick={handleClick} />
        )}
        {isLogged && <Students handleClick={handleClick} students={students} />}
      </main>
    </div>
  );
}

export default App;
