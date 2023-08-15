import { useState } from "react"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

const changePlaybackRate = (newSpeed: string) => {
  console.log(newSpeed)

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;

    chrome.storage.local.set({ "speed": newSpeed }).then(() => {
      console.log(newSpeed, "Value is set");
    });

    chrome.runtime.sendMessage({ event: "changePlaybackRate", tabId: activeTabId });
  })
}

const ChangePlaybackRate = () => {
  const initialSpeed: number = +(localStorage.getItem("speed") || 2)

  const [speed, setSpeed] = useState<number>(initialSpeed)

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="playbackRate">PlaybackRate is {speed}</Label>
        <input itemID="playbackRate" type="range" min="0.2" step="0.2" max="4" id="playbackRate" value={speed} onChange={(e) => {
          setSpeed(+e.currentTarget.value)
          changePlaybackRate(e.currentTarget.value)
        }} />
        <Button onClick={() => {
          setSpeed(2)
          changePlaybackRate("2")
        }}>X2</Button>
        <Button onClick={() => {
          setSpeed(1)
          changePlaybackRate("1")
        }}>normal</Button>
      </div>

    </div>)
}

export default ChangePlaybackRate
