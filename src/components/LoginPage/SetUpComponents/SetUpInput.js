import React from "react";
import HeaderComponent from "./HeaderComponent";
import { Grid, Divider } from "semantic-ui-react";
import DropdownListSchool from "./DropdownListSchool";
function SetUpInput() {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderComponent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column>LET'S GET TO KNOW YOU BETTER</Grid.Column>
          <Grid.Column width={8}>
            <Divider />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DropdownListSchool />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default SetUpInput;
