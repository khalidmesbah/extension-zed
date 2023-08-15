import { Button } from "@/components/ui/button"

const hideMainScrollBar = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;

    chrome.runtime.sendMessage({ event: "hideMainScrollBar", tabId: activeTabId });
  })
}

const HideMainScrollBarBtn = () => {
  return <Button onClick={hideMainScrollBar}>hide main scrollbar</Button>
}

export default HideMainScrollBarBtn
