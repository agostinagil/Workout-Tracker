import {
  ADD_EXERCISE,
  CREATE_WORKOUT,
  REMOVE_WORKOUT,
} from "../actions/workouts";
import { Exercise, Workout } from "./workout";

export interface CreateWorkoutAction {
  type: typeof CREATE_WORKOUT;
  payload: Workout;
}

export interface RemoveWorkoutAction {
  type: typeof REMOVE_WORKOUT;
  payload: { id: string };
}

export interface AddExerciseAction {
  type: typeof ADD_EXERCISE;
  payload: { workoutId: string; exercise: Exercise };
}

export type WorkoutAction =
  | CreateWorkoutAction
  | RemoveWorkoutAction
  | AddExerciseAction;
