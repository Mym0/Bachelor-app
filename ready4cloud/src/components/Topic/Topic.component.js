import React from "react";
import Subtopic from "../Subtopic/Subtopic.component";
/**
 * Topic Component
 *
 * Renders a single topic and its associated subtopics.
 *
 * Props:
 * - topic: The topic object containing its name and associated subtopics.
 * - handleAnswer: Callback function to handle answer selections for questions within subtopics.
 */
function Topic({ topic, handleAnswer }) {
  // Check if the topic has a subTopic array, if not, log an error and don't render
  if (!topic.subTopic) {
    console.error(`Topic "${topic.topic}" does not have a subTopic array`);
    return null;
  }

  return (
    <div>
      {/* remove the Fieldset and the Legend tags, for it's neither needed nor rendering correclty */}
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
