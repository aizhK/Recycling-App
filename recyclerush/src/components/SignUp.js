import { Box, Button, Typography, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/LoginOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import userprofile from "../assets/userprofile.png";
import secure from "../assets/secure.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SignUp({ handleAuthPage }) {
  useEffect(() => {
    handleAuthPage(true);

    return () => {
      handleAuthPage(false);
    };
  }, [handleAuthPage]);

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

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "100%",
          margin: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            float: "left",
          }}
        >
          <img
            className="userprofile"
            src={userprofile}
            alt="userprofile"
            style={{
              width: "250px",
              height: "250px",
              marginLeft: "160px",
            }}
          />

          <img
            className="secure"
            src={secure}
            alt="secure"
            style={{
              width: "250px",
              height: "250px",
              marginTop: "10%",
              marginLeft: "160px",
            }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "background.secondary",
            width: { xs: "350px", sm: "400px", md: "440px", lg: "440px" },
            height: { xs: "560px", sm: "580px", md: "620px", lg: "620px" },
            flexShrink: "0",
            borderRadius: "50px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginLeft: "160px",
            marginRight: "160px",
            marginTop: { xs: "0px", sm: "45px", md: "45px", lg: "45px" },
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: { xs: "35px", sm: "43px", md: "45px", lg: "45px" },
              fontWeight: "bold",
              textAlign: "center",
              marginTop: { xs: "35px", sm: "30px", md: "50px", lg: "50px" },
            }}
          >
            Get Started
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "text.sub",
                fontSize: { xs: "15px", sm: "14px", md: "14px", lg: "14px" },
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Already Have An Account?
            </Typography>
            <Button
              component={Link}
              startIcon={<LoginIcon />}
              to="/login"
              aria-label="login"
              sx={{
                color: "text.third",
                size: { xs: "small", sm: "medium", md: "large", lg: "large" },
                marginTop: "0.2rem",
                marginLeft: "0.5%",
              }}
            >
              <Typography
                sx={{
                  color: "text.third",
                  fontSize: { xs: "15px", sm: "14px", md: "14px", lg: "14px" },
                  marginTop: "0.1rem",
                  textTransform: "none",
                }}
              >
                Login
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <TextField
              label="First Name"
              required
              variant="outlined"
              size="small"
              sx={{
                width: "230px",
                marginTop: "5%",
                backgroundColor: "background.last",
              }}
            />
            <TextField
              label="Email Address"
              required
              variant="outlined"
              size="small"
              sx={{
                width: "230px",
                marginTop: "7%",
                backgroundColor: "background.last",
              }}
            />
            <TextField
              label="Password"
              required
              type="password"
              autoComplete="current-password"
              variant="outlined"
              size="small"
              sx={{
                width: "230px",
                marginTop: "7%",
                backgroundColor: "background.last",
              }}
            />
            <TextField
              label="Confirm Password"
              required
              type="password"
              autoComplete="current-password"
              variant="outlined"
              size="small"
              sx={{
                width: "230px",
                marginTop: "7%",
                backgroundColor: "background.last",
              }}
            />
            <Button
              sx={{
                backgroundColor: "rgba(237, 233, 218, 0.70)",
                width: "230px",
                height: "50px",
                borderRadius: "12px",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "22px" },
                  textAlign: "center",
                  margin: "auto",
                  fontWeight: "700",
                  textTransform: "none",
                }}
              >
                Register
              </Typography>
            </Button>
            <Box
              sx={{
                marginTop: { xs: "4%", sm: "4%", md: "6%", lg: "6%" },
                textAlign: "center",
              }}
            >
              <Button
                component={Link}
                startIcon={<ArrowBackIcon />}
                to="/"
                sx={{
                  color: "text.sub",
                  size: { xs: "small", sm: "medium", md: "large", lg: "large" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    color: "text.sub",
                    textTransform: "none",
                  }}
                >
                  Return to Main Page
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SignUp;
