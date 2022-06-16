import ButtonControl from "../ButtonControl";
import { actionOptions, flavorOptions, actions } from "../const";
import "./ControlPanel.css";

const ControlPanel = ({
  selectedAction,
  handleActionClick,
  selectedType,
  handleTypeClick,
}) => {
  const disableFlavorOptions =
    selectedAction !== actions.add.action &&
    selectedAction !== actions.flavor.action;

  return (
    <>
      <div className="panel">
        {actionOptions.map((el, index) => {
          return (
            <ButtonControl
              key={index.name}
              selected={selectedAction}
              option={el}
              onClick={handleActionClick}
            />
          );
        })}
      </div>

      <div className="panel">
        {flavorOptions.map((el, index) => {
          return (
            <ButtonControl
              key={index.name}
              selected={selectedType}
              option={el}
              onClick={handleTypeClick}
              disabled={false} //'ReplaceWithCorrectValue'
            />
          );
        })}
      </div>
    </>
  );
};

export default ControlPanel;
