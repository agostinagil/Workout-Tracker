import { CREATE_WORKOUT, REMOVE_WORKOUT } from "../actions/workouts";
import { Workout } from "./Workout";

export interface CreateWorkoutAction {
  type: typeof CREATE_WORKOUT;
  payload: Workout;
}

export interface RemoveWorkoutAction {
  type: typeof REMOVE_WORKOUT;
  payload: { id: string };
}

export type WorkoutAction = CreateWorkoutAction | RemoveWorkoutAction;
