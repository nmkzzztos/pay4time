import React from "react";

// react-router components
import { Link } from "react-router-dom";

// material components
import Button from "@mui/material/Button";

// components
import TimeTracker from "../components/home/timeTracker";

// material components
import Box from "@mui/material/Box";

// CSS styles
const style = {
  btn: {
    width: "105px",
    height: "50px",
    background: "#FEEBDC",
    color: "#25414C",
    fontFamily: "Itim, cursive",
    fontSize: "1rem",
    borderRadius: "20px",
    margin: "0 auto",
    lineHeight: 1,
  },
  link: {
    textDecoration: "none",
    padding: "20px 10px",
  },
};

function Home() {
  const buttons = [
    {
      title: global.i18n.views.homeScreen.buttons.spend,
      link: "/spend",
      name: "spend time",
    },
    {
      title: global.i18n.views.homeScreen.buttons.earn,
      link: "/earn",
      name: "earn time",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TimeTracker />
      <Box sx={{ display: "flex" }}>
        {buttons.map((btn) => (
          <Link to={btn.link} style={style.link} key={btn.name}>
            <Button variant="contained" style={style.btn}>
              {btn.name}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
