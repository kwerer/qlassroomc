import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/May-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/May-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/May-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/May-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/May-Topics/MayProgressBar";
import styles from "../styles.module.css";
function MayTopicCheckboxSegment(props) {
  let { Topic51 } = useSelector((state) => state.topic51);
  let { Topic52 } = useSelector((state) => state.topic52);
  let { Topic53 } = useSelector((state) => state.topic53);
  let { Topic54 } = useSelector((state) => state.topic54);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic51 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic51 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic52 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic52 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic53 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic53 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic54 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic54 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic51);
  console.log(Topic52);
  console.log(Topic53);
  console.log(Topic54);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic51}
        checked={Topic51}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic52}
        checked={Topic52}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic53}
        checked={Topic53}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic54}
        checked={Topic54}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default MayTopicCheckboxSegment;
