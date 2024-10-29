import { FormEvent, useState } from "react";
import { useWorkoutsContext } from "../../contexts/WorkoutsContext";
import ShortUniqueId from "short-unique-id";

export interface TableProps {
  setIsOpen: (isOpen: boolean) => void;
}

const TrackingTable = ({ setIsOpen }: TableProps) => {
  const { state, currentWorkout, startTracking } = useWorkoutsContext();
  const [weights, setWeights] = useState<{ [key: string]: number }>({});

  const exercises = state.nextWorkouts
    .filter((w) => w === currentWorkout)
    .flatMap((w) => w.exercises.map((ex) => ex.name));

  const handleWeightChange = (exercise: string, weight: number) => {
    setWeights((prevWeights) => ({
      ...prevWeights,
      [exercise]: weight,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emptyFields = exercises.some(
      (ex) => weights[ex] === undefined || weights[ex] === null
    );

    if (emptyFields) {
      alert("Please fill the weights");
      return;
    }

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;

    const uid = new ShortUniqueId();
    const id = uid.rnd();

    const trackingData = {
      id: id,
      date: formattedDate,
      exercises: exercises.map((exercise) => ({
        name: exercise,
        weight: weights[exercise],
      })),
    };
    if (currentWorkout?.id) {
      startTracking(currentWorkout.id, trackingData);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className=" min-w-full flex-col justify-center items-center align-middle sm:px-2 my-8 ">
        <table className="intent-0 border-collapse w-3/4 mx-auto bg-transparencies-300 rounded-md">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-base font-semibold">
                Exercise
              </th>
              <th className="py-3 px-4 text-left text-base font-semibold">
                Weight (kg)
              </th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex, i) => (
              <tr className="border-t-6 border-gray-400" key={i}>
                <td className="py-4 px-4 text-left text-sm border-r-6 border-gray-400 ">
                  {ex}
                </td>
                <td>
                  <input
                    type="number"
                    min={1}
                    name="weight"
                    required
                    value={weights[ex] || ""}
                    onChange={(e) =>
                      handleWeightChange(ex, Number(e.target.value))
                    }
                    className="input-form"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" w-40 mx-auto">
          <button
            className="h-10 w-40 bg-primary  rounded-3xl border-white text-sm text-gray-800 font-semibold hover:border-btnBorder focus:outline-primary focus:ring-offset-0 mt-4"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default TrackingTable;
