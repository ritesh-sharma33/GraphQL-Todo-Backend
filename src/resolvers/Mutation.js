const Mutation = {
  createTodo(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.createdBy);

    if (!userExists) {
      throw new Error("User not found");
    }

    const todo = {
      id: Math.floor(100000 + Math.random() * 900000),
      ...args.data,
    };

    db.todos.push(todo);

    return todo;
  },
  updateTodo(parent, args, { db }, info) {
    const { id, data } = args;

    const todo = db.todos.find((todo) => todo.id === id);
    const originalTodo = { ...todo };
    if (!todo) {
      throw new Error("Todo not found");
    }

    if (typeof data.title === "string") {
      todo.title = data.title;
    }
    if (typeof data.description === "string") {
      todo.description = data.description;
    }
    if (typeof data.deadline === "string") {
      todo.deadline = data.deadline;
    }

    return todo;
  },
  deleteTodo(parent, args, { db, pubsub }, info) {
    const todoIndex = db.todos.findIndex((todo) => todo.id === args.id);

    if (todoIndex === -1) {
      throw new Error("Todo not found");
    }

    const [todo] = db.todos.splice(todoIndex, 1);

    pubsub.publish(`todo ${todo.id}`, {
      todo: {
        data: todo,
      },
    });

    return todo;
  },
};

export { Mutation as default };
