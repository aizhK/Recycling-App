import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import recycleAbout from "../assets/recycleAbout.png";

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

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          height: "auto",
          width: "100%",
          margin: "auto",
          position: "relative",
          marginTop: "80px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          alignItems: "center",
        }}
      >
        <Box>
          <img
            className="recycleAbout"
            src={recycleAbout}
            alt="recycle about"
            style={{
              float: "left",
              width: "389px",
              height: "390px",
              objectFit: "cover",
              marginRight: "20px",
              marginLeft: "30px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginRight: { xs: "20px", sm: "100px", md: "150px", lg: "150px" },
            marginLeft: { xs: "20px", sm: "100px", md: "150px", lg: "150px" },
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "600",
              color: "primary.main",
              marginBottom: "20px",
              [theme.breakpoints.down("md")]: {
                fontSize: "30px",
              },
            }}
          >
            About RecycleRush
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "500",
              color: "secondary.main",
              textTransform: "capitalize",
              marginBottom: "30px",
              [theme.breakpoints.down("md")]: {
                fontSize: "23px",
              },
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            Empowering a Sustainable Future
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
              wordBreak: "break-word",
            }}
          >
            RecycleRush is a gamified web app designed for students like you who
            are passionate about creating a sustainable future. <br />
            <br />
            Our mission is to inspire and motivate you to take action towards a
            greener world through the power of recycling. Discover a world where
            recycling becomes an exciting adventure filled with rewards,
            challenges, and friendly competition.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
