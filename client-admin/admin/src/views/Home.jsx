import { Link, Outlet } from "react-router-dom";
import TableFood from "../components/TableFood";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../store/actions/actionCreators";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const foods = useSelector((state) => state.foodReducer.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchFoods()).then(() => {
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
      <div className="">
        <div className="">
          <Outlet />
        </div>
        <div className="col-span-4 text-center">
          <div className="w-full flex px-1 gap-4 items-center">
            <input
              className="p-3 rounded-xl w-full"
              type="text"
              placeholder="search"
            />
          </div>

          <div className="grid grid-cols-2 items-center mx-10 my-4">
            <div className="text-start text-3xl font-medium m-4">Food List</div>
            <div className="text-end m-4">
              <Link
                to="/addFood"
                className="bg-blue-500 px-3 py-4 text-white font-semibold rounded-xl hover:bg-blue-300"
              >
                + Create Food
              </Link>
            </div>
          </div>

          <div className="mx-10">
            <div className="shadow-2xl p-4 m-4">
              <table className="min-w-full text-left text-sm font-light bg-white">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      CreatedBy
                    </th>
                    <th scope="col" className="px-6 py-4" width="180px">
                      Main Image
                    </th>
                    <th scope="col" className="px-6 py-4" width="180px">
                      Ingredients
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody id="table-product">
                  {/* <tr className="border-b transition duration-300 ease-in-out"> */}
                  {foods.map((el, idx) => {
                    return (
                      <TableFood
                        key={idx}
                        food={el}
                        idx={idx + 1}
                        setLoading={setLoading}
                      />
                    );
                  })}

                  {/* </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
