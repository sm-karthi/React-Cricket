function ScoreTable({ teamName }) {
    let rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(
            <tr>
                <td className='table-cell'>{`PLAYER ${i}`}</td>
                <td className='table-cell'></td>
                <td className='table-cell'></td>
                <td className='table-cell'></td>
                <td className='table-cell'></td>
                <td className='table-cell'></td>
                <td className='table-cell'></td>
                <td className='table-cell'></td>
            </tr>
        );
    }

    return (
        <div className='flex flex-col text-center'>
            <h4 className='font-semibold text-lg'>{teamName} SCORE BOARD</h4>

            <table className="border-collapse border border-gray-400 mt-5">

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
                    {rows}
                </tbody>
                
            </table>
        </div>
    );
}

export default ScoreTable;
