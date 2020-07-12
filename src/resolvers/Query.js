const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) return db.users;

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  todos(parent, args, { db }, info) {
    console.log("Todos:", db.todos);
    if (!args.query) {
      return db.todos;
    }

    return db.todos.filter((todo) => {
      const isTitleMatch = todo.title
        .toLowerCase()
        .includes(args.query.toLowerCase());

      const isDescriptionMatch = todo.description
        .toLowerCase()
        .includes(args.query.toLowerCase());

      return isTitleMatch || isDescriptionMatch;
    });
  },
};

export { Query as default };
