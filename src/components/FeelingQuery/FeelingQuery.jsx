export default function FeelingQuery() {
  return (
    <div className="question-div">
      <h1>How are you feeling today?</h1>

      <label htmlFor="feelingInput">Feeling?</label>
      <input
        type="number"
        id="feelingInput"
        data-testid="input"
      />
      <button
        data-testid="next"
        type="button">
        NEXT
      </button>
    </div>
  );
}
