import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Employees from "../pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#353238",
      light: "#D4D2D5",
    },
    secondary: {
      main: "#FFCF00",
      light: "#FFCF00",
    },
    background: {
      default: "#FFFFFC",
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {/* <SideMenu /> */}
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
