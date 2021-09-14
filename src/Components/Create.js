import React, { useState } from "react";
import { Button, Form, TextArea, Card } from "semantic-ui-react";

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
  { key: "l", text: "Low", value: "Low" },
  { key: "h", text: "High", value: "High" },
];

function Create() {
  const [material, setMaterial] = useState(0);

  function incrementMaterial() {
    setMaterial(material + 20);
  }

  function decrementMaterial() {
    setMaterial(material - 20);
  }

  const [labour, setLabour] = useState(0);

  function incrementLabour() {
    setLabour(labour + 35);
  }

  function decrementLabour() {
    setLabour(labour - 35);
  }

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
        <Form.Field >
          <Button positive onClick={incrementMaterial}>
            Add Material
          </Button>
          <Button negative onClick={decrementMaterial}>
            Remove Material
          </Button>
        </Form.Field>
        <Form.Field>
          <Button positive onClick={incrementLabour}>
            Add Labour
          </Button>
          <Button negative onClick={decrementLabour}>
            Remove Labour
          </Button>
        </Form.Field>
        <Form.Select
          fluid
          label="Priority"
          options={options3}
          placeholder="Choose priority"
        />
      </Form>
      <Card centered>
        <Card.Content header="Cost Calculator" />
        <Card.Content>Material cost: {material}</Card.Content>
        <Card.Content>Labour cost: {labour} </Card.Content>
        <Card.Content>All inclusive cost: {material + labour} </Card.Content>
      </Card>
      <Button inverted type="submit" as="a" href="/estimates">Submit</Button>
    </div>
  );
}

export default Create;
