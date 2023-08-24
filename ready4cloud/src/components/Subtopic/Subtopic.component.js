import React from "react";
import Question from "../Question/Question.component";
/**
 * Subtopic Component
 * 
 * Renders a single subtopic and its associated questions.
 * 
 * Props:
 * - subtopic: The subtopic object containing its name and associated questions.
 * - handleAnswer: Callback function to handle answer selections for questions.
 * - answers: An object containing answers for questions, indexed by question id.
 */
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
