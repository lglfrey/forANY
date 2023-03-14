import React from "react";
import ReactSlider from "react-slider";

import "./CustomSlider.css";

export default function CustomSlider({ commonZoomValue, handleSliderChange }) {
  const minValue = 10;
  const maxValue = 150;
  const step = 20;

  function zoomIn() {
    let newValue = commonZoomValue + step;
    if (newValue > maxValue) newValue = maxValue;
    handleSliderChange(newValue);
  }

  function zoomOut() {
    let newValue = commonZoomValue - step;
    if (newValue < minValue) newValue = minValue;
    handleSliderChange(newValue);
  }

  return (
    <div className="custom-slider-wrapper">
      <div className="custom-slider-addon custom-slider-circle mb-2" onClick={zoomIn}>+</div>
      <ReactSlider
        className="custom-slider"
        thumbClassName="custom-slider-thumb"
        trackClassName="custom-slider-track"
        markClassName="custom-slider-mark"
        min={minValue}
        max={maxValue}
        invert
        value={commonZoomValue}
        onChange={(value) => handleSliderChange(value)}
        orientation="vertical"
      />
      <div className="custom-slider-addon custom-slider-circle mt-2 mb-2" onClick={zoomOut}>-</div>
      <div className="custom-slider-addon custom-slider-info">
        {Math.round(commonZoomValue)}%
      </div>
    </div>
  );
}
