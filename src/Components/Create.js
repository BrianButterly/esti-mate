import React from "react";
import {
  Button,
  Form,
  Card,
  Header,
  Image,
  Input,
  Divider,
  Icon,
} from "semantic-ui-react";
import useLocalStorage from "../Hooks/useLocalStorage";

function Create() {
  // STATE
  const [values, setValues] = useLocalStorage("values", {
    building: "",
    unit: "",
    issue: "",
    material: "",
    materialCost: "",
    sqftNeeded: "",
    labourHours: "",
    labourCost: "",
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
  const handleLabourHoursInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      labourHours: event.target.value,
    }));
  };
  const handleLabourCostInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      labourCost: event.target.value,
    }));
  };
  const handleSqftNeededInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      sqftNeeded: event.target.value,
    }));
  };
  const handleInclusiveCostChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      inclusiveCost: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  // const handleClick = () => {
  //   console.log({values})
  // }

  // JSX
  return (
    <div className="estimate_form">
      <Image className="esti" size="small" centered src="./logo.png" />
      <Divider className="top-divider" horizontal>
        <Header as="h2">
          Repair Cost Estimator
          <Header.Subheader>Fill in all available fields.</Header.Subheader>
        </Header>
      </Divider>
      <br />

      {/* FORM */}
      <Form size="small" onSubmit={handleSubmit}>
        {/* LINE 1 */}
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleBuildingInputChange}
            value={values.building}
          >
            <label>Building</label>
            <Input placeholder="Building" />
          </Form.Field>
          <Form.Field onChange={handleUnitInputChange} value={values.unit}>
            <label>Unit</label>
            <Input placeholder="Unit" />
          </Form.Field>
        </Form.Group>

        {/* LINE 2 */}
        <Form.Field onChange={handleIssueInputChange} value={values.issue}>
          <label>Issue</label>
          <Input placeholder="Issue" />
        </Form.Field>
        <br />
        {/* LINE 3 */}
        <div className="container">
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
              <label>Material Cost per SqFt</label>
              <Input
                icon="dollar sign"
                iconPosition="left"
                placeholder="Material Cost"
              />
            </Form.Field>
            <Form.Field
              onChange={handleSqftNeededInputChange}
              value={values.unit}
            >
              <label>SqFt Needed</label>
              <input placeholder="SqFt Needed" />
            </Form.Field>
          </Form.Group>
        </div>
        <br />

        {/* LINE 6 */}
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleLabourHoursInputChange}
            value={values.building}
          >
            <label>Labour Hours</label>
            <Input placeholder="Labour Hrs" />
          </Form.Field>
          <Form.Field
            onChange={handleLabourCostInputChange}
            value={values.unit}
          >
            <label>Labour Cost Per Hour</label>
            <Input
              icon="dollar sign"
              iconPosition="left"
              placeholder="Labour Cost"
            />
          </Form.Field>
        </Form.Group>
        <br />
        <Divider horizontal>
          <Header as="h4">
            <Icon name="calculator" />
            Cost Calculator
          </Header>
        </Divider>
        <Card centered>
          {/* <Card.Content header="Cost Calculator" /> */}
          <Card.Content>
            Material Cost: ${values.materialCost * values.sqftNeeded}
          </Card.Content>
          <Card.Content>
            Labour Cost: ${values.labourHours * values.labourCost}
          </Card.Content>
          <Card.Content
            onChange={handleInclusiveCostChange}
            value={values.inclusiveCost}
          >
            All inclusive cost: $
            {values.materialCost * values.sqftNeeded +
              values.labourHours * values.labourCost}
          </Card.Content>
        </Card>
        <Button type="submit" inverted>
          Save
        </Button>
      </Form>
      <br />
      <br />
    </div>
  );
}
export default Create;
