import { ActionTypes } from "./action";

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedAt?: Date;
    finishedAt?: Date;
  }

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}



export function cyclesReducer(state: CycleState, action: any){
      switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
          };

        case ActionTypes.INTERRUPT_CURRENT_CYCLE:
          return {
            ...state,
            cycles: state.cycles.map((cycle) =>
              cycle.id === state.activeCycleId
            ? { ...cycle, interruptedAt: new Date() }
            : cycle
          ),
          
            activeCycleId: null,
          };
          

        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
          return {
            ...state,
            cycles: state.cycles.map((cycle) =>
              cycle.id === state.activeCycleId
                ? { ...cycle, finishedAt: new Date() }
                : cycle
            ),
            activeCycleId: null,
          };

        default:
          return state;
      }
    }


