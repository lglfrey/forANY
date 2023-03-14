import { useRef, useEffect, useState, React } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import "../assets/css/floor_room.css";
import { ReactComponent as FloorSvg } from "../assets/images/floor3_svg.svg";

import CustomSlider from "../components/CustomSlider/CustomSlider";

///https://codesandbox.io/s/zoom-pan-pinch-y9wki?file=/src/App.tsx:1098-1105
//src/core/handlers/handlers.logic.ts
//https://github.com/prc5/react-zoom-pan-pinch

import "./Choise_Of_FaR.css";

const floor3 = require("../assets/images/Floor_Example.png");
const gear_wheel = require("../assets/images/Vectorgear-wheel.png");

//const Floor = () => (
//  <>
// <select className="select-ce">
// <option>Этаж 3</option>
// <option>Этаж 5</option>
// <option>Этаж 6</option>
// </select>
// </>
// );

//функция для зума и клика изображения
function ZoomPanWithSvg({ commonZoomValue, commonState, handleZoomChange }) {
  const childRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    // Works!
    //imgRef?.current?.zoomIn();
    if (!imgRef?.current) return;

    // imgRef.current.instance.transformState.positionY

    console.log("imgRef.curren2", imgRef.current);

    const zoomState = 50;
    // const zoomState = imgRef.current.state.scale * 100;
    const ownZoomState = imgRef.current;
    const positionX = ownZoomState.instance.transformState.positionX;
    const positionY = ownZoomState.instance.transformState.positionY;

    //текущие координаты
    console.log("positionX", positionX);
    console.log("positionY", positionY);
    console.log("ownZoomState", ownZoomState);

    //ownZoomState.centerView(commonZoomValue / 100);
    //ownZoomState.setTransform(positionX, positionY, commonZoomValue / 100);

    //imgRef.current.zoomToElement("hello", handleZoomChange / 100);

    //imgRef.current.setTransform(positionX, positionY, commonZoomValue / 100);

    //console.log("zoomState", zoomState);
    //console.log("commonZoomValue", commonZoomValue);

    if (zoomState < commonZoomValue) {
      //imgRef?.current?.zoomIn();
    }

    if (zoomState > commonZoomValue) {
      //imgRef?.current?.zoomOut();
    }

    console.log("zoomState!", zoomState);
  }, [handleZoomChange]);

  //хук для клика
  useEffect(() => {
    const ch = childRef.current.children[0].children;
    for (const item of ch) {
      if (item?.id) {
        if (!item.hasAttribute("onClickEventAdded")) {
          item.setAttribute("onClickEventAdded", null);

          let currentCoordinates = null;

          item.addEventListener("mousedown", (clickedItem) => {
            const zoomState = imgRef.current?.instance.transformState;
            currentCoordinates = {
              x: zoomState.positionX,
              y: zoomState.positionY,
            };
          });

          item.addEventListener("mouseup", (clickedItem) => {
            const zoomState = imgRef.current?.instance.transformState;
            const newCoordinates = {
              x: zoomState.positionX,
              y: zoomState.positionY,
            };
            if (
              newCoordinates.x === currentCoordinates.x &&
              newCoordinates.y === currentCoordinates.y
            ) {
              console.log("click: ", clickedItem.target.parentElement.id);
            }
          });
        }
      }
    }
  }, [childRef]);
  //отображение свг и картинки
  return (
    <TransformWrapper
      wheel={{ step: 0.05 }}
      initialScale={commonZoomValue / 100}
      minScale={0.1}
      maxScale={1.5}
      defaultPositionX={100}
      defaultPositionY={100}
      centerOnInit={true}
      alignmentAnimation={{
        sizeY: 0,
        sizeX: 0,
      }}
      ref={imgRef}
      onZoom={(e) => handleZoomChange(e.state.scale * 100)}
    >
      <TransformComponent>
        {commonState ? <p/> : <FloorSvg ref={childRef} className="pict-svg" />}
        
        <img alt="" src={floor3} />
        <div id="hello">dfv</div>
      </TransformComponent>
    </TransformWrapper>
  );
}

//основное тело
export default function Choise_Od_FaR() {
  const defaultCommonZoomValue = 30;
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [State, setState] = useState(false);
  const [commonZoomValue, setCommonZoomValue] = useState(
    defaultCommonZoomValue
  );

  const handleChange = event => {
    if (event.target.checked) {
      setState(!State)

    } else {
      setState(!State)
      // window.location.reload();
    }
    setIsSubscribed(current => !current);
  };

  function handleZoomChange(newZoomValue) {
    setCommonZoomValue(newZoomValue);
  }

  function handleSliderChange(newZoomValue) {
    setCommonZoomValue(newZoomValue);
  }

  return (
    <>
      <header className="pict">
        <p className="choose-room">&larr; Выберите комнату</p>
        <img id="gear-wheel" alt="" src={gear_wheel} />
      </header>
      <div className="login-form-container">
        <select className="select-ce">
          <option>Этаж 3</option>
          <option>Этаж 5</option>
          <option>Этаж 6</option>
        </select>
        <ZoomPanWithSvg
          commonZoomValue={commonZoomValue}
          commonState={State}
          handleZoomChange={handleZoomChange}
        ></ZoomPanWithSvg>
        
      </div>
      <CustomSlider
        commonZoomValue={commonZoomValue}
        handleSliderChange={handleSliderChange}
      />
      <form className="floating-button">
        <label id="label_hide">
          <p id="hide-rooms">Скрыть комнаты</p>
          <input id="hide-input" value={isSubscribed} onChange={handleChange} type="checkbox" />
        </label>
      </form>
    </>
  );
}
