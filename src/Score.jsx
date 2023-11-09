import "./Score.css";

export default function Score({ scoreObj }) {
  const { score, date } = scoreObj;
  return (
    <>
      <h3 className="red-text">{score}</h3> - <small>{date}</small>
      <br />
    </>
  );
}
// scores are arrays and will need to be mapped
