import React from "react";
import { Segment, Item, Divider } from "semantic-ui-react";
import styles from "./styles.module.css";
function GraphVisualSegment(props) {
  return (
    <Segment raised>
      <Item>
        <Item.Content>
          <Item.Header as="h1" className={styles.GraphVisualSegmentHeader}>
            {props.Subject}
          </Item.Header>
          <Divider />
          <Item.Description className={styles.GraphSegmentGraph}>
            <Item.Image src={`${props.SubjectImage}`} />
          </Item.Description>
        </Item.Content>
      </Item>
    </Segment>
  );
}

export default GraphVisualSegment;
