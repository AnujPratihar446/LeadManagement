import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = ({ name, label, value, onChange }) => {

    const convertToDefEventPara = (name, value) => ({
        target:{name, value}
    })

    return <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
            label={label}
            format="dd/MMM/yy"
            name={name}
            value={value}
            onChange={date => onChange(convertToDefEventPara(name, date))}/>
  </MuiPickersUtilsProvider>;
};

export default DatePicker;
