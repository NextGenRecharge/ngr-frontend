import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "50px",
                    background: "#333",
                    height: "5px",
                    borderRadius: "3px",
                    color: "white"
                }}
            >
                <div  style={{
                    width: "50px",
                    background: "#333",
                    height: "5px",
                    borderRadius: "3px",
                    color: "white"
                }}>{i}</div>
            </div>
        )
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
        </Slider>
    );
}