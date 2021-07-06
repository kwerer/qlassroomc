import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jul-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jul-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jul-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jul-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Jul-Topics/JulProgressBar";
import styles from "../styles.module.css";
function JulTopicCheckboxSegment(props) {
  let { Topic71 } = useSelector((state) => state.topic71);
  let { Topic72 } = useSelector((state) => state.topic72);
  let { Topic73 } = useSelector((state) => state.topic73);
  let { Topic74 } = useSelector((state) => state.topic74);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic71 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic71 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic72 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic72 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic73 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic73 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic74 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic74 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic71);
  console.log(Topic72);
  console.log(Topic73);
  console.log(Topic74);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic71}
        checked={Topic71}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic72}
        checked={Topic72}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic73}
        checked={Topic73}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic74}
        checked={Topic74}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default JulTopicCheckboxSegment;
