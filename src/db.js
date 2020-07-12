let users = [
  {
    id: "10",
    name: "Michael",
    email: "michael@example.com",
    age: 26,
  },
  {
    id: "11",
    name: "Danny",
    email: "danny@example.com",
    age: 27,
  },
  {
    id: "12",
    name: "Steve",
    email: "steve@example.com",
    age: 30,
  },
];

let todos = [
  {
    id: "1",
    title: "Learn MobX",
    description: "Learning state management strategy of MobX",
    createTime: "27 March 2020, 15:30",
    deadline: "27 March 2020, 23:59",
    createdBy: "11",
  },
  {
    id: "2",
    title: "Complete personal Website",
    description: "Complete the last component of personal website",
    createTime: "28 March 2020, 16:45",
    deadline: "30 March 2020, 23:59",
    createdBy: "12",
  },
  {
    id: "3",
    title: "Repair the bike",
    description: "Make bike ready to ride",
    createTime: "29 March 2020, 05:30",
    deadline: "29 March 2020, 22:00",
    createdBy: "10",
  },
  {
    id: "4",
    title: "Go to the market",
    description: "Go to the market for purchasing essentials",
    createTime: "30 March 2020, 11:10",
    deadline: "30 March 2020, 18:30",
    createdBy: "12",
  },
];

const db = {
  users,
  todos,
};

export { db as default };
