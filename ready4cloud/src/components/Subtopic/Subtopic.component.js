import React from "react";
import Question from "../Question/Question.component";

function Subtopic({ subtopic, handleAnswer, answers }) {
  return (
    <div>
      <h3>{subtopic.name}</h3>
      {subtopic.questions.map((question, index) => {
        const id = `${subtopic.name}-${index}`;
        return (
          <Question
            key={id}
            id={id}
            text={question}
            handleAnswer={handleAnswer}
            answer={answers[id]}
          />
        );
      })}
    </div>
  );
}

export default Subtopic;
