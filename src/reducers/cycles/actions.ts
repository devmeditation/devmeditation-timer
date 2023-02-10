import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYLE = 'ADD_NEW_CYLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  FINISHED_CURRENT_CYCLE = 'FINISHED_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function finishedCurrentCyleAction() {
  return {
    type: ActionTypes.FINISHED_CURRENT_CYCLE,
  }
}
