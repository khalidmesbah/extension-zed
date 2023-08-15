import { Button } from "@/components/ui/button"

const handleFocusMode = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;

    chrome.runtime.sendMessage({ event: "hideMainScrollBar", tabId: activeTabId });
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      func: () => {
        const content = document.getElementById("content")
        const below = document.getElementById("below")
        const statusBanner = document.querySelector(".status-banner")
        const youtubeChromeBottom = document.querySelector(".ytp-chrome-bottom")
        const captions = document.getElementById("ytp-caption-window-container")
        const guide = document.getElementById("guide")
        const start = document.getElementById("start")
        const end = document.getElementById("end")
        const guideService = document.getElementById("guide-service")
        const primary = document.getElementById("primary")
        const video = document.querySelector(".video-stream.html5-main-video") as HTMLVideoElement

        if (content) {
          content.style.display = "flex"
          content.style.alignItems = "center"
          content.style.height = "100vh"
        }

        if (primary) {
          primary.style.margin = "0"
          primary.style.padding = "0"
        }

        if (video) {
          video.style.width = "100%"
          video.style.borderRadius = "10px"
        }

        start?.remove()
        end?.remove()
        guide?.remove()
        guideService?.remove()
        statusBanner?.remove()
        below?.remove()
        youtubeChromeBottom?.remove()
        console.log(content, captions)
      }
    })
  })
}

const Test = () => {
  return (
    <Button onClick={handleFocusMode}>Focus Mode</Button>
  )
}

export default Test
