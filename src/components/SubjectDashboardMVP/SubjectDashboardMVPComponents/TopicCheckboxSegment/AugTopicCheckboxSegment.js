import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Aug-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Aug-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Aug-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Aug-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Aug-Topics/AugProgressBar";
import styles from "../styles.module.css";
function AugTopicCheckboxSegment(props) {
  let { Topic81 } = useSelector((state) => state.topic81);
  let { Topic82 } = useSelector((state) => state.topic82);
  let { Topic83 } = useSelector((state) => state.topic83);
  let { Topic84 } = useSelector((state) => state.topic84);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic81 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic81 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic82 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic82 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic83 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic83 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic84 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic84 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic81);
  console.log(Topic82);
  console.log(Topic83);
  console.log(Topic84);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic81}
        checked={Topic81}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic82}
        checked={Topic82}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic83}
        checked={Topic83}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic84}
        checked={Topic84}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default AugTopicCheckboxSegment;
