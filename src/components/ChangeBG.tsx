import { Label } from "./ui/label"

const changeBg = (newColor: string) => {
  console.log(newColor)
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      func: () => { document.body.style.background = newColor }
    })
  })
}

const ChangeBg = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="color-picker">changeBg</Label>
        <input type="color" id="color-picker" onChange={(e) => {
          changeBg(e.currentTarget.value)
        }} />
      </div>
    </div>)
}

export default ChangeBg
