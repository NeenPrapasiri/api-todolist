const TodoListModel = require("../models/todoList");

async function createTodo(label) {
  try {
    const newTodo = new TodoListModel({
      todoLabel: label,
    });

    const savedTodo = await newTodo.save();

    return savedTodo._id ? true : false;
  } catch (error) {
    console.error("Error creating todo list:", error);
    return false;
  }
}

async function getTodoList() {
  try {
    const todoList = await TodoListModel.find({ deleteFlag: 0 });
    return todoList;
  } catch (error) {
    console.error("Error get todo list:", error);
    return null;
  }
}

async function updateTodoList(todoId, data) {
  try {
    const todo = await TodoListModel.updateOne(
      { _id: todoId },
      {
        $set: {
          todoLabel: data.todoLabel,
          active: data.active,
        },
      }
    );
    return todo;
  } catch (error) {
    console.error("Error update todo list:", error);
    return null;
  }
}

async function deleteTodoList(todoId) {
  try {
    const todo = await TodoListModel.updateOne(
      { _id: todoId },
      {
        $set: {
          deleteFlag: 1,
        },
      }
    );
    return todo;
  } catch (error) {
    console.error("Error delete todo list:", error);
    return null;
  }
}

module.exports = {
  createTodo,
  getTodoList,
  updateTodoList,
  deleteTodoList,
};
