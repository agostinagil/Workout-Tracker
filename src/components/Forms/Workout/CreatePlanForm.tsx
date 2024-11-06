import ShortUniqueId from "short-unique-id";
import "./createPlan.css";
import { Workout } from "../../../types/workout";
import { useWorkoutsContext } from "../../../contexts/WorkoutsContext";
import { useAuthContext } from "../../../contexts/AuthContext";

export interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

const CreatePlanForm = ({ setIsOpen }: ModalProps) => {
  const { createWorkout } = useWorkoutsContext();
  const { state } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uid = new ShortUniqueId({ length: 10 });
    const formData = new FormData(e.currentTarget);
    const workout = formData.get("workout") as string;
    const user = state.users.find((u) => u.isLoggedIn === true);

    if (user) {
      const newWorkout: Workout = {
        id: uid.rnd(),
        name: workout,
        userId: user.id,
        exercises: [],
        tracking: [],
      };
      createWorkout(newWorkout);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="bg-second w-full p-12 border-none ">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="workout"
              className="block text-xl text-center font-semibold leading-6 text-gray-900"
            >
              Workout name
            </label>
            <div className="mt-8">
              <input
                id="workout"
                name="workout"
                type="text"
                autoComplete="workout"
                className="block w-8/12 pl-2 rounded-md border-0 py-1.5 mx-auto text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-third  sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <button className="mt-12 w-28 mx-auto block bg-third font-medium text-white">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePlanForm;

{
  /* <div className="sm:col-span-3">
              <label htmlFor="exercise" className="label-form">
                Exercise
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="exercise"
                  id="exercise"
                  autoComplete="exercise"
                  className="input-form"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="rpe" className="label-form">
                RPE
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="rpe"
                  id="rpe"
                  autoComplete="rpe"
                  className="input-form"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="sets" className="label-form">
                Sets
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="sets"
                  id="sets"
                  autoComplete="sets"
                  className="input-form"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="repetitions" className="label-form">
                Repetitions
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="repetitions"
                  id="repetitions"
                  autoComplete="repetitions"
                  className="input-form"
                />
              </div>
            </div> */
}
{
  /* <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pause
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */
}
