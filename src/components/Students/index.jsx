import "./styles.css";
const Students = ({ setIsLogged, studentes }) => {
  return (
    <article>
      <div className="conteiner__students">
        {studentes.map((stud) => (
          <div key={stud.name}>
            <div
              className={
                stud.house
                  ? stud.house + " " + "box__students"
                  : "Gryffindor" + "box__students"
              }
            >
              <img src={stud.image} alt="Students" />
            </div>
            <div className="title">
              <span className="title_students">Name: {stud.name}</span>
              <span className="title_students">Species: {stud.species}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="students__button" onClick={() => setIsLogged(false)}>
        Tentar novamente!
      </button>
    </article>
  );
};
export default Students;
