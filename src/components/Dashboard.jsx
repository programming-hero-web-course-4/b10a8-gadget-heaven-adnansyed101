import DashCart from "./DashCart";
import DashWish from "./DashWish";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { tab, handleSelectedTab } = useOutletContext();

  return (
    <section className="mb-10">
      <div className="bg-primary py-10 w-full text-white text-center mb-10">
        <h1 className="text-5xl font-bold mb-10">Dashboard</h1>
        <div className="space-x-2 w-1/4 mx-auto flex">
          <button
            className={`btn rounded-full w-1/2 ${
              tab === "cart"
                ? "bg-white text-primary"
                : "border-white text-white bg-primary"
            }`}
            onClick={() => handleSelectedTab("cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-full w-1/2 ${
              tab === "wishlist"
                ? "bg-white text-primary"
                : "border-white text-white bg-primary"
            }`}
            onClick={() => handleSelectedTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>
      {tab === "cart" ? <DashCart></DashCart> : <DashWish></DashWish>}
    </section>
  );
};

export default Dashboard;
