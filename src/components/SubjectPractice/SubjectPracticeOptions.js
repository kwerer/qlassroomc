import React, { useState } from "react";
import SmallHomeSidebar from "../Homepage/SmallHomeSidebar";
import {
  Sidebar,
  Grid,
  Header,
  Segment,
  Image,
  Container,
  Form,
  Checkbox,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import SubjectPracticeHeader from "./SubjectPracticeHeader";
import { OptionsData } from "./OptionsData";
function SubjectPracticeOptions() {
  let [value, setValue] = useState(null);
  const handleChange = (event, { value }) => {
    setValue(value);
  };
  return (
    <div className={styles.OptionsContainer}>
      Which structure represents the ribosome?
      <Form>
        <Form.Field>
          Selected value: <b>{value}</b>
        </Form.Field>
        {OptionsData[0].answerOptions.map((answerOptions) => (
          <Form.Field>
            <Checkbox
              radio
              label={answerOptions.answerText}
              name="checkboxRadioGroup"
              value={answerOptions.answerText}
              checked={value === answerOptions.answerText}
              onClick={handleChange}
            />
          </Form.Field>
        ))}
      </Form>
    </div>
  );
}

export default SubjectPracticeOptions;
