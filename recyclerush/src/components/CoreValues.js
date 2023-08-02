import HandshakeIcon from "@mui/icons-material/HandshakeOutlined";
import DiversityIcon from "@mui/icons-material/Diversity3Outlined";
import LightbulbIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    smalltext: {
      other: "#000",
      secondary: "#5E5E5E",
    },
    orangeIcons: {
      main: "#C7683D",
    },
    background: {
      divider: "#F6F3E7",
      default: "#FBF9F2",
    },
  },
});

const CoreValues = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          paddingTop: { xs: "120px", sm: "120px", md: "150px", lg: "150px" },
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "background.default",
          position: "relative",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            paddingTop: "180px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              transform: "rotate(180deg)",
            }}
          >
            <path
              fill="#F6F3E7"
              d="M0,40c0,90,80-40,460-40c120,0,120,40,240,40c120,0,120-40,240-40c120,0,120,40,240,40c120,0,120-40,240-40c120,0,120,40,240,40c120,0,120-40,360-40L1440,100L0,100Z"
            ></path>
          </svg>
        </Box>
        <Box
          sx={{
            paddingTop: "auto",
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "40px",
              marginLeft: { xs: "0px", sm: "0px", md: "140px", lg: "150px" },
              marginRight: { xs: "0px", sm: "0px", md: "50px", lg: "18px" },
            }}
          >
            <HandshakeIcon
              sx={{
                color: "orangeIcons.main",
                width: "58px",
                height: "57px",
                marginBottom: "20px",
              }}
            />
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                fontSize: "25px",
                fontWeight: "500",
                color: "smalltext.other",
                letterSpacing: "-0.375px",
                marginBottom: "10px",
              }}
            >
              Empowerment
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "19px",
                fontWeight: "500",
                color: "smalltext.secondary",
                letterSpacing: "-0.285px",
              }}
            >
              RecycleRush believes in empowering
              <br />
              students like you to lead the way
              <br />
              towards a greener future.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "40px",
              marginRight: { xs: "0px", sm: "0px", md: "50px", lg: "18px" },
            }}
          >
            <DiversityIcon
              sx={{
                color: "orangeIcons.main",
                width: "58px",
                height: "57px",
                marginBottom: "20px",
              }}
            />
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                fontSize: "25px",
                fontWeight: "500",
                color: "smalltext.other",
                letterSpacing: "-0.375px",
                marginBottom: "10px",
              }}
            >
              Collaboration
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "19px",
                fontWeight: "500",
                color: "smalltext.secondary",
                letterSpacing: "-0.285px",
              }}
            >
              RecycleRush encourages working
              <br />
              together to make a difference. We
              <br />
              encourage students to join forces, share
              <br />
              ideas, and learn from one another.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "40px",
              marginRight: { xs: "0px", sm: "0px", md: "140px", lg: "150px" },
            }}
          >
            <LightbulbIcon
              sx={{
                color: "orangeIcons.main",
                width: "58px",
                height: "57px",
                marginBottom: "20px",
              }}
            />
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                fontSize: "25px",
                fontWeight: "500",
                color: "smalltext.other",
                letterSpacing: "-0.375px",
                marginBottom: "10px",
              }}
            >
              Innovation
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "19px",
                fontWeight: "500",
                color: "smalltext.secondary",
                letterSpacing: "-0.285px",
              }}
            >
              RecycleRush fosters a spirit of innovation,
              <br />
              inspiring students to think creatively and
              <br />
              develop new solutions
              <br />
              for environmental challenges.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CoreValues;
