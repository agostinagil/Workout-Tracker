export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
  tracking: Tracking;
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

export interface Tracking {
  id: string;
  date: Date | null;
  start: number;
  end: number;
  exercises: { name: string; weight: number };
  duration: number;
}
