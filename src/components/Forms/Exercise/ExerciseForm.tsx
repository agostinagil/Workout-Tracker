import { FormEvent, useState } from "react";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import ShortUniqueId from "short-unique-id";

export interface FormProps {
  id: string;
  setIsOpen: (isOpen: boolean) => void;
}

const ExerciseForm = ({ id, setIsOpen }: FormProps) => {
  const { state, addExercise } = useWorkoutsContext();
  const workout = state.nextWorkouts.find((w) => w.id === id);

  const [exercise, setExercise] = useState({
    id: "",
    name: "",
    sets: 0,
    repetitions: 0,
    rpe: 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (workout) {
      const uid = new ShortUniqueId({ length: 8 });
      const newExercise = {
        id: uid.rnd(),
        name: exercise.name,
        sets: exercise.sets,
        repetitions: exercise.repetitions,
        rpe: exercise.rpe,
      };
      addExercise(workout.id, newExercise);
      setExercise({ id: "", name: "", sets: 0, repetitions: 0, rpe: 0 });
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className="bg-second w-full p-20 border-none">
        <form onSubmit={handleSubmit}>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="exercise" className="label-form">
                Exercise
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="exercise"
                  id="exercise"
                  value={exercise.name}
                  onChange={(e) =>
                    setExercise({ ...exercise, name: e.target.value })
                  }
                  autoComplete="exercise"
                  className="input-form"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="sets" className="label-form">
                Sets
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="sets"
                  id="sets"
                  value={exercise.sets}
                  onChange={(e) =>
                    setExercise({ ...exercise, sets: +e.target.value })
                  }
                  autoComplete="sets"
                  className="input-form"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="repetitions" className="label-form">
                Repetitions
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="repetitions"
                  id="repetitions"
                  value={exercise.repetitions}
                  onChange={(e) =>
                    setExercise({ ...exercise, repetitions: +e.target.value })
                  }
                  autoComplete="repetitions"
                  className="input-form"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="rpe" className="label-form">
                RPE
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rpe"
                  id="rpe"
                  value={exercise.rpe}
                  onChange={(e) =>
                    setExercise({ ...exercise, rpe: +e.target.value })
                  }
                  autoComplete="rpe"
                  className="input-form"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 w-28 mx-auto block bg-third font-medium text-white"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default ExerciseForm;
