import React, { useEffect } from "react";
import "./Question.css";
/**
 * Question Component
 *
 * Renders a single question with associated answer buttons.
 *
 * Props:
 * - id: The unique identifier for the question.
 * - text: The question text.
 * - handleAnswer: Callback function to handle the answer selection.
 * - answer: The current answer for the question (true, false, "idk", or null).
 */

function Question({ id, text, handleAnswer, answer }) {
  // Handle button click events and update the answer
  const handleClick = async (ans) => {
    await handleAnswer(id, ans);
  };

  // On component mount, initialize the answer to null
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
