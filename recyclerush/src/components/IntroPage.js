import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import recyclecan from "../assets/recycle-can.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "7.5vh",
    },
    h3: {
      fontSize: "6.5vh",
    },
    body1: {
      fontSize: "3vh",
    },
  },
  palette: {
    primary: {
      main: "#C7683D",
    },
    secondary: {
      main: "#182D27",
    },
    background: {
      default: "#F6F3E7",
    },
    smalltext: {
      main: "#5E5E5E",
      other: "#000",
    },
    blackIcons: {
      main: "#000",
    },
  },
});

const IntroPage = ({ onLearnMore }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          height: { xs: "75vh", sm: "80vh", md: "65vh", lg: "65vh" },
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
          position: "relative",
          marginTop: { xs: "75px", sm: "75px", md: "130px", lg: "130px" },
          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
        }}
      >
        <img
          className="recyclecan"
          src={recyclecan}
          alt="recycle can"
          style={{
            float: "right",
            position: "absolute",
            top: 0,
            left: "60%",
            width: "28%",
            height: "auto",
          }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: "600",
            color: "primary.main",
            marginBottom: "10px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "55px",
            },
          }}
        >
          Recycling
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "500",
            color: "secondary.main",
            textTransform: "capitalize",
            marginBottom: "30px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "30px",
            },
          }}
        >
          Can Be Fun And Easy
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: "500",
            color: "smalltext.main",
            marginBottom: "5px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "24px",
            },
          }}
        >
          Recycle, Compete, Win!
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: "500",
            color: "smalltext.main",
            marginBottom: "5px",
            whiteSpace: "pre-line",
            [theme.breakpoints.down("md")]: {
              fontSize: "24px",
            },
          }}
        >
          Level up your recycling game, earn rewards, and make a{"\n"}
          planet-saving impact!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            flexWrap: "wrap",
            marginTop: "6vh",
            gap: "2rem",
            alignItems: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: "5px",
              padding: "1rem 2rem",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              fontSize: { xs: "15px", sm: "2vh", md: "2.5vh", lg: "2.5vh" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Sign Up Now
          </Button>
          <Button
            onClick={onLearnMore}
            variant="outlined"
            sx={{
              borderColor: "primary.main",
              color: "primary.main",
              borderRadius: "5px",
              padding: "1rem 2rem",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              fontSize: { xs: "15px", sm: "2vh", md: "2.5vh", lg: "2.5vh" },
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

IntroPage.propTypes = {
  onLearnMore: PropTypes.func.isRequired,
};

export default IntroPage;
