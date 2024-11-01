import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

import { initialState, workoutsReducer } from "../reducers/workoutsReducer";
import {
  CREATE_WORKOUT,
  REMOVE_TRACKING,
  REMOVE_WORKOUT,
  START_TRACKING,
} from "../actions/workouts";
import {
  REMOVE_EXERCISE,
  ADD_EXERCISE,
  UPDATE_EXERCISE,
} from "../actions/exercises";
import { Exercise, Tracking, Workout, WorkoutState } from "../types/workout";
import { WorkoutAction } from "../types/workoutActionTypes";

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
  currentWorkout: Workout | null;
  setCurrentWorkout: (workout: Workout | null) => void;
  currentExercise: Exercise | null;
  setCurrentExercise: (exercise: Exercise | null) => void;
  startTracking: (workoutId: string, tracking: Tracking) => void;
  removeTracking: (trackingId: string) => void;
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
  const [currentWorkout, setCurrentWorkout] = useState<Workout | null>(null);
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);

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

  const startTracking = (workoutId: string, tracking: Tracking) => {
    dispatch({ type: START_TRACKING, payload: { workoutId, tracking } });
  };

  const removeTracking = (trackingId: string) => {
    dispatch({ type: REMOVE_TRACKING, payload: { trackingId } });
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
        currentWorkout,
        setCurrentWorkout,
        currentExercise,
        setCurrentExercise,
        startTracking,
        removeTracking,
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
