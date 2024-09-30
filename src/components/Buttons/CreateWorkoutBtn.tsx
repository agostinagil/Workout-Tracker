import { useState } from "react";
import CreatePlan from "../Modals/CreatePlanModal";

const CreateWorkoutBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center mt-8">
        <button
          className=" h-16 w-40 bg-second rounded-3xl border-white text-lg text-gray-800 font-semibold hover:border-btnBorder hover:border-2 focus:outline-primary focus:ring-offset-0"
          onClick={() => setIsOpen(true)}
        >
          Create a plan
        </button>
      </div>
      {isOpen && <CreatePlan setIsOpen={setIsOpen} />}
    </>
  );
};

export default CreateWorkoutBtn;
