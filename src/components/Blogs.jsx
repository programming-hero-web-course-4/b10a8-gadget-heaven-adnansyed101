import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";
import { useEffect } from "react";

const Blogs = () => {
  const blogs = useLoaderData();

  useEffect(() => {
    document.title = "Blogs | Gadget Heaven";
  }, []);

  return (
    <section className="mb-10">
      <div className="bg-primary py-10 w-full text-white text-center mb-10">
        <h1 className="text-5xl font-bold mb-10">Blogs</h1>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogsCard key={blog.id} blog={blog}></BlogsCard>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
