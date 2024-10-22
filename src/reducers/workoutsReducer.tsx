import {
  CREATE_WORKOUT,
  REMOVE_WORKOUT,
  START_TRACKING,
} from "../actions/workouts";
import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  REMOVE_EXERCISE,
} from "../actions/exercises";
import { WorkoutState } from "../types/workout";
import {
  AddExerciseAction,
  CreateWorkoutAction,
  RemoveExerciseAction,
  RemoveWorkoutAction,
  StartTrackingAction,
  UpdateExerciseAction,
  WorkoutAction,
} from "../types/actionTypes";

const isRemoveAction = (action: WorkoutAction): action is RemoveWorkoutAction =>
  action.type === REMOVE_WORKOUT;

const isCreateAction = (action: WorkoutAction): action is CreateWorkoutAction =>
  action.type === CREATE_WORKOUT;

const isAddExerciseAction = (
  action: WorkoutAction
): action is AddExerciseAction => action.type === ADD_EXERCISE;

const isRemoveExerciseAction = (
  action: WorkoutAction
): action is RemoveExerciseAction => action.type === REMOVE_EXERCISE;

const isUpdateExerciseAction = (
  action: WorkoutAction
): action is UpdateExerciseAction => action.type === UPDATE_EXERCISE;

const isStartTrackingAction = (
  action: WorkoutAction
): action is StartTrackingAction => action.type === START_TRACKING;

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
        const newWorkout = {
          ...action.payload,
          exercises: [],
          tracking: [],
        };
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
    case REMOVE_EXERCISE: {
      if (isRemoveExerciseAction(action)) {
        const { workoutId, exerciseId } = action.payload;
        const updatedWorkouts = state.nextWorkouts.map((workout) => {
          if (workout.id === workoutId) {
            return {
              ...workout,
              exercises: workout.exercises.filter((ex) => ex.id !== exerciseId),
            };
          }
          return workout;
        });
        localStorage.setItem("nextWorkouts", JSON.stringify(updatedWorkouts));
        return {
          ...state,
          nextWorkouts: updatedWorkouts,
        };
      }
      return state;
    }
    case UPDATE_EXERCISE: {
      if (isUpdateExerciseAction(action)) {
        const { workoutId, exerciseId, updatedExercise } = action.payload;
        console.log(workoutId, exerciseId, updatedExercise);
        const updatedWorkouts = state.nextWorkouts.map((workout) => {
          if (workout.id === workoutId) {
            const updatedExercises = workout.exercises.map((exercise) => {
              if (exercise.id === exerciseId) {
                console.log(exercise.id);
                return {
                  ...exercise,
                  ...updatedExercise,
                };
              }
              return exercise;
            });

            return {
              ...workout,
              exercises: updatedExercises,
            };
          }
          return workout;
        });
        localStorage.setItem("nextWorkouts", JSON.stringify(updatedWorkouts));
        return {
          ...state,
          nextWorkouts: updatedWorkouts,
        };
      }
      return state;
    }
    case START_TRACKING: {
      if (isStartTrackingAction(action)) {
        const { workoutId, tracking } = action.payload;
        const newTracking = state.nextWorkouts.map((workout) =>
          workout.id === workoutId
            ? { ...workout, tracking: [...workout.tracking, tracking] }
            : workout
        );
        localStorage.setItem("nextWorkouts", JSON.stringify(newTracking));
        return {
          ...state,
          nextWorkouts: newTracking,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
