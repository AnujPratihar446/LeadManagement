import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)"
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
      '&:hover': { backgroundColor: '#f2f2f2' },
      '& .MuiSvgIcon-root': {
        marginRight: '8px' 
    }
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          {/* SEARCH BAR */}
          <Grid item>
            <InputBase
              placeholder="Search Topics"
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          {/* EMPTY SPACE */}
          <Grid item sm></Grid>
          {/* RIGHT SIDE ICONS */}
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <ChatBubbleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
