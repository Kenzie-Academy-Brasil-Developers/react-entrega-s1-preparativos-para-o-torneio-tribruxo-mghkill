import "./styles.css";
const HomePage = ({ setIsLogged, handleClick }) => {
  return (
    <article className="conteiner__home">
      <h1>Torneio tribruxo</h1>
      <span>Clique aqui para encontrar os feiticeiros!</span>
      <button
        className="home__button"
        onClick={() => {
          setIsLogged(true);
          handleClick();
        }}
      >
        Começar!
      </button>
    </article>
  );
};
export default HomePage;
