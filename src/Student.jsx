import "./Student.css";
import Score from "./Score";

export default function Student({ student }) {
  const { name, bio, scores } = student;
  return (
    <div className="Student">
      <h1 className="red-text">{name}</h1>
      <p>{bio}</p>
      <h3>SCORES:</h3>
      <br />
      {scores.map((scoreObj) => (
        <Score scoreObj={scoreObj} />
      ))}
      <hr />
    </div>
  );
}
