import React from "react";
import { questionCatalog } from "../../utils/questionCatalog";

function Results({ answers }) {
  const results = questionCatalog.map((topic) => {
    const totalQuestions = topic.subTopic.reduce(
      (total, subtopic) => total + subtopic.questions.length,
      0
    );

    const yesCount = topic.subTopic.reduce((total, subtopic) => {
      return (
        total +
        subtopic.questions.reduce((count, question, index) => {
          const id = `${subtopic.name}-${index}`;
          return count + (answers[id] === true ? 1 : 0);
        }, 0)
      );
    }, 0);

    const percentageYes = ~~((yesCount / totalQuestions) * 100);
    return {
      topic: topic.topic,
      percentageYes,
    };
  });

  const averagePercentage =
    results.reduce((sum, result) => sum + result.percentageYes, 0) /
    results.length;

  const getRating = (percentageYes) => {
    if (percentageYes <= 9) {
      return { color: "white", text: "" };
    } else if (percentageYes <= 15) {
      return { color: "#ff4d4d", text: "nicht empfohlen mit " };
    } else if (percentageYes <= 50) {
      return { color: "orange", text: "Teilweise empfohlen mit " };
    } else if (percentageYes <= 85) {
      return { color: "yellow", text: "Weitgehend empfohlen mit " };
    } else {
      return { color: "lightgreen", text: "Voll empfohlen mit " };
    }
  };

  // const averageRating = getRating(averagePercentage);

  return (
    <div
      className="containers"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "1em",
      }}
    >
      <div
        className="containers-avgresult"
        style={{
          borderRadius: "10px",
          boxShadow: "1px 1px 4px 2px #393E46",
          padding: "9px",
          fontSize: "xxx-large",
        }}
      >
        <p>Durchschn. Ergebnis:</p> <b>{averagePercentage}%</b>
      </div>
      <div className="containers-topics">
        {results.map((result) => {
          const rating = getRating(result.percentageYes);
          return (
            <div
              key={result.topic}
              style={{
                borderRadius: "10px",
                boxShadow: "1px 1px 4px 2px #393E46",
                marginBottom: "15px",
              }}
            >
              <p style={{ padding: "5px" }}>
                <b>{result.topic}</b>
              </p>
              <p
                style={{
                  backgroundColor: rating.color,
                  width: "fit-content",
                  borderRadius: "8px",
                  padding: "5px",
                }}
              >
                Ergebnis:{" "}
                <b>
                  {rating.text} {result.percentageYes}%
                </b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
