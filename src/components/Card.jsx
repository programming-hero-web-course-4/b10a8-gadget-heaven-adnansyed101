import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ tech }) => {
  const { id, image, title, price } = tech;
  return (
    <div className="card shadow-xl items-center">
      <figure className="p-10 w-72 h-80">
        <img src={image} alt="tech" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-primaryText">Price: ${price}</p>
        <div className="card-actions">
          <Link
            to={`/details/${id}`}
            className="btn btn-outline rounded-full border border-primary text-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default Card;
