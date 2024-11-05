import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  const { id, title, author } = blog;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          <Link to={`/blogs/${id}`} className="btn bg-primary text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogsCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogsCard;
