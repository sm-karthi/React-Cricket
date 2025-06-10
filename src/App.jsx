import { useState } from 'react'
import Score from './components/Score'
import './App.css'

function App() {
  

  return (
    <>

      <h1 className='flex justify-center mt-6 font-bold text-3xl'>CRICKET 10</h1>


      <div className='flex justify-center items-center px-8 md:px-30'>

        <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-around border border-gray-300 pt-6 pb-3 w-full mt-8 rounded-2xl shadow-lg'>


          <Score team={1}></Score>

          <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'> TIMER</h3>

            <span className='font-semibold text-xl'>0</span>

          </div>

          <Score team={2}></Score>


        </div>

      </div>

    </>
  )
}

export default App
