import { useParams } from "react-router-dom";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import { useState } from "react";
import ExerciseModal from "../../../components/Modals/Exercise";
// import { FormEvent, useState } from "react";
// import ShortUniqueId from "short-unique-id";

const Workout = () => {
  const { id } = useParams();
  const { state } = useWorkoutsContext();
  const workout = state.nextWorkouts.find((w) => w.id === id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient ">
        <h1 className="pt-28 text-center">{workout?.name}</h1>
        <div className="flex justify-center mt-8">
          <button
            className=" h-16 w-44 bg-second rounded-3xl border-white text-lg text-gray-800 font-semibold hover:border-btnBorder focus:outline-primary focus:ring-offset-0"
            onClick={() => setIsOpen(true)}
          >
            Create exercise
          </button>
          {isOpen && id && <ExerciseModal setIsOpen={setIsOpen} id={id} />}
        </div>
        <h2>Exercises</h2>
        <ul>
          {workout?.exercises.map((exercise) => (
            <li key={exercise.id}>
              {exercise.name} - {exercise.sets} sets, {exercise.repetitions}{" "}
              reps, {exercise.rpe} rpe
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Workout;
