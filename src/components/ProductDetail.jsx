import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import ReactStars from "react-rating-stars-component";

const ProductDetail = () => {
  const { id } = useParams();
  const allTechs = useLoaderData();
  const { handleSelectedTechs, handleWishList } = useOutletContext();
  const currentTech = allTechs.find((tech) => tech.id === parseInt(id));
  const {
    image,
    title,
    price,
    specification,
    description,
    rating,
    availability,
  } = currentTech;

  return (
    <div className="flex flex-col items-center mb-10 ">
      <div className="bg-primary pt-10 pb-36 text-center w-full text-white">
        <h1 className="text-5xl font-bold">Product Details</h1>
        <p className="py-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="rounded-lg -mt-32 flex gap-20 bg-white p-5 w-3/5">
        <figure className="w-1/3 flex items-center justify-center">
          <img src={image} className="rounded-lg" />
        </figure>
        <div className="text-black space-y-3">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <p className="text-primaryText">Price: ${price}</p>
          {availability ? (
            <p className="badge badge-accent badge-outline">In Stock</p>
          ) : (
            <p className="badge badge-error badge-outline">Out of Stock</p>
          )}
          <p>{description}</p>
          <p>Specifications</p>
          <ol className="list-decimal ml-10 text-primaryText">
            {specification.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ol>
          <p className="flex items-center gap-1 font-bold">
            Rating <FaStar />
          </p>
          <div className="flex items-center gap-4">
            <ReactStars
              count={5}
              isHalf={true}
              value={rating}
              size={24}
              activeColor="#ffd700"
            />
            <span className="badge badge-ghost">{rating}</span>
          </div>
          <div className="space-x-2">
            <button
              className="btn rounded-full bg-primary text-white"
              onClick={() => handleSelectedTechs(currentTech)}
            >
              Add To Cart <MdOutlineShoppingCart />
            </button>
            <button
              className="btn btn-circle bg-white"
              onClick={() => handleWishList(currentTech)}
            >
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
