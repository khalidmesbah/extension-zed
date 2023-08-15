chrome.runtime.onMessage.addListener((data) => {
  console.log(data)
  if (data.event === "changeBackgroundColor") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/changeBackgroundColor.js"],
    })
      .then(() => console.log("script injected in all frames"));
  } else if (data.event === "changeColor") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/changeColor.js"],
    })
      .then(() => console.log("script injected in all frames"));
  } else if (data.event === "changePlaybackRate") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/changePlaybackRate.js"],
    })
      .then(() => console.log("script injected in all frames"));
  } else if (data.event === "inspectCurrentPage") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/inspectCurrentPage.js"],
    })
      .then(() => console.log("script injected in all frames"));
  } else if (data.event === "hideMainScrollBar") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/hideMainScrollBar.js"],
    })
      .then(() => console.log("script injected in all frames"));
  } else if (data.event === "hideAllScrollBars") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/hideAllScrollBars.js"],
    })
      .then(() => console.log("script injected in all frames"));
  } else if (data.event === "designMode") {
    chrome.scripting.executeScript({
      target: { tabId: data.tabId, allFrames: true },
      files: ["scripts/designMode.js"],
    })
      .then(() => console.log("script injected in all frames"));
  }



});
