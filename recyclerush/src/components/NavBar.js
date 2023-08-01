import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Close from '@mui/icons-material/Close';
import Info from '@mui/icons-material/InfoOutlined';
import Badge from '@mui/icons-material/MilitaryTechOutlined';
import Leaderboard from '@mui/icons-material/LeaderboardOutlined';
import Login from '@mui/icons-material/LoginOutlined';

function NavBar({ onAbout, onBadges, onLeaderboard, setIsDrawerOpen }) {

  const [isOpen, setIsOpen] = useState(false);
  
  const isMobile = useMediaQuery('(max-width:900px)');

  const buttonStyle = {
    backgroundColor: "#transparent",
    color: "inherit",
    borderRadius: "6px",
    width: "155px",
    height: "45px",
    flexShrink: 0,
    marginTop: "18px",
  };

  const itemsList = [
    { text: "About", onClick: onAbout, buttonStyle: buttonStyle, icon: <Box mr={1}><Info /></Box> },
    { text: "Badges", onClick: onBadges, buttonStyle: buttonStyle, icon: <Box mr={1}><Badge /></Box>},
    { text: "Leaderboard", onClick: onLeaderboard, buttonStyle: buttonStyle, icon: <Box mr={1}><Leaderboard /></Box> },
    { 
      text: "Sign In", 
      onClick: () => {}, 
      buttonStyle: { 
        backgroundColor: "#transparent",
        color: "inherit",
        borderRadius: "6px",
        width: "155px",
        height: "45px",
        flexShrink: 0,
        marginTop: "18px",
      }, 
      link: "/login",
      icon: <Box mr={1}><Login /></Box>,
    },
  ];


  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: "inherit",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F0EBD9",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontWeight: "bold",
              color: "black",
              paddingLeft: "50px",
            }}
          >
            RECYCLERUSH
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDrawerOpen(!isOpen);
                }}
                sx={{
                  color: '#000',
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='bottom'
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                  setIsDrawerOpen(false);
                }}
                PaperProps={{
                  style: { borderRadius: "25px 25px 0 0" },
                }}
              >
              <Box sx={{
                backgroundColor: "#F0EBD9",
                padding: '0px',
                margin: '0px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <List>
                  <Grid container justifyContent="center" alignItems="center">
                    {itemsList.map((item, index) => {
                      const { text, onClick, buttonStyle, link, icon } = item;
                      return (
                        <Grid item xs={5} key={index} sx={{justifyContent: 'center', alignItems: 'center' }}>
                          <ListItem button onClick={onClick} component={link ? Link : 'div'} to={link} sx={buttonStyle}>
                            {icon && icon}
                            <ListItemText 
                              primary={text}
                              primaryTypographyProps={{
                                style: 
                                { fontWeight: "bold", 
                                  fontSize: "18px",
                              }}}
                            />
                          </ListItem>
                        </Grid>
                      );
                    })}
                  </Grid>
                </List>
                <IconButton 
                  onClick={() => {
                    setIsOpen(false);
                    setIsDrawerOpen(false);
                  }} 
                  sx={{
                    marginRight: '6%', 
                    position: 'absolute', 
                    right: 10,
                  }}
                >
                  <Close />
                </IconButton>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
            <Button
              variant="text"
              color="inherit"
              onClick={onAbout}
              sx={{
                color: "#062905",
                textAlign: "center",
                fontSize: "18px",
                marginRight: "40px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
                textTransform: "none",
              }}
            >
              About
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={onBadges}
              sx={{
                color: "#062905",
                textAlign: "center",
                fontSize: "18px",
                marginRight: "40px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
                textTransform: "none",
              }}
            >
              Badges
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={onLeaderboard}
              sx={{
                color: "#062905",
                textAlign: "center",
                fontSize: "18px",
                marginRight: "40px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
                textTransform: "none",
              }}
            >
              Leaderboard
            </Button>
            <Button
              component={Link}
              to="/login"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#a7c7c2",
                },
                backgroundColor: "#7da49d",
                color: "white",
                borderRadius: "6px",
                width: "155px",
                height: "45px",
                flexShrink: 0,
                marginRight: "50px",
              }}
            >
              SIGN IN
            </Button>
          </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  onAbout: PropTypes.func.isRequired,
  onBadges: PropTypes.func.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
};

export default NavBar;
