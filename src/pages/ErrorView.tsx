import error from "../assets/error401.png";

const ErrorView = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen pt-24 flex flex-col justify-center items-center px-8">
        <img src={error} className="h-72" />
        <p className="text-primary font-semibold sm:text-xl">
          Error 401: Unauthorized.{" "}
        </p>
        <p className="sm:text-2xl mt-10 text-gray-900">
          Uh oh, that's embarrassing. It seems you don't have authorization for
          this page.
        </p>
      </div>
    </>
  );
};

export default ErrorView;
