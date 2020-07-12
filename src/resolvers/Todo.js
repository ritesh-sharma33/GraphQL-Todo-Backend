const Todo = {
  createdBy(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.createdBy;
    });
  },
};

export { Todo as default };
