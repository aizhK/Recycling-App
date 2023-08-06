import { Box, Typography, Grid } from "@mui/material";
import Trophy from "@mui/icons-material/EmojiEvents";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const Leaderboard = () => {
  console.log('LeaderboardDash rendered');
  const [open, setOpen] = useState(false);
  // Dummy data
  const leaderboardData = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F6F3E7",
        height: "100vh",
        width: "100vw",
        transition: "all 0.3s",
      }}
    >
      <Sidebar open={open} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginLeft: `${open ? drawerWidth / 8 : -drawerWidth / 1}px`,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          sx={{
            position: "absolute",
            top: "2%",
            left: `${open ?  "-0.5rem" : "0.8rem"}`,
            transition: "left .3s ease-in-out",
            color: "black",
            zIndex: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={11}
            sm={11}
            md={11.2}
            lg={11.4}
            sx={{
              marginTop: "2%",
              borderRadius: "35px",
              backgroundColor: "#EDE9DA",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: { xs: "5%", other: "2%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Trophy
              sx={{
                marginTop: "-2%",
                fontSize: { xs: "4rem", other: "3rem" },
                marginBottom: "2%",
                color: "#5E5E5E",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#C7683D",
                marginBottom: "2%",
                fontWeight: "bold",
              }}
            >
              Leaderboard
            </Typography>
            <Box
              sx={{
                width: "60%",
                height: "25rem",
                borderRadius: "35px",
                backgroundColor: "#F6F3E7",
                paddingTop: "1.5%",
                paddingBottom: "2%",
                paddingLeft: "8%",
                paddingRight: "8%",
                overflowY: "scroll",
              }}
            >
              {leaderboardData.map((name, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #C7683D",
                    padding: "1rem 0",
                    color: "black"
                  }}
                >
                  <Typography variant="h6">{name}</Typography>
                  <Typography variant="h6">{index + 1}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Leaderboard;
