import { useState } from "react"
function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('red')} style={{backgroundColor:'red', color:'white'}} 
            >Red</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('green')} style={{backgroundColor:'green', color:'white'}} 
            >Green</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('blue')} style={{backgroundColor:'blue', color:'white'}} 
            >Blue</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('olive')} style={{backgroundColor:'olive', color:'white'}} 
            >Olive</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('gray')} style={{backgroundColor:'gray', color:'white'}} 
            >Grey</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('yellow')} style={{backgroundColor:'yellow'}} 
            >Yellow</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('pink')} style={{backgroundColor:'pink'}} 
            >Pink</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('purple')} style={{backgroundColor:'purple', color:'white'}} 
            >Purple</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('lavender')} style={{backgroundColor:'lavender'}} 
            >Lavender</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('white')} style={{backgroundColor:'white'}} 
            >White</button>
            <button className="outline-none px-4 rounded-full shadow-lg" onClick={()=> setColor('black')} style={{backgroundColor:'black', color:'white'}} 
            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
