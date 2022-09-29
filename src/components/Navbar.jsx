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

function Navbar() {
  // CSS styles
  const btn = {
    width: "100%",
    height: "50px",
    background: "#FEEBDC",
    color: "#25414C",
    fontFamily: "Itim, cursive",
    fontSize: "1.5rem",
    borderRadius: "20px",
    margin: "0 auto",
  };

  const link = {
    textDecoration: "none",
    padding: "20px 10px",
  };

  //   <Button variant="text" onClick={() => setDrawerStatus(true)}>
  //   <GiHamburgerMenu color="black" size="2rem" />
  // </Button>

  // Hooks
  const [isDrawerOpened, setDrawerStatus] = React.useState(false);

  return (
    <nav className="nav" style={{ width: "100%" }}>
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
            width: "10rem",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,164,91,1)",
          }}
        >
          <Link to="/" style={link}>
            <Button
              variant="contained"
              style={btn}
              onClick={() => setDrawerStatus(false)}
            >
              {global.config.i18n.views.sidebar.home}
            </Button>
          </Link>
          <Link to="/spend" style={link}>
            <Button
              variant="contained"
              style={btn}
              onClick={() => setDrawerStatus(false)}
            >
              {global.config.i18n.views.sidebar.spend}
            </Button>
          </Link>
          <Link to="/earn" style={link}>
            <Button
              variant="contained"
              style={btn}
              onClick={() => setDrawerStatus(false)}
            >
              {global.config.i18n.views.sidebar.earn}
            </Button>
          </Link>
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
