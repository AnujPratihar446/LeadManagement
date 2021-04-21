import { Button, makeStyles } from "@material-ui/core";

const ActionButton = ({ Color, children, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 0,
      margin: theme.spacing(0.5),
    },
  }));
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
