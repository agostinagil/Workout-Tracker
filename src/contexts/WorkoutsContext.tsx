import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

import { initialState, workoutsReducer } from "../reducers/workoutsReducer";
import {
  ADD_EXERCISE,
  CREATE_WORKOUT,
  REMOVE_EXERCISE,
  REMOVE_WORKOUT,
  UPDATE_EXERCISE,
} from "../actions/workouts";
import { Exercise, Workout, WorkoutState } from "../types/workout";
import { WorkoutAction } from "../types/actionTypes";

interface WorkoutsContextType {
  state: WorkoutState;
  dispatch: Dispatch<WorkoutAction>;
  createWorkout: (workout: Workout) => void;
  removeWorkout: (id: string) => void;
  addExercise: (workoutId: string, exercise: Exercise) => void;
  removeExercise: (workoutId: string, exerciseId: string) => void;
  updateExercise: (
    workoutId: string,
    exerciseId: string,
    updatedExercise: Exercise
  ) => void;
}

interface WorkoutsProviderProps {
  children: ReactNode;
}

export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(
  undefined
);

const { Provider } = WorkoutsContext;

export const WorkoutsProvider = ({ children }: WorkoutsProviderProps) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialState);

  const createWorkout = (workout: Workout) => {
    dispatch({ type: CREATE_WORKOUT, payload: workout });
  };

  const removeWorkout = (id: string) => {
    dispatch({ type: REMOVE_WORKOUT, payload: { id } });
  };

  const addExercise = (workoutId: string, exercise: Exercise) => {
    dispatch({ type: ADD_EXERCISE, payload: { workoutId, exercise } });
  };

  const removeExercise = (workoutId: string, exerciseId: string) => {
    dispatch({ type: REMOVE_EXERCISE, payload: { workoutId, exerciseId } });
  };

  const updateExercise = (
    workoutId: string,
    exerciseId: string,
    updatedExercise: Exercise
  ) => {
    // console.log(workoutId, exerciseId, exercise);
    dispatch({
      type: UPDATE_EXERCISE,
      payload: { workoutId, exerciseId, updatedExercise },
    });
  };

  return (
    <Provider
      value={{
        state,
        dispatch,
        createWorkout,
        removeWorkout,
        addExercise,
        removeExercise,
        updateExercise,
      }}
    >
      {children}
    </Provider>
  );
};

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (context === undefined) {
    throw new Error(
      "useWorkoutContext must be initialized within WorkoutsProvider"
    );
  }
  return context;
};
