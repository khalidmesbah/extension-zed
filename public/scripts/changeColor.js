chrome.storage.local.get(["color"]).then((result) => {
  console.log("Value currently is " + result["color"], result);
  document.querySelectorAll("*").forEach(e => {
    e.style.color = result["color"]
  })
});

