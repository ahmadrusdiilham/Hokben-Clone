// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFood, fetchFoods } from "../store/actions/actionCreators";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TableFood({ food, idx, setLoading }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    setLoading(true);
    dispatch(deleteFood(food.id)).finally(() => {
      setLoading(false);
    });
  };
  return (
    <>
      <tr className="border-b transition duration-300 ease-in-out">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{idx}</td>
        <td className="whitespace-nowrap px-6 py-4">{food.name}</td>
        <td className="whitespace-nowrap px-6 py-4">{food.Category.name}</td>
        <td className="whitespace-nowrap px-6 py-4">
          Rp. {food.price.toLocaleString("id-ID")}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{food.User.email}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <img src={food.imgUrl} alt="" />
        </td>
        <td className="px-6 py-4">
          <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
            {food.Ingredients.map((el, idx) => {
              return <li key={idx}>{el.name}</li>;
            })}
          </ul>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <Link
            to={`/editFood/${food.id}`}
            className="bg-blue-500 text-white font-semibold px-2 py-1 rounded-lg hover:bg-blue-200 hover:text-slate-900"
          >
            Edit
          </Link>
          <button
            onClick={handleClick}
            className="bg-red-600 ml-4 text-white font-semibold px-2 py-1 rounded-lg hover:bg-red-400 hover:text-slate-900"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
