import React from 'react'
import Discover from './Component/Home/Discover/Discover'

const App = () => {
  return (
    <div className='flex'>
      <div className='w-1/6'>
        <h1 className="text-3xl mt-12 font-bold text-sky-500 p-2"> Discover</h1>
      </div>
      <div className='w-5/6'>
        <Discover />
      </div>
    </div>

  )
}

export default App