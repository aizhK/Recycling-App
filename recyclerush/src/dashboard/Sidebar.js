import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/HomeOutlined";
import Leaderboard from "@mui/icons-material/LeaderboardOutlined";
import Badge from "@mui/icons-material/MilitaryTechOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";

const drawerWidth = 240;

const Sidebar = ({ open }) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          backgroundColor: "#FBF9F2;",
          width: drawerWidth,
          boxSizing: "border-box",
          transition: ".5s",
          position: "relative",
          top: "0",
          left: open ? "0" : `-${drawerWidth}px`,
          borderRadius: "0 35px 35px 0",
        },
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          marginTop: "8%",
          marginLeft: "8%",
          textAlign: "left",
          fontWeight: "bold",
          color: "black",
        }}
      >
        RECYCLERUSH
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{
          marginTop: "18%",
          marginLeft: "8%",
          textAlign: "left",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Dashboard
      </Typography>
      <Button
        variant="contained"
        startIcon={<Home />}
        sx={{
          "&:hover": {
            backgroundColor: "#e2dfd5",
          },
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "12%",
          color: "black",
          backgroundColor: "#F6F3E7",
          width: "80%",
          height: "40px",
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        Main Page
      </Button>
      <Divider
        variant="middle"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "18%",
          width: "76%",
          height: "0px",
          backgroundColor: "#C7683D",
        }}
      />

      <Typography
        variant="p"
        component="div"
        sx={{
          marginTop: "12%",
          marginLeft: "8%",
          textAlign: "left",
          fontWeight: "bold",
          color: "black",
        }}
      >
        General
      </Typography>

      <Button
        variant="contained"
        startIcon={<Leaderboard />}
        sx={{
          "&:hover": {
            backgroundColor: "#e2dfd5",
          },
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "12%",
          color: "black",
          backgroundColor: "#F6F3E7",
          width: "80%",
          height: "40px",
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        Leaderboard
      </Button>

      <Button
        variant="contained"
        startIcon={<Badge />}
        sx={{
          "&:hover": {
            backgroundColor: "#e2dfd5",
          },
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15%",
          color: "black",
          backgroundColor: "#F6F3E7",
          width: "80%",
          height: "40px",
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        Badges
      </Button>

      <Divider
        variant="middle"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "18%",
          width: "76%",
          height: "0px",
          backgroundColor: "#C7683D",
        }}
      />

      <Button
        variant="contained"
        startIcon={<Logout />}
        sx={{
          "&:hover": {
            backgroundColor: "#e2dfd5",
          },
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "black",
          backgroundColor: "#F6F3E7",
          width: "80%",
          height: "40px",
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        Logout
      </Button>
    </Drawer>
  );
};

export default Sidebar;
