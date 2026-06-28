import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Fav from "./components/home/Fav";
import Categories from "./components/home/Categories";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <div className="h-[100dvh] ">
      <Navbar />
      <Hero />
      <Fav />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
