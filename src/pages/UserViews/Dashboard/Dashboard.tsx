import CreateWorkoutBtn from "../../../components/Buttons/CreateWorkoutBtn";
import PlanCard from "../../../components/Cards/PlanCard";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import DashNoPlan from "./DashNoPlan";

const Dashboard = () => {
  const { state } = useWorkoutsContext();
  const { state: authState } = useAuthContext();

  const loggedUser = authState.users.find((u) => u.isLoggedIn === true);
  const loggedUserId = loggedUser?.id;

  const workouts = state.nextWorkouts.filter((w) => w.userId === loggedUserId);
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
                className={` ${
                  isOneCard
                    ? "flex"
                    : hasFewCards
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
                    : "grid lg:grid-cols-3 sm:grid-cols-2 gap-6 "
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
