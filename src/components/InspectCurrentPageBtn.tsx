import { Button } from "@/components/ui/button"

const inspectCurrentPage = () => {
  console.log("inspect started")
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;

    chrome.runtime.sendMessage({ event: "inspectCurrentPage", tabId: activeTabId });
  })
}

const InspectCurrentPageBtn = () => {
  return <Button onClick={inspectCurrentPage}>inspect</Button>
}

export default InspectCurrentPageBtn
