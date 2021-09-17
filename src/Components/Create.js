import React from "react";
import { Button, Form, Card, Header, Image } from "semantic-ui-react";
import useLocalStorage from "../Hooks/useLocalStorage";

function Create() {
  // STATE
  // const [material, setMaterial] = useLocalStorage(0);
  // const [labour, setLabour] = useLocalStorage(0);
  const [values, setValues] = useLocalStorage("values", {
    building: "",
    unit: "",
    issue: "",
    material: "",
    materialCost: "",
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
  const handleMaterialInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      material: event.target.value,
    }));
  };
  const handleMaterialCostInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      materialCost: event.target.value,
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
      <Image className="esti" size="small" centered src="./logo.png" />
      <Header as="h2">
        Repair Cost Estimator
        <Header.Subheader>Fill in all available fields.</Header.Subheader>
      </Header>
      <br />
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
          <Form.Field
            onChange={handleMaterialInputChange}
            value={values.material}
          >
            <label>Material</label>
            <input placeholder="Material" />
          </Form.Field>
          <Form.Field
            onChange={handleMaterialCostInputChange}
            value={values.unit}
          >
            <label>Material Cost</label>
            <input placeholder="Material Cost" />
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
          <Form.Field
            onChange={handleLabourCostInputChange}
            value={values.unit}
          >
            <label>Labour Cost Per Hour</label>
            <input placeholder="Labour Cost" />
          </Form.Field>
        </Form.Group>

        <br />
        <Card centered>
          <Card.Content header="Cost Calculator" />
          {/* <Card.Content>Material cost: {material}</Card.Content>
          <Card.Content>Labour cost: {labour} </Card.Content> */}
          <Card.Content>Material Type: {values.material} </Card.Content>
          <Card.Content>Material Cost: {values.materialCost} </Card.Content>
          <Card.Content>Labour Cost: {values.labourCost} </Card.Content>
          <Card.Content value={values.cost}>All inclusive cost:</Card.Content>
        </Card>
        <Button inverted>Save</Button>
      </Form>
      <br />
      <br />
    </div>
  );
}
export default Create;
