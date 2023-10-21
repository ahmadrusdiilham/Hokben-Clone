import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetail } from "../store/actions/actionCreator";
import ListIngredient from "../components/ListIngredient";
export default function Detail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const food = useSelector((state) => state.foodReducer.food);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(fetchDetail(id));
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (food) {
      setDetail(food);
    } else {
      setLoading(true);
    }
  }, [food]);

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
      <div className="bg-yellow-300 gap-4 flex justify-center text-center py-4 mt-10 text-white font-bold text-3xl">
        <h1>{food ? food.name : ""}</h1>
        <span>||</span>
        <h1>{food.Category ? food.Category.name : ""}</h1>
      </div>
      <div className="flex justify-evenly text-gray-900 w-max-1/2 mt-4">
        <div className="">
          <div>
            <img src={food ? food.imgUrl : ""} alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-4">
            <h1 className="text-red-600 font-bold text-2xl mb-2">
              Rp. {food ? food.price : ""}
            </h1>
            <div className="my-4">
              <span className="text-lg font-semibold text-slate-900">
                Created By :
              </span>{" "}
              <span className="text-slate-800 text-lg">
                {food.User ? food.User.email : ""}
              </span>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Contains :
              </h2>
              <ul className="max-w-md space-y-1 text-slate-800 text-lg list-disc list-inside">
                {food.Ingredients
                  ? food.Ingredients.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="my-4">
              <h1 className="text-lg font-semibold text-slate-900 mb-2">
                Composition :
              </h1>
              <span className="text-slate-800 text-lg">
                {food ? food.description : ""}
              </span>
            </div>
            <br />
            <Link
              to="/menu"
              className="mt-2 mr-6 border-2 rounded-full py-2 px-4 border-red-600 text-red-600 hover:text-slate-950"
            >
              Back
            </Link>
            <button className="bg-yellow-300 rounded-full py-2 px-4 text-lg font-bold">
              + Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
