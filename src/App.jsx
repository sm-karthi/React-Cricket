import { useEffect, useState } from 'react';
import Score from './components/Score';
import ScoreTable from './components/ScoreTable';
import './App.css';

function App() {

  let [timeLeft, setTimeLeft] = useState(60);

  let [score, setScore] = useState(0);

  useEffect(() => {

    if (timeLeft === 0) {
      return;
    }

    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

  }, [timeLeft]);



  function scoreGenerate(score) {
    setScore(score);
  }


  return (
    <div className='md:px-15'>

      <h1 className='flex justify-center mt-6 font-bold text-3xl'>CRICKET 10</h1>

      <div className='flex justify-center items-center px-8 md:px-15'>

        <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-around 
         border border-gray-300 pt-6 pb-3 w-full mt-8 rounded-2xl shadow-lg '>

          <Score team={1} scoreGenerate={scoreGenerate} />

          <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'>TIMER</h3>

            <span className='font-semibold text-xl'>{timeLeft}</span>

          </div>


          <Score team={2} scoreGenerate={scoreGenerate} />

        </div>

      </div>

      <div className='flex flex-col lg:flex-row justify-between w-full mt-12 mb-10 px-8 md:px-0'>

        <ScoreTable teamName="TEAM 1" score={score} />


        <div className='flex flex-col space-y-5 text-center order-3 lg:order-0 mt-15 mb-10 lg:mt-0 lg:mb-0'>

          <button className='bg-blue-500 py-1 shadow-md px-2 font-semibold text-white rounded 
          cursor-pointer hover:bg-blue-700 transition duration-100'>GENERATE RESULT</button>

          <h4 className='font-semibold text-lg mt-5'>MATCH WON BY</h4>

          <h4 className='font-semibold text-lg'></h4>

          <h4 className='font-semibold text-lg mt-4'>MAN OF THE MATCH</h4>

          <h4 className='font-semibold text-lg'></h4>

        </div>

        <ScoreTable teamName="TEAM 2" />

      </div>

    </div>
  );
}

export default App;
