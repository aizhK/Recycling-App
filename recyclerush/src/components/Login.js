import { Box, IconButton, Button, Typography, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import userprofile from "../assets/userprofile.png";
import secure from "../assets/secure.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login({ handleAuthPage }) {
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
                width: "250px",
                height: "250px",
              }}
            />

            <img
              src={secure}
              alt="secure"
              style={{
                width: "250px",
                height: "250px",
                marginTop: "10%",
              }}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: "background.secondary",
              width: "440px",
              height: "570px",
              flexShrink: "0",
              borderRadius: "50px",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              marginLeft: "160px",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: "45px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              Login
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
                  fontSize: "14px",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Don't Have An Account?
              </Typography>
              <IconButton
                component={Link}
                to="/signup"
                aria-label="create"
                sx={{
                  color: "text.third",
                  size: "large",
                }}
              >
                <AccountIcon />

                <Typography
                  sx={{
                    color: "text.third",
                    fontSize: "14px",
                    textAlign: "left",
                    marginTop: "2%",
                  }}
                >
                  Sign Up
                </Typography>
              </IconButton>
            </Box>
            <Box
              sx={{
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <TextField
                label="Email Address"
                required
                variant="outlined"
                sx={{
                  width: "250px",
                  marginTop: "7%",
                  backgroundColor: "background.last",
                }}
              />
              <TextField
                label="Password"
                required
                variant="outlined"
                type="password"
                autoComplete="current-password"
                sx={{
                  width: "250px",
                  marginTop: "7%",
                  backgroundColor: "background.last",
                }}
              />
              <Box
                sx={{
                  justifyContent: "flex-end",
                  display: "flex",
                  marginTop: "4%",
                  marginRight: "20%",
                }}
              >
                <Button component={Link} to="/forgotpassword" variant="text">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#626161",
                      fontWeight: "700",
                      textTransform: "none",
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Button>
              </Box>
              <Button
                sx={{
                  backgroundColor: "rgba(237, 233, 218, 0.70)",
                  width: "250px",
                  height: "55px",
                  borderRadius: "12px",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "4%",
                }}
              >
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "22px",
                    textAlign: "center",
                    margin: "auto",
                    fontWeight: "700",
                    textTransform: "none",
                  }}
                >
                  Login
                </Typography>
              </Button>
              <Box
                sx={{
                  marginTop: "8%",
                  textAlign: "center",
                }}
              >
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
}

export default Login;
