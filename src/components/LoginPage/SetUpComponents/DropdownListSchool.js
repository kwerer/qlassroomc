import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "School 1", value: 1 },
  { key: 2, text: "School 2", value: 2 },
  { key: 3, text: "School 3", value: 3 },
];

function DropdownListSchool() {
  return <Dropdown clearable options={options} selection />;
}

export default DropdownListSchool;
