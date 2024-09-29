import PlanCard from "../../components/Cards/PlanCard";

const Home = () => {
  const arr = ["uno", "dos", "tres", "cuatro", "cinco"];
  return (
    <>
      <h1 className="py-24">Home</h1>
      <br></br>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 justify-items-center bg-third">
        {arr.map((a, i) => [<PlanCard />])}
      </div>
      <PlanCard />
      <PlanCard />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>hola</p>
    </>
  );
};

export default Home;
