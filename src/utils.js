const getUniqueDonutId = () => {
  return `donut-${Math.floor(Math.random() * 100000 + 1)}`;
};

const buildDonut = (type) => {
  return {
    flavor: type,
    sprinkles: false,
    filled: false,
    donutId: getUniqueDonutId(),
  };
};

export const addDonutToBox = (donutShelfData, userId, type) => {
  buildDonut();
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    // console.log("UserId:", userId);
    // console.log("box:", newShelfData[box].userId);
    // console.log("box2", newShelfData[box]);
    if (newShelfData[i].userId === userId) {
      newShelfData[i].donuts.push(buildDonut(type));
      break;
    }
  }
  return newShelfData;
};

export const alterSprinklesToDonut = (donutShelfData, userId, donutId) => {
  // Jeff really likes sprinkles. Due to his character flaw, `alterSprinklesToDonut` has been completed
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].sprinkles =
            !newShelfData[i].donuts[j].sprinkles;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const alterFillingToDonut = (donutShelfData, userId, donutId) => {
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].filled = !newShelfData[i].donuts[j].filled;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const removeDonutFromBox = (donutShelfData, userId, donutId) => {
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts.splice(j, 1);
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const alterDonutFlavor = (
  donutShelfData,
  userId,
  donutId,
  selectedType
) => {
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].flavor = selectedType;
        }
      }
      break;
    }
  }
  return newShelfData;
};
