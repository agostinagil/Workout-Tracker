import CreateWorkoutBtn from "../../../components/Buttons/CreateWorkoutBtn";
import PlanCard from "../../../components/Cards/PlanCard";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import DashNoPlan from "./DashNoPlan";

const Dashboard = () => {
  const { state } = useWorkoutsContext();
  const workouts = state.nextWorkouts;
  const hasFewCards = workouts.length < 3;
  const isOneCard = workouts.length === 1;

  return (
    <>
      <div className="min-h-screen bg-gradient bg-no-repeat bg-center bg-cover flex flex-col justify-center">
        {workouts.length > 0 ? (
          <>
            <div className=" flex flex-col place-content-center justify-center  py-24 ">
              <h1 className="text-center text-white font-extrabold text-shadow ">
                Choose your next workout!
              </h1>
              <CreateWorkoutBtn />
              <div
                className={`grid ${
                  hasFewCards
                    ? "grid-cols-1 sm:grid-cols-2 gap-6 place-items-center" // Para centrar y organizar en una fila cuando hay 1 o 2 cards
                    : "lg:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center"
                } ${
                  isOneCard && "grid-cols-1 sm:grid-cols-1"
                } justify-center h-4/5 mt-8`}
              >
                {state.nextWorkouts.map((workout, i) => (
                  <PlanCard key={i} workout={workout} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <DashNoPlan />
        )}
      </div>
    </>
  );
};

export default Dashboard;
