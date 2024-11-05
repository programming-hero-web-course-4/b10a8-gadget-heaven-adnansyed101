import { useEffect } from "react";
import Card from "./Card";
import { useOutletContext } from "react-router-dom";

const Gadgets = () => {
  const { techs, selectedCategory, handleSelectedCategory } =
    useOutletContext();

  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);

  const categories = [
    "All Products",
    "Mobiles",
    "Headphones",
    "Keyboards",
    "PC Components",
    "Laptops",
  ];

  return (
    <section className="mb-10">
      <h4 className="text-center text-3xl font-bold mb-10">
        Explore Cutting-Edge Gadgets
      </h4>
      <div className="container mx-auto flex gap-4">
        <div className="p-4 bg-base-200 self-start sticky top-10 w-1/5 rounded-lg">
          {categories.map((category) => (
            <p
              key={category}
              className={`${
                category === selectedCategory
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              } rounded-full p-4 mb-2`}
              onClick={() => handleSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5">
          {techs.map((tech) => (
            <Card key={tech.id} tech={tech}></Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gadgets;
