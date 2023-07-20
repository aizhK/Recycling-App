import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import friendly from '../assets/eco-friendly.png';

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
      secondary: '#FBF9F2',
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

const Leaderboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '633px',
          backgroundColor: 'background.secondary',
          position: 'relative',
          marginTop: '80px',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.secondary',
            height: '633px',
            width: '80%',
            margin: 'auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            className="friendly"
            src={friendly}
            alt="eco-friendly"
            style={{
              float: 'left',
              width: '389px',
              height: '390px',
              objectFit: 'cover',
              marginRight: '20px',
            }}
          />

          <Box
            sx={{
              marginLeft: '30px',
            }}
          >
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
              Leaderboard
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
              Become a Recycling Champion
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
              Step up to the challenge and showcase your recycling prowess on the RecycleRush leaderboards! Compete with fellow students, earn bragging rights, and inspire others to join the recycling movement. As you climb the leaderboards, you'll establish yourself as a true recycling champion.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: -60,
            left: 0,
            right: 0,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              transform: 'rotate(180deg)',
            }}
          >
            <path
              fill="#F6F3E7"
              d="M0,40c0,90,80-40,460-40c120,0,120,40,240,40c120,0,120-40,240-40c120,0,120,40,240,40c120,0,120-40,240-40c120,0,120,40,240,40c120,0,120-40,360-40L1440,100L0,100Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Leaderboard;
