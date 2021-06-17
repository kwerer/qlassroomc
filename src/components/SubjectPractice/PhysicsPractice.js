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
import HelpButton from "./HelpButtonWithHint";

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
    <Grid.Column>
      <Sidebar.Pushable as={Grid.Column}>
        <SmallHomeSidebar />
        <Sidebar.Pusher className={styles.SidebarPusher}>
          <SubjectPracticeHeader
            header="ENERGY 2 PRACTICE"
            subheader="PHYSICS"
          />
          <Grid columns="equal">
            <Grid.Column>
              <Header floated="right">1.</Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Grid.Row className={styles.SidebarRow}>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&usqp=CAU"
                  size="medium"
                />
              </Grid.Row>
              <Grid.Row className={styles.SidebarRow}>
                <div className={styles.OptionsContainer}>
                  Which structure represents the ribosome?
                  <Form>
                    {OptionsData[0].answerOptions.map((answerOption) => (
                      <Form.Field>
                        <Transition
                          visible={!CorrectVisible}
                          animation="scale"
                          duration={500}
                        >
                          <Checkbox
                            radio
                            label={answerOption.answerText}
                            name="checkboxRadioGroup"
                            value={answerOption.option}
                            checked={value === answerOption.option}
                            onClick={handleChange}
                          />
                        </Transition>
                        <Transition
                          visible={CorrectVisible}
                          animation="scale"
                          duration={500}
                        >
                          <Segment className={styles.CorrectAnswerSegment}>
                            <Checkbox
                              radio
                              label={answerOption.answerText}
                              name="checkboxRadioGroup"
                              value={answerOption.option}
                              checked={value === answerOption.option}
                              onClick={handleChange}
                            />
                            <div>{answerOption.explaination}</div>
                          </Segment>
                        </Transition>
                      </Form.Field>
                    ))}
                  </Form>
                </div>
              </Grid.Row>
              <Grid.Row>
                <Button
                  floated="right"
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
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid>

          <HelpButton />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Grid.Column>
  );
}

export default PhysicsPractice;
