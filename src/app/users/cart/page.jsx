import React from "react";

const page = () => {
  const ProductDetail = [
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
    {
      Title: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "$24",
    },
  ];

  return (
    <>
      <div className="flex justify-center align-middle mt-5">
        <h1 className="text-3xl font-semibold btn">
          Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </h1>
      </div>
      {ProductDetail.map((products, key) => {
        return (
          <div className=" p-5 flex justify-center align-middle">
            <div className="card w-10/12 bg-base-100 shadow-2xl" key={key}>
              <div className="card-body">
                <div className="flex">
                  <div className="basis-1/3 flex justify-center align-middle">
                    <img
                      className="rounded h-36"
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </div>
                  <div className="basis-1/3 flex justify-center align-middle mt-5">
                    <div>
                      <h2 className="card-title">{products.Title}</h2>
                      <p>{products.description}</p>
                      <div className="card-actions mt-5">
                        <a className="btn">{products.price}</a>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3 flex flex-col justify-between align-middle">
                    <label className="input input-bordered flex items-center gap-2 w-32">
                      Quantity
                      <input type="number" className="grow w-20" placeholder="1" />
                    </label>
                    <div>
                      <button className="btn btn-primary">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default page;
