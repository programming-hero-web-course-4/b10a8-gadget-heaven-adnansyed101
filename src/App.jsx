import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [techs, setTechs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [tab, setTab] = useState("cart");

  useEffect(() => {
    fetch("/tech.json")
      .then((res) => res.json())
      .then((data) => {
        if (selectedCategory === "All Products") {
          setTechs(data);
        } else {
          setTechs(data.filter((tech) => tech.category === selectedCategory));
        }
      });
  }, [selectedCategory]);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectedTechs = (tech) => {
    setSelectedTechs((prev) => [...prev, tech]);
  };

  const handleWishList = (tech) => {
    setWishList((prev) => [...prev, tech]);
  };

  const handleSelectedTab = (tab) => {
    setTab(tab);
  };

  return (
    <>
      <Navbar handleSelectedTab={handleSelectedTab}></Navbar>
      <Outlet
        context={{
          techs,
          selectedCategory,
          selectedTechs,
          wishlist,
          tab,
          handleSelectedCategory,
          handleSelectedTechs,
          handleWishList,
          handleSelectedTab,
        }}
      ></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
