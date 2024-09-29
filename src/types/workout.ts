export interface Workout {
  id: string;
  name: string;
}

export interface WorkoutState {
  nextWorkouts: Workout[];
}
