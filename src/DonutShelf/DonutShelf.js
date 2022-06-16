import DonutBox from "../DonutBox";

// all props will be used eventually
const DonutShelf = ({ donutShelfData, handleBoxClick, isAdd }) => {
  return (
    <>
      {donutShelfData.map((el, index) => {
        return (
          <DonutBox
            key={index}
            boxData={el}
            handleBoxClick={handleBoxClick}
            isAdd={isAdd}
          />
        ); // render donut boxes
      })}
    </>
  );
};

export default DonutShelf;
