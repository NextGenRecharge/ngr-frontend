import React from "react";
import Slider from "react-slick";
import './SliderStyles.css'; // Link to external CSS file

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,  // Show 2 slides at once
        slidesToScroll: 1,
        autoplay: true,   // Enable auto-move
        autoplaySpeed: 3000,  // Speed of auto slide (in milliseconds)
        arrows: true,    // Show previous/next arrows
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "30px",
                    height: "10px",
                    borderRadius: "10px",
                    background: "#333", // Custom dot color
                }}
            ></div>
        )
    };
    
    return (
        <Slider {...settings}>
            <div className="slide-content">
                <h3>Slide 1 Content</h3>
            </div>
            <div className="slide-content">
                <h3>Slide 2 Content</h3>
            </div>
            <div className="slide-content">
                <h3>Slide 3 Content</h3>
            </div>
            <div className="slide-content">
                <h3>Slide 4 Content</h3>
            </div>
        </Slider>
    );
}
