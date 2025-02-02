import { useState,useCallback ,useEffect ,useRef } from 'react'

import './App.css'


function App() {
  const [length,setlength]=useState(8)
  const [number, numberAllowed]=useState(false)
  const [character,characterAllowed]=useState(false)
  const [password,setpassword]=useState("")

  const generatePassword=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz'
   
    if(numberAllowed) str+='0123456789'
    if(characterAllowed) str+='!@#$%^&~*()_+{}][:;?/><.,'
    passwordRef=useRef(null)

    for(let i=0; i<length; i++){
     const Char =Math.floor( Math.random()*str.length +1)
     pass +=str.charAt(Char)
    }
    setpassword(pass)
    
  })
  useEffect(()=>{
    generatePassword() 
  },[length, character,number])
  const copyClipboard =()=>{
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
       <div className='bg-gray-400 w-100 h-full px-40 py-5  rounded-lg text-orange-300 shadow-lg' >
        
        <div className="flex w-full mx-4">
        <input type="text"
        value={password}
        className='outline-none w-100px py-1 px-3' readOnly
        placeholder='Password'
        />
        <button onClick={copyClipboard} className='rounded-lg shadow-lg py-2 px-5 bg-white'>Copy</button>
        <input type="range" min={'6'} max={100} value={length} className='cursor-pointer' onChange={(e)=>setlength(e.target.value)}/>
        <label htmlFor="length">Lenght:{length}</label>
        <input type="checkbox" name="Number" id="number" defaultChecked={numberAllowed} onChange={()=>{
          numberAllowed((prev)=>!prev)
        }} />

        <label htmlFor="number">Number</label>
        <input type="checkbox" name="character" id="character" defaultChecked={characterAllowed} onChange={()=>{
          characterAllowed((prev)=>!prev)}} />
        <label htmlFor="character">Character</label>
          
          </div>
       </div>
    </>
  )
}

export default App
