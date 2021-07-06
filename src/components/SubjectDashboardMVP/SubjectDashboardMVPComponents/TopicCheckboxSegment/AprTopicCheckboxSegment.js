import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Apr-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Apr-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Apr-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Apr-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Apr-Topics/AprProgressBar";
import {
  Apr,
  ZeroMonth,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/LearningJourneyProgress";
import styles from "../styles.module.css";
function AprTopicCheckboxSegment(props) {
  let { Topic41 } = useSelector((state) => state.topic41);
  let { Topic42 } = useSelector((state) => state.topic42);
  let { Topic43 } = useSelector((state) => state.topic43);
  let { Topic44 } = useSelector((state) => state.topic44);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic41 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic41 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic42 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic42 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic43 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic43 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic44 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic44 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic41);
  console.log(Topic42);
  console.log(Topic43);
  console.log(Topic44);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic41}
        checked={Topic41}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic42}
        checked={Topic42}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic43}
        checked={Topic43}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic44}
        checked={Topic44}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default AprTopicCheckboxSegment;
