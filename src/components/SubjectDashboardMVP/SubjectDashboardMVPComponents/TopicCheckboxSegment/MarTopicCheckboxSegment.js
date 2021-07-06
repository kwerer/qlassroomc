import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Mar-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Mar-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Mar-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Mar-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Mar-Topics/MarProgressBar";
import styles from "../styles.module.css";
function MarTopicCheckboxSegment(props) {
  let { Topic31 } = useSelector((state) => state.topic31);
  let { Topic32 } = useSelector((state) => state.topic32);
  let { Topic33 } = useSelector((state) => state.topic33);
  let { Topic34 } = useSelector((state) => state.topic34);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic31 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic31 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic32 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic32 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic33 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic33 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic34 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic34 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic31);
  console.log(Topic32);
  console.log(Topic33);
  console.log(Topic34);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic31}
        checked={Topic31}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic32}
        checked={Topic32}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic33}
        checked={Topic33}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic34}
        checked={Topic34}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default MarTopicCheckboxSegment;
