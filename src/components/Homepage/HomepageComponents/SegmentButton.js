import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";

function SegmentButton(props) {
  return (
    <div>
      <Divider hidden />
      <Link to={`/${props.SubjectPath}`}>
        <Button className={styles.ButtonSegment}>
          {props.ButtonName} <Icon fitted name="arrow right" />
        </Button>
      </Link>
      <Divider hidden />
    </div>
  );
}

export default SegmentButton;
