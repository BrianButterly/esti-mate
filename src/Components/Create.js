import React from "react";
import { Button, Form, TextArea, Checkbox } from "semantic-ui-react";

const options1 = [
  { key: "a", text: "Ashland", value: "Ashland" },
  { key: "c", text: "Cornelia", value: "Cornelia" },
  { key: "b", text: "Belmont", value: "Belmont" },
];

const options2 = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" },
  { key: "9", text: "9", value: "9" },
  { key: "10", text: "10", value: "10" },
];

const options3 = [
  { key: "w", text: "Wood", value: "Wood" },
  { key: "m", text: "Metal", value: "Metal" },
  { key: "h", text: "Hardware", value: "Hardware" },
];

function Create() {
  return (
    <div className="form">
      <Form>
        <Form.Select
          fluid
          label="Building"
          options={options1}
          placeholder="Choose a building"
        />
        <Form.Select
          fluid
          label="Unit"
          options={options2}
          placeholder="Choose a unit"
        />
        <Form.Field
          control={TextArea}
          label="Issue"
          placeholder="Describe the issue..."
        />
        <Form.Field>
          <Checkbox className="form_field" label="Wood" />
          <Checkbox className="form_field" label="Metal" />
          <Checkbox className="form_field" label="Paint" />
          <Checkbox className="form_field" label="Drywall" />
        </Form.Field>
        <Form.Select
          fluid
          label="Labour Hours"
          options={options2}
          placeholder="Choose labour hours"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
