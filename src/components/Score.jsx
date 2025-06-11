import React, { useState } from 'react'


function Score({ team, scoreGenerate }) {

    let [totalScore, setTotalScore] = useState(0);


    function passScoreToParent() {
        let score = Math.floor(Math.random() * 7);

        scoreGenerate(score)


        setTotalScore(totalScore + score)




    }



    return (

        <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'>TEAM {team} SCORE</h3>

            <span className='font-semibold text-xl'>{totalScore}</span>

            <button className='bg-blue-500 py-1 px-3 shadow-md font-semibold text-white 
            rounded cursor-pointer hover:bg-blue-700 transition duration-100' onClick={passScoreToParent}>
                HIT {team}</button>

        </div>

    )
}

export default Score
