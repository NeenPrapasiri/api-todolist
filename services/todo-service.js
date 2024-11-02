const { success, failure } = require("../helper/http-response");
const TodoListData = require("../data/todoList-data");

async function getTodoListService() {
  try {
    const result = await TodoListData.getTodoList();
    if (!result)
      return failure(400, null, "Failed to Get data into the database");

    return success(result, "Get Todo List Success");
  } catch (error) {
    return failure(500, error, "internal error");
  }
}

async function createTodoService(bodyData) {
  try {
    const inserted = await TodoListData.createTodo(bodyData.todoLabel);
    if (!inserted)
      return failure(400, null, "Failed to insert data into the database");

    return success([], "Create Todo Success");
  } catch (error) {
    return failure(500, error, "internal error");
  }
}

async function updateTodoService(todoId, dataBody) {
  try {
    const result = await TodoListData.updateTodoList(todoId, dataBody);
    if (!result)
      return failure(400, null, "Failed to Update data into the database");

    return success([result], "Update Todo Success");
  } catch (error) {
    return failure(500, error, "internal error");
  }
}

async function deleteTodoServive(todoId) {
  try {
    const result = await TodoListData.deleteTodoList(todoId);
    if (!result)
      return failure(400, null, "Failed to Delete data into the database");

    return success([], "Delete Todo Success");
  } catch (error) {
    return failure(500, error, "internal error");
  }
}
module.exports = {
  getTodoListService,
  createTodoService,
  updateTodoService,
  deleteTodoServive,
};
