import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [char,setChar] = useState(false);
  const [num,setNum] = useState(false);
  const[pswd,setPswd] = useState("");

  const passwordRef = useRef(null);

  const generatePswd = useCallback(()=>{
    let pswd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(num){
      str += "0123456789";
    }
    if(char){
      str += "!@#$%^&*()_-+{}[]:;'`~"
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pswd += str.charAt(char);
    }
    setPswd(pswd);
  },[length,char,num,setPswd]);

  const copyPasswordToClipboard = () =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(pswd);
  }

  useEffect(()=>{
    generatePswd();
  },[length,setChar,setNum,generatePswd]);
  
  return (
    <div className="w-full max-w-md mx-auto shadow-md mt-[190px] rounded-lg px-4 py-3 my-8 bg-white text-black
    ">
      <h1 className='text-black text-center text-lg my-2 font-bold'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pswd}
            className="outline w-full py-1 px-3 bg-[]"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2 space-x-3'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='space-x-2'>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
  
}

export default App