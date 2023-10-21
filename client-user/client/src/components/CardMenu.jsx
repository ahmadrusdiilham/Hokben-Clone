import { Link } from "react-router-dom";

export default function CardMenu({ food }) {
  return (
    <>
      <div className="h-1/3 ">
        <div className="text-center p2 border-2 shadow-xl rounded-3xl overflow-hidden">
          <img className="w-full p-4 rounded-3xl " src={food.imgUrl} alt="" />
          <h1 className="font-bold text-xl my-2">{food.name}</h1>
          <h1 className="text-xl my-2">{food.japanese}</h1>
          <h1 className="mt-8 font-bold text-red-600">
            Rp. {food.price.toLocaleString("id-ID")}
          </h1>
          <div className="mb-4 mt-4">
            <Link
              to={`/detail/${food.id}`}
              className="underline text-lg font-bold text-red-600 hover:text-blue-900"
            >
              Details
            </Link>
            <button className="bg-yellow-300 font-bold rounded-full py-2 px-4 ml-10">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
