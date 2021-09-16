import React, {useState} from "react";
import { Button, Form, TextArea, Card } from "semantic-ui-react";
// import useLocalStorage from "../Hooks/useLocalStorage";

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
  // STATE
  const [material, setMaterial] = useState(0);
  const [labour, setLabour] = useState(0);
  const [values, setValues] = useState('values',{
    building: "",
    unit: "",
    issue: "",
    priority: "",
    cost: "",
  });

  // HANDLERS
  const handleBuildingInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      building: event.target.value,
    }));
  };
  const handleUnitInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      unit: event.target.value,
    }));
  };
  const handleIssueInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      issue: event.target.value,
    }));
  };
  const handlePriorityInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      priority: event.target.value,
    }));
  };
  const handleCostInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      cost: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  // FUNCTIONS
  function incrementMaterial() {
    setMaterial(material + 20);
  }
  function decrementMaterial() {
    setMaterial(material - 20);
  }
  function incrementLabour() {
    setLabour(labour + 35);
  }
  function decrementLabour() {
    setLabour(labour - 35);
  }



  // JSX
  return (
    <div className="estimate_form">
      <Form onSubmit={handleSubmit}>
        <Form.Field
          control={TextArea}
          label="Building"
          options={options1}
          placeholder="Input building name"
          value={values.building}
          onChange={handleBuildingInputChange}
        />
        <Form.Field
          control={TextArea}
          label="Unit"
          options={options2}
          placeholder="Input building number"
          value={values.unit}
          onChange={handleUnitInputChange}
        />
        <Form.Field
          control={TextArea}
          label="Issue"
          placeholder="Describe the issue..."
          value={values.issue}
          onChange={handleIssueInputChange}
        />
        <Form.Field>
          <Button type="button" positive onClick={incrementMaterial}>
            Add Material
          </Button>
          <Button type="button" negative onClick={decrementMaterial}>
            Remove Material
          </Button>
        </Form.Field>
        <Form.Field>
          <Button type="button" positive onClick={incrementLabour}>
            Add Labour
          </Button>
          <Button type="button" negative onClick={decrementLabour}>
            Remove Labour
          </Button>
        </Form.Field>
        <Form.Field
          control={TextArea}
          label="Priority"
          options={options3}
          placeholder="High or Low?"
          value={values.priority}
          onChange={handlePriorityInputChange}
        />
        <Card centered>
          <Card.Content header="Cost Calculator" />
          <Card.Content>Material cost: {material}</Card.Content>
          <Card.Content>Labour cost: {labour} </Card.Content>
          <Card.Content value={values.cost} onChange={handleCostInputChange}>
            All inclusive cost: {material + labour}{" "}
          </Card.Content>
        </Card>
        <Button inverted 
        // as="a" href="/estimates"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Create;
