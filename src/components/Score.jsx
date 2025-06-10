import React from 'react'

function Score({team}) {
    return (

        <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'> TEAM {team} SCORE</h3>

            <span className='font-semibold text-xl'>0</span>

            <button className='bg-blue-400 w-14 py-1 shadow-md px-1 font-semibold text-white rounded cursor-pointer hover:bg-blue-500 transition duration-100'>HIT {team}</button>

        </div>

    )
}

export default Score
