import { Box, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import recyclecan from '../assets/recycle-can.png';


const theme = createTheme({
  palette: {
    primary: {
      main: '#C7683D',
    },
    secondary: {
      main: '#182D27',
    },
    background: {
      default: '#F6F3E7',
    },
    smalltext: {
      main: '#5E5E5E',
      other: '#000',
    },
    blackIcons: {
      main: '#000',
    },
  },
});

const IntroPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          height: '633px',
          width: '80%',
          margin: 'auto',
          position: 'relative',
          marginTop: '200px',
        }}
      >
        <img
          className="recyclecan"
          src={recyclecan}
          alt="recycle can"
          style={{
            position: 'absolute',
            top: 0,
            left: '60%',
            width: '389px',
            height: '390px',
          }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: '70px',
            fontWeight: '600',
            color: 'primary.main',
            marginBottom: '10px',
          }}
        >
          Recycling
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: '60px',
            fontWeight: '500',
            color: 'secondary.main',
            textTransform: 'capitalize',
            marginBottom: '30px',
          }}
        >
          Can Be Fun And Easy
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            color: 'smalltext.main',
            marginBottom: '5px',
          }}
        >
          Recycle, Compete, Win!
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            color: 'smalltext.main',
            marginBottom: '5px',
            whiteSpace: 'pre-line',
          }}
        >
          Level up your recycling game, earn rewards, and make a{'\n'}
          planet-saving impact!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: '5px',
            width: '189px',
            height: '61px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            marginTop: '40px',
            fontSize: '18px',
            fontWeight: '500',
            textTransform: 'uppercase',
            marginRight: '40px',
          }}
        >
          Sign Up Now
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            borderRadius: '5px',
            width: '189px',
            height: '61px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            marginTop: '40px',
            fontSize: '18px',
            fontWeight: '500',
            textTransform: 'uppercase',
          }}
        >
          Learn More
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default IntroPage;
