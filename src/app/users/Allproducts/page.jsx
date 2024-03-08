import React from "react";

const page = () => {
  const items = [
    {
      title: "Shoes1",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Shoe2",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Shoes3",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Shoes4",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Shoes5",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
  ];

  return (
    <div >
    <div className="flex justify-center align-middle mt-7">
    <h1 className="text-3xl font-semibold  btn" >All Products</h1>
    </div>
      {items.map((item, key) => {
        return (
          <div className="flex flex-row justify-evenly mt-10 align-middle" >
            <div
              className="card basis-1/4 bg-base-100 shadow-xl"
              key={key}
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <p>
                    <strong>$28</strong>
                  </p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div
              className="card basis-1/4 bg-base-100 shadow-xl"
              key={key}
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <p>
                    <strong>$28</strong>
                  </p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div
              className="card basis-1/4 bg-base-100 shadow-xl"
              key={key}
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <p>
                    <strong>$28</strong>
                  </p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
