import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

const DashCard = ({ tech }) => {
  const { image, title, description, price } = tech;

  return (
    <div className="flex bg-base-200 shadow-xl p-4 mb-4 rounded-lg">
      <figure className="bg-white w-1/4 flex justify-center rounded-lg p-2">
        <img src={image} alt="Movie" />
      </figure>
      <div className="flex-1 p-10 space-y-5">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-primaryText">{description}</p>
        <p className="font-semibold">Price: ${price}</p>
      </div>
      <div className="card-actions items-start">
        <button className="btn btn-outline btn-error btn-circle"><IoMdClose /></button>
      </div>
    </div>
  );
};

DashCard.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default DashCard;
