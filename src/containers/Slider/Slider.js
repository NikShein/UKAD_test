import React from "react";
import Slider from "react-slick";
import "./Slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          borderRadius: "50%", 
          width: "68px", 
          height: "68px", 
          textAlign: "center", 
          lineHeight: "4em",
          right: "0px",
          position: "absolute",
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)"
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} size="lg"/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          borderRadius: "50%", 
          width: "68px", 
          height: "68px", 
          textAlign: "center", 
          lineHeight: "4em",
          position: "absolute",
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          zIndex: 99
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="lg"/>
      </div>
    );
  }

const SlickSlider = (props) => {
    let sliders = props.productCards;
    var settings1 = {
        className: "center",
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
            className: "center",
            centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
        ]
      };

      return (
        <Slider {...settings1}>
            {
            sliders
            }
        </Slider>
      )

}

export default SlickSlider;