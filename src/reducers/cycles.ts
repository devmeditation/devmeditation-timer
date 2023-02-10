export interface Cycle {
  id: string
  task: string
  muinutesAmount: number
  cycleStartDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export enum ActionTypes {
  ADD_NEW_CYLE = 'ADD_NEW_CYLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  FINISHED_CURRENT_CYCLE = 'FINISHED_CURRENT_CYCLE',
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }

    case ActionTypes.FINISHED_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }

    default:
      return state
  }
}
