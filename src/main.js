import "./style.css";

VM.observe(document.body, () => {
  console.log("better-transmission-tabscontainer is running");

  // Find the target node
  const tabsContainer = document.querySelector(".tabs-container");
  // const tabsContainer = document.querySelector('#inspector');

  if (tabsContainer) {
    tabsContainer.style.resize = "both";
    tabsContainer.style.overflow = "auto";
    tabsContainer.style.width = "700px";

    // disconnect observer
    return true;
  }
});
