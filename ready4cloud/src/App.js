import React, { useState } from "react";
import { questionCatalog } from "./utils/questionCatalog";
import Subtopic from "./components/Subtopic/Subtopic.component";
import Results from "./components/Results/Results.component";
// Importing styles for Carousel and bootstrap
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Tooltip and modal components from reactstrap
import { Tooltip } from "react-tooltip";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CarouselItem,
  Carousel,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

function App() {
  // State to manage user answers
  const [answers, setAnswers] = useState({});
  // State to keep track of unknown answers
  const [unknownAnswer, setUnknownAnswer] = useState([]);
  // State to track the current topic index
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  // State to control the modal visibility
  const [modal, setModal] = useState(false);
  const [reset, setReset] = useState(false);
  const [infoModal, setInfoModal] = useState(true);
  // States related to the carousel functionality
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  // Derive the current topic and subtopics from the questionCatalog
  const topic = questionCatalog[currentTopicIndex];
  const items = questionCatalog[currentTopicIndex].subTopic;

  // Carousel control function to move to the next item
  const next = () => {
    if (animating) return;
    if (activeIndex === items.length - 1) {
      return;
    }
    const nextIndex = activeIndex + 1;

    setActiveIndex(nextIndex);
  };

  // Carousel control function to move to the previous item
  const previous = () => {
    if (animating) return;
    if (activeIndex === 0) {
      return;
    }
    const nextIndex = activeIndex - 1;

    setActiveIndex(nextIndex);
  };

  // Carousel control function to jump to a specific index
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Function to handle user's answer and update the state accordingly
  const handleAnswer = (id, answer) => {
    if (answer === null) return;

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

  {
    items.map((subtopic) => (
      <div key={subtopic.name} className="subtopics-container">
        <Subtopic
          subtopic={subtopic}
          handleAnswer={handleAnswer}
          answers={answers}
        />
      </div>
    ));
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.name}
      >
        <Subtopic
          subtopic={item}
          handleAnswer={handleAnswer}
          answers={answers}
        />
      </CarouselItem>
    );
  });

  // Resetting the application
  const resetAnswers = () => {
    setAnswers({});
    setUnknownAnswer([]);
    setCurrentTopicIndex(0);
    setActiveIndex(0);
    setReset(!reset);
  };

  // Control function to move to the next topic
  const nextTopic = () => {
    if (currentTopicIndex < questionCatalog.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
      setActiveIndex(0);
    }
  };

  // Control function to move to the previous topic
  const prevTopic = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
      setActiveIndex(0);
    }
  };

  // Control the modal visibility
  const toggle = () => setModal(!modal);
  const toggleInfo = () => setInfoModal(!infoModal);

  // Here starts the rendering
  return (
    <div className="">
      <div className="container_header">
        <div>
          <h2>{topic.topic}</h2>
        </div>
        <div>
          <p className="numering-container">
            <span>{currentTopicIndex + 1}</span> / {questionCatalog.length}{" "}
            Thema
          </p>
        </div>
      </div>

      <div className="container_slider">
        <div className="container_slider_button">
          <div>
            <button onClick={prevTopic} disabled={currentTopicIndex === 0}>
              Vorheriges Thema
            </button>
          </div>
        </div>

        <div className="slider-container">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={0}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
              className={`${activeIndex === 0 ? "disable_button" : ""}`}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
              className={`${
                activeIndex === items.length - 1 ? "disable_button" : ""
              }`}
            />
          </Carousel>
        </div>

        <div className="container_slider_button">
          <div>
            <button
              onClick={nextTopic}
              disabled={currentTopicIndex === questionCatalog.length - 1}
            >
              Nächstes Thema
            </button>
          </div>
        </div>
      </div>

      <div className="container_footer">
        <div className="Info-button">
          <button onClick={toggleInfo}>!</button>
        </div>
        <div>
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
          <button onClick={toggleInfo}>Zu den Fragen</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default App;
