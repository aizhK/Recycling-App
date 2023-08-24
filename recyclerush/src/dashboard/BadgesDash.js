import React from "react";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

const customTheme = createTheme({
  typography: {
    h3: {
      fontSize: "19px",
    },
    body1: {
      fontSize: "16px",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C7683D",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C7683D",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#C7683D",
          },
        },
      },
    },
  },
});

const images = [
  { url: "/badges/badge.png", text: "Recycle Rookie" },
  { url: "/badges/eco.png", text: "Eco Explorer" },
  { url: "/badges/plant.png", text: "Sustainable Star" },
  { url: "/badges/detergent.png", text: "Plastic Champion" },
  { url: "/badges/paper.png", text: "Paper Wizard" },
  { url: "/badges/can.png", text: "Can Crusher" },
  { url: "/badges/glass.png", text: "Glass Guru" },
  { url: "/badges/love.png", text: "Planet Saver" },
];

const BadgesDash = ({ handleDashboardPage }) => {
  const [badges, setBadges] = useState({});
  useEffect(() => {
    handleDashboardPage(true);
    const userId = auth.currentUser?.uid;
    fetch(`http://localhost:3001/badges/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setBadges(data.badges);
      })
      .catch((error) => {
        console.error("Error fetching badges:", error);
      });

    return () => {
      handleDashboardPage(false);
    };
  }, [handleDashboardPage]);

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundColor: "#F6F3E7",
          display: "flex",
          height: "95vh",
          width: "100vw",
          transition: "all 0.2s",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#EDE9DA",
            borderRadius: "35px",
            width: "95%",
            height: "95%",
            margin: "auto",
            marginTop: "0",
            marginBottom: "0",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <Box
            sx={{
              marginTop: { xs: "12%", sm: "8%", md: "5%", lg: "2%" },
            }}
          >
            <StarBorderIcon
              sx={{
                color: "#5e5e5e",
                fontSize: { xs: "3rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
              }}
            />
          </Box>

          <Box
            sx={{
              marginTop: { xs: "4%", sm: "3%", md: "2%", lg: "2%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                margin: "auto",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" },
                color: "#C7683D",
                fontWeight: "bold",
              }}
            >
              Badges
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F6F3E7",
              width: { xs: "80%", sm: "80%", md: "90%", lg: "90%" },
              height: { xs: "30rem", sm: "30rem", md: "28rem", lg: "25rem" },
              borderRadius: "35px",
              padding: "2%",
              maxHeight: "55vh",
              overflowY: "auto",
              marginTop: { xs: "10%", sm: "5%", md: "4%", lg: "2%" },
            }}
          >
            <Grid container spacing={1}>
              {images.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "10rem",
                      height: "8rem",
                      perspective: "1000px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "10%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.5s",
                        "&:hover": {
                          transform: "rotateY(180deg)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          backgroundColor: "#ede9da",
                          borderRadius: "8px",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: badges && badges[item.text] ? 1 : 0.3,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: {
                              xs: "0.6rem",
                              sm: "0.6rem",
                              md: "0.8rem",
                              lg: "0.8rem",
                            },
                            marginTop: "8%",
                            marginBottom: "5%",
                            fontWeight: "600",
                            color: "#C7683D",
                            padding: "0 1rem",
                          }}
                        >
                          {item.text}
                        </Typography>
                        <img
                          src={item.url}
                          alt={`Item ${index + 1}`}
                          style={{
                            width: "75%",
                            height: "90%",
                            marginBottom: "1rem",
                            padding: "0 1.5rem",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          backgroundColor: "#ede9da",
                          borderRadius: "8px",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: {
                              xs: "0.6rem",
                              sm: "0.6rem",
                              md: "0.8rem",
                              lg: "0.8rem",
                            },
                            marginTop: "8%",
                            marginBottom: "5%",
                            fontWeight: "600",
                            color: "#C7683D",
                            padding: "0 1rem",
                          }}
                        >
                          {`To achieve the ${item.text} badge, you need to recycle ${item.text === "Recycle Rookie" ? "25 items" 
                          : item.text === "Eco Explorer" ? "75 items"
                          : item.text === "Sustainable Star" ? "120 items"
                          : item.text === "Plastic Champion" ? "100 plastic items"
                          : item.text === "Paper Wizard" ? "120 paper items"
                          : item.text === "Can Crusher" ? "75 metal items"
                          : item.text === "Glass Guru" ? "75 glass items"
                          : item.text === "Planet Saver" ? "400 items"
                          : "something else"}.`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BadgesDash;
