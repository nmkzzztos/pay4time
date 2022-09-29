import * as React from "react";

// react-router components
import { Link } from "react-router-dom";

// material components
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// icons
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isDrawerOpened, setDrawerStatus] = React.useState(false);

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

  return (
    <nav className="nav">
      <Button variant="text" onClick={() => setDrawerStatus(true)}>
        <GiHamburgerMenu color="black" size="2rem" />
      </Button>
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
            background:
              "linear-gradient(-90deg, rgba(255,199,91,1) 0%, rgba(255,164,91,1) 100%)",
          }}
        >
          <Link to="/" style={link}>
            <Button
              variant="contained"
              style={btn}
              onClick={() => setDrawerStatus(false)}
            >
              Home
            </Button>
          </Link>
          <Link to="/spend" style={link}>
            <Button
              variant="contained"
              style={btn}
              onClick={() => setDrawerStatus(false)}
            >
              Spend
            </Button>
          </Link>
          <Link to="/earn" style={link}>
            <Button
              variant="contained"
              style={btn}
              onClick={() => setDrawerStatus(false)}
            >
              Earn
            </Button>
          </Link>
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
