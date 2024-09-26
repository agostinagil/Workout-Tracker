import { useState } from "react";
import CreatePlan from "../../../components/Modals/CreatePlan";

const DashNoPlan = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-full w-full  flex flex-col place-content-evenly items-center">
        <div className="h-2/5  ">
          <button
            className=" h-16 w-40 bg-second mt-12 rounded-3xl text-lg text-gray-800 font-semibold hover:border-btnBorder hover:border-2 focus:outline-primary focus:ring-offset-0"
            onClick={() => setIsOpen(true)}
          >
            Create a plan
          </button>
        </div>
        {isOpen && <CreatePlan setIsOpen={setIsOpen} />}
        <div className="h-full">
          <h1 className="font-medium text-gray-800">There are no plans yet</h1>
        </div>
      </div>
    </>
  );
};

export default DashNoPlan;
