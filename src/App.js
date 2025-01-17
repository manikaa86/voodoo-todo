import { useState } from "react";
import "./App.css";
import { initialData, actions, actionOptions, flavorOptions } from "./const";
import ControlPanel from "./ControlPanel";
import DonutShelf from "./DonutShelf";
import {
  addDonutToBox,
  alterSprinklesToDonut,
  alterFillingToDonut,
  removeDonutFromBox,
  alterDonutFlavor,
} from "./utils";

const App = () => {
  const [donutShelfData, setDonutShelfData] = useState(initialData);
  const [selectedAction, setSelectedAction] = useState(actions.add.action);
  const [selectedType, setSelectedType] = useState("glazed");

  const handleActionClick = (label) => {
    setSelectedAction(label);
  };

  const handleTypeClick = (label) => {
    setSelectedType(label);
  };

  const handleBoxClick = (userId, donutId) => {
    switch (selectedAction) {
      case actions.sprinkles.action:
        setDonutShelfData(
          alterSprinklesToDonut(donutShelfData, userId, selectedType)
        );
        break;
      case actions.filled.action:
        setDonutShelfData(alterFillingToDonut(donutShelfData, userId, donutId));
        break;
      case actions.add.action:
        setDonutShelfData(addDonutToBox(donutShelfData, userId, selectedType));
        break;
      case actions.remove.action:
        console.log("click! add functionality to to delete me");
        setDonutShelfData(removeDonutFromBox(donutShelfData, userId, donutId));

        break;
      case actions.flavor.action:
        console.log("click! add functionality to update my flavor");
        // function
        setDonutShelfData(
          alterDonutFlavor(donutShelfData, userId, donutId, selectedType)
        );
        break;
      default:
        console.error("An invalid action was passed to handleBoxClick");
    }
  };

  return (
    <div className="app-wrapper">
      <h1>Voodoo Todo:</h1>
      <div className="app-container">
        <ControlPanel
          selectedAction={selectedAction}
          handleActionClick={handleActionClick}
          selectedType={selectedType}
          handleTypeClick={handleTypeClick}
        />
        <DonutShelf
          donutShelfData={donutShelfData}
          handleBoxClick={handleBoxClick}
          isAdd={selectedAction === actions.add.action}
        />
      </div>
    </div>
  );
};

export default App;
