import { useEffect, useState } from "react";
import CardMenu from "../components/CardMenu";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchFoods } from "../store/actions/actionCreator";
export default function Menu() {
  // const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const foods = useSelector((state) => state.foodReducer.foods);
  const categories = useSelector((state) => state.categoryReducer.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchFoods()).finally(() => {
      setLoading(false);
    });
    dispatch(fetchCategories()).finally(() => {
      setLoading(false);
    });
  }, []);

  const hadleClick = (event) => {
    event.target.value;
    setLoading(true);
    dispatch(fetchFoods(event.target.value)).finally(() => {
      setLoading(false);
    });
  };

  if (loading) {
    return (
      <>
        <div className="flex justify-center">
          <div
            className="inline-block bg-yellow-300 h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
        <div className="text-center mt-2">Loading...</div>
      </>
    );
  }
  return (
    <>
      <div className="bg-yellow-300 flex justify-center gap-6 py-5 mt-10">
        <div className="text-white font-bold text-3xl">
          <h1>MENU</h1>
        </div>
        <span className="text-white font-bold text-3xl">|</span>
        <h1 className="text-white font-bold text-3xl">メニュー</h1>
        <div className="">
          <a className="text end font-bold text-white text-2xl" href="">
            Search
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((el, idx) => {
            return (
              <div key={idx}>
                <button
                  value={idx + 1}
                  onClick={hadleClick}
                  className="bg-white border-2 border-red-600 rounded-full w-64 py-2 hover:bg-red-700 hover:text-white"
                >
                  {el.name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-4">
          {foods.map((el, idx) => {
            return <CardMenu key={idx} food={el} />;
          })}
        </div>
      </div>
    </>
  );
}
