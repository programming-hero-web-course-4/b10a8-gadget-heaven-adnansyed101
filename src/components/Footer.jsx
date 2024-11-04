const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-black p-10">
      <aside className="border-b-2 border-gray-300 w-full pb-5">
        <p className="text-2xl font-bold">Gadget-Heaven</p>
        <p>Leading the way in cutting edge technology and innovation.</p>
      </aside>
      <div className="footer grid-cols-3">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Return</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
