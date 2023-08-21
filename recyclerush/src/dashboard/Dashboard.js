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
import { auth } from "../firebase";

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
  { name: "Plastic Bottle (0.5L)", identifier: "plasticBottle" },
  { name: "Plastic Bottle (1L)", identifier: "plasticBottle" },
  { name: "Plastic Bag", identifier: "plasticBag" },
  { name: "Plastic Straw", identifier: "plasticStraw" },
  { name: "Plastic Cup", identifier: "plasticCup" },
  { name: "Plastic Cutlery", identifier: "plasticCutlery" },
  { name: "Glass Bottle (0.5L)", identifier: "glassBottle" },
  { name: "Glass Bottle (1L)", identifier: "glassBottle" },
  { name: "Other Glassware", identifier: "otherGlassware" },
  { name: "Aluminum Can (0.25L)", identifier: "aluminumCan" },
  { name: "Aluminum Can (0.5L)", identifier: "aluminumCan" },
  { name: "Paper Cup", identifier: "paperCup" },
  { name: "Paper Bag", identifier: "paperBag" },
  { name: "Paper", identifier: "paper" },
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

    const userId = auth.currentUser?.uid;

    if (userId) {
      fetch(`http://localhost:3001/points/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserPoints(data.points);
        })
        .catch((error) => {
          console.error("Error fetching user points:", error);
        });
      fetch(`http://localhost:3001/leaderboard/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserRank(data.rank);
        })
        .catch((error) => {
          console.error("Error fetching user rank:", error);
        });
      fetch("http://localhost:3001/participants")
        .then((response) => response.json())
        .then((data) => {
          setTotalParticipants(data.totalParticipants);
        })
        .catch((error) => {
          console.error("Error fetching total participants:", error);
        });
      fetch("http://localhost:3001/highest-points")
        .then((response) => response.json())
        .then((data) => {
          setHighestPoints(data.highestPoints);
        })
        .catch((error) => {
          console.error("Error fetching highest points:", error);
        });
    }

    return () => {
      handleDashboardPage(false);
    };
  }, [handleDashboardPage]);

  const theme = useTheme();
  const [specItem, setItem] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const [userRank, setUserRank] = useState(null);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [highestPoints, setHighestPoints] = useState(0);

  const handleRecycle = (item) => {
    const userId = auth.currentUser?.uid;
    fetch(`http://localhost:3001/recycle/${userId}/${item}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserPoints(data.points); 
      });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(typeof value === "string" ? value.split(",") : value);
  };

  const handleDoneClick = () => {
    specItem.forEach((item) => {
      const selectedItem = items.find((i) => i.name === item);
      if (selectedItem) {
        handleRecycle(selectedItem.identifier);
      }
    });

    setItem([]);
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
        <Box
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
          <Box
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
                borderRadius: "10px",
                backgroundColor: "#F6F3E7",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: { xs: "5%", sm: "0%", md: "0%", lg: "0%" },
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
                  fontSize: { xs: "13px", sm: "13px", md: "14px", lg: "16px" },
                  marginTop: { xs: "5%", sm: "5%", md: "5%", lg: "2%" },
                  marginLeft: { xs: "5%", sm: "5%", md: "5%", lg: "2%" },
                }}
              >
                Your total amount of points: 
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "#C7683D",
                  fontSize: { xs: "25px", sm: "25px", md: "28px", lg: "30px" },
                  marginTop: { xs: "8%", sm: "8%", md: "8%", lg: "7%" },
                  marginLeft: { xs: "5%", sm: "5%", md: "5%", lg: "2%" },
                }}
              >
                {userPoints}
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "#F6F3E7",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                width: { xs: "50%", sm: "50%", md: "30%", lg: "30%" },
                marginTop: { xs: "5%", sm: "0%", md: "0%", lg: "0%" },
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
                  fontSize: { xs: "13px", sm: "13px", md: "14px", lg: "16px" },
                  marginTop: { xs: "5%", sm: "5%", md: "5%", lg: "2%" },
                  marginLeft: { xs: "5%", sm: "5%", md: "5%", lg: "2%" },
                }}
              >
                Your position on the leaderboard:
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "#C7683D",
                  fontSize: { xs: "25px", sm: "25px", md: "28px", lg: "30px" },
                  marginTop: { xs: "8%", sm: "8%", md: "8%", lg: "7%" },
                  marginLeft: { xs: "5%", sm: "5%", md: "5%", lg: "2%" },
                }}
              >
                {userRank}
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box
                sx={{
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
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#C7683D",
                      fontSize: { md: "18px", lg: "18px" },
                    }}
                  >
                    {totalParticipants}
                  </Typography>
                </Box>
                <Box
                  sx={{
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
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#C7683D",
                      fontSize: { md: "18px", lg: "18px" },
                    }}
                  >
                    {highestPoints}
                  </Typography>
                </Box>
              </Box>
            </Hidden>
          </Box>
          <Box
            sx={{
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
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.9rem",
                  md: "1rem",
                  lg: "1rem",
                },
                marginTop: { xs: "10%", sm: "3.5%", md: "2%", lg: "2%" },
              }}
            >
              From the dropdown list select the item(s) you've recycled and
              unlock your eco-champion status:
            </Typography>
          </Box>
          <Box
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
                      key={item.name}
                      value={item.name}
                      style={getStyles(item.name, specItem, theme)}
                    >
                      {item.name}
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <Reset />
              </IconButton>
              <IconButton
                onClick={handleDoneClick}
                variant="text"
                sx={{
                  "&:hover": {
                    color: "#C7683D",
                  },
                  marginLeft: "10px",
                  marginTop: "10px",
                  backgroundColor: "#F6F3E7",
                  color: "black",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <Done />
              </IconButton>
            </Box>
            <Box
            ></Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
