import "./styles.css";
const Students = ({ handleClick, students }) => {
  return (
    <article>
      <div className="conteiner__students">
        {students.map((stud) => (
          <div key={stud.name} className="box">
            <div className={stud.house + " " + "box__students"}>
              <img src={stud.image} alt="Students" />
            </div>

            <div className="title">
              <span className="title_students">{stud.name}</span>
              <span className="title_students">{stud.species}</span>
              <span className="title_students">{stud.house}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="students__button" onClick={handleClick}>
        Tentar novamente!
      </button>
    </article>
  );
};
export default Students;
