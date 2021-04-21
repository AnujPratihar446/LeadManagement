import { TextField } from "@material-ui/core";

const Input = ({ name, label, value, onChange, ...other }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
    />
  );
};

export default Input;
