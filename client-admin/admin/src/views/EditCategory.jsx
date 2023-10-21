import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  detailCategory,
  editCategory,
} from "../store/actions/actionCreators";
export default function AddCategory() {
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const categoryDetail = useSelector((state) => state.categoryReducer.category);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailCategory(id));
  }, []);

  useEffect(() => {
    if (categoryDetail) {
      setInput(categoryDetail.name);
    }
  }, [categoryDetail]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue = {
      name: input,
    };
    dispatch(editCategory(newValue, id)).then(() => {
      navigate("/category");
    });
  };
  return (
    <>
      <div className="container mx-auto w-4/5">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              value={input}
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <Link
          to="/category"
          type="submit"
          className="text-white mt-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
        </Link>
      </div>
    </>
  );
}
