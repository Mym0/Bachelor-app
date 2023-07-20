import React, { useState, useEffect } from "react";
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
          YES
        </button>
        <button
          onClick={() => handleClick(false)}
          className={answer === false ? "button-clicked" : ""}
        >
          NO
        </button>
      </div>
    </div>
  );
}

export default Question;
