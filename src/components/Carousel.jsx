import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super();

        this.state = {
            id: 0,
        };
    }

    handlePrevClick = () => {
        this.setState((prevState) => ({
            id: (prevState.id - 1 + images.length) % images.length,
        }));
    };

    handleNextClick = () => {
        this.setState((prevState) => ({
            id: (prevState.id + 1) % images.length,
        }));
    };

    render() {
        const currImage = images[this.state.id];

        return (
            <div className="container">
                <div className="carousel">
                    <div className="carousel-title">{currImage.title}</div>
                    <div className="carousel-subtitle">{currImage.subtitle}</div>
                </div>
                <div className="alignitems">
                    <div className="arrow-back" onClick={this.handlePrevClick}>
                        <ArrowBackIosIcon sx={{ color: "black" }} />
                    </div>
                    <img className="carousel-img" src={currImage.img} alt="" />
                    <div className="arrow-forward" onClick={this.handleNextClick}>
                        <ArrowForwardIosIcon sx={{ color: "black" }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;