import { Box, Typography, Grid } from "@mui/material";
import Trophy from "@mui/icons-material/EmojiEvents";
import { useState, useEffect } from "react";

const Leaderboard = ({ handleDashboardPage }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    handleDashboardPage(true);

    fetch("http://localhost:3001/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });

    return () => {
      handleDashboardPage(false);
    };
  }, [handleDashboardPage]);

  console.log("LeaderboardDash rendered");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F6F3E7",
        height: "95vh",
        width: "100vw",
        transition: "all 0.2s",
      }}
    >
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#EDE9DA",
          borderRadius: "35px",
          width: "95%",
          height: "95%",
          margin: "auto",
          marginTop: "0",
          marginBottom: "5%",
          transition: "all 0.2s ease-in-out",
        }}
      >
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Trophy
              sx={{
                marginTop: { xs: "5%", sm: "3%", md: "2%", lg: "1%" },
                fontSize: {
                  xs: "3.1rem",
                  sm: "3.3rem",
                  md: "3.4rem",
                  lg: "4rem",
                },
                marginBottom: { xs: "5%", sm: "3.5%", md: "2.5%", lg: "2%" },
                color: "#5E5E5E",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#C7683D",
                marginBottom: {
                  xs: "0;5%",
                  sm: "1.2%",
                  md: "1.5%",
                  lg: "1.8%",
                },
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" },
                fontWeight: "bold",
              }}
            >
              Leaderboard
            </Typography>
            <Box
              sx={{
                width: { xs: "85%", sm: "75%", md: "65%", lg: "60%" },
                height: { xs: "28rem", sm: "27rem", md: "26rem", lg: "25rem" },
                marginTop: { xs: "10%", sm: "4%", md: "2%", lg: "0%" },
                borderRadius: "35px",
                backgroundColor: "#F6F3E7",
                paddingTop: "1.5%",
                paddingBottom: "2%",
                paddingLeft: "8%",
                paddingRight: "8%",
                overflowY: "scroll",
              }}
            >
              {leaderboardData.map((user, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #C7683D",
                    padding: "1rem 0",
                    color: "black",
                  }}
                >
                  <Typography variant="h6">{user.email}</Typography>
                  <Typography variant="h6">{user.points}</Typography>
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
