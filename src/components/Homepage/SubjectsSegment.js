import React from "react";
import { Segment, Item, Divider } from "semantic-ui-react";

import SegmentButton from "./SegmentButton";

function SubjectsSegment(props) {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat non augue consequat massa. Vel nulla velit, etiam placerat maecenas lorem. Cursus mi, suscipit feugiat eu quis. Mauris et lacus aliquam iaculis.";

  return (
    <Segment raised>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={`${props.SubjectImage}`} />
          <Item.Content>
            <Item.Header>
              {props.Subject}
              <Divider />
            </Item.Header>
            <p>{description}</p>
          </Item.Content>
          <SegmentButton
            SubjectPath={`${props.SubjectPath}`}
            ButtonName="CONTINUE"
          />
        </Item>
      </Item.Group>
    </Segment>
  );
}

export default SubjectsSegment;
