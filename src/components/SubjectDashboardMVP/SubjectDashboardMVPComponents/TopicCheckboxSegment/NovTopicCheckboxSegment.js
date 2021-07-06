import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Nov-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Nov-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Nov-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Nov-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Nov-Topics/NovProgressBar";
import styles from "../styles.module.css";
function NovTopicCheckboxSegment(props) {
  let { Topic111 } = useSelector((state) => state.topic111);
  let { Topic112 } = useSelector((state) => state.topic112);
  let { Topic113 } = useSelector((state) => state.topic113);
  let { Topic114 } = useSelector((state) => state.topic114);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic111 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic111 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic112 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic112 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic113 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic113 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic114 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic114 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic111);
  console.log(Topic112);
  console.log(Topic113);
  console.log(Topic114);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic111}
        checked={Topic111}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic112}
        checked={Topic112}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic113}
        checked={Topic113}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic114}
        checked={Topic114}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default NovTopicCheckboxSegment;
