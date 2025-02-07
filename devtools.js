
chrome.devtools.panels.create(
  "ConsolePad",
  "icons/icon128.png",
  "panel.html",
  function(panel) {
    console.log("ConsolePad panel created!");
  }
);
