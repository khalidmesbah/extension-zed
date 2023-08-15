import { Button } from "@/components/ui/button"

const hideAllScrollBars = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;

    chrome.runtime.sendMessage({ event: "hideAllScrollBars", tabId: activeTabId });
  })
}

const HideAllScrollBarsBtn = () => {
  return <Button onClick={hideAllScrollBars}>hide all scrollbars</Button>
}

export default HideAllScrollBarsBtn
