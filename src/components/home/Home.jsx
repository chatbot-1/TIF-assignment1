import React from "react";
import "./home.css";
import About from "../about/About";
import Article from "../articles/Article";
import Footer from "../footer/Footer";
import logo from "../../assets/logo.png";
import top from "../../assets/top.png";
import obj from "../../assets/obj.png";

const Home = () => {
  return (
    <>
      <div className="home container">
        <div className="home-container">
          <div className="home-header">
            <div className="home-logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="head-btn">
            <button className="top-btn">Get In Touch</button>
          </div>
          <div className="home-content">
            <div className="home-data">
              <div className="home-matter">
                <div className="home-heading">
                  <h1>Discover the</h1>
                  <h1>
                    <span>Best</span> Food
                  </h1>
                  <h1>and Drinks</h1>
                </div>
                <div className="home-para">
                  <p>
                    Naturally made Healthcare Products for the better care &
                    support of your body.
                  </p>
                </div>
                <div className="conten-btn">
                  <button className="cont-btn top-btn">Explore Now!</button>
                </div>
              </div>
            </div>
            <div className="home-img">
              <div className="img2">
                <img src={obj} alt="" />
              </div>
              <div className="img1">
                <img src={top} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
