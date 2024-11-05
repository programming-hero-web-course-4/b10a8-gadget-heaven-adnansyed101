import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col items-center container mx-auto text-white mb-10 text-center">
      <div className="bg-primary pt-10 pb-52 rounded-b-lg w-full flex flex-col items-center">
        <h1 className="text-5xl font-bold w-2/3">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="py-6 w-2/3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn bg-white text-primary rounded-full">
          Shop Now
        </button>
      </div>
      <figure className="w-3/5 outline outline-offset-8 rounded-lg -mt-44">
        <img src={bannerImg} alt="Apple Vision" className="rounded-lg" />
      </figure>
    </div>
  );
};

export default Banner;
