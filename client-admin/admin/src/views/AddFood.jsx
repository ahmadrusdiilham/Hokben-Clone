import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFood, fetchCategories } from "../store/actions/actionCreators";

export default function AddFood() {
  const [input, setInput] = useState({});
  const category = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      ...input,
      categoryId: Number(input.categoryId),
      price: Number(input.price),
    };
    dispatch(addFood(newData)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="container mx-auto w-4/5">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
            />
          </div>
          <div className="mb-6">
            <label
              for="ingredients"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingredients (spare ingretdients by ",") expample = tomat,bawang
              putih,merica
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="ingredients"
              name="ingredients"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
                Choose a category
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
