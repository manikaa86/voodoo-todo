import "./ButtonControl.css";

const ButtonControl = ({ selected, option, onClick, disabled }) => {
  const classNameString = `button ${
    selected === option.action ? "selected" : ""
  } ${disabled ? "disabled" : ""}`;
  return (
    <button
      className={classNameString}
      onClick={() => onClick(option.action)}
      disabled={disabled}
    >
      {option.name}
    </button>
  );
};

export default ButtonControl;
