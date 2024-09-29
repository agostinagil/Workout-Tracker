const PlanCard = () => {
  return (
    <>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="mt-6 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 justify-center gap-x-2">
              name
            </p>
            <a
              href="#"
              className="mt-10 block w-full rounded-md  px-3 py-2 text-center text-sm font-semibold bg-second text-primary shadow-sm hover:bg-primary hover:text-second"
            >
              see workout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
