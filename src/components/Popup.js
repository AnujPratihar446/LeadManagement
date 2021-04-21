import {
  Button as MuiButton,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Controls from "./controls/Controls";
import CloseIcon from "@material-ui/icons/Close";
import { UseForm } from "./UseForm";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

const initialFValues = {
  date: new Date(),
  name: "",
  phone: "",
  email: "",
  reference: "",
  gender: "male",
  status: "",
  isClosed: false,
};

const Popup = ({ title, children, openPopup, setOpenPopup }) => {
  const classes = useStyles();

  const { resetForm } = UseForm(initialFValues);

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              resetForm();
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
