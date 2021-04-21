import { useState, useEffect } from "react";
import { UseForm, Form } from "../../components/UseForm";
import Controls from "../../components/controls/Controls";
import { Grid } from "@material-ui/core";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const getStatus = [
  { id: "1", title: "Banker" },
  { id: "2", title: "Broker" },
  { id: "3", title: "Builder" },
  { id: "4", title: "Convert" },
  { id: "5", title: "FD" },
  { id: "6", title: "Follow-Up" },
  { id: "7", title: "FX" },
  { id: "8", title: "Hot Lead" },
  { id: "9", title: "Login" },
  { id: "10", title: "Not Interested" },
  { id: "11", title: "Old FD" },
  { id: "12", title: "Old Sanction" },
  { id: "13", title: "Other" },
  { id: "14", title: "PD" },
  { id: "15", title: "Reference" },
  { id: "16", title: "Reject" },
  { id: "17", title: "Sanction" },
];

// Intializing Form Values
const initialFValues = {
  date: new Date(),
  name: "",
  phone: "",
  email: "",
  reference: "",
  gender: "male",
  status: "",
  isClosed: false,
  loanType: "",
  loanAmount: "",
  bankName: "",
  builderName: "",
  remarks: "",
};

// Form State
const EmployeeForm = ({ onAdd, popup, rowEdit, updateRow, addOrEdit }) => {
  const { values, setValues, handleInputChange, resetForm } = UseForm(
    initialFValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values, resetForm);
  };

  useEffect(() => {
    if (rowEdit != null)
      setValues({
        ...rowEdit,
      });
  }, [rowEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.DatePicker
            name="date"
            label="Date"
            value={values.date}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="name"
            label="Full Name"
            value={values.name}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="phone"
            label="Phone No."
            value={values.phone}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="Email ID"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="status"
            label="Status"
            value={values.status}
            onChange={handleInputChange}
            options={getStatus}
          />
          <Controls.Checkbox
            name="isClosed"
            label="Closed"
            value={values.isClosed}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          {/* <Controls.RadioGroup
            name="gender"
            value={values.gender}
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          /> */}
          <Controls.Input
            name="reference"
            label="Reference"
            value={values.reference}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="loanType"
            label="Loan Type"
            value={values.loanType}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="loanAmount"
            label="Loan Amount"
            value={values.loanAmount}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="bankName"
            label="Bank Name"
            value={values.bankName}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="builderName"
            label="Builder Name"
            value={values.builderName}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="remarks"
            label="Remarks"
            value={values.remarks}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
