const Grass = ({ grassClass }) => (
  <div className={`growing-grass`}>
    <div className={`flower__grass ${grassClass}`}>
      <div className="flower__grass--top"></div>
      <div className="flower__grass--bottom"></div>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`flower__grass__leaf flower__grass__leaf--${index + 1}`}
        ></div>
      ))}
      <div className="flower__grass__overlay"></div>
    </div>
  </div>
);
