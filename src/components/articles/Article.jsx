import React from "react";
import "./article.css";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Article = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="article container">
      <div className="article-container">
        <div className="art-head">
          <h1>Latest Articles</h1>
        </div>
        <div className="art-cards">
          <Slider {...settings}>
            <div>
              <h3>
                <div className="card card1">
                  <img src={card6} alt="" />
                  <div className="card-data">
                    <h2>Grilled Tomatoes at Home</h2>
                    <p>
                      PLorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard...
                    </p>
                    <button className="card-btn">Read More</button>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card card2">
                  <img src={card5} alt="" />
                  <div className="card-data">
                    <h2>Snacks for Travel</h2>
                    <p>
                      PLorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard...
                    </p>
                    <button className="card-btn">Read More</button>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card card2">
                  <img src={card4} alt="" />
                  <div className="card-data">
                    <h2>Snacks for Travel</h2>
                    <p>
                      PLorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard...
                    </p>
                    <button className="card-btn">Read More</button>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card card3">
                  <img src={card3} alt="" />
                  <div className="card-data">
                    <h2>How To Grill Corn</h2>
                    <p>
                      PLorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard...
                    </p>
                    <button className="card-btn">Read More</button>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card card3">
                  <img src={card2} alt="" />
                  <div className="card-data">
                    <h2>Crunchwrap Supreme</h2>
                    <p>
                      PLorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard...
                    </p>
                    <button className="card-btn">Read More</button>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card card3">
                  <img src={card1} alt="" />
                  <div className="card-data">
                    <h2>Broccoli Cheese Soup</h2>
                    <p>
                      PLorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard...
                    </p>
                    <button className="card-btn">Read More</button>
                  </div>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Article;
