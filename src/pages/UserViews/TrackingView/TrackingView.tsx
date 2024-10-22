import PlanCard from "../../../components/Cards/PlanCard";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";

const TrackingView = () => {
  const { state } = useWorkoutsContext();
  const workouts = state.nextWorkouts.filter(
    (workout) => workout.tracking.length > 0
  );

  const hasFewCards = workouts.length === 2;
  const isOneCard = workouts.length === 1;

  return (
    <>
      <div className="min-h-screen bg-gradient pt-40">
        <h1 className="text-center font-bold text-gray-50  text-shadow">
          Tracking progress
        </h1>
        <h3 className="mx-auto text-center mt-10 text-2xl font-bold text-gray-900">
          You can do it!
        </h3>
        <div
          className={` ${
            isOneCard
              ? "flex"
              : hasFewCards
              ? "grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
              : "grid lg:grid-cols-3 sm:grid-cols-2 gap-6 "
          } justify-center h-4/5 mt-8`}
        >
          {workouts.map((workout) => (
            <PlanCard workout={workout} isTrack={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrackingView;
