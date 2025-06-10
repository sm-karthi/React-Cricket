import { useEffect, useState } from 'react'
import Score from './components/Score'
import './App.css'

function App() {

  let [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {

    if (timeLeft === 0) {
      return;
    }

    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

  }, [timeLeft]);


  return (
    <div className='md:px-15'>

      <h1 className='flex justify-center mt-6 font-bold text-3xl'>CRICKET 10</h1>


      <div className='flex justify-center items-center px-8 md:px-15'>

        <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-around border border-gray-300 pt-6 pb-3 w-full mt-8 rounded-2xl shadow-lg'>


          <Score team={1}></Score>

          <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'> TIMER</h3>

            <span className='font-semibold text-xl'>{timeLeft}</span>

          </div>

          <Score team={2}></Score>


        </div>

      </div>



      <div className='flex justify-between w-full mt-15'>


        <div className='flex flex-col text-center'>

          <h4 className='font-semibold text-lg'>TEAM 1 SCORE BOARD</h4>

          <table className="border-collapse border border-gray-400 mt-5">

            <tr>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>TEAM 1</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>B1</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>B2</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>B3</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>B4</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>B5</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>B6</th>
              <th className='border border-gray-300 font-semibold px-2.5 py-1'>TOTAL</th>
            </tr>

            <tr>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'>PLAYER 1</td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
            </tr>

            <tr>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'>PLAYER 2</td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
              <td className='border border-gray-300 font-semibold px-2.5 py-1'></td>
            </tr>

            <tbody></tbody>

          </table>

        </div>


      </div>

    </div>
  )
}

export default App
