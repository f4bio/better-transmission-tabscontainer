import "./style.css";
import * as VM from "@violentmonkey/dom";

VM.observe(document.body, () => {
  // Find the target node
  const tabsContainer = document.querySelector(".tabs-container");
  // const tabsContainer = document.querySelector('#inspector');

  if (tabsContainer) {
    console.log("found better-transmission-tabscontainer's tabsContainer");

    tabsContainer.style.resize = "horizontal";
    tabsContainer.style.overflow = "auto";
    tabsContainer.style.width = "900px";

    // disconnect observer
    return true;
  }
});
