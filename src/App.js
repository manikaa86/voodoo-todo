import { useState } from 'react';
import './App.css';
import { initialData, actions, ReplaceMeWithCorrectFunction } from './const';
import ControlPanel from './ControlPanel';
import DonutShelf from './DonutShelf';
import {
  addDonutToBox,
  alterSprinklesToDonut,
  alterFillingToDonut,
  removeDonutFromBox,
  alterDonutFlavor
} from './utils';

const App = () => {
  const [donutShelfData, setDonutShelfData] = useState(initialData);
  const [selectedAction, setSelectedAction] = useState('addMoreDonut');
  const [selectedType, setSelectedType] = useState('glazed');

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
        setDonutShelfData(addDonutToBox(donutShelfData, userId, selectedType));
        break;
      case actions.add.action:
        // TODO add donut to selected box using function `addDonutToBox`
        setDonutShelfData(addDonutToBox(donutShelfData, userId, selectedType));
        break;
      case actions.remove.action:
        console.log('click! add functionality to to delete me');
        // TODO delete selected donut using function `removeDonutFromBox`
        // and update the `donutShelfData` state
        break;
      case actions.flavor.action:
        console.log('click! add functionality to update my flavor');
        // TODO update flavor of selected donut using function `alterDonutFlavor`
        // and update the `donutShelfData` state
        break;
      default:
        console.error('An invalid action was passed to handleBoxClick');
    }
  };

  return (
    <div className='app-wrapper'>
      <h1>Voodoo Todo:</h1>
      <div className='app-container'>
        <ControlPanel
          selectedAction={'ReplaceWithCorrectValue'}
          handleActionClick={ReplaceMeWithCorrectFunction}
          selectedType={'ReplaceWithCorrectValue'}
          handleTypeClick={ReplaceMeWithCorrectFunction}
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
