import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [techs, setTechs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedTechs, setSelectedTechs] = useState([]);

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

  return (
    <>
      <Navbar></Navbar>
      <Outlet
        context={{
          techs,
          selectedCategory,
          selectedTechs,
          handleSelectedCategory,
          handleSelectedTechs,
        }}
      ></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
