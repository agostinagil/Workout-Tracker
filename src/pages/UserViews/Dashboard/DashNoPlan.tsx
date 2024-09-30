import CreateWorkoutBtn from "../../../components/Buttons/CreateWorkoutBtn";

const DashNoPlan = () => {
  return (
    <>
      <div className="h-full w-full  flex flex-col place-content-evenly items-center">
        <CreateWorkoutBtn />
        <div className="h-full">
          <h1 className="font-medium text-gray-800">There are no plans yet</h1>
        </div>
      </div>
    </>
  );
};

export default DashNoPlan;
