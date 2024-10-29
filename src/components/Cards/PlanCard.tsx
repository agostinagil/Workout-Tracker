import { useNavigate } from "react-router-dom";
import { Workout } from "../../types/workout";
import Delete from "../../Icons/Delete";
import { useWorkoutsContext } from "../../contexts/WorkoutsContext";

interface PlanCardProps {
  workout: Workout;
  isTrack?: boolean;
}

const PlanCard = ({ workout, isTrack }: PlanCardProps) => {
  const navigate = useNavigate();
  const { setCurrentWorkout } = useWorkoutsContext();

  const handleViewWorkout = () => {
    if (isTrack) {
      localStorage.setItem("currentWorkout", JSON.stringify(workout));
      setCurrentWorkout(workout);
      navigate(`/tracking/${workout.id}`);
    } else {
      navigate(`/workout/${workout.id}`);
    }
  };

  return (
    <>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
          <div
            className={`${isTrack ? "hidden" : "flex justify-end pr-4 pt-4"}`}
          >
            <div className="relative inline-block group">
              <Delete id={workout.id} />
              <span className="w-32 text-xs bg-gray-600 text-white text-center rounded-md p-3 absolute z-10 bottom-full -left-3/4 mb-1 -ml-8 opacity-0 group-hover:opacity-100 transition-opacity after:content-[''] after:absolute after:top-full after:left-2/4 after:-ml-1">
                Delete workout
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-xs px-8 min-w-80 md:min-w-96 lg:min-w-80 mt-8 mb-10  lg:mb-12 ">
            <p className="mt-6 flex items-baseline text-3xl md:text-4xl font-bold tracking-tight text-gray-900 justify-center gap-x-2">
              {workout.name}
            </p>
            <button
              onClick={handleViewWorkout}
              className="mt-10 mx-auto block w-10/12 rounded-md  px-3 py-2 text-center text-sm font-semibold bg-second text-primary shadow-sm hover:bg-primary hover:text-second hover:border-second focus:outline-primary focus:ring-offset-0"
            >
              {isTrack ? "see progress" : "see workout"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
