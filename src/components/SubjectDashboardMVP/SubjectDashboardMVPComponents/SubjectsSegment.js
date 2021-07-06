import React from "react";
import { Segment, Item, Divider } from "semantic-ui-react";
import SegmentButton from "./SegmentButton";

function SubjectsSegment(props) {
  return (
    <Segment raised fluid size="large">
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={`${props.SubjectImage}`} />
          <Item.Content>
            <Item.Header as="h1">
              {props.Subject}
              <Divider />
            </Item.Header>

            <p>
              <Item.Header>{props.Description}</Item.Header>
            </p>
          </Item.Content>
          <SegmentButton
            SubjectPath={`${props.SubjectPath}`}
            ButtonName={`${props.ButtonName}`}
          />
        </Item>
      </Item.Group>
    </Segment>
  );
}

export default SubjectsSegment;
