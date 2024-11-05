import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const currentBlog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="hero min-h-96">
      <div className="hero-content">
        <div>
          <h1 className="text-5xl font-bold mb-2">{currentBlog.title}</h1>
          <p>
            <span>{currentBlog.author}</span> <span>{currentBlog.date}</span>
          </p>
          <p className="py-4">{currentBlog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
