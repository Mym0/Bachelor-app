import React from "react";
import Subtopic from "../Subtopic/Subtopic.component";

function Topic({ topic, handleAnswer }) {
  if (!topic.subTopic) {
    console.error(`Topic "${topic.topic}" does not have a subTopic array`);
    return null;
  }

  return (
    <div>
      <fieldset>
        <legend>{topic.topic}</legend>
        {topic.subTopic.map((subtopic, index) => (
          <Subtopic
            key={index}
            subtopic={subtopic}
            handleAnswer={handleAnswer}
          />
        ))}
      </fieldset>
    </div>
  );
}
export default Topic;
