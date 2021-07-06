import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Transition,
  Dropdown,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import HintButton from "./HintButton";
import OptionsData from "./OptionsData";
import "./SubjectPractice.css";
function AnswerSegment() {
  let [answer, setAnswer] = useState("");
  let [showAnswer, setShowAnswer] = useState(true);
  let [showButton, setShowButton] = useState(true);
  let [visible0, setVisible0] = useState(false);
  let [visible1, setVisible1] = useState(false);
  let [visible2, setVisible2] = useState(false);
  let [visible3, setVisible3] = useState(false);
  let [caretDirection0, setCaretDirection0] = useState("down");
  let [caretDirection1, setCaretDirection1] = useState("down");
  let [caretDirection2, setCaretDirection2] = useState("down");
  let [caretDirection3, setCaretDirection3] = useState("down");
  let [divMarginClass0, setDivMarginClass0] = useState(false);
  let [divMarginClass1, setDivMarginClass1] = useState(false);
  let [divMarginClass2, setDivMarginClass2] = useState(false);
  let [divMarginClass3, setDivMarginClass3] = useState(false);
  let correctAnswer0 = OptionsData[0].answerOptions[0].isCorrect;
  let correctAnswer1 = OptionsData[0].answerOptions[1].isCorrect;
  let correctAnswer2 = OptionsData[0].answerOptions[2].isCorrect;
  let correctAnswer3 = OptionsData[0].answerOptions[3].isCorrect;
  let wrapperClasses0 = ["AnswerButton"];
  let wrapperClasses1 = ["AnswerButton"];
  let wrapperClasses2 = ["AnswerButton"];
  let wrapperClasses3 = ["AnswerButton"];
  if ((correctAnswer0 === true) & (visible0 === true)) {
    wrapperClasses0.push("Green");
  } else if ((correctAnswer0 === false) & (visible0 === true)) {
    wrapperClasses0.push("Red");
  } else if (correctAnswer0 === true) {
    wrapperClasses0.push("Green");
  } else {
  }
  if ((correctAnswer1 === true) & (visible1 === true)) {
    wrapperClasses1.push("Green");
  } else if ((correctAnswer1 === false) & (visible1 === true)) {
    wrapperClasses1.push("Red");
  } else if (correctAnswer1 === true) {
    wrapperClasses1.push("Green");
  } else {
  }
  if ((correctAnswer2 === true) & (visible2 === true)) {
    wrapperClasses2.push("Green");
  } else if ((correctAnswer2 === false) & (visible2 === true)) {
    wrapperClasses2.push("Red");
  } else if (correctAnswer2 === true) {
    wrapperClasses2.push("Green");
  } else {
  }
  if ((correctAnswer3 === true) & (visible3 === true)) {
    wrapperClasses3.push("Green");
  } else if ((correctAnswer3 === false) & (visible3 === true)) {
    wrapperClasses3.push("Red");
  } else if (correctAnswer3 === true) {
    wrapperClasses3.push("Green");
  } else {
  }
  const trigger0 = (
    <Button fluid className={wrapperClasses0} onClick={handleDropdownAnswer0}>
      <span>{OptionsData[0].answerOptions[0].answerText}</span>
      <Transition visible={visible0} animation="drop">
        <div className={styles.YourAnswer}>YOUR ANSWER</div>
      </Transition>
      <Icon
        name={`angle ${caretDirection0}`}
        className={styles.AnswerButtonAngle}
      />
    </Button>
  );
  const trigger1 = (
    <Button fluid className={wrapperClasses1} onClick={handleDropdownAnswer1}>
      <span>{OptionsData[0].answerOptions[1].answerText}</span>
      <Transition visible={visible1} animation="drop">
        <div className={styles.YourAnswer}>YOUR ANSWER</div>
      </Transition>
      <Icon
        name={`angle ${caretDirection1}`}
        className={styles.AnswerButtonAngle}
      />
    </Button>
  );
  const trigger2 = (
    <Button fluid className={wrapperClasses2} onClick={handleDropdownAnswer2}>
      <span>{OptionsData[0].answerOptions[2].answerText}</span>
      <Transition visible={visible2} animation="drop">
        <div className={styles.YourAnswer}>YOUR ANSWER</div>
      </Transition>
      <Icon
        name={`angle ${caretDirection2}`}
        className={styles.AnswerButtonAngle}
      />
    </Button>
  );
  const trigger3 = (
    <Button fluid className={wrapperClasses3} onClick={handleDropdownAnswer3}>
      <span>{OptionsData[0].answerOptions[3].answerText}</span>
      <Transition visible={visible3} animation="drop">
        <div className={styles.YourAnswer}>YOUR ANSWER</div>
      </Transition>
      <Icon
        name={`angle ${caretDirection3}`}
        className={styles.AnswerButtonAngle}
      />
    </Button>
  );
  function handleDropdownAnswer0() {
    if (divMarginClass0 === false) {
      setDivMarginClass0(true);
    } else if (divMarginClass0 === true) {
      setDivMarginClass0(false);
    }

    if (caretDirection0 === "down") {
      setCaretDirection0("up");
    } else if (caretDirection0 === "up") {
      setCaretDirection0("down");
    }
  }
  function handleDropdownAnswer1() {
    if (divMarginClass1 === false) {
      setDivMarginClass1(true);
    } else if (divMarginClass1 === true) {
      setDivMarginClass1(false);
    }

    if (caretDirection1 === "down") {
      setCaretDirection1("up");
    } else if (caretDirection1 === "up") {
      setCaretDirection1("down");
    }
  }
  function handleDropdownAnswer2() {
    if (divMarginClass2 === false) {
      setDivMarginClass2(true);
    } else if (divMarginClass2 === true) {
      setDivMarginClass2(false);
    }

    if (caretDirection2 === "down") {
      setCaretDirection2("up");
    } else if (caretDirection2 === "up") {
      setCaretDirection2("down");
    }
  }
  function handleDropdownAnswer3() {
    if (divMarginClass3 === false) {
      setDivMarginClass3(true);
    } else if (divMarginClass3 === true) {
      setDivMarginClass3(false);
    }

    if (caretDirection3 === "down") {
      setCaretDirection3("up");
    } else if (caretDirection3 === "up") {
      setCaretDirection3("down");
    }
  }
  function handleAnswer0() {
    setAnswer(OptionsData[0].answerOptions[0].option);
    setVisible0(true);
    setVisible1(false);
    setVisible2(false);
    setVisible3(false);
  }
  function handleAnswer1() {
    setAnswer(OptionsData[0].answerOptions[1].option);
    setVisible0(false);
    setVisible1(true);
    setVisible2(false);
    setVisible3(false);
  }
  function handleAnswer2() {
    setAnswer(OptionsData[0].answerOptions[2].option);
    setVisible0(false);
    setVisible1(false);
    setVisible2(true);
    setVisible3(false);
  }
  function handleAnswer3() {
    setAnswer(OptionsData[0].answerOptions[3].option);
    setVisible0(false);
    setVisible1(false);
    setVisible2(false);
    setVisible3(true);
  }
  function handleSubmit() {
    setShowAnswer(false);
    setShowButton(false);
  }

  function submittedAnswer() {}
  return (
    <Grid className={styles.AnswerSegment}>
      <Grid.Row columns="equal" className={styles.AnswerSegmentRow}>
        <Grid.Column></Grid.Column>
        <Grid.Column width={12}>
          <h5 className={styles.AnswerHeader}>ANSWER</h5>

          <Container className={styles.AnswerOptions}>
            <Transition visible={showAnswer}>
              <div>
                <Button
                  fluid
                  className={styles.AnswerButton}
                  onClick={handleAnswer0}
                >
                  <span>{OptionsData[0].answerOptions[0].answerText}</span>

                  <Transition visible={visible0} animation="drop">
                    <div className={styles.YourAnswer}>YOUR ANSWER</div>
                  </Transition>
                </Button>
                <Button
                  fluid
                  className={styles.AnswerButton}
                  onClick={handleAnswer1}
                >
                  <span>{OptionsData[0].answerOptions[1].answerText}</span>
                  <Transition visible={visible1} animation="drop">
                    <div className={styles.YourAnswer}>YOUR ANSWER</div>
                  </Transition>
                </Button>

                <Button
                  fluid
                  className={styles.AnswerButton}
                  onClick={handleAnswer2}
                >
                  <span>{OptionsData[0].answerOptions[2].answerText}</span>
                  <Transition visible={visible2} animation="drop">
                    <div className={styles.YourAnswer}>YOUR ANSWER</div>
                  </Transition>
                </Button>

                <Button
                  fluid
                  className={styles.AnswerButton}
                  onClick={handleAnswer3}
                >
                  <span>{OptionsData[0].answerOptions[3].answerText}</span>
                  <Transition visible={visible3} animation="drop">
                    <div className={styles.YourAnswer}>YOUR ANSWER</div>
                  </Transition>
                </Button>
              </div>
            </Transition>
            <Transition visible={!showAnswer} animation="drop">
              <Dropdown
                icon={null}
                fluid
                className={divMarginClass0 ? "AnswerDropdownMain" : ""}
                trigger={trigger0}
                open={divMarginClass0}
              >
                <Dropdown.Menu>
                  <Dropdown.Header className={styles.AnswerDropdownHeader}>
                    {OptionsData[0].answerOptions[0].explanation}
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            </Transition>
            <Transition visible={!showAnswer} animation="drop">
              <Dropdown
                icon={null}
                fluid
                className={divMarginClass1 ? "AnswerDropdownMain" : ""}
                trigger={trigger1}
                open={divMarginClass1}
              >
                <Dropdown.Menu>
                  <Dropdown.Header className={styles.AnswerDropdownHeader}>
                    {OptionsData[0].answerOptions[1].explanation}
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            </Transition>
            <Transition visible={!showAnswer} animation="drop">
              <Dropdown
                icon={null}
                fluid
                className={divMarginClass2 ? "AnswerDropdownMain" : ""}
                trigger={trigger2}
                open={divMarginClass2}
              >
                <Dropdown.Menu>
                  <Dropdown.Header className={styles.AnswerDropdownHeader}>
                    {OptionsData[0].answerOptions[2].explanation}
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            </Transition>
            <Transition visible={!showAnswer} animation="drop">
              <Dropdown
                icon={null}
                fluid
                className={divMarginClass3 ? "AnswerDropdownMain" : ""}
                trigger={trigger3}
                open={divMarginClass3}
              >
                <Dropdown.Menu>
                  <Dropdown.Header className={styles.AnswerDropdownHeader}>
                    {OptionsData[0].answerOptions[3].explanation}
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            </Transition>
          </Container>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row
        columns="equal"
        stretched
        className={styles.AnswerSegmentHelpButtons}
      >
        <Grid.Column></Grid.Column>
        <Grid.Column width={11}>
          <Transition visible={showButton}>
            <Button.Group className={styles.AnswerSegmentButtonGroup}>
              <HintButton />
              <Button
                className={styles.AnswerSegmentCheckButton}
                onClick={handleSubmit}
              >
                CHECK
              </Button>
            </Button.Group>
          </Transition>
          <Transition visible={!showButton}>
            <Link to="/subject/practice/q2">
              <Button
                className={styles.AnswerSegmentNextButton}
                onClick={submittedAnswer}
              >
                NEXT
              </Button>
            </Link>
          </Transition>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default AnswerSegment;
