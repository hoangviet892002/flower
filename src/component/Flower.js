const Flower = ({ flowerClass, leafsClass, lineLeavesCount }) => (
  <div className={`flower ${flowerClass}`}>
    <div className={`flower__leafs ${leafsClass}`}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`flower__leaf flower__leaf--${index + 1}`}
        ></div>
      ))}
      <div className="flower__white-circle"></div>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`flower__light flower__light--${index + 1}`}
        ></div>
      ))}
    </div>
    <div className="flower__line">
      {[...Array(lineLeavesCount)].map((_, index) => (
        <div
          key={index}
          className={`flower__line__leaf flower__line__leaf--${index + 1}`}
        ></div>
      ))}
    </div>
  </div>
);
