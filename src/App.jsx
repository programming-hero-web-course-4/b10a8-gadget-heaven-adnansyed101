import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";

const App = () => {
  const [techs, setTechs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [tab, setTab] = useState("cart");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const totalAmount = selectedTechs.reduce(
    (total, tech) => (total = total + tech.price),
    0
  );

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
    toast.success("Product added to cart");
    setSelectedTechs((prev) => [...prev, tech]);
  };

  const handleWishList = (tech) => {
    toast.success("Product added to wishlist.");
    setWishList((prev) => [...prev, tech]);
  };

  const handleSelectedTab = (tab) => {
    setTab(tab);
  };

  const handleSort = () => {
    setSelectedTechs((prev) => [...prev].sort((a, b) => b.price - a.price));
  };

  const handleRemove = (id) => {
    toast.error("Product has been deleted");
    setSelectedTechs((prev) => prev.filter((tech) => tech.id !== id));
  };

  const handlePurchaseBtn = () => {
    if (selectedTechs.length > 0) {
      setShowModal(true);
      setSelectedTechs([]);
    } else {
      toast.warn("Add items to cart");
      return;
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <Navbar handleSelectedTab={handleSelectedTab}></Navbar>
      <Modal visible={showModal} onClose={handleClose}></Modal>
      <Outlet
        context={{
          techs,
          selectedCategory,
          selectedTechs,
          wishlist,
          tab,
          totalAmount,
          handleSelectedCategory,
          handleSelectedTechs,
          handleWishList,
          handleSelectedTab,
          handleSort,
          handleRemove,
          handlePurchaseBtn,
        }}
      ></Outlet>
      <ToastContainer />

      <Footer></Footer>
    </>
  );
};

export default App;
