import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Reset from "@mui/icons-material/RestartAlt";
import Done from '@mui/icons-material/Done';
import Sidebar from "./Sidebar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const customTheme = createTheme({
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

const drawerWidth = 240;
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

const Dashboard = () => {
  const [open, setOpen] = useState(false);
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
          height: "100vh",
          width: "100vw",
        }}
      >
        <Sidebar open={open} />

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
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "margin .3s",
            marginLeft: `${open ? drawerWidth / 8 : -drawerWidth / 1}px`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#EDE9DA",
              borderRadius: "35px",
              width: "95%",
              height: "90%",
            }}
          >
            <Box
              sx={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "28.5%",
                  width: "120%",
                  marginTop: "12%",
                  marginLeft: "40%",
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
                    marginLeft: "5%",
                    marginTop: "8%",
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
                  width: "110%",
                  marginTop: "30%",
                  marginLeft: "30%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "130%",
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
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
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
                    color="inherit"
                    onClick={handleReset}
                    sx={{
                      "&:hover": {
                        color: "#C7683D",
                      },
                      marginLeft: "10px",
                      backgroundColor: "#F6F3E7",
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
                      backgroundColor: "#F6F3E7",
                      color: "black"
                    }}
                  >
                    <Done /> 
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: "20%",
                width: "25%",
                marginLeft: "10%",
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
              }}
            >
              <Box
                sx={{
                  height: "10%",
                  width: "150%",
                  marginLeft: "15%",
                  marginTop: "35%",
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
                  height: "10%",
                  width: "150%",
                  marginLeft: "15%",
                  marginTop: "25%",
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

              {/* Drop-down list */}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
