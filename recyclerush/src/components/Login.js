import { Box, Button, Typography, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import userprofile from "../assets/userprofile.png";
import secure from "../assets/secure.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ handleAuthPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (email.trim() === "" || password.trim() === "") {
      console.error("Email and password are required");
      setError("Email and password are required");
      // Optionally, show an error message to the user
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      console.error("Invalid email format");
      setError("Invalid email format"); // Set the error message
      // Optionally, show an error message to the user
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard"); // Redirect to dashboard
      })
      .catch((error) => {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          console.error("Invalid email or password");
          setError("Invalid email or password"); // Set the error message
        } else {
          console.error("Login failed:", error);
          setError("Login failed"); // Handle other errors
        }
      });
  };

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
            height: { xs: "520px", sm: "520px", md: "570px", lg: "570px" },
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
                fontSize: { xs: "15px", sm: "14px", md: "14px", lg: "14px" },
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Don't Have An Account?
            </Typography>
            <Button
              startIcon={<AccountIcon />}
              component={Link}
              to="/signup"
              aria-label="create"
              sx={{
                color: "text.third",
                size: { xs: "small", sm: "medium", md: "large", lg: "large" },
                marginTop: "0.2rem",
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
                Sign Up
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <form onSubmit={handleLogin}>
              <TextField
                label="Email Address"
                required
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  marginRight: { xs: "13%", sm: "17.5%", md: "20%", lg: "20%" },
                }}
              >
                <Button component={Link} to="/forgotpassword" variant="text">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                      },
                      color: "#626161",
                      fontWeight: "700",
                      textTransform: "none",
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Button>
              </Box>
              {error && (
                <Typography
                  sx={{
                    color: "red", // Set the text color to red
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                    },
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
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
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "22px",
                    },
                    textAlign: "center",
                    margin: "auto",
                    fontWeight: "700",
                    textTransform: "none",
                  }}
                >
                  Login
                </Typography>
              </Button>
            </form>
            <Box
              sx={{
                marginTop: { xs: "4%", sm: "7%", md: "8%", lg: "8%" },
                textAlign: "center",
              }}
            >
              <Button
                component={Link}
                startIcon={<ArrowBackIcon />}
                to="/"
                sx={{
                  color: "text.sub",
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

export default Login;
