import PropTypes from "prop-types";

const Card = ({ tech }) => {
  const { image, title } = tech;
  return (
    <div className="card shadow-xl items-center">
      <figure className="p-10 w-72 h-80">
        <img src={image} alt="tech" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <button className="btn btn-outline rounded-full border border-primary text-primary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default Card;
