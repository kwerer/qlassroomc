import React, { useEffect } from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jan-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jan-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jan-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jan-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jan-Topics/JanProgressBar";

import styles from "../styles.module.css";
function JanTopicCheckboxSegment(props) {
  let { Topic11 } = useSelector((state) => state.topic11);
  let { Topic12 } = useSelector((state) => state.topic12);
  let { Topic13 } = useSelector((state) => state.topic13);
  let { Topic14 } = useSelector((state) => state.topic14);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic11 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic11 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }

  function handleTopic2() {
    if (Topic12 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic12 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic13 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic13 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic14 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic14 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic11);
  console.log(Topic12);
  console.log(Topic13);
  console.log(Topic14);
  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic11}
        checked={Topic11}
        onClick={handleTopic1}
        className={styles.CheckboxColor}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic12}
        checked={Topic12}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic13}
        checked={Topic13}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic14}
        checked={Topic14}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default JanTopicCheckboxSegment;
