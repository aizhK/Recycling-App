import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/HomeOutlined";
import Leaderboard from "@mui/icons-material/LeaderboardOutlined";
import Badge from "@mui/icons-material/MilitaryTechOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import Close from "@mui/icons-material/Close";

const drawerWidth = 240;

function Sidebar({ setIsDrawerOpens }) {
  const [isOpens, setIsOpens] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => {
            setIsOpens(!isOpens);
            setIsDrawerOpens(!isOpens);
          }}
          sx={{
            color: "#000",
            marginLeft: "3%",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={isOpens}
          onClose={() => {
            setIsOpens(false);
            setIsDrawerOpens(false);
          }}
          PaperProps={{
            style: { width: drawerWidth, borderRadius: "0 25px 25px 0" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10%",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
              }}
            >
              RECYCLERUSH
            </Typography>
            <IconButton
              onClick={() => {
                setIsOpens(false);
                setIsDrawerOpens(false);
              }}
            >
              <Close />
            </IconButton>
          </Box>
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
            component={Link}
            to="/dashboard"
            variant="contained"
            startIcon={<Home />}
            onClick={() => {
              setIsOpens(false);
              setIsDrawerOpens(false);
            }}
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
            component={Link}
            to="/leaderboard"
            variant="contained"
            startIcon={<Leaderboard />}
            onClick={() => {
              setIsOpens(false);
              setIsDrawerOpens(false);
            }}
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
            component={Link}
            to="/badges"
            variant="contained"
            startIcon={<Badge />}
            onClick={() => {
              setIsOpens(false);
              setIsDrawerOpens(false);
            }}
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
            component={Link}
            to="/"
            variant="contained"
            startIcon={<Logout />}
            onClick={() => {
              setIsOpens(false);
              setIsDrawerOpens(false);
            }}
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
      </div>
    </Box>
  );
}

Sidebar.propTypes = {
  setIsDrawerOpens: PropTypes.func.isRequired,
};

export default Sidebar;
