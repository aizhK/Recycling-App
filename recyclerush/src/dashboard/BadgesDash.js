import React from "react";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

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
  useEffect(() => {
    handleDashboardPage(true);

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
        <Box //main container
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
          <Box //icon
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

          <Box //header
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
                      backgroundColor: "#ede9da",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "12%",
                      padding: "16px",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      height: "8rem",
                      width: "10rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "2%",
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
                        marginBottom: "6rem",
                        fontWeight: "600",
                        color: "#C7683D",
                        textAlign: "center",
                        position: "absolute",
                      }}
                    >
                      {item.text}
                    </Typography>
                    <img
                      src={item.url}
                      alt={`Item ${index + 1}`}
                      style={{ width: "75%", height: "90%", marginTop: "15%" }}
                    />
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
