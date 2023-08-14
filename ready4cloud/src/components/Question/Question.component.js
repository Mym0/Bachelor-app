import React, { useEffect } from "react";
import "./Question.css";

function Question({ id, text, handleAnswer, answer }) {
  const handleClick = async (ans) => {
    await handleAnswer(id, ans);
  };

  useEffect(() => {
    handleAnswer(id, null);
  }, []);

  return (
    <div>
      <div>
        <p>{text}</p>
        <button
          onClick={() => handleClick(true)}
          className={answer === true ? "button-clicked" : ""}
        >
          JA
        </button>
        <button
          onClick={() => handleClick(false)}
          className={answer === false ? "button-clicked" : ""}
        >
          NEIN
        </button>
        <button
          onClick={() => handleClick("idk")}
          className={answer === "idk" ? "button-clicked" : ""}
        >
          Ich weiss nicht
        </button>
      </div>
    </div>
  );
}

export default Question;
