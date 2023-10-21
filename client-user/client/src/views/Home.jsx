import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLandingPage } from "../store/actions/actionCreator";
import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from "../components/Carousel";

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const foods = useSelector((state) => state.foodReducer.itemFood);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchLandingPage()).then(() => {
      setLoading(false);
    });
  }, []);
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
      <div className="w-full h-max-screen">
        <Carousel />
        <div className="container mx-auto text-center">
          <div className="text-red-600 font-bold text-3xl m-10">
            RECOMENDATION
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {foods
              ? foods.map((el, idx) => {
                  return (
                    <div key={idx} className="basis-1/4 mb-4">
                      <div className="text-center p2 border-2 rounded-3xl overflow-hidden">
                        <img className="w-full " src={el.imgUrl} alt="" />
                        <h1 className="font-bold text-md my-2 p-4">
                          {el.name}
                        </h1>
                        <h1 className="mt-8 font-bold text-red-600">
                          Rp. {el.price}
                        </h1>
                        <div className="mb-4 mt-4">
                          <Link
                            to={`/detail/${el.id}`}
                            className="underline text-lg font-bold text-red-600 hover:text-blue-900"
                          >
                            Details
                          </Link>
                          <button className="bg-yellow-300 font-bold rounded-full py-2 px-4 ml-10">
                            Order
                          </button>
                        </div>
                        <div>
                          <h1></h1>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="bg-yellow-300 text-center py-4">
          <div className="flex justify-center">
            <img
              className="w-12"
              src="https://www.hokben.co.id/assets/img/img_banner_2_6.png"
              alt=""
            />
          </div>
          <div className="my-2 font-bold text-2xl">
            <h1>We Make Sure</h1>
          </div>
          <div className="my-2 font-bold text-3xl text-red-600">
            <h1>Products will be delivered on time</h1>
          </div>
          <div className="my-2 font-lg text-xl text-black">
            <h1>
              If you’re having a meeting, working late at night and need an
              extra push. <br /> Let us know and we will be there
            </h1>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-red-600 rounded-full text-slate-50 py-2 px-4">
              Order Now
            </button>
            <h1>OR</h1>
            <img
              className="h-10"
              src="https://www.hokben.co.id/assets/img/hokben_505.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
