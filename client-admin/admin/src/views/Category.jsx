import { useState, useEffect } from "react";
import TableCategory from "../components/TableCategory";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/actionCreators";
export default function Category() {
  const [loading, setLoading] = useState(false);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCategories()).then(() => {
      setLoading(false);
    });
  }, []);
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
      <div>
        <Outlet />
      </div>
      <div className="grid grid-cols-2 items-center mx-10 my-4">
        <div className="text-start text-3xl font-medium m-4">Category List</div>
        <div className="text-end m-4">
          <Link
            to="/addCategory"
            className="bg-blue-500 px-3 py-4 text-white font-semibold rounded-xl hover:bg-blue-300"
          >
            + Create Category
          </Link>
        </div>
      </div>
      <div className="mx-10">
        <div className="shadow-2xl p-4 m-4">
          <table className="w-full text-left text-sm font-light bg-white">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  NO
                </th>
                <th scope="col" className="px-6 py-4">
                  NAME
                </th>
                <th scope="col" className="px-6 py-4">
                  CREATED AT
                </th>
                <th scope="col" className="px-6 py-4">
                  UPDATED AT
                </th>
                <th scope="col" className="px-6 py-4">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((el, idx) => {
                return (
                  <TableCategory
                    key={idx}
                    category={el}
                    idx={idx + 1}
                    setLoading={setLoading}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
