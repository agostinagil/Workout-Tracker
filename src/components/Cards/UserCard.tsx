import { useAuthContext } from "../../contexts/AuthContext";

const UserCard = () => {
  const { state } = useAuthContext();
  const loggedUser = state.users.find((user) => user.isLoggedIn === true);
  return (
    <>
      <div className="flex flex-col bg-white w-2/3 mx-auto mt-10 rounded-md pb-8">
        <div className="rounded-full bg-primary w-20 h-20 mx-auto relative -top-3"></div>
        <div className="text-2xl text-gray-600 font-medium mx-auto">
          {loggedUser?.username}
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <div className="w-1/4">
            <p className=" w-2/4 text-gray-500 bg-gray-200 text-center border rounded-md border-gray-300 mx-auto">
              @
            </p>
          </div>
          <p className="w-2/4">{loggedUser?.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
