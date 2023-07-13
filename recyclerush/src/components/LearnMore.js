import BrushIcon from '@mui/icons-material/BrushOutlined';
import LocalFloristIcon from '@mui/icons-material/LocalFloristOutlined';
import TouchIcon from '@mui/icons-material/TouchAppOutlined';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    smalltext: {
      other: '#000',
      secondary: '#5E5E5E',
    },
    blackIcons: {
      main: '#000',
    },
    background: {
        divider: '#F6F3E7',
        default: '#FBF9F2',
    },
  },
});

const LearnMore = () => {
  return (
    <ThemeProvider theme={theme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 740, bottom: 0, left: 0, right: 0, transform: 'rotate(180deg)' }}>
          <path
            fill="#f6f3e7"
            fillOpacity="1"
            d="M0,160C200,100,350,140,500,150C700,130,900,110,1080,120C1260,130,1380,170,1440,160L1440,320L0,320Z"
            ></path>
        </svg>
      <Box
        sx={{
            paddingTop: '100px',
            width: '100%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '40px',
            marginLeft: '150px',
          }}
        >
          <BrushIcon
            sx={{
              color: 'blackIcons.main',
              width: '58px',
              height: '57px',
              marginBottom: '20px',
            }}
          />
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: '25px',
              fontWeight: '500',
              color: 'smalltext.other',
              letterSpacing: '-0.375px',
              marginBottom: '10px',
            }}
          >
            Designed for Eco-Champions
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: '19px',
              fontWeight: '500',
              color: 'smalltext.secondary',
              letterSpacing: '-0.285px',
            }}
          >
            RecycleRush is specially crafted to<br/>empower students like you on your<br/>journey towards a greener future.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <LocalFloristIcon
            sx={{
              color: 'blackIcons.main',
              width: '58px',
              height: '57px',
              marginBottom: '20px',
            }}
          />
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: '25px',
              fontWeight: '500',
              color: 'smalltext.other',
              letterSpacing: '-0.375px',
              marginBottom: '10px',
            }}
          >
            Inspired by Sustainability
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: '19px',
              fontWeight: '500',
              color: 'smalltext.secondary',
              letterSpacing: '-0.285px',
            }}
          >
            RecycleRush is driven by a passion for<br/>sustainability, inspiring you to adopt<br/>eco-conscious practices.          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '40px',
            marginRight: '150px',
          }}
        >
          <TouchIcon
            sx={{
              color: 'blackIcons.main',
              width: '58px',
              height: '57px',
              marginBottom: '20px',
            }}
          />
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: '25px',
              fontWeight: '500',
              color: 'smalltext.other',
              letterSpacing: '-0.375px',
              marginBottom: '10px',
            }}
          >
           Seamless User Experience
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: '19px',
              fontWeight: '500',
              color: 'smalltext.secondary',
              letterSpacing: '-0.285px',
            }}
          >
            RecycleRush offers a seamless user<br/>experience, featuring an intuitive<br/>interface that makes recycling a breeze.
         </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LearnMore;
