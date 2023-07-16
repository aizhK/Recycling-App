import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import reuse from '../assets/reuse.png';

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

const Badges = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '633px',
          backgroundColor: 'background.default',
          position: 'relative',
          marginTop: '150px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '80%',
            margin: 'auto',
            position: 'relative',
            zIndex: 1,
            paddingTop: '90px',
          }}
        >
          <img
            className="reuse"
            src={reuse}
            alt="reuse"
            style={{
              float: 'right',
              marginLeft: '20px',
              marginBottom: '20px',
              width: '359px',
              height: '360px',
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
            Earn Badges, Unlock Rewards
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
            Celebrate your recycling achievements
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
            Celebrate your recycling accomplishments with RecycleRush! As you embark on your sustainable journey, you'll have the chance to earn badges and unlock exciting rewards. Each badge represents a significant milestone, showcasing your dedication to making a positive impact on the environment.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Badges;
