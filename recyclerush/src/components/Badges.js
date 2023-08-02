import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reuse from "../assets/reuse.png";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "51px",
    },
    h3: {
      fontSize: "40px",
    },
    body1: {
      fontSize: "20px",
    },
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
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

const Badges = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "background.default",
          position: "relative",
          marginTop: "80px",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            marginTop: { xs: "50px", sm: "50px", md: "80px", lg: "80px" },
            marginRight: { xs: "20px", sm: "150px", md: "100px", lg: "150px" },
            marginLeft: { xs: "20px", sm: "150px", md: "100px", lg: "150px" },
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "600",
              color: "primary.main",
              marginBottom: "10px",
              [theme.breakpoints.down("md")]: {
                fontSize: "30px",
              },
            }}
          >
            Earn Badges, Unlock Rewards
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "500",
              color: "secondary.main",
              textTransform: "capitalize",
              [theme.breakpoints.down("md")]: {
                fontSize: "23px",
              },
              marginBottom: "30px",
            }}
          >
            Celebrate your recycling achievements
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
                fontSize: "19px",
              },
            }}
          >
            Celebrate your recycling accomplishments with RecycleRush! As you
            embark on your sustainable journey, you'll have the chance to earn
            badges and unlock exciting rewards. Each badge represents a
            significant milestone, showcasing your dedication to making a
            positive impact on the environment.
          </Typography>
        </Box>
        <Box>
          <img
            className="reuse"
            src={reuse}
            alt="reuse"
            style={{
              float: "left",
              width: "359px",
              height: "360px",
              objectFit: "cover",
              marginTop: "80px",
              marginRight: "150px",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Badges;
