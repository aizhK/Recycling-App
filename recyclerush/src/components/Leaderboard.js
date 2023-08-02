import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import friendly from "../assets/eco-friendly.png";

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
      secondary: "#FBF9F2",
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

const Leaderboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          paddingTop: { xs: "120px", sm: "120px", md: "150px", lg: "210px" },
          width: "100%",
          height: "auto",
          backgroundColor: "background.secondary",
          position: "relative",
          marginTop: "80px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            margin: "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: -1,
              bottom: 0,
              left: 0,
              right: 0,
              transform: "rotate(180deg)",
            }}
          >
            <path
              fill="#F6F3E7"
              fillOpacity="1"
              d="M0,40c0,90,80-40,460-40c120,0,120,40,240,40c120,0,120-40,240-40c120,0,120,40,240,40c120,0,120-40,240-40c120,0,120,40,240,40c120,0,120-40,360-40L1440,100L0,100Z"
            ></path>
          </svg>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            position: "relative",
            marginTop: "80px",
            margin: "auto",
            display: "flex",
          }}
        >
          <Box>
            <img
              className="friendly"
              src={friendly}
              alt="eco-friendly"
              style={{
                float: "left",
                width: "389px",
                height: "390px",
                objectFit: "cover",
                marginLeft: "150px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginRight: {
                xs: "20px",
                sm: "100px",
                md: "150px",
                lg: "150px",
              },
              marginLeft: { xs: "20px", sm: "100px", md: "150px", lg: "150px" },
              marginBottom: "50px",
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
              Leaderboard
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
              }}
            >
              Become a Recycling Champion
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
              Step up to the challenge and showcase your recycling prowess on
              the RecycleRush leaderboards! Compete with fellow students, earn
              bragging rights, and inspire others to join the recycling
              movement. As you climb the leaderboards, you'll establish yourself
              as a true recycling champion.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Leaderboard;
