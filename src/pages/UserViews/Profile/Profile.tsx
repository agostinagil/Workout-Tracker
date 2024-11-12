import UserCard from "../../../components/Cards/UserCard";
// import { useAuthContext } from "../../../contexts/AuthContext";

const Profile = () => {
  //   const { state } = useAuthContext();
  //   const loggedUser = state.users.find((user) => user.isLoggedIn === true);
  return (
    <>
      <div className="min-h-screen bg-gradient bg-no-repeat bg-center bg-cover flex flex-col pt-24">
        <h4 className="text-2xl text-center text-gray-800 font-semibold">
          User profile
        </h4>
        <UserCard />
      </div>
    </>
  );
};

export default Profile;
