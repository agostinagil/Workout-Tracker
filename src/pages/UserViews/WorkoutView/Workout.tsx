import { useParams } from "react-router-dom";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import { useState } from "react";
import ExerciseModal from "../../../components/Modals/Exercise";
import WorkoutTable from "../../../components/Tables/WorkoutTable";
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
            Add exercise
          </button>
          {isOpen && id && <ExerciseModal setIsOpen={setIsOpen} id={id} />}
        </div>
        {workout ? (
          <WorkoutTable workout={workout} />
        ) : (
          <h3>No exercises yet</h3>
        )}
      </div>
    </>
  );
};

export default Workout;
