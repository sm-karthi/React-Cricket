import { useState, useEffect } from "react";

function ScoreTable({ teamName, score }) {

    let table = Array(10).fill("").map(() => ({
        balls: Array(6).fill(""),
        total: 0
    }));

    let [scores, setScores] = useState(table);
    let [currentPlayer, setCurrentPlayer] = useState(0);
    let [currentBall, setCurrentBall] = useState(0);


    useEffect(() => {

        let updatedScore = [...scores]
        updatedScore[currentPlayer].balls[currentBall] = score;
        updatedScore[currentPlayer].total += score;

        setScores(updatedScore);

        if (currentBall === 5 || score === 0) {
            setCurrentBall(0);
            setCurrentPlayer(currentPlayer + 1);
        }
        else {
            setCurrentBall(currentBall + 1);
        }

    }, [score])

    return (
        <div className='flex flex-col text-center mt-8'>
            <h4 className='font-semibold text-lg'>{teamName} SCORE BOARD</h4>

            <table className="border-collapse border border-gray-400 mt-5 shadow-lg">
                <thead>
                    <tr>
                        <th className='heading-cell'>{teamName}</th>
                        <th className='heading-cell'>B1</th>
                        <th className='heading-cell'>B2</th>
                        <th className='heading-cell'>B3</th>
                        <th className='heading-cell'>B4</th>
                        <th className='heading-cell'>B5</th>
                        <th className='heading-cell'>B6</th>
                        <th className='heading-cell'>TOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        scores.map((player, index) => (

                            <tr>

                                <td className="table-cell">{"PLAYER " + (index + 1)}</td>

                                {
                                    player.balls.map((ball) => (

                                        <td className="table-cell">{ball}</td>

                                    ))
                                }

                                <td className="table-cell">{player.total}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ScoreTable;
