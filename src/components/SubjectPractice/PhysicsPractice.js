import React, { useState } from "react";
import SmallHomeSidebar from "../Homepage/SmallHomeSidebar";
import {
  Sidebar,
  Grid,
  Header,
  Segment,
  Image,
  Modal,
  Form,
  Checkbox,
  Button,
  Transition,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import SubjectPracticeHeader from "./SubjectPracticeHeader";
import { OptionsData } from "./OptionsData";
import HelpButtonWithHint from "./HelpButtonWithHint";
import CellStructure from "../Images/CellStructure.jpg";

function PhysicsPractice() {
  let [value, setValue] = useState(0);
  let [CorrectVisible, setCorrectVisible] = useState(false);
  let [WrongVisible, setWrongVisible] = useState(false);

  const handleChange = (event, { value }) => {
    setValue(value);
  };

  function handleStudentSubmit(isCorrect) {
    if (isCorrect === true) {
      console.log("Correct answer");
      setCorrectVisible(true);
      setWrongVisible(false);
    } else {
      console.log("try again");
      setCorrectVisible(false);
      setWrongVisible(true);
    }
  }

  return (
    <Grid.Column className={styles.MainGrid}>
      <Sidebar.Pushable as={Grid.Column}>
        <SmallHomeSidebar />
        <Sidebar.Pusher className={styles.SidebarPusher}>
          <SubjectPracticeHeader
            header="ENERGY 2 PRACTICE"
            subheader="PHYSICS"
          />
          <Grid columns="equal" className={styles.PhysicsPracticeBodyGrid}>
            <Grid.Row className={styles.SidebarRow}>
              <Grid.Column width={4}>
                <Header floated="right">1.</Header>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image src={CellStructure} size="medium" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className={styles.SidebarRow}>
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={7}>
                <div className={styles.OptionsContainer}>
                  <h2>Which structure represents the ribosome?</h2>

                  <Form className={styles.AnswerForm}>
                    {OptionsData[0].answerOptions.map((answerOption) => (
                      <Form.Field>
                        <Transition
                          visible={!CorrectVisible}
                          animation="scale"
                          duration={500}
                        >
                          <b>
                            <Checkbox
                              radio
                              label={answerOption.answerText}
                              name="checkboxRadioGroup"
                              value={answerOption.option}
                              checked={value === answerOption.option}
                              onClick={handleChange}
                            />
                          </b>
                        </Transition>

                        <Transition
                          visible={
                            CorrectVisible && !(value === answerOption.option)
                          }
                          animation="scale"
                          duration={500}
                        >
                          <div>
                            <b>
                              <Checkbox
                                readOnly
                                radio
                                label={answerOption.answerText}
                                name="checkboxRadioGroup"
                              />
                            </b>
                            <div className={styles.AnswerExplanation}>
                              {answerOption.explanation}
                            </div>
                          </div>
                        </Transition>
                        <Transition
                          visible={
                            CorrectVisible && value === answerOption.option
                          }
                          animation="scale"
                          duration={500}
                        >
                          <div className={styles.CorrectAnswerSegment}>
                            <b>
                              <Checkbox
                                radio
                                label={answerOption.answerText}
                                name="checkboxRadioGroup"
                                value={answerOption.option}
                                checked={value === answerOption.option}
                                onClick={handleChange}
                              />
                            </b>
                            <div className={styles.AnswerExplanation}>
                              {answerOption.explanation}
                            </div>
                          </div>
                        </Transition>
                      </Form.Field>
                    ))}
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={7}></Grid.Column>

              <Button
                className={styles.ButtonSegment}
                onClick={() =>
                  handleStudentSubmit(
                    OptionsData[0].answerOptions[value].isCorrect
                  )
                }
              >
                CHECK
              </Button>
            </Grid.Row>
            <Grid.Row className={styles.HelpButtonRow}>
              <HelpButtonWithHint />
            </Grid.Row>
          </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Grid.Column>
  );
}

export default PhysicsPractice;
