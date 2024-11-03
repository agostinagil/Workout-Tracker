import Login from "../Forms/Login";

export interface TableProps {
  setIsOpenLogin: (isOpen: boolean) => void;
}

const LoginModal = ({ setIsOpenLogin }: TableProps) => {
  return (
    <>
      <div
        className="bg-black bg-opacity-80 w-screen h-screen fixed top-0 left-0 z-0"
        onClick={() => setIsOpenLogin(false)}
      />
      <div className=" fixed flex justify-center items-center z-10 w-full top-1/4 h-2/4 ">
        <div className=" rounded-2xl shadow-custom w-full  ">
          <div className="w-4/5 sm:w-3/5 mx-auto bg-white  flex justify-center items-center   overflow-hidden rounded-2xl">
            <Login setIsOpen={setIsOpenLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
