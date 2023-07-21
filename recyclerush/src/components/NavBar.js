import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function NavBar({ onAbout, onBadges, onLeaderboard }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "inherit",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F0EBD9",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontWeight: "bold",
              color: "black",
              paddingLeft: "50px",
            }}
          >
            RECYCLERUSH
          </Typography>
          <Button
            variant="text"
            color="inherit"
            onClick={onAbout}
            sx={{
              color: "#062905",
              textAlign: "center",
              fontSize: "20px",
              marginRight: "40px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              letterSpacing: "-0.3px",
              textTransform: "none",
            }}
          >
            About
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={onBadges}
            sx={{
              color: "#062905",
              textAlign: "center",
              fontSize: "20px",
              marginRight: "40px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              letterSpacing: "-0.3px",
              textTransform: "none",
            }}
          >
            Badges
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={onLeaderboard}
            sx={{
              color: "#062905",
              textAlign: "center",
              fontSize: "20px",
              marginRight: "40px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              letterSpacing: "-0.3px",
              textTransform: "none",
            }}
          >
            Leaderboard
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "#a7c7c2",
              },
              backgroundColor: "#7da49d",
              color: "white",
              borderRadius: "6px",
              width: "155px",
              height: "45px",
              flexShrink: 0,
              marginRight: "50px",
            }}
          >
            SIGN IN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  onAbout: PropTypes.func.isRequired,
  onBadges: PropTypes.func.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
};

export default NavBar;
