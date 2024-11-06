import { useAuthContext } from "../contexts/AuthContext";
import { useWorkoutsContext } from "../contexts/WorkoutsContext";

const useUserWorkouts = () => {
  const { state: workoutsState } = useWorkoutsContext();
  const { state: authState } = useAuthContext();

  const loggedUser = authState.users.find((user) => user.isLoggedIn === true);
  const loggedUserId = loggedUser?.id;

  const userWorkouts = workoutsState.nextWorkouts.filter(
    (workout) => workout.userId === loggedUserId
  );

  return userWorkouts;
};

export default useUserWorkouts;
