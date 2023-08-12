import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import ForgotPasswordImg from "../assets/forgot-password.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword({ handleAuthPage }) {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleForgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSent(true); // Set emailSent to true
      })
      .catch((error) => {
        console.error("Password reset failed:", error);
        // Optionally, show an error message to the user
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
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "500px", // Set a maximum width for smaller screens
            flexShrink: "0",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={ForgotPasswordImg}
            alt="Forgot Password"
            style={{
              marginTop: "5%",
              width: "70px",
              height: "70px",
            }}
          />

          <Typography
            sx={{
              marginTop: "3%",
              color: "text.third",
              fontSize: { xs: "28px", sm: "30px", md: "32px", lg: "32px" },
              textTransform: "none",
              fontWeight: "600",
            }}
          >
            Forgot Your Password?
          </Typography>
          {emailSent ? (
            <Typography
              sx={{
                marginTop: "3%",
                fontSize: { xs: "15px", sm: "15px", md: "16px", lg: "16px" },
                textAlign: "center",
                color: "text.sub",
              }}
            >
              A password reset email has been sent to your email address. Please
              check your inbox.
            </Typography>
          ) : (
            <>
              <Typography
                sx={{
                  marginTop: "2%",
                  fontSize: { xs: "15px", sm: "15px", md: "16px", lg: "16px" },
                  textAlign: "center",
                  color: "text.sub",
                }}
              >
                Please enter the email address associated with your account and
                we will email you a link to reset your password.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5%",
                }}
              >
                <TextField
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    width: "100%", // Adjust the width to fit the container
                    maxWidth: "300px", // Set a maximum width for smaller screens
                    backgroundColor: "background.secondary",
                  }}
                />
              </Box>
              <Button
                onClick={() => handleForgotPassword(email)}
                variant="outlined"
                sx={{
                  borderColor: "text.third",
                  color: "text.main",
                  borderRadius: "5px",
                  height: "48px", // Use rem units for better responsiveness
                  width: "100%", // Adjust the width to fit the container
                  maxWidth: "300px", // Set a maximum width for smaller screens
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  marginTop: { xs: "34px", sm: "36px", md: "40px", lg: "40px" },
                  fontSize: { xs: "15px", sm: "15px", md: "16px", lg: "16px" },
                  textTransform: "none",
                }}
              >
                Reset Password
              </Button>
            </>
          )}
          <Box
            sx={{
              marginTop: { xs: "40px", sm: "46px", md: "50px", lg: "50px" },
            }}
          >
            <IconButton
              component={Link}
              to="/login"
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
                Return to Login
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ForgotPassword;
