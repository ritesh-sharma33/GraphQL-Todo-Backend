const User = {
  todos(parent, args, { db }, info) {
    return db.todos.filter((todo) => {
      return todo.createdBy === parent.id;
    });
  },
};

export { User as default };
