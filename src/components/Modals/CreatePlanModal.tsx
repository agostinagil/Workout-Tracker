import CreatePlanForm from "../Forms/Workout/CreatePlanForm";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

const CreatePlan = ({ setIsOpen }: Props) => {
  return (
    <>
      <div
        className="bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-0"
        onClick={() => setIsOpen(false)}
      />
      <div className=" fixed top-1/3 left-1/2 transform -translate-x-1/2 z-10 w-1/2 ">
        <div className="bg-white rounded-2xl shadow-custom w-full ">
          <div className="h-auto  w-full  bg-white flex justify-center items-center  overflow-hidden rounded-2xl">
            <CreatePlanForm />
          </div>
          {/* <div className="text-center mt-2">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              close
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CreatePlan;
