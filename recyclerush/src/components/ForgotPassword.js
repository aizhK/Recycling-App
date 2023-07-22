import { Box, Button, Typography, TextField, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import ForgotPasswordImg from '../assets/forgot-password.png';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    background: {
      main: '#F6F3E7',
      secondary: '#FBF9F2',
      last: '#EDE9DA',
    },
    text: {
      main: '#000',
      sub: '#626161',
      third: '#C7683D',
    },
  },
});

const ForgotPassword = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.main',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: '500px', // Set a maximum width for smaller screens
            flexShrink: '0',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <img
            src={ForgotPasswordImg}
            alt="Forgot Password"
            style={{
              marginTop: '5%',
              width: '70px',
              height: '70px',
            }}
          />

          <Typography
            sx={{
              marginTop: '3%',
              color: 'text.third',
              fontSize: '32px',
              textTransform: 'none',
              fontWeight: '600',
            }}
          >
            Forgot Your Password?
          </Typography>
          <Typography
            sx={{
              marginTop: '2%',
              fontSize: '16px',
              textAlign: 'center',
              color: 'text.sub',
            }}
          >
            Please enter the email address associated with your account and we will email you a link to reset your
            password.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
            }}
          >
            <TextField
              label="Email Address"
              variant="outlined"
              sx={{
                width: '100%', // Adjust the width to fit the container
                maxWidth: '300px', // Set a maximum width for smaller screens
                backgroundColor: 'background.secondary',
              }}
            />
          </Box>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'text.third',
              color: 'text.main',
              borderRadius: '5px',
              height: '48px', // Use rem units for better responsiveness
              width: '100%', // Adjust the width to fit the container
              maxWidth: '300px', // Set a maximum width for smaller screens
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              marginTop: '40px',
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            Reset Password
          </Button>
          <Box sx={{ marginTop: '50px' }}>
            <IconButton component={Link} to="/login" 
              sx={{
                color: 'text.sub',
              }}
            >
              <ArrowBackIcon />
              <Typography
                sx={{
                  fontSize: '16px',
                  color: 'text.sub',
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
};

export default ForgotPassword;
