import React from "react";

const Navbar = () => {
  return (
    <ul className="nav">
      <li className="">
        <div className="nav-item">
          <span>تسجيل الدخول</span>
          <span>
            <img src="/../src/assets/icons/cart-orange.svg"></img>
            سلة الطلب
          </span>
        </div>
      </li>
      <li className="">
        <div className="nav-item">
          <a href="" className="contact ">
            تواصل معنا
          </a>
          <a href="" className="categories">
            الأصناف
          </a>
          <a href="" className="fav">
            الأكثر طلباً
          </a>
          <a href="" className="contact ">
            القائمة
          </a>
        </div>
      </li>
      <li className="">
        <div className="nav-item">
          <img src="/../src/assets/icons/logo/logo.svg" alt="logo" />
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
