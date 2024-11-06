export interface Workout {
  id: string;
  name: string;
  userId: string;
  exercises: Exercise[];
  tracking: Tracking[];
}

export interface WorkoutState {
  nextWorkouts: Workout[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  repetitions: number;
  rpe: number;
}

export interface TrackExercise {
  name: string;
  weight: number;
}

export interface Tracking {
  id: string;
  date: string;
  exercises: TrackExercise[];
}
