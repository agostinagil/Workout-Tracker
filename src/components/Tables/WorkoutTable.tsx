import { useState } from "react";
import { useWorkoutsContext } from "../../contexts/WorkoutsContext";
import { Exercise, Workout } from "../../types/workout";
import ExerciseModal from "../Modals/Exercise";

const tableTitles = [
  { name: "Exercises", border: true },
  { name: "Sets", border: true },
  { name: "Reps", border: true },
  { name: "RPE", border: true },
  { name: "", border: false },
];

export interface TableProps {
  workout: Workout;
}

// const WorkoutTable = ({ workout }: TableProps) => {
const WorkoutTable = () => {
  const { removeExercise } = useWorkoutsContext();
  const [isOpen, setIsOpen] = useState(false);

  const { setCurrentExercise, currentWorkout, currentExercise } =
    useWorkoutsContext();

  const handleEditClick = (exercise: Exercise) => {
    setCurrentExercise(exercise);

    setIsOpen(true);
  };

  return (
    <>
      <div className="w-8/12 min-w-full flex justify-center align-middle sm:px-6 mt-12">
        <table className="intent-0 border-collapse w-8/12 bg-transparencies-300 rounded-md">
          <thead>
            <tr>
              {tableTitles.map((title, i) => (
                <th
                  key={i}
                  className={`py-3 px-4 text-left text-base font-semibold ${
                    title.border ? "border-r-6 border-gray-400" : "border-r-0"
                  }`}
                >
                  {title.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentWorkout?.exercises.map((exercise) => (
              <tr className="border-t-6 border-gray-400" key={exercise.id}>
                <td className="py-4 px-4 text-left text-sm border-r-6 border-gray-400 ">
                  {exercise.name}
                </td>
                <td className="py-3 px-4 text-left text-sm border-r-6 border-gray-400 ">
                  {exercise.sets}
                </td>
                <td className="py-3 px-4 text-left text-sm border-r-6 border-gray-400 ">
                  {exercise.repetitions}
                </td>
                <td className="py-3 px-4 text-left text-sm border-r-6 border-gray-400 ">
                  {exercise.rpe}
                </td>
                <td className="py-3 pl-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4 cursor-pointer mx-auto"
                    onClick={() =>
                      removeExercise(currentWorkout.id, exercise.id)
                    }
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td
                  className="py-3 pr-1 text-left font-semibold text-sm cursor-pointer"
                  onClick={() => handleEditClick(exercise)}
                >
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && currentExercise && currentWorkout && (
          <ExerciseModal id={currentWorkout.id} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
};

export default WorkoutTable;
