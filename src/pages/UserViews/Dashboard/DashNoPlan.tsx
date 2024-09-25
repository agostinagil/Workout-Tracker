const DashNoPlan = () => {
  return (
    <>
      <div className="h-full w-full  flex flex-col place-content-evenly items-center">
        <button className=" h-16 w-40 bg-second mt-12 rounded-3xl text-lg text-gray-800 font-semibold hover:border-btnBorder hover:border-2 focus:outline-primary focus:ring-offset-0">
          Create a plan
        </button>
        <h1>There are no plans yet</h1>
      </div>
    </>
  );
};

export default DashNoPlan;
