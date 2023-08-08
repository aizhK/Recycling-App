import React, { useState } from "react";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const items = [
  "Plastic Bottle (0.5L)",
  "Plastic Bottle (1L)",
  "Plastic Bag",
  "Plastic Straw",
  "Plastic Cup",
  "Plastic Cutlery",
  "Glass Bottle (0.5L)",
  "Glass Bottle (1L)",
  "Other Glassware",
  "Aluminum Can (0.25L)",
  "Aluminum Can (0.5L)",
  "Paper Cup",
  "Paper Bag",
  "Paper",
];

function getStyles(item, specItem, theme) {
  return {
    fontWeight:
      specItem.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BadgesDash = ({ handleDashboardPage }) => {
  useEffect(() => {
    handleDashboardPage(true);

    return () => {
      handleDashboardPage(false);
    };
  }, [handleDashboardPage]);

  const theme = useTheme();
  const [specItem, setItem] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(typeof value === "string" ? value.split(",") : value);
  };

  const handleReset = () => {
    setItem([]);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundColor: "#F6F3E7",
          display: "flex",
          height: "90vh",
          width: "100vw",
        }}
      >
        <Box //main container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#EDE9DA",
            borderRadius: "35px",
            width: "95%",
            margin: "auto",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          <Box //icon
            sx={{
              marginTop: "0",
            }}
          >
            <StarBorderIcon sx={{ color: "#5e5e5e", fontSize: "4rem" }} />
          </Box>

          <Box //header
            sx={{
              marginTop: "2%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                margin: "auto",
                fontSize: "3rem",
                color: "#C7683D",
                fontWeight: "bold",
              }}
            >
              Badges
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#e5e1d0",
              width: "90%",
              height: "auto",
              borderRadius: "35px",
              padding: "2%",
              maxHeight: "55vh",
              overflowY: "auto",
              marginTop: "2%",
            }}
          >
            <Grid container spacing={1}>
              {Array.from({ length: 8 }, (_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#F6F3E7",
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
                    <Typography variant="body1">Item {index + 1}</Typography>
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
