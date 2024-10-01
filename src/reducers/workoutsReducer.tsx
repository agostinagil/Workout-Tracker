import {
  ADD_EXERCISE,
  CREATE_WORKOUT,
  REMOVE_WORKOUT,
} from "../actions/workouts";
import { WorkoutState } from "../types/workout";
import {
  AddExerciseAction,
  CreateWorkoutAction,
  RemoveWorkoutAction,
  WorkoutAction,
} from "../types/actionTypes";

const isRemoveAction = (action: WorkoutAction): action is RemoveWorkoutAction =>
  action.type === REMOVE_WORKOUT;

const isCreateAction = (action: WorkoutAction): action is CreateWorkoutAction =>
  action.type === CREATE_WORKOUT;

const isAddExerciseAction = (
  action: WorkoutAction
): action is AddExerciseAction => action.type === ADD_EXERCISE;

export const initialState: WorkoutState = {
  nextWorkouts: JSON.parse(localStorage.getItem("nextWorkouts") || "[]"),
};

export const workoutsReducer = (
  state: WorkoutState = initialState,
  action: WorkoutAction
): WorkoutState => {
  switch (action.type) {
    case CREATE_WORKOUT: {
      if (isCreateAction(action)) {
        const newWorkout = { ...action.payload, exercises: [] };
        const newWorkouts = [...state.nextWorkouts, newWorkout];
        localStorage.setItem("nextWorkouts", JSON.stringify(newWorkouts));

        return {
          ...state,
          nextWorkouts: newWorkouts,
        };
      }
      return state;
    }
    case REMOVE_WORKOUT: {
      if (isRemoveAction(action)) {
        const { id } = action.payload;
        const updatedWorkouts = state.nextWorkouts.filter(
          (nextWorkout) => nextWorkout.id !== id
        );
        localStorage.setItem("nextWorkouts", JSON.stringify(updatedWorkouts));
        return {
          ...state,
          nextWorkouts: updatedWorkouts,
        };
      }
      return state;
    }
    case ADD_EXERCISE: {
      if (isAddExerciseAction(action)) {
        const { workoutId, exercise } = action.payload;
        const updatedWorkouts = state.nextWorkouts.map((workout) =>
          workout.id === workoutId
            ? { ...workout, exercises: [...workout.exercises, exercise] }
            : workout
        );
        localStorage.setItem("nextWorkouts", JSON.stringify(updatedWorkouts));
        return {
          ...state,
          nextWorkouts: updatedWorkouts,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
