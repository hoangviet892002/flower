const LongG = ({ styleClass, delayClasses }) => (
  <div className={`long-g ${styleClass}`}>
    {delayClasses.map((delayClass, index) => (
      <GrowAns key={index} styleClass={delayClass}>
        <div className={`leaf leaf--${index}`}></div>
      </GrowAns>
    ))}
  </div>
);
