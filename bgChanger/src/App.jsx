import { useState } from 'react'


function App() {
  const [color,setColor] = useState('olive');

  return (
    <div className='w-full h-screen'
    style={{backgroundColor: color}}
    >
    
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-2'>

      <div className='fixed flex flex-wrap justify-center gap-3 shadow-xl p-5 bg-[#F5F5DC] rounded-lg text-lg font-semi-bold'>


        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("red")}
        style={{backgroundColor: "red"}}>Red</button>

        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("green")}
        style={{backgroundColor: "green"}}>Green</button>


        <button className='px-4 py-1 rounded w-24 h-14 text-white' onClick={() => setColor("black")}
        style={{backgroundColor: "black"}}>Black</button>


        <button className='px-4 py-1 rounded w-24 h-14 bg-inherit' onClick={() => setColor("white")}
        style={{backgroundColor: "white"}}>White</button>


        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("lavender")}
        style={{backgroundColor: "lavender"}}>Lavender</button>


        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("yellow")}
        style={{backgroundColor: "yellow"}}>Yellow</button>


        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("brown")}
        style={{backgroundColor: "brown"}}>Brown</button>


        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("#A653F5")}
        style={{backgroundColor: "#A653F5"}}>Purple</button>


        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("#4a7ba6")}
        style={{backgroundColor: "#4a7ba6"}}>Blue</button>

        <button className='px-4 py-1 rounded w-24 h-14' onClick={() => setColor("#e68bbe")}
        style={{backgroundColor: "#e68bbe"}}>Pink</button>
      </div>
    </div>

    </div>
  )
}

export default App
