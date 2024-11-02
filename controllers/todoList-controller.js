const { expressHandler } = require("./express-handler");
const Services = require("../services/todo-service");

async function getTodoListHandler() {
  const result = await Services.getTodoListService();
  return result;
}

async function createTodoListHandler(request) {
  const result = await Services.createTodoService(request.body);
  return result;
}

async function updateTodoHandler(request) {
  const result = await Services.updateTodoService(
    request.params.todoId,
    request.body
  );
  return result;
}

async function deletetodoHandler(request) {
  const result = await Services.deleteTodoServive(request.params.todoId);
  return result;
}

module.exports = {
  getTodoListHandler: expressHandler({
    handler: getTodoListHandler,
  }),
  createTodoListHandler: expressHandler({
    handler: createTodoListHandler,
  }),
  updateTodoHandler: expressHandler({
    handler: updateTodoHandler,
  }),
  deletetodoHandler: expressHandler({
    handler: deletetodoHandler,
  }),
};
