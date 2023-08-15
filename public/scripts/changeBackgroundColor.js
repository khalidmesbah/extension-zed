chrome.storage.local.get(["background-color"]).then((result) => {
  console.log("Value currently is " + result["background-color"], result);
  document.querySelectorAll("*").forEach(e => {
    e.style.background = result["background-color"]
  })
});
