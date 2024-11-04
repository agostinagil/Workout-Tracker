import RegisterForm from "../Forms/Register";

export interface TableProps {
  setIsOpen: (isOpen: boolean) => void;
}

const RegisterModal = ({ setIsOpen }: TableProps) => {
  return (
    <>
      <div
        className="bg-black bg-opacity-80 w-screen h-screen fixed top-0 left-0 z-0"
        onClick={() => setIsOpen(false)}
      />
      <div className=" fixed flex justify-center items-center z-10 left-416 sm:left-75 md:left-1/4 w-11/12 sm:w-3/4 md:w-1/2 top-1/4 h-2/4 ">
        <div className=" rounded-2xl shadow-custom w-full ">
          <div className="w-full  bg-white  flex justify-center items-center  overflow-hidden rounded-2xl">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
