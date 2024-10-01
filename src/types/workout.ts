export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
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
