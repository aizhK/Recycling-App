import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#F6F3E7",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Sidebar open={open} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          sx={{
            position: "fixed",
            marginLeft: "0.5%",
            top: "2%",
            left: `${open ? drawerWidth : 0}px`,
            transition: "left .3s",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#EDE9DA",
            borderRadius: "35px",
            width: "95%",
            height: "90%",
            transition: "margin .3s",
            marginLeft: `${open ? drawerWidth / 8 : -drawerWidth / 1}px`,
          }}
        >
          <Box
            sx={{
              height: "20%",
              width: "25%",
              marginLeft: "5%",
              marginTop: "3%",
              borderRadius: "20px",
              backgroundColor: "#F6F3E7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "3%",
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "15px",
                color: "black",
              }}
            >
              Your Total Amount of Points:
            </Typography>
          </Box>
          <Box
            sx={{
              height: "20%",
              width: "25%",
              marginLeft: "3%",
              marginTop: "3%",
              borderRadius: "20px",
              backgroundColor: "#F6F3E7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "3%",
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "15px",
                color: "black",
              }}
            >
              Your Position on the Leaderboard:
            </Typography>
          </Box>
          <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}>
            <Box
                sx={{
                height: "12%",
                width: "150%",
                marginLeft: "15%",
                marginTop: "22%",
                borderRadius: "20px",
                backgroundColor: "#F6F3E7",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "2%",
                }}
            >
                <Typography
                variant="body1"
                component="div"
                sx={{
                    marginLeft: "3%",
                    marginTop: "3%",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "black",
                }}
                >
                Amount of Participants:
                </Typography>
            </Box>
            <Box
                sx={{
                height: "12%",
                width: "150%",
                marginLeft: "15%",
                marginTop: "15%",
                borderRadius: "20px",
                backgroundColor: "#F6F3E7",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "2%",
                }}
            >
                <Typography
                variant="body1"
                component="div"
                sx={{
                    marginLeft: "3%",
                    marginTop: "3%",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "black",
                }}
                >
                Amount of Participants:
                </Typography>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
