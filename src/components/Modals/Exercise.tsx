import ExerciseForm from "../Forms/Exercise/ExerciseForm";

export interface ExerciseModalProps {
  setIsOpen: (isOpen: boolean) => void;
  id: string;
}

const ExerciseModal = ({ setIsOpen, id }: ExerciseModalProps) => {
  return (
    <>
      <div
        className="bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-0"
        onClick={() => setIsOpen(false)}
      />
      <div className=" fixed flex justify-center items-center z-10 w-3/5 ">
        <div className="bg-white rounded-2xl shadow-custom w-full ">
          <div className="h-auto  w-full  bg-white flex justify-center items-center  overflow-hidden rounded-2xl">
            <ExerciseForm id={id} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseModal;

//REFACTORIZAR EL MODAL
