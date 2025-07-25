//import { useState } from 'react'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>Word Worm</h1>
      <GameBoard rows={20} cols={50}>
        {/* Snake and Food components will go here later */}
      </GameBoard>
    </div>
  )
}

export default App
