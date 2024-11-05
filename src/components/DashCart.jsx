import DashCard from "./DashCard";
import { GiSettingsKnobs } from "react-icons/gi";
import { useOutletContext } from "react-router-dom";

const DashCart = () => {
  const { selectedTechs, handleSort, handlePurchaseBtn, totalAmount } =
    useOutletContext();

  return (
    <>
      <div className="container mx-auto flex items-center gap-4 mb-10">
        <h4 className="flex-1 font-bold text-xl">Cart</h4>
        <p className="font-bold text-xl">Total Cost: ${totalAmount}</p>
        <button
          className="btn btn-outline rounded-full border-primary text-primary"
          onClick={handleSort}
        >
          Sort By Price <GiSettingsKnobs />
        </button>
        <button
          className="btn btn-outline rounded-full bg-primary text-white font-semibold text-xl"
          onClick={handlePurchaseBtn}
        >
          Purchase
        </button>
      </div>
      <div className="container mx-auto">
        {selectedTechs.map((tech, index) => (
          <DashCard key={index} tech={tech}></DashCard>
        ))}
      </div>
    </>
  );
};

export default DashCart;
