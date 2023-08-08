import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Reset from "@mui/icons-material/RestartAlt";
import Done from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useEffect } from "react";
import { Hidden } from "@mui/material";

const customTheme = createTheme({
  typography: {
    h3: {
      fontSize: "19px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "15px",
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

const Dashboard = ({ handleDashboardPage }) => {
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
          transition: "all 0.2s",
        }}
      >
        <Box //main container
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
            transition: "all 0.2s ease-in-out",
          }}
        >
          <Box //first row
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop: "5%",
              height: "25%",
            }}
          >
            <Box
              sx={{
                //points box
                borderRadius: "10px",
                backgroundColor: "#F6F3E7",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                width: { xs: "50%", sm: "50%", md: "30%", lg: "30%" },
                height: "100%",
                marginLeft: "2%",
                marginRight: "2%",
                paddingTop: "1.1%",
                paddingLeft: "1.3%",
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Your total amount of points:
              </Typography>
            </Box>
            <Box
              sx={{
                //leaderboard box
                borderRadius: "10px",
                backgroundColor: "#F6F3E7",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                width: { xs: "50%", sm: "50%", md: "30%", lg: "30%" },
                height: "100%",
                marginLeft: "2%",
                marginRight: "2%",
                paddingTop: "1.1%",
                paddingLeft: "1.3%",
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Your position on the leaderboard:
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box
                sx={{
                  //participants and highest points box
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "30%",
                  marginLeft: "2%",
                  marginRight: "2%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    //participants box
                    borderRadius: "10px",
                    backgroundColor: "#F6F3E7",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    height: "50%",
                    marginBottom: "2%",
                    marginLeft: "2%",
                    marginRight: "2%",
                    padding: "3%",
                  }}
                >
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Amount of participants:
                  </Typography>
                </Box>
                <Box
                  sx={{
                    //highest points box
                    borderRadius: "10px",
                    backgroundColor: "#F6F3E7",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    height: "50%",
                    marginTop: "2%",
                    marginLeft: "2%",
                    marginRight: "2%",
                    padding: "3%",
                  }}
                >
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Highest amount of points scored:
                  </Typography>
                </Box>
              </Box>
            </Hidden>
          </Box>
          <Box
            sx={{
              //second row
              display: "flex",
              marginTop: { xs: "10%", sm: "5%", md: "5%", lg: "5%" },
              marginLeft: "2%",
              width: { xs: "90%", sm: "90%", md: "55%", lg: "45%" },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
                fontSize: "1rem",
              }}
            >
              From the dropdown list select the item(s) you've recycled and
              unlock your eco-champion status:
            </Typography>
          </Box>
          <Box //third row
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop: { xs: "5%", sm: "3.5%", md: "2%", lg: "2%" },
              marginLeft: "2%",
            }}
          >
            <Box
              sx={{
                //dropdown list box
                display: "flex",
                flexDirection: "row",
                width: { xs: "90%", sm: "90%", md: "45%", lg: "45%" },
              }}
            >
              <FormControl
                sx={{
                  width: "100%",
                  backgroundColor: "#F6F3E7",
                }}
                variant="outlined"
              >
                <InputLabel
                  id="demo-multiple-chip-label"
                  sx={{
                    paddingLeft: "0.2rem",
                    paddingRight: "0.5rem",
                  }}
                >
                  Select Recycled Item
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={specItem}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Select Recycled Item"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {items.map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                      style={getStyles(item, specItem, theme)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconButton
                onClick={handleReset}
                sx={{
                  "&:hover": {
                    color: "#C7683D",
                  },
                  marginLeft: "10px",
                  marginTop: "10px",
                  backgroundColor: "#F6F3E7",
                  color: "black",
                  width: "40px", // Same width and height
                  height: "40px",
                  borderRadius: "50%", // Circular border radius
                }}
              >
                <Reset />
              </IconButton>
              <IconButton
                variant="text"
                sx={{
                  "&:hover": {
                    color: "#C7683D",
                  },
                  marginLeft: "10px",
                  marginTop: "10px",
                  backgroundColor: "#F6F3E7",
                  color: "black",
                  width: "40px", // Same width and height
                  height: "40px",
                  borderRadius: "50%", // Circular border radius
                }}
              >
                <Done />
              </IconButton>
            </Box>
            <Box //empty box
            ></Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
