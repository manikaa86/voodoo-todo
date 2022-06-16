import "./Donut.css";

const Donut = ({ handleBoxClick, donutData, userId, isAdd }) => {
  const { flavor, sprinkles, filled, donutId } = donutData;
  const donutDescription = `donut ${flavor}${filled ? "-filled" : ""}`;

  const handleClick = (e) => {
    // this will prevent this event from bubbling to the DonutBox
    e.stopPropagation();
    handleBoxClick(userId, donutId);
  };

  return (
    <div className="donut-shape" onClick={handleClick}>
      <div className={`${donutDescription} ${isAdd ? "add" : ""}`} />
      {sprinkles && (
        <img
          src="./images/sprinkles.png"
          className={`sprinkles ${isAdd ? "add" : ""}`}
          alt="donut"
        />
      )}
    </div>
  );
};

export default Donut;
