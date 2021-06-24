import React from "react";
import { Segment, Item, Divider } from "semantic-ui-react";
import styles from "../styles.module.css";
function GraphSegment(props) {
  return (
    <Segment raised>
      <Item>
        <Item.Content>
          <Item.Header as="h1" className={styles.GraphSegmentHeader}>
            {props.Subject}
          </Item.Header>
          <Divider />
          <Item.Description className={styles.GraphSegmentGraph}>
            <Item.Image src={`${props.SubjectImage}`} size="large" />
          </Item.Description>
        </Item.Content>
        <div className={styles.GraphSegmentComparision}>
          <u>Compare each quiz</u>
        </div>
      </Item>
    </Segment>
  );
}

export default GraphSegment;
