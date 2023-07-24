import { useEffect, useState } from 'react';
import { Box, Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 'tooltip',
      }}
    >
      {isVisible && 
        <Fab onClick={scrollToTop}
            sx={{
                backgroundColor: '#C7683D',
                color: '#F6F3E7',
                '&:hover': {
                    backgroundColor: '#f58654',
                },
                }}
        >
          <ArrowUpwardIcon />
        </Fab>
      }
    </Box>
  );
}

export default ScrollTop;
