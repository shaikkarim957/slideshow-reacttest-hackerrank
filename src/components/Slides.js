import React, { useState } from "react";

import "../App.css";

const Slides = (props) => {
    const { slides } = props;

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div>
            <div className="App-buttons">
                <button type="button" className="btn btn-outline-success" disabled={currentSlide === 0} onClick={() => setCurrentSlide(0)}>
                    Restart
                </button>
                <button
                    type="button"
                    className={currentSlide === 0 ? "btn btn-outline-success" : "btn btn-success"}
                    disabled={currentSlide === 0}
                    onClick={() => setCurrentSlide(currentSlide - 1)}
                >
                    Prev
                </button>
                <button
                    type="button"
                    className={currentSlide === slides.length - 1 ? "btn btn-outline-success" : "btn btn-success"}
                    disabled={currentSlide === slides.length - 1}
                    onClick={() => setCurrentSlide(currentSlide + 1)}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 className="mb-4">{slides[currentSlide].title}</h1>
                <p>{slides[currentSlide].text}</p>
            </div>
        </div>
    );
};

export default Slides;
