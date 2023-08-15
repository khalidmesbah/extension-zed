import { Label } from "./ui/label"

const changeBg = (newColor: string) => {
  console.log(newColor)

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;
    chrome.storage.local.set({ "background-color": newColor }).then(() => {
      console.log(newColor, "Value is set");
    });

    chrome.runtime.sendMessage({ event: "changeBackgroundColor", tabId: activeTabId });
  })

}

const changeColor = (newColor: string) => {
  console.log(newColor)

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;
    chrome.storage.local.set({ "color": newColor }).then(() => {
      console.log(newColor, "Value is set");
    });

    chrome.runtime.sendMessage({ event: "changeColor", tabId: activeTabId });
  })
}

const ChangeBg = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="background-color">changeBg</Label>
        <input type="color" id="background-color" value={localStorage.getItem("background-color") || "#000000"} onChange={(e) => {
          changeBg(e.currentTarget.value)
        }} />
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="color">changeColor</Label>
        <input type="color" id="color" value={localStorage.getItem("color") || "#ffffff"} onChange={(e) => {
          changeColor(e.currentTarget.value)
        }} />
      </div>
    </div>)
}

export default ChangeBg
