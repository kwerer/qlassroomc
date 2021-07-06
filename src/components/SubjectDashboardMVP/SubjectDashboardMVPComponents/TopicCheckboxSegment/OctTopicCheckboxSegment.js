import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Oct-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Oct-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Oct-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Oct-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Oct-Topics/OctProgressBar";
import styles from "../styles.module.css";
function OctTopicCheckboxSegment(props) {
  let { Topic101 } = useSelector((state) => state.topic101);
  let { Topic102 } = useSelector((state) => state.topic102);
  let { Topic103 } = useSelector((state) => state.topic103);
  let { Topic104 } = useSelector((state) => state.topic104);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic101 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic101 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic102 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic102 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic103 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic103 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic104 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic104 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic101);
  console.log(Topic102);
  console.log(Topic103);
  console.log(Topic104);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic101}
        checked={Topic101}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic102}
        checked={Topic102}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic103}
        checked={Topic103}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic104}
        checked={Topic104}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default OctTopicCheckboxSegment;
