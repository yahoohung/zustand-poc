import React from "react";
const { useStore } = require("./store");
if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  console.log("ENV", process.env.NODE_ENV);

  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [
      [useStore, "useStore"], // Replace 'useStore' with your actual exported hook name if different
    ],
  });
}
