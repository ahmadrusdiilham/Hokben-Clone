import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="flex flex-2 justify-center items-center gap-6 bg-blue-400">
        <div className="flex w-1/2">
          <img
            className="w-24"
            src="https://www.hokben.co.id/assets/img/logo_hokben_1.png"
            alt=""
          />
        </div>
        <div className="text-xl hover:underline hover:text-slate-600">
          <Link to={`/`}>Dashboard</Link>
        </div>
        <div className="text-xl hover:underline hover:text-slate-600">
          <Link to={`/category`}>Categories</Link>
        </div>
        <div className="text-xl hover:underline hover:text-slate-600">
          <Link to={`/addAdmin`}>Register Admin</Link>
        </div>
        <div className="text-xl hover:underline hover:text-slate-600">
          <a onClick={handleLogout} href="">
            Sign Out
          </a>
        </div>
        <div>
          <Link>
            <img
              className="w-10"
              src="https://cdn.icon-icons.com/icons2/510/PNG/512/ios7-bell-outline_icon-icons.com_50335.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/512/4128/4128273.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
