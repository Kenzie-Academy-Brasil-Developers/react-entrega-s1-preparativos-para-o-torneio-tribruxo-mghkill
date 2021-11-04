import "./styles.css";
const Students = ({ setIsLogged, studentes }) => {
  return (
    <article>
      <div className="conteiner__students">
        {studentes.map((stud) => (
          <div key={stud.name} className="box">
            <div className={stud.house + " " + "box__students"}>
              <img src={stud.image} alt="Students" />
            </div>

            <div className="title">
              <span className="title_students">{stud.name}</span>
              <span className="title_students">{stud.species}</span>
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
