import { useEffect, useState } from 'react';
import Score from './components/Score';
import ScoreTable from './components/ScoreTable';
import './App.css';

function App() {
  let [timeLeft, setTimeLeft] = useState(60);
  let [currentTeam, setCurrentTeam] = useState(1);

  let [gameOver, setGameOver] = useState(false);

  let [score1, setScore1] = useState(null);
  let [score2, setScore2] = useState(null);

  let [totalScore1, setTotalScore1] = useState(0);
  let [totalScore2, setTotalScore2] = useState(0);

  let [result, setResult] = useState("");
  let [manOfMatch, setManOfMatch] = useState("");

  let [team1Scores, setTeam1Scores] = useState([]);
  let [team2Scores, setTeam2Scores] = useState([]);

  function setTimer(isTeamFinished) {

    if (isTeamFinished) {

      if (currentTeam === 1) {

        setCurrentTeam(2);
        setTimeLeft(60);

      } else {
        setGameOver(true);
      }
    }
  }

  useEffect(() => {
    if (gameOver) return;

    const timeout = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {

      if (currentTeam === 1) {
        setCurrentTeam(2);
        setTimeLeft(60);
      } else if (currentTeam === 2) {
        setGameOver(true);
      }
    }

    return () => clearTimeout(timeout);

  }, [timeLeft, currentTeam, gameOver]);


  function scoreGenerateTeam1() {
    let score = Math.floor(Math.random() * 7);
    setScore1(score);
  }

  function scoreGenerateTeam2() {
    let score = Math.floor(Math.random() * 7);
    setScore2(score);
  }



  function setTotalOne(score) {
    setTotalScore1(score)
  }

  function setTotalTwo(score) {
    setTotalScore2(score)
  }




  function teamOneScores(score) {
    setTeam1Scores(score)
  }

  function teamTwoScores(score) {
    setTeam2Scores(score)
  }



  function showResult() {

    if (totalScore1 > totalScore2) {
      setResult("TEAM 1");
    } else if (totalScore2 > totalScore1) {
      setResult("TEAM 2");
    }

    const team1Players = team1Scores.map((p, i) => ({
      team: "TEAM 1",
      player: `PLAYER ${i + 1}`,
      total: p.total
    }));

    const team2Players = team2Scores.map((p, i) => ({
      team: "TEAM 2",
      player: `PLAYER ${i + 1}`,
      total: p.total
    }));

    const allPlayers = [...team1Players, ...team2Players];

    const allTotals = allPlayers.map(p => p.total);

    const highestScore = Math.max(...allTotals);

    const bestPlayer = allPlayers.find(p => p.total === highestScore);


    setManOfMatch(`${bestPlayer.team} - ${bestPlayer.player}`);

  }


  return (
    <div className='md:px-15'>

      <h1 className='flex justify-center mt-6 font-bold text-3xl'>CRICKET 10</h1>

      <div className='flex justify-center items-center px-8 md:px-15'>

        <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-around 
         border border-gray-300 pt-6 pb-3 w-full mt-8 rounded-2xl shadow-lg '>

          <Score
            team={1}
            scoreGenerate={scoreGenerateTeam1}
            isActive={currentTeam === 1}
            setTimer={setTimer}
            timeLeft={timeLeft}
            totalScore={totalScore1}
            score={score1}
            gameOver={gameOver} />

          <div className='flex flex-col space-y-2 md:space-y-5 items-center justify-center'>

            <h3 className='font-bold text-xl'>TIMER</h3>

            <span className='font-semibold text-xl'>{timeLeft}</span>

          </div>

          <Score
            team={2}
            scoreGenerate={scoreGenerateTeam2}
            isActive={currentTeam === 2}
            setTimer={setTimer}
            timeLeft={timeLeft}
            totalScore={totalScore2}
            score={score2}
            gameOver={gameOver} />

        </div>

      </div>

      <div className='flex flex-col lg:flex-row justify-between w-full mt-12 mb-10 px-8 md:px-0'>
        <ScoreTable teamName="TEAM 1" score={score1} onTotalChange={setTotalOne} onPlayerScoresChange={teamOneScores} />

        <div className='flex flex-col space-y-5 text-center order-3 lg:order-0 mt-15 mb-10 lg:mt-0 lg:mb-0'>

          <button className='bg-blue-500 py-1 shadow-md px-2 font-semibold text-white rounded 
          cursor-pointer hover:bg-blue-700 transition duration-100' onClick={showResult}>GENERATE RESULT</button>

          <h4 className='font-semibold text-lg mt-5'>MATCH WON BY</h4>

          <h4 className='font-semibold text-lg'>{result}</h4>

          <h4 className='font-semibold text-lg mt-4'>MAN OF THE MATCH</h4>

          <h4 className='font-semibold text-lg'>{manOfMatch}</h4>

        </div>

        <ScoreTable teamName="TEAM 2" score={score2} onTotalChange={setTotalTwo} onPlayerScoresChange={teamTwoScores} />

      </div>

    </div>

  );

}

export default App;
