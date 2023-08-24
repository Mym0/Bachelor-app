import React from "react";
import { jsPDF } from "jspdf";
import { questionCatalog } from "../../utils/questionCatalog";
/**
 * Results Component
 *
 * Computes and displays the results based on user's answers.
 *
 * Props:
 * - answers: An object containing answers for questions, indexed by question id.
 * - unknownAnswer: Contains questions to which the user didn't provide an answer.
 */
function Results({ answers, unknownAnswer }) {
  // Compute the results for each topic
  const results = questionCatalog.map((topic) => {
    // Calculate the total number of questions in the topic
    const totalQuestions = topic.subTopic.reduce(
      (total, subtopic) => total + subtopic.questions.length,
      0
    );

    // Calculate the number of 'yes' answers for the topic
    const yesCount = topic.subTopic.reduce((total, subtopic) => {
      return (
        total +
        subtopic.questions.reduce((count, question, index) => {
          const id = `${subtopic.name}-${index}`;
          return count + (answers[id] === true ? 1 : 0);
        }, 0)
      );
    }, 0);

    // Calculate the percentage of 'yes' answers for the topic
    const percentageYes = ~~((yesCount / totalQuestions) * 100);
    return {
      topic: topic.topic,
      percentageYes,
    };
  });

  // Calculate the average 'yes' percentage over all topics
  const averagePercentage = (
    results.reduce((sum, result) => sum + result.percentageYes, 0) /
    results.length
  ).toFixed(2);

  // Determine the rating based on the percentage
  const getRating = (percentageYes) => {
    if (percentageYes <= 1) {
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

  const unknownQuestions = unknownAnswer.map((id) => {
    const [subtopicName, index] = id.split("-");
    const allSubtopics = questionCatalog.flatMap((topic) => topic.subTopic);
    const subtopic = allSubtopics.find((st) => st.name === subtopicName);
    return subtopic ? subtopic.questions[index] : "Error: subtopic not found";
  });

  // Handle the Downloading of unanswered Questions
  const downloadUnknownQuestionsPdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Zuklärende Fragen: ", 5, 10);

    let y = 20;

    unknownQuestions.forEach((question, index) => {
      const lines = doc.splitTextToSize("- " + question, 180);
      doc.text(lines, 10, y);
      y += 10 * lines.length;
    });

    doc.save("Ungeklaerte_Fragen.pdf");
  };

  const hasUnknownQuestions = unknownQuestions.length > 0;

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
        className="container-results"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
        <div>
          <button
            onClick={downloadUnknownQuestionsPdf}
            disabled={!hasUnknownQuestions}
          >
            Ich weiss nicht Fragen Herunterladen
          </button>
        </div>
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
