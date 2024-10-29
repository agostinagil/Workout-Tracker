import { useParams } from "react-router-dom";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import { useEffect, useState } from "react";
import ExerciseModal from "../../../components/Modals/Exercise";
import WorkoutTable from "../../../components/Tables/WorkoutTable";
import TrackingModal from "../../../components/Modals/Tracking";

const Workout = () => {
  const { id } = useParams();
  const { state, setCurrentWorkout } = useWorkoutsContext();
  const workout = state.nextWorkouts.find((w) => w.id === id);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTrack, setIsOpenTrack] = useState(false);
  const exercises = workout?.exercises || [];

  useEffect(() => {
    if (workout) {
      setCurrentWorkout(workout);
    }
  }, [workout, setCurrentWorkout]);

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
        {workout ? <WorkoutTable /> : <h3>No exercises yet</h3>}
        <div className="flex justify-center mt-8">
          <button
            className=" h-10 w-40 bg-second  rounded-3xl border-white text-sm text-gray-800 font-semibold hover:border-btnBorder focus:outline-primary focus:ring-offset-0 disabled:opacity-75 disabled:cursor-not-allowed"
            onClick={() => setIsOpenTrack(true)}
            disabled={exercises.length === 0}
          >
            Start tracking
          </button>
          {isOpenTrack && <TrackingModal setIsOpen={setIsOpenTrack} />}
        </div>
      </div>
    </>
  );
};

export default Workout;
