import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import recycleAbout from '../assets/recycleAbout.png';

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


const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          height: '633px',
          width: '80%',
          margin: 'auto',
          position: 'relative',
          marginTop: '80px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          className="recycleAbout"
          src={recycleAbout}
          alt="recycle about"
          style={{
            float: 'left',
            width: '389px',
            height: '390px',
            objectFit: 'cover',
            marginRight: '20px',
          }}
        />

        <Box>
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
            About RecycleRush
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
            Empowering a Sustainable Future
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
            RecycleRush is a gamified web app designed for students like you who are passionate about creating a sustainable future. Our mission is to inspire and motivate you to take action towards a greener world through the power of recycling. Discover a world where recycling becomes an exciting adventure filled with rewards, challenges, and friendly competition.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
