import { Box, IconButton, Button, Typography, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/LoginOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import userprofile from "../assets/userprofile.png";
import secure from "../assets/secure.png";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    background: {
      main: "#F6F3E7",
      secondary: "#FBF9F2",
      last: "#EDE9DA",
    },
    text: {
      main: "#000",
      sub: "#626161",
      third: "#C7683D",
    },
  },
});

const SignUp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.main",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "7%",
            marginBottom: "7%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <img
              src={userprofile}
              alt="userprofile"
              style={{
                width: "330px",
                height: "330px",
                marginTop: "50px",
              }}
            />

            <img
              src={secure}
              alt="secure"
              style={{
                width: "310px",
                height: "310px",
                marginTop: "120px",
              }}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: "background.secondary",
              width: "585px",
              height: "809px",
              flexShrink: "0",
              borderRadius: "50px",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              marginLeft: "160px",
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "55px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              Get Started
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  color: "text.sub",
                  fontSize: "16px",
                  textAlign: "left",
                  marginTop: "10px",
                  marginLeft: "25%",
                }}
              >
                Already Have An Account?
              </Typography>
              <IconButton
                component={Link}
                to="/login"
                aria-label="login"
                sx={{
                  color: "text.third",
                  size: "large",
                }}
              >
                <LoginIcon />

                <Typography
                  sx={{
                    color: "text.third",
                    fontSize: "16px",
                    textAlign: "left",
                    marginTop: "4%",
                    marginLeft: "13%",
                  }}
                >
                  Login
                </Typography>
              </IconButton>
            </Box>
            <Box>
              <TextField
                label="First Name"
                variant="outlined"
                sx={{
                  width: "300px",
                  marginLeft: "25%",
                  marginTop: "10%",
                  backgroundColor: "background.last",
                }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                sx={{
                  width: "300px",
                  marginLeft: "25%",
                  marginTop: "7%",
                  backgroundColor: "background.last",
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                sx={{
                  width: "300px",
                  marginLeft: "25%",
                  marginTop: "7%",
                  backgroundColor: "background.last",
                }}
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                sx={{
                  width: "300px",
                  marginLeft: "25%",
                  marginTop: "7%",
                  backgroundColor: "background.last",
                }}
              />
              <Button
                sx={{
                  backgroundColor: "rgba(237, 233, 218, 0.70)",
                  width: "300px",
                  height: "66px",
                  borderRadius: "25px",
                  marginLeft: "25%",
                  marginTop: "10%",
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "24px",
                    textAlign: "center",
                    margin: "auto",
                    fontWeight: "700",
                    textTransform: "none",
                  }}
                >
                  Register
                </Typography>
              </Button>
              <Box sx={{ marginTop: "50px", textAlign: 'center' }}>
                <IconButton
                  component={Link}
                  to="/"
                  sx={{
                    color: "text.sub",
                  }}
                >
                  <ArrowBackIcon />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "text.sub",
                    }}
                  >
                    Return to Main Page
                  </Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
