import React, { useState } from "react";
import {
  Grid,
  Form,
  Checkbox,
  Transition,
  Segment,
  Button,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import { OptionsData } from "./OptionsData";

function MCQLogic() {
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
    <div>
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
              </Form.Field>
            ))}

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
              </Form.Field>
            ))}
          </Form>
        </div>
        <Button
          floated="right"
          className={styles.ButtonSegment}
          onClick={() =>
            handleStudentSubmit(OptionsData[0].answerOptions[value].isCorrect)
          }
        >
          CHECK
        </Button>
      </Grid.Row>
    </div>
  );
}

export default MCQLogic;
