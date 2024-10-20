import TrackingTable from "../Tables/TrackingTable";

export interface TableProps {
  setIsOpen: (isOpen: boolean) => void;
}

const TrackingModal = ({ setIsOpen }: TableProps) => {
  return (
    <>
      <div
        className="bg-black bg-opacity-80 w-screen h-screen fixed top-0 left-0 z-0"
        onClick={() => setIsOpen(false)}
      />
      <div className=" fixed flex justify-center items-center z-10 w-3/5 top-1/3 ">
        <div className="bg-white rounded-2xl shadow-custom w-full ">
          <div className="h-auto  w-full  bg-second flex justify-center items-center  overflow-hidden rounded-2xl">
            <TrackingTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingModal;
