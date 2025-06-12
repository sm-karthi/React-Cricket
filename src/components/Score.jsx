import React, { useState, useEffect } from 'react';

function Score({ team, scoreGenerate, isActive, setTimer, timeLeft, totalScore, score, gameOver }) {

    let [currentPlayer, setCurrentPlayer] = useState(0);
    let [currentBall, setCurrentBall] = useState(0);
    let [isGameFinished, setIsGameFinished] = useState(false);

    function handleButtonClick() {
        if (!isGameFinished) {
            scoreGenerate();
        }
    }

    useEffect(() => {
        if (score === null) {
            return;
        }

        if (score === 0 || currentBall === 5) {
            if (currentPlayer === 9) {
                setIsGameFinished(true);
                passToSetTimer();
            } else {
                setCurrentPlayer(currentPlayer + 1);
                setCurrentBall(0);
            }
        } else {
            setCurrentBall(currentBall + 1);
        }
    }, [score]);

    function passToSetTimer() {
        if (setTimer) {
            setTimer(true);
        }
    }


    let isButtonDisabled = !isActive || isGameFinished || (team === 2 && timeLeft === 0) || gameOver;

    return (
        <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'>TEAM {team} SCORE</h3>

            <span className='font-semibold text-xl'>{totalScore}</span>

            <button
                className={`py-1 px-3 shadow-md font-semibold text-white rounded transition duration-100 
                ${isButtonDisabled ? 'bg-blue-300 cursor-not-allowed' :
                        'bg-blue-500 hover:bg-blue-700 cursor-pointer'}`}
                onClick={handleButtonClick}
                disabled={isButtonDisabled}>
                HIT {team}
            </button>

        </div>

    );
    
}

export default Score;
