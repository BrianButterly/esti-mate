
// IN THE REAL WORLD I WOULD STRUCTURE THIS BETTER AND NOT HAVE IT ALL IN ONE FILE!

import React, { useState } from "react";
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
  const handleBuildingInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      building: e.target.value,
    }));
  };
  const handleUnitInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      unit: e.target.value,
    }));
  };
  const handleIssueInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      issue: e.target.value,
    }));
  };
  const handleMaterialCostInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      materialCost: e.target.value,
    }));
  };
  const handleSqftNeededInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      sqftNeeded: e.target.value,
    }));
  };
  const handleLabourHoursInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      labourHours: e.target.value,
    }));
  };
  const handleLabourCostInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      labourCost: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // FOR MULTIPLE LINE ITEMS
  const [inputList, setInputList] = useState([
    { material: "", materialCost: "", sqft: "" },
  ]);

  /////////////////////////////////////////////////////////

  //  TRYING TO ADD LINE ITEMS WITH THE LOGIC OF ADDING THE INPUTS TOGETHER.

  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, values } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = values;
  //   setInputList(list);
  // };

  // handle click of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { material: "", materialCost: "", sqft: "" }]);
  };
  // handle click of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  ////////////////////////////////////////////////////////////

  // JSX
  return (
    <div className="estimate_form">
      <Button
        style={{ marginTop: "50px" }}
        size="tiny"
        circular
        inverted
        type="submit"
        as="a"
        href="/"
      >
        <Image centered src="./logo.png" alt="logo" />
      </Button>
      <Divider className="top-divider" horizontal>
        <Header as="h2">
          Repair Cost Estimator
          <Header.Subheader>Fill in all available fields.</Header.Subheader>
        </Header>
      </Divider>
      <br />

      {/* FORM */}
      <Form size="larg" onSubmit={handleSubmit}>
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

        {/* NEXT LINE */}
        <Form.Field onChange={handleIssueInputChange} value={values.issue}>
          <label>Issue</label>
          <Input placeholder="Issue" />
        </Form.Field>
        <br />

        {/* NEXT LINE */}
        <div>
          {inputList.map((values, i) => {
            return (
              <div>
                <Form.Group widths="equal">
                  <Form.Field value={values.material}>
                    <label>Material</label>
                    <Input name="material" placeholder="Material" />
                  </Form.Field>
                  <Form.Field
                    value={values.materialCost}
                    onChange={handleMaterialCostInputChange}
                  >
                    <label>Material Cost per SqFt</label>
                    <Input
                      type="number"
                      icon="dollar sign"
                      iconPosition="left"
                      name="Material Cost"
                      placeholder="Material Cost"
                    />
                  </Form.Field>
                  <Form.Field
                    value={values.sqft}
                    onChange={handleSqftNeededInputChange}
                  >
                    <label>SqFt Needed</label>
                    <Input
                      type="number"
                      name="SqFt Needed"
                      placeholder="SqFt Needed"
                    />
                  </Form.Field>
                  <div className="add_remove_btns">
                    <br />
                    {inputList.length - 1 === i && (
                      <Button size="mini" positive onClick={handleAddClick}>
                        Add
                      </Button>
                    )}
                    {inputList.length !== 1 && (
                      <Button
                        size="mini"
                        negative
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </Form.Group>
              </div>
            );
          })}
        </div>
        <br />

        {/* NEXT LINE */}
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleLabourHoursInputChange}
            value={values.labourHours}
          >
            <label>Labour Hours</label>
            <Input type="number" placeholder="Labour Hrs" />
          </Form.Field>
          <Form.Field
            onChange={handleLabourCostInputChange}
            value={values.labourCost}
          >
            <label>Labour Cost Per Hour</label>
            <Input
              type="number"
              icon="dollar sign"
              iconPosition="left"
              placeholder="Labour Cost"
            />
          </Form.Field>
        </Form.Group>
        <br />
        {/* NEXT LINE */}
        <Divider horizontal>
          <Header as="h4">
            <Icon name="calculator" />
            Cost Calculator
          </Header>
        </Divider>
        {/* NEXT LINES */}
        <Card centered>
          <Card.Content>
            Material Cost: ${values.materialCost * values.sqftNeeded}
          </Card.Content>
          <Card.Content>
            Labour Cost: ${values.labourHours * values.labourCost}
          </Card.Content>
          <Card.Content value={values.inclusiveCost}>
            All inclusive cost: $
            {values.materialCost * values.sqftNeeded +
              values.labourHours * values.labourCost}
          </Card.Content>
        </Card>
        <Button
          onClick={() => window.location.reload(false)}
          type="submit"
          inverted
        >
          Save
        </Button>
      </Form>
      <br />
      <br />
    </div>
  );
}
export default Create;
