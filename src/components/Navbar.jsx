import * as React from "react";

// react-router components
import { Link } from "react-router-dom";

// material components
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// icons
import { GiHamburgerMenu } from "react-icons/gi";

// CSS styles
const style = {
  btn: {
    width: "100%",
    height: "50px",
    background: "#FEEBDC",
    color: "#25414C",
    fontFamily: "Itim, cursive",
    fontSize: "1rem",
    borderRadius: "20px",
    margin: "0 auto",
  },
  link: {
    textDecoration: "none",
    padding: "20px 10px",
  },
};

function Navbar() {
  // Hooks
  const [isDrawerOpened, setDrawerStatus] = React.useState(false);

  // data arrays
  const buttons = [
    {
      name: global.i18n.views.sidebar.home,
      link: "/",
    },
    {
      name: global.i18n.views.sidebar.earn,
      link: "/earn",
    },
    {
      name: global.i18n.views.sidebar.spend,
      link: "/spend",
    },
  ];

  return (
    <nav className="nav" style={{ width: "100%", marginBottom: "50px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AppBar
          position="static"
          sx={{
            borderRadius: "20px",
            background: "rgba(255,164,91,1)",
            marginTop: "1rem",
          }}
        >
          <Toolbar>
            <Button
              variant="text"
              sx={{
                padding: "2px",
                minWidth: "0",
                "&:hover": { background: "#fc8403" },
              }}
              onClick={() => setDrawerStatus(true)}
            >
              <GiHamburgerMenu color="black" size="2rem" />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        open={isDrawerOpened}
        onClose={() => setDrawerStatus(false)}
        size="10rem"
      >
        <Box
          sx={{
            display: "flex",
            width: "7rem",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,164,91,1)",
          }}
        >
          {buttons.map((btn) => (
            <Link to={btn.link} style={style.link} key={btn.name}>
              <Button
                variant="contained"
                style={style.btn}
                onClick={() => setDrawerStatus(false)}
              >
                {btn.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
