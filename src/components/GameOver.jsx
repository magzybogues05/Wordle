import React, { useContext } from 'react'
import { AppContext } from '../App'

const GameOver = () => {
    const {gameOver,setGameOver,correctWord,currAttempt}=useContext(AppContext);
    console.log(gameOver);
  return (
    <div className='gameOver'>
        <h3>{(gameOver.guessedWord)?"wooah! You correctly guessed":"Oops! You failed"}</h3>
        <h1>Correct word was: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver
