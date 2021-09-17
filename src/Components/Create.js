import React from "react";
import { Button, Form, Card } from "semantic-ui-react";
import useLocalStorage from "../Hooks/useLocalStorage";

function Create() {
  // STATE
  // const [material, setMaterial] = useLocalStorage(0);
  // const [labour, setLabour] = useLocalStorage(0);
  const [values, setValues] = useLocalStorage("values", {
    building: "",
    unit: "",
    issue: "",
    materials: "",
    materialsCost: "",
    labourHours: "",
    LabourCost: "",
    priority: "",
    inclusiveCost: "",
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
  const handleMaterialsInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      materials: event.target.value,
    }));
  };
  const handleMaterialsCostInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      materialsCost: event.target.value,
    }));
  };
  const handleLabourCostInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      labourCost: event.target.value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  // JSX
  return (
    <div className="estimate_form">
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleBuildingInputChange}
            value={values.building}
          >
            <label>Building</label>
            <input placeholder="Building" />
          </Form.Field>
          <Form.Field onChange={handleUnitInputChange} value={values.unit}>
            <label>Unit</label>
            <input placeholder="Unit" />
          </Form.Field>
        </Form.Group>
        <Form.Field onChange={handleIssueInputChange} value={values.issue}>
          <label>Issue</label>
          <input placeholder="Issue" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field onChange={handleMaterialsInputChange} value={values.materials}>
            <label>Materials</label>
            <input placeholder="Materials" />
          </Form.Field>
          <Form.Field onChange={handleMaterialsCostInputChange} value={values.unit}>
            <label>Materials Cost</label>
            <input placeholder="Materials Cost" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleBuildingInputChange}
            value={values.building}
          >
            <label>Labour Hours</label>
            <input placeholder="Labour Hrs" />
          </Form.Field>
          <Form.Field onChange={handleLabourCostInputChange} value={values.unit}>
            <label>Labour Cost Per Hour</label>
            <input placeholder="Labour Cost" />
          </Form.Field>
        </Form.Group>

        <br />
        <Card centered>
          <Card.Content header="Cost Calculator" />
          {/* <Card.Content>Material cost: {material}</Card.Content>
          <Card.Content>Labour cost: {labour} </Card.Content> */}
          <Card.Content>Material Type: {values.materials} </Card.Content>
          <Card.Content>Material Cost: {values.materialsCost} </Card.Content>
          <Card.Content>Labour Cost: {values.labourCost} </Card.Content>
          <Card.Content value={values.cost}>
            All inclusive cost:
          </Card.Content>
        </Card>
        <Button
          inverted
          // as="a" href="/estimates"
        >
          Save
        </Button>
      </Form>
      <h2>{}</h2>
    </div>
  );
}
export default Create;
