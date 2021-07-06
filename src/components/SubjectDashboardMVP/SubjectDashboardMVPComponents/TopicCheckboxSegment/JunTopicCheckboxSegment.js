import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jun-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jun-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jun-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jun-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jun-Topics/JunProgressBar";
import styles from "../styles.module.css";
function JunTopicCheckboxSegment(props) {
  let { Topic61 } = useSelector((state) => state.topic61);
  let { Topic62 } = useSelector((state) => state.topic62);
  let { Topic63 } = useSelector((state) => state.topic63);
  let { Topic64 } = useSelector((state) => state.topic64);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic61 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic61 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic62 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic62 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic63 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic63 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic64 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic64 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic61);
  console.log(Topic62);
  console.log(Topic63);
  console.log(Topic64);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic61}
        checked={Topic61}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic62}
        checked={Topic62}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic63}
        checked={Topic63}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic64}
        checked={Topic64}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default JunTopicCheckboxSegment;
