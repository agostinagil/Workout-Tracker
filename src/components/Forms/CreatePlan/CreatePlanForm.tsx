import "./createPlan.css";

const CreatePlanForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-second w-full p-20 border-none">
        <form onSubmit={handleSubmit}>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-5">
              <label
                htmlFor="workout"
                className="block text-lg font-semibold leading-6 text-gray-900"
              >
                Workout name
              </label>
              <div className="mt-2">
                <input
                  id="workout"
                  name="workout"
                  type="text"
                  autoComplete="workout"
                  className="block w-7/12 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-third  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
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
            </div>
            {/* <div className="sm:col-span-3">
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
            </div> */}
          </div>

          <button className="mt-10 w-28 mx-auto block bg-third font-medium text-white">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePlanForm;
