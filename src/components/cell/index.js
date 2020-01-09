import React from "react"
import { StyledCell } from "./style"
import { BLOCKS } from "../../constants"

const Cell = ({ type }) => (
  <StyledCell type={type} color={BLOCKS[type].color}></StyledCell>
)

export default Cell
