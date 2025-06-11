import React, { useState } from 'react';

function Score({ team, scoreGenerate, isActive }) {

    let [totalScore, setTotalScore] = useState(0);
    let [currentPlayer, setCurrentPlayer] = useState(0);
    let [currentBall, setCurrentBall] = useState(0);
    let [isGameFinished, setIsGameFinished] = useState(false);

    function passScoreToParent() {
        if (isGameFinished) {
            return;
        }

        let score = Math.floor(Math.random() * 7);
        scoreGenerate(score);
        setTotalScore(totalScore + score);

        if (score === 0 || currentBall === 5) {
            if (currentPlayer === 10) {
                setIsGameFinished(true);
            } else {
                setCurrentPlayer(currentPlayer + 1);
                setCurrentBall(0);
            }
        } else {
            setCurrentBall(currentBall + 1);
        }
    }

    const isButtonDisabled = !isActive || isGameFinished;

    return (
        <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'>TEAM {team} SCORE</h3>

            <span className='font-semibold text-xl'>{totalScore}</span>

            <button
                className={`py-1 px-3 shadow-md font-semibold text-white rounded transition duration-100 
                ${isButtonDisabled ? 'bg-blue-300 cursor-not-allowed' :
                        'bg-blue-500 hover:bg-blue-700 cursor-pointer'}`}
                onClick={passScoreToParent} disabled={isButtonDisabled}>HIT {team}
            </button>

        </div>
    );
}

export default Score;
