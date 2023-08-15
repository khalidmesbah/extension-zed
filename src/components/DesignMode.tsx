import { useState } from "react"
import { Button } from "./ui/button"

const handleDesignMode = (designMode: string) => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id
    if (!activeTabId) return;

    chrome.storage.local.set({ "designMode": designMode }).then(() => {
      console.log(designMode, "Value is set");
    });

    chrome.runtime.sendMessage({ event: "designMode", tabId: activeTabId });
  })
}

const DesignMode = () => {
  const [designMode, setDesignMode] = useState<"on" | "off">("off")
  return (
    <Button onClick={() => {
      const newDesignMode = designMode === "on" ? "off" : "on";
      setDesignMode(newDesignMode)
      handleDesignMode(newDesignMode)
    }}>{designMode === "on" ? "disable design mode" : "enable design mode"}</Button>
  )
}
export default DesignMode
