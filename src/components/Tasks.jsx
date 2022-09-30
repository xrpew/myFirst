export const Tasks = ({ title, img, i, divStyle, timeframes, period }) => {

  return (
    <div>
      <div style={divStyle} className="card-act">
        <div className="color-back">
          <p className="imagen">
            <img src={img} alt={title} />
          </p>
        </div>

        <div className="details">
          <div className="head">
            <p className="name-act">{title}</p>
            <p className="imagenpts">
              <img
                className="imagenpts"
                src="src/images/icon-ellipsis.svg"
                alt="dots-img"
              />
            </p>
          </div>
          <div className="bodddy">
            <p className="hours">{timeframes[period].current} Hrs</p>
            <p className="lastHours">Last {timeframes[period].previous} hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
