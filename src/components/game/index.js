import React from "react"
import Stage from "../stage"
import Display from "../display"
import Button from "../button"

import { createStage } from "../../constants"

const Game = () => {
  return (
    <div className="game-wrapper">
      <Stage stage={createStage()} />
      <div className="display-container">
        <Display />
        <Display />
        <Display />
      </div>
    </div>
  )
}

export default Game
