import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Dec-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Dec-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Dec-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Dec-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Dec-Topics/DecProgressBar";
import styles from "../styles.module.css";
function DecTopicCheckboxSegment(props) {
  let { Topic121 } = useSelector((state) => state.topic121);
  let { Topic122 } = useSelector((state) => state.topic122);
  let { Topic123 } = useSelector((state) => state.topic123);
  let { Topic124 } = useSelector((state) => state.topic124);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic121 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic121 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic122 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic122 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic123 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic123 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic124 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic124 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic121);
  console.log(Topic122);
  console.log(Topic123);
  console.log(Topic124);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic121}
        checked={Topic121}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic122}
        checked={Topic122}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic123}
        checked={Topic123}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic124}
        checked={Topic124}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default DecTopicCheckboxSegment;
