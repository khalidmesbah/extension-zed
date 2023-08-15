chrome.storage.local.get(["speed"]).then((result) => {
  console.log("Value currently is " + result["speed"], result);
  document.querySelectorAll("video").forEach(e => {
    e.playbackRate = result["speed"]
  })
});

