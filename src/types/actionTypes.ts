import {
  CREATE_WORKOUT,
  REMOVE_WORKOUT,
  START_TRACKING,
} from "../actions/workouts";
import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  UPDATE_EXERCISE,
} from "../actions/exercises";
import { Exercise, Tracking, Workout } from "./workout";

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

export interface RemoveExerciseAction {
  type: typeof REMOVE_EXERCISE;
  payload: { workoutId: string; exerciseId: string };
}

export interface UpdateExerciseAction {
  type: typeof UPDATE_EXERCISE;
  payload: { workoutId: string; exerciseId: string; updatedExercise: Exercise };
}

export interface StartTrackingAction {
  type: typeof START_TRACKING;
  payload: { workoutId: string; tracking: Tracking };
}

export type WorkoutAction =
  | CreateWorkoutAction
  | RemoveWorkoutAction
  | AddExerciseAction
  | RemoveExerciseAction
  | UpdateExerciseAction
  | StartTrackingAction;
