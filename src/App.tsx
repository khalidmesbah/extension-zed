// import { useEffect } from 'react'
import { ChangeColors, ChangePlaybackRate, Test, HideAllScrollBarsBtn, HideMainScrollBarBtn, InspectCurrentPageBtn, DesignMode, YoutubeFocusMode } from './components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function App() {
  return (
    <Tabs defaultValue="youtube" className="w-[400px]" style={{
      borderRadius: "10px",
      background: "red",
      padding: "10px"
    }}>
      <TabsList>
        <TabsTrigger value="random">random</TabsTrigger>
        <TabsTrigger value="youtube">Youtube</TabsTrigger>
      </TabsList>
      <TabsContent value="random">
        <div style={{
          borderRadius: "5px",
          background: "purple",
          padding: "5px"
        }}>
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
      </TabsContent>
      <TabsContent value="youtube" style={{ padding: "20px" }} className='bg-red-500'>
        fasdjflaksdjflkj
        <YoutubeFocusMode />
      </TabsContent>
    </Tabs >
  )
}

export default App
