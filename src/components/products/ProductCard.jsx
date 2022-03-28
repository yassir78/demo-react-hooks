import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white my-3 py-3 px-3 rounded-xl mt-5  flex justify-center">
      <div className="space-y-4  shadow-xl w-64 rounded-lg">
        <div className="aspect-w-2 aspect-h-2 relative">
          <img
            className="object-scale-down  h-56 bg-cover bg-center w-full min-h-full rounded-lg"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="title"
          />
        </div>
        <div className="px-3 pb-5">
          <div className=" leading-6  space-y-2 flex flex-col justify-center items-center">
            <h3 className="text-base font-bold">dazzadzadzadzadazdazdza</h3>
            <h3 className="text-base font-semibold">Paco Rabanne</h3>
            <ul className="flex justify-start">
              {Array.from(Array(5), (e, i) => {
                // @ts-ignore
                if (i < 3) {
                  return (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 scale-125 mx-2 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      />
                    </svg>
                  );
                } else {
                  return (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      className="w-4 scale-125 mx-2 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      />
                    </svg>
                  );
                }
              })}
            </ul>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
