import { useState } from "react";
import { makeStyles } from "@material-ui/core";

const UseForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFValues);
  };

  return {
    values,
    setValues,
    handleInputChange,
    resetForm,
  };
};

// Custom CSS
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};

export { UseForm, Form };
