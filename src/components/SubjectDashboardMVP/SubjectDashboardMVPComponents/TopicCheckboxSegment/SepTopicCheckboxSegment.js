import React from "react";
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  T1True,
  T1False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Sep-Topics/Topic1";
import {
  T2True,
  T2False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Sep-Topics/Topic2";
import {
  T3True,
  T3False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Sep-Topics/Topic3";
import {
  T4True,
  T4False,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Sep-Topics/Topic4";
import {
  Increment,
  Decrement,
} from "../../../ReduxComponents/reduxSlicer/LearningJourney/Sep-Topics/SepProgressBar";
import styles from "../styles.module.css";
function SepTopicCheckboxSegment(props) {
  let { Topic91 } = useSelector((state) => state.topic91);
  let { Topic92 } = useSelector((state) => state.topic92);
  let { Topic93 } = useSelector((state) => state.topic93);
  let { Topic94 } = useSelector((state) => state.topic94);
  const dispatch = useDispatch();
  function handleTopic1() {
    if (Topic91 === 0) {
      dispatch(Increment());
      dispatch(T1True());
    } else if (Topic91 === 1) {
      dispatch(T1False());
      dispatch(Decrement());
    }
  }
  function handleTopic2() {
    if (Topic92 === 0) {
      dispatch(Increment());
      dispatch(T2True());
    } else if (Topic92 === 1) {
      dispatch(T2False());
      dispatch(Decrement());
    }
  }
  function handleTopic3() {
    if (Topic93 === 0) {
      dispatch(Increment());
      dispatch(T3True());
    } else if (Topic93 === 1) {
      dispatch(T3False());
      dispatch(Decrement());
    }
  }
  function handleTopic4() {
    if (Topic94 === 0) {
      dispatch(Increment());
      dispatch(T4True());
    } else if (Topic94 === 1) {
      dispatch(T4False());
      dispatch(Decrement());
    }
  }
  console.log(Topic91);
  console.log(Topic92);
  console.log(Topic93);
  console.log(Topic94);

  return (
    <Form id="dashboardcheckbox" className={styles.CheckboxForm}>
      <Form.Checkbox
        label={props.Topic91}
        checked={Topic91}
        onClick={handleTopic1}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic92}
        checked={Topic92}
        onClick={handleTopic2}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic93}
        checked={Topic93}
        onClick={handleTopic3}
      ></Form.Checkbox>
      <Form.Checkbox
        label={props.Topic94}
        checked={Topic94}
        onClick={handleTopic4}
      ></Form.Checkbox>
    </Form>
  );
}

export default SepTopicCheckboxSegment;
