import React from "react";
import "./App.css";

function App() {
  const longGElements = [
    [3.0, 2.2, 3.4, 3.6],
    [3.6, 3.8, 4.0, 4.2],
    [4.0, 4.2, 4.4, 4.6],
    [4.0, 4.2, 3.0, 3.6],
    [4.0, 4.2, 3.0, 3.6],
    [4.0, 4.2, 3.0, 3.6],
    [4.2, 4.4, 4.6, 4.8],
    [3.0, 3.2, 3.5, 3.6],
  ];

  const LongGComponents = longGElements.map((timings, groupIndex) => (
    <div
      className={`long-g long-g--${groupIndex}`}
      key={`long-g-${groupIndex}`}
    >
      {timings.map((timing, leafIndex) => (
        <div
          className="grow-ans"
          style={{ "--d": `${timing}s` }}
          key={`leaf-${groupIndex}-${leafIndex}`}
        >
          <div className={`leaf leaf--${leafIndex}`}></div>
        </div>
      ))}
    </div>
  ));
  return (
    <>
      <div id="foru"></div>
      <div className="night"></div>
      <div className="flowers">
        {/* Flowers */}
        {[...Array(3)].map((_, flowerIndex) => (
          <div
            className={`flower flower--${flowerIndex + 1}`}
            key={flowerIndex}
          >
            <div className={`flower__leafs flower__leafs--${flowerIndex + 1}`}>
              {[...Array(4)].map((_, leafIndex) => (
                <div
                  className={`flower__leaf flower__leaf--${leafIndex + 1}`}
                  key={leafIndex}
                ></div>
              ))}
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, lightIndex) => (
                <div
                  className={`flower__light flower__light--${lightIndex + 1}`}
                  key={lightIndex}
                ></div>
              ))}
            </div>
            <div className="flower__line">
              {[...Array(flowerIndex === 0 ? 6 : 4)].map((_, lineLeafIndex) => (
                <div
                  className={`flower__line__leaf flower__line__leaf--${
                    lineLeafIndex + 1
                  }`}
                  key={lineLeafIndex}
                ></div>
              ))}
            </div>
          </div>
        ))}

        {/* Growing Grass */}
        {[...Array(2)].map((_, grassIndex) => (
          <div className="growing-grass" key={grassIndex}>
            <div className={`flower__grass flower__grass--${grassIndex + 1}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[...Array(8)].map((_, grassLeafIndex) => (
                <div
                  className={`flower__grass__leaf flower__grass__leaf--${
                    grassLeafIndex + 1
                  }`}
                  key={grassLeafIndex}
                ></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
        ))}

        {/* Additional Grow-Ans Elements */}
        {[...Array(3)].map((_, growAnsIndex) => (
          <div
            className="grow-ans"
            style={{ "--d": `${1.2 + growAnsIndex * 0.6}s` }}
            key={growAnsIndex}
          >
            <div className={`flower__g-long`}>
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>
        ))}

        {[...Array(4)].map((_, index) => (
          <div
            className="grow-ans"
            style={{ "--d": `${2.8 + index * 0.4}s` }}
            key={index}
          >
            <div className={`flower__g-right flower__g-right--${index + 1}`}>
              <div className="leaf"></div>
            </div>
          </div>
        ))}

        <div className="grow-ans" style={{ "--d": "2.8s" }}>
          <div className="flower__g-front">
            {[...Array(8)].map((_, index) => (
              <div
                className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${
                  index + 1
                }`}
                key={index}
              >
                <div className="flower__g-front__leaf"></div>
              </div>
            ))}
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "3.2s" }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            {[...Array(8)].map((_, index) => (
              <div
                className={`flower__g-fr__leaf flower__g-fr__leaf--${
                  index + 1
                }`}
                key={index}
              ></div>
            ))}
          </div>
        </div>

        {/* Long-G Elements */}
        {LongGComponents}
      </div>
    </>
  );
}

export default App;
