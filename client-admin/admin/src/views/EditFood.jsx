import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editFood,
  fetchCategories,
  fetchDetail,
} from "../store/actions/actionCreators";
import { useParams } from "react-router-dom";
export default function AddFood() {
  const [input, setInput] = useState({});
  const [inputCategory, setInputCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const category = useSelector((state) => state.categoryReducer.categories);
  const food = useSelector((state) => state.foodReducer.food);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchDetail(params.id)).finally(() => {
      setLoading(false);
    });
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (food) {
      setInputCategory(food.Category);
    }
  }, [food]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newValue = {
      name: input.name,
      description: input.description,
      price: input.price,
      imgUrl: input.imgUrl,
      CategoryId: input.CategoryId,
    };
    dispatch(editFood(newValue, params.id)).then(() => {
      navigate("/");
    });
  };
  useEffect(() => {
    if (food) {
      setInput(food);
    }
  }, [food]);

  if (loading) {
    return (
      <>
        <div className="flex justify-center h-screen items-center">
          <div
            className="inline-block bg-blue-400 h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
          <div className="text-center ml-10">Processing...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto w-4/5">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={input.name}
            />
          </div>

          <div className="mb-6">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={input.description}
            />
          </div>
          <div className="mb-6">
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              onChange={handleChange}
              type="number"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={input.price}
            />
          </div>
          <div className="mb-6">
            <label
              for="imgUrl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Imgage Url
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="imgUrl"
              name="imgUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={input.imgUrl}
            />
          </div>
          <div className="mb-6">
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a category
            </label>
            <select
              onChange={handleChange}
              id="category"
              name="CategoryId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                {inputCategory.name}
              </option>
              {category.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <Link
            to="/"
            className="text-white ml-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back
          </Link>
        </form>
      </div>
    </>
  );
}
