import React from "react";

// material components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

// icons
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Smile</div>
      <Box
        className="time-tracker"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#FEEBDC",
          borderRadius: "20px",
          fontSize: "32px",
          padding: "35px 80px",
        }}
      >
        <div
          style={{
            margin: "10px",
          }}
        >
          {global.config.i18n.views.homeScreen.timeTracker.spendTime}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "180px",
          }}
        >
          <Chip
            label="56m"
            clickable
            sx={{
              width: "5.5rem",
              height: "2.75rem",
              fontSize: "32px",
              fontFamily: "Itim, cursive",
            }}
          />
          <GiPayMoney size="4.5rem" />
        </div>
        <div>{global.config.i18n.views.homeScreen.timeTracker.earnTime}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "180px",
          }}
        >
          <Chip
            label="56m"
            clickable
            sx={{
              width: "5.5rem",
              height: "2.75rem",
              fontSize: "32px",
              fontFamily: "Itim, cursive",
            }}
          />
          <GiReceiveMoney size="4.5rem" />
        </div>
      </Box>
    </Box>
  );
}

export default Home;
