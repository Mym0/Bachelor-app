import "./App.css";
import React, { useRef, useState } from "react";
import { questionCatalog } from "./utils/questionCatalog";
import Subtopic from "./components/Subtopic/Subtopic.component";
import Results from "./components/Results/Results.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "react-tooltip";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function App() {
  const [answers, setAnswers] = useState({});
  const [unknownAnswer, setUnknownAnswer] = useState([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [reset, setReset] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const sliderRef = useRef(null);

  const handleAnswer = (id, answer) => {
    // console.log('Setting answer:', id, answer); // Log the ID and answer
    setAnswers({
      ...answers,
      [id]: answer,
    });

    if (answer === "idk") {
      if (!unknownAnswer.includes(id)) {
        setUnknownAnswer([...unknownAnswer, id]);
      }
    } else {
      if (unknownAnswer.includes(id)) {
        setUnknownAnswer(unknownAnswer.filter((unkId) => unkId !== id));
      }
    }
  };

  const resetAnswers = () => {
    setAnswers({});
    setUnknownAnswer([]);
    setCurrentTopicIndex(0);
    setReset(!reset);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
  };

  const nextTopic = () => {
    if (currentTopicIndex < questionCatalog.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
      sliderRef.current.slickGoTo(0);
    }
  };

  const prevTopic = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
      sliderRef.current.slickGoTo(0);
    }
  };

  const topic = questionCatalog[currentTopicIndex];

  const toggle = () => setModal(!modal);
  const toggleInfo = () => setInfoModal(!infoModal);

  return (
    <div className="container">
      <div className="header">
        <h2>{topic.topic}</h2>
        <p className="numering-container">
          <span>{currentTopicIndex + 1}</span> / {questionCatalog.length} Thema
        </p>
      </div>
      <div className="slider-container">
        <Slider
          ref={sliderRef}
          {...settings}
          key={reset ? "reset" : "not-reset"}
        >
          {topic.subTopic.map((subtopic, index) => (
            <div key={index} className="subtopics-container">
              <Subtopic
                subtopic={subtopic}
                handleAnswer={handleAnswer}
                answers={answers}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="navigation-container">
        <div>
          <button onClick={prevTopic} disabled={currentTopicIndex === 0}>
            Vorheriges Thema
          </button>
        </div>
        <div>
          <button
            onClick={nextTopic}
            disabled={currentTopicIndex === questionCatalog.length - 1}
          >
            Nächstes Thema
          </button>
        </div>
      </div>
      <div
        className="buttons-container"
        style={{
          display: "flex",
          width: "130vh",
          justifyContent: "space-between",
        }}
      >
        <div className="Info-button">
          <button onClick={toggleInfo}>!</button>
        </div>
        <div className="interaction-buttons">
          <button onClick={toggle}>Bestätigen</button>
          <button onClick={resetAnswers}>Zurücksetzen</button>
        </div>
      </div>
      <Tooltip
        anchorSelect=".Info-button"
        place="top"
        float="true"
        style={{ zIndex: "3", borderRadius: "15px", fontWeight: "bold" }}
      >
        Info!
      </Tooltip>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-container"
        centered
        size="lg"
        style={{ color: "black", fontSize: "large" }}
      >
        <ModalHeader toggle={null}>
          <h1>Ergebnis</h1>
        </ModalHeader>
        <ModalBody>
          <Results answers={answers} unknownAnswer={unknownAnswer} />
        </ModalBody>
        <ModalFooter>
          <button onClick={toggle}>Schließen</button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={infoModal}
        toggle={toggleInfo}
        className="infomodal-container"
        centered
        size="xl"
        style={{ color: "black", fontSize: "xx-large" }}
      >
        <ModalHeader toggle={null}>
          <h1> Wie benutze ich die App ?</h1>
        </ModalHeader>
        <ModalBody>
          <ul style={{ marginBottom: "2rem" }}>
            <li>
              Jedes Thema enthält diverse Unterthemen, zu Jedem Unterthema
              werden Fragen gestellt, die Sie mit Ja/Nein/Ich weiss nicht
              beantworten.
            </li>
            <li>
              Jedes Thema wird entsprechend Ihren Antworten bewertet, eine
              Legende hierfür finden Sie wie folgt.
            </li>
            <li>
              Beim Bestätigen der Antworten erhalten Sie ein Ergebnis mit einem
              Prozentualen Wert, der angibt, wie wahrscheinlich es ist, dass Ihr
              System in einem Cloud-Dienst integriert werden sollte.
            </li>
          </ul>
          <table
            className="legend-table"
            style={{ float: "right", width: "60%" }}
          >
            <tbody>
              <tr>
                <th colSpan="2" className="legend-table-percentage">
                  Legende
                </th>
              </tr>
              <tr>
                <td className="legend-table-percentage">
                  Nicht empfohlen (0 - 15)%{" "}
                </td>
                <td style={{ backgroundColor: "#ff4d4d", width: "8rem" }}></td>
              </tr>
              <tr>
                <td className="legend-table-percentage">
                  Teilweise empfohlen (16 - 50)%{" "}
                </td>
                <td style={{ backgroundColor: "orange", width: "8rem" }}></td>
              </tr>
              <tr>
                <td className="legend-table-percentage">
                  Weitgehend empfohlen (51 - 85)%{" "}
                </td>
                <td style={{ backgroundColor: "yellow", width: "8rem" }}></td>
              </tr>
              <tr>
                <td className="legend-table-percentage">
                  Voll empfohlen (86 - 100)%{" "}
                </td>
                <td
                  style={{ backgroundColor: "lightgreen", width: "8rem" }}
                ></td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <button onClick={toggleInfo}>Schließen</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default App;
