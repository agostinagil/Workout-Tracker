import PlanCard from "../../../components/Cards/PlanCard";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";

const TrackingView = () => {
  const { state } = useWorkoutsContext();
  const workouts = state.nextWorkouts.filter(
    (workout) => workout.tracking.length > 0
  );

  const hasFewCards = workouts.length < 3;
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
          className={`grid ${
            hasFewCards
              ? "grid-cols-1 sm:grid-cols-2 gap-6 place-items-center" // Para centrar y organizar en una fila cuando hay 1 o 2 cards
              : "lg:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center"
          } ${
            isOneCard && "grid-cols-1 sm:grid-cols-1"
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
