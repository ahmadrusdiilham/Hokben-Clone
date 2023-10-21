import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      {/* <Link to="/menu">Home</Link> */}
      <div className="bg-red-300">
        <div className="container py-4 text-white font-bold text-lg flex justify-end gap-10">
          <a href="">
            <span>Login</span>
          </a>
          <a href="">ID</a>
          <a href="">EN</a>
        </div>
      </div>
      <nav className="">
        <div className="flex gap-4 justify-center ">
          <div className="flex justify-center">
            <Link to={`/`}>
              <img
                className="h-20"
                src="https://www.hokben.co.id/assets/img/logo_hokben_1.png"
                alt=""
              />
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to={`/`}
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
            >
              Home
            </Link>
          </div>
          <div className="mt-6">
            <Link
              to={`/menu`}
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
            >
              Menu
            </Link>
          </div>
          <div className="text-center mt-6">
            <a
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
              href=""
            >
              Outlet
            </a>
          </div>
          <div className="text-center mt-6">
            <a
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
              href=""
            >
              Promotion
            </a>
          </div>
          <div className="text-center mt-6">
            <a
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
              href=""
            >
              Corporate
            </a>
          </div>
          <div className="text-center mt-6">
            <a
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
              href=""
            >
              News & Event
            </a>
          </div>
          <div className="text-center mt-6">
            <a
              className="text-slate-500 text-xl font-bold hover:text-slate-900"
              href=""
            >
              Contact Us
            </a>
          </div>
          <div className="mt-4">
            <button className="bg-red-600 rounded-full font-bold px-4 py-2 text-white">
              <h1 className="bg-white text-red-600 rounded-full px-2 hover:text-slate-950">
                0
              </h1>
            </button>
          </div>
          <div className="mt-4">
            <button className="bg-red-600 rounded-full font-bold px-4 py-2 text-white hover:text-slate-950">
              Order Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
