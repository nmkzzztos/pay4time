import React from "react";

// material components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

// icons
import { BsEmojiSmile, BsEmojiSunglasses, BsEmojiFrown } from "react-icons/bs";

// functions
const getEmotionText = (spendTime, earnTime) => {
  const diff = earnTime - spendTime;
  if (diff < 50) return global.i18n.views.homeScreen.emotions.tryNextTime;
  return diff < 150
    ? global.i18n.views.homeScreen.emotions.notBad
    : global.i18n.views.homeScreen.emotions.awesome;
};

const getEmotion = (spendTime, earnTime) => {
  const diff = earnTime - spendTime;
  if (diff < 50) return <BsEmojiFrown size="3.5rem"></BsEmojiFrown>;
  return diff < 150 ? (
    <BsEmojiSmile size="3.5rem"></BsEmojiSmile>
  ) : (
    <BsEmojiSunglasses size="3.5rem"></BsEmojiSunglasses>
  );
};

const convertTime = (time) => {
  let hours = 0;
  while (time > 60) {
    hours++;
    time -= 60;
  }
  return `${hours}h${time}m`;
};

function timeTracker() {
  // arrays
  const rows = [
    {
      title: global.i18n.views.homeScreen.timeTracker.earnTime,
      chipValue: convertTime(90),
      icon: global.images.spendTime,
      chipBackground: "rgba(2,157,0,1)",
    },
    {
      title: global.i18n.views.homeScreen.timeTracker.spendTime,
      chipValue: convertTime(265),
      icon: global.images.earnTime,
      chipBackground: "#c60101",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#25414C",
      }}
    >
      {getEmotion(14, 265)}
      <div style={{ marginBottom: "1em" }}>{getEmotionText(14, 265)}</div>
      <Box
        className="time-tracker"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#FEEBDC",
          borderRadius: "20px",
          fontSize: "26px",
          padding: "15px 40px",
        }}
      >
        {rows.map((row, index) => (
          <div
            key={`${row.title}-${index}`}
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "10px",
              }}
            >
              {row.title}
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
                label={row.chipValue}
                sx={{
                  width: "6rem",
                  height: "3rem",
                  fontSize: "22px",
                  fontFamily: "Itim, cursive",
                  background: `${row.chipBackground}`,
                  color: "#FEEBDC",
                }}
              />
              <img src={row.icon} alt="" />
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default timeTracker;
