import { useState } from 'react'
import './App.css'
import React from 'react'

const App = () => {
  const [valueOfCount, setValueOfCount] = useState(0);

  function increment(){
    setValueOfCount(valueOfCount => valueOfCount + 1)
  }
  function decrement(){
    setValueOfCount(valueOfCount => valueOfCount - 1)
  }
  if(increment.onClick){
    valueOfCount;
  }
  else{
    valueOfCount;
  }
  
  return (
    <div className='counter'>
      <h1 className='name'>Counter App</h1>
      <p className='count'>Count: {valueOfCount}</p>
      <button className='button' onClick={increment}>Increment</button>
      <button className='button' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App
