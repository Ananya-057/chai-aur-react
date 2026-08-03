import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import speaker from "./speaker.jpg";
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myobject ={
    username :"ananya",
    age:20
  }
  let newArr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '> Tailwind Test</h1>
      <Card username="abc" btnText="Click me " />
      <Card />
    </>
  )
}

export default App
