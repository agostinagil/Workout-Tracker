const SingleTracking = () => {
  const workout = localStorage.getItem("currentWorkout") || "";
  const newWork = workout ? JSON.parse(workout) : null;
  const tracking = newWork.tracking;

  return (
    <div className="min-h-screen bg-gradient pt-28">
      <h1 className="text-center mb-10 font-bold text-white text-shadow">
        Progress {newWork.name}
      </h1>
      {tracking?.map((track, i) => (
        <div key={i}>
          <h5 className="font-semibold text-xl text-center my-4 text-white">
            {track.date}
          </h5>
          <table className="intent-0 border-collapse w-1/2 mx-auto bg-transparencies-300 rounded-md">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-base font-semibold">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-base font-semibold">
                  Weight
                </th>
              </tr>
            </thead>
            <tbody>
              {track.exercises.map((ex, i) => (
                <tr className="border-t-6 border-gray-400" key={i}>
                  <td className="py-4 px-4 text-left text-sm border-r-6 border-gray-400">
                    {ex.name}
                  </td>
                  <td className="py-4 px-4 text-left text-sm  border-gray-400">
                    {ex.weight} kg
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="h-px my-8 bg-gray-200 border-0 " />
        </div>
      ))}
    </div>
  );
};

export default SingleTracking;
