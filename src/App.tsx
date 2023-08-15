// import { useEffect } from 'react'
import './index.css'
import { ChangeColors, ChangePlaybackRate, Test, HideAllScrollBarsBtn, HideMainScrollBarBtn, InspectCurrentPageBtn, DesignMode } from './components'

function App() {
  /* const handleKeydown = (e: KeyboardEvent) => {
    console.log(e.key)
    if (e.key === "y") {

    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, []) */
  return (
    <div className='rounded-lg bg-slate-500 app' >
      hi
      <hr />
      <p className="text-4xl">fjksadfkj</p>
      <hr />
      <p style={{
        background: "red",
        fontSize: "36px"
      }}>fjksadfkj</p>
      <hr />
      <ChangePlaybackRate />
      <hr />
      <ChangeColors />
      <hr />
      <Test />
      <hr />
      <HideMainScrollBarBtn />
      <HideAllScrollBarsBtn />
      <hr />
      <InspectCurrentPageBtn />
      <hr />
      <DesignMode />
    </div>
  )
}

export default App
