import { useState } from 'react'

import './App.css'
import Card from './component/card'
function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username : "ajit",
  //   age : 21
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-2'>TailWind test</h1>
      <Card username="hitesh" />
      <Card username="chaiaurcode" btnText="visit me"/>

    </>
  )
}

export default App