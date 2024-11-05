import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    useEffect(() => {
        document.title = "404 | Gadget Heaven";
      }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl font-bold">Error 404</h1>
      <p className="text-primaryText text-xl">Something Went Wrong</p>
      <Link className="btn bg-primary text-white" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
