import { useState } from 'react'
import './App.css'



function App() {
  const [color,setColor] = useState("gray")
  return (
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap bg-gray-200 justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>
            <button
            onClick={()=> setColor("black")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "black"}}
            >Black</button>
            <button
            onClick={()=> setColor("green")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={()=> setColor("blue")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={()=> setColor("skyblue")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "skyblue"}}
            >sky</button>
            <button
            onClick={()=> setColor("purple")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "purple"}}
            >Purple</button>
            <button
            onClick={()=> setColor("yellow")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
            onClick={()=> setColor("pink")}
            className='text-white px-3 py-1 rounded-2xl'
            style={{backgroundColor: "pink"}}
            >Pink</button>
          </div>
        </div>
      </div>
  )
}
export default App;
