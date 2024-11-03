import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="hero bg-primary container mx-auto rounded-b-lg text-white relative pb-52 mb-60">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-primary rounded-full">
            Shop Now
          </button>
        </div>
      </div>
      <figure className="absolute top-64 w-2/4 outline outline-offset-8 rounded-lg">
        <img src={bannerImg} alt="Apple Vision" className="rounded-lg" />
      </figure>
    </div>
  );
};

export default Banner;
