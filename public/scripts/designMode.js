chrome.storage.local.get(["designMode"]).then((result) => {
  console.log("Value currently is " + result["designMode"], result);
  document.designMode = result["designMode"] ?? "off"
});

