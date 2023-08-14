import { Button } from "@/components/ui/button"

const test = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      func: () => console.log("i am working")
    })
  })
}

const Test = () => {
  return (
    <Button onClick={test}>test</Button>
  )
}

export default Test
