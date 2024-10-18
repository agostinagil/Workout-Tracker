import { useWorkoutsContext } from "../../contexts/WorkoutsContext";

const TrackingTable = () => {
  const { state, currentWorkout } = useWorkoutsContext();
  const exercises = state.nextWorkouts
    .filter((w) => w === currentWorkout)
    .flatMap((w) => w.exercises.map((ex) => ex.name));

  return (
    <>
      <div className=" min-w-full flex justify-center align-middle sm:px-2 my-8">
        <table className="intent-0 border-collapse w-3/4 bg-transparencies-300 rounded-md">
          <tr>
            <th className="py-3 px-4 text-left text-base font-semibold">
              Exercise
            </th>
            <th className="py-3 px-4 text-left text-base font-semibold">
              Weight
            </th>
          </tr>
          <tbody>
            {exercises.map((ex) => (
              <tr className="border-t-6 border-gray-400">
                <td className="py-4 px-4 text-left text-sm border-r-6 border-gray-400 ">
                  {ex}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrackingTable;
