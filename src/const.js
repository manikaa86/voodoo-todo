export const actions = {
  sprinkles: {
    name: "Sprinkles",
    action: "sprinkles",
  },
  filled: {
    name: "Filled",
    action: "filled",
  },
  add: {
    name: "Add",
    action: "addMoreDonut",
  },
  remove: {
    name: "Remove",
    action: "deleteDonut",
  },
  flavor: {
    name: "Flavor",
    action: "changeFlavor",
  },
};

export const actionOptions = [
  actions.sprinkles,
  actions.filled,
  actions.add,
  actions.remove,
  actions.flavor,
];

export const flavorOptions = [
  {
    name: "Cherry",
    action: "cherry",
  },
  {
    name: "Glazed",
    action: "glazed",
  },
  {
    name: "Chocolate",
    action: "chocolate",
  },
  {
    name: "Maple",
    action: "maple",
  },
];

export const initialData = [
  {
    name: "Manika's Box",
    userId: "user-1",
    donuts: [
      {
        flavor: "chocolate",
        sprinkles: true,
        filled: true,
        donutId: "donut-1",
      },
      {
        flavor: "maple",
        sprinkles: true,
        filled: false,
        donutId: "donut-2",
      },
      {
        flavor: "cherry",
        sprinkles: true,
        filled: false,
        donutId: "donut-3",
      },
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: true,
        donutId: "donut-4",
      },
      {
        flavor: "maple",
        sprinkles: false,
        filled: false,
        donutId: "donut-5",
      },
      {
        flavor: "glazed",
        sprinkles: false,
        filled: false,
        donutId: "donut-6",
      },
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: true,
        donutId: "donut-7",
      },
      {
        flavor: "maple",
        sprinkles: true,
        filled: false,
        donutId: "donut-8",
      },
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: false,
        donutId: "donut-9",
      },
      {
        flavor: "glazed",
        sprinkles: false,
        filled: true,
        donutId: "donut-10",
      },
      {
        flavor: "maple",
        sprinkles: false,
        filled: true,
        donutId: "donut-11",
      },
      {
        flavor: "chocolate",
        sprinkles: true,
        filled: false,
        donutId: "donut-12",
      },
    ],
  },
  {
    name: "Ashley's Box",
    userId: "user-2",
    donuts: [
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: true,
        donutId: "donut-13",
      },
      {
        flavor: "maple",
        sprinkles: true,
        filled: false,
        donutId: "donut-14",
      },
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: false,
        donutId: "donut-15",
      },
    ],
  },
  {
    name: "Randunu's Box",
    userId: "user-3",
    donuts: [
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: true,
        donutId: "donut-16",
      },
      {
        flavor: "maple",
        sprinkles: true,
        filled: false,
        donutId: "donut-17",
      },
      {
        flavor: "glazed",
        sprinkles: false,
        filled: false,
        donutId: "donut-18",
      },
      {
        flavor: "chocolate",
        sprinkles: false,
        filled: true,
        donutId: "donut-19",
      },
      {
        flavor: "maple",
        sprinkles: true,
        filled: false,
        donutId: "donut-20",
      },
      {
        flavor: "glazed",
        sprinkles: true,
        filled: false,
        donutId: "donut-21",
      },
    ],
  },
];

export const ReplaceMeWithCorrectFunction = () => {};
