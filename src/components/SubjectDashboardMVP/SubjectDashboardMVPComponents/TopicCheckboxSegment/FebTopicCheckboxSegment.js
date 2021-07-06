import React, { useEffect } from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Feb-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Feb-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Feb-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Feb-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Feb-Topics/FebProgressBar";

import styles from "../styles.module.css";
function FebTopicCheckboxSegment(props) {
  let { Topic21 } = useSelector((state) => state.topic21);
  let { Topic22 } = useSelector((state) => state.topic22);
  let { Topic23 } = useSelector((state) => state.topic23);
  let { Topic24 } = useSelector((state) => state.topic24);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic21 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic21 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic22 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic22 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic23 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic23 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic24 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic24 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic21);
  console.log(Topic22);
  console.log(Topic23);
  console.log(Topic24);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic21}
        checked={Topic21}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic22}
        checked={Topic22}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic23}
        checked={Topic23}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic24}
        checked={Topic24}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default FebTopicCheckboxSegment;
