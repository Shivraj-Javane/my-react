import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Shivraj",
    age: 30
  }
  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
     <Card username ="React Js code" btnText="click me"/>
     <Card username="Shivraj" btnText="visit me"/>
    </>
  )
}

export default App
