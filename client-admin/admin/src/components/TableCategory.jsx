import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/actions/actionCreators";
import { Link } from "react-router-dom";

export default function TableCategory({ category, idx, setLoading }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    setLoading(true);
    dispatch(deleteCategory(category.id)).finally(() => {
      setLoading(false);
    });
  };
  return (
    <>
      <tr className="border-b transition duration-300 ">
        <td className="px-6 py-4 font-medium">{idx}</td>
        <td className="px-6 py-4">{category.name}</td>
        <td className="px-6 py-4">28-01-1996</td>

        <td className="px-6 py-4">28-01-1996</td>
        <td className="px-6 py-4">
          <div className="flex gap-4">
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white font-semibold px-2 py-1 rounded-lg hover:bg-slate-700"
            >
              Delete
            </button>
            <Link
              to={`/editCategory/${category.id}`}
              className="bg-blue-600 text-white font-semibold px-2 py-1 rounded-lg hover:bg-slate-700"
            >
              Edit
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
