import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Amazon Basics.",
      desc: "Amazon has launched their new factory to build and compete with other marnufacturers in the market.",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Android Phones",
      desc: "Xiaomi has plans to launch their new highly customizable android phones on their new event on September 2025.",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1710905219584-8521769e3678?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Apple Products",
      desc: "Apple is planning to launch their new AI oriented devices later this year in December 2025.",
      inStock: false,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => {
        return (
          <div
            key={index}
            className="w-52 bg-zinc-100 rounded-lg overflow-hidden"
          >
            <div className="w-full h-32 bg-zinc-300 ">
              <img
                className="w-full h-full object-cover"
                src={elem.image}
                alt="Amazon Box"
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{elem.title}</h2>
              <p className="text-xs mt-3">{elem.desc}</p>
              <button
                className={`px-2 cursor-pointer py-1 mt-3 text-white rounded-lg ${
                  elem.inStock ? "bg-red-400" : "bg-gray-400"
                }`}
              >
                {elem.inStock ? "Buy Now!" : "Know More!"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
