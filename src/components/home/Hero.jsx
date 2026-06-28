import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content center">
        <div className="text-xl flex flex-col gap-5.5 justify-center items-center">
          <img
            src="/../src/assets/icons/logo/logo-white.svg"
            width={200}
            alt=""
            srcset=""
          />
          <p>
            نكهة مميزة تبدأ من <span>اختيارك</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
