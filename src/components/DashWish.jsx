import { useOutletContext } from "react-router-dom";
import DashCard from "./DashCard";

const DashWish = () => {
  const { wishlist } = useOutletContext();

  return (
    <>
      <div className="container mx-auto mb-10">
        <h4 className="flex-1 font-bold text-xl">WishList</h4>
      </div>
      <div className="container mx-auto">
        {wishlist.map((tech) => (
          <DashCard key={tech.id} tech={tech}></DashCard>
        ))}
      </div>
    </>
  );
};

export default DashWish;
