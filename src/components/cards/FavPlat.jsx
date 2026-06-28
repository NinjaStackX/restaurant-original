import React from "react";

const FavPlat = ({ item }) => {
  const { title, details, price, oldPrice } = item.title
    ? item
    : {
        title: "فروج مشوي على الفحم",
        details: "دجاج مندي مع أرز بستمي",
        price: 1000,
        oldPrice: 1500,
      };

  return (
    <div
      className="
  fav-item
  center
  bg-lime-50
  relative
  hover-card
  "
    >
      <div className="food "></div>
      <div className="text-xl">{title}</div>

      <div className="text-gray-500">{details}</div>
      <div className="flex flex-row gap-2">
        ل.س
        <div className="">{price}</div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-row gap-2 line-through text-gray-500 ">
          ل.س
          <div className="">{oldPrice},00</div>
        </div>
        <div className="bg-orange-300 rounded absolute  top-[-10px] left-[-10px]">
          <div className="text-xl ">{oldPrice / price} %</div>
        </div>
      </div>
      <div className="h-2.5"></div>
      {/* <div className="bg-orange-800 p-9 h-20">أضف للسلة +</div> */}
    </div>
  );
};

export default FavPlat;
