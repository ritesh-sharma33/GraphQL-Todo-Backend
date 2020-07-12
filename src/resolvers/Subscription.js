const Subscription = {
  todo: {
    subscribe(parent, { todoId }, { db, pubsub }, info) {
      const todo = db.todos.find((todo) => todo.id === todoId);

      if (!todo) {
        throw new Error("Todo not found");
      }

      return pubsub.asyncIterator(`todo ${todoId}`);
    },
  },
};

export { Subscription as default };
