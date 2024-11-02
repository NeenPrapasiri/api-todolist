const express = require("express");
const router = express.Router();

const validateTodoRequest = require("../validators/todo-validate");
const todoListController = require("../controllers/todoList-controller");

router.get("/todolist", todoListController.getTodoListHandler);
router.post(
  "/todolist",
  validateTodoRequest.createTodoRequest,
  todoListController.createTodoListHandler
);
router.patch(
  "/todolist/:todoId",
  validateTodoRequest.updateTodoRequest,
  todoListController.updateTodoHandler
);
router.delete(
  "/todolist/:todoId",
  validateTodoRequest.deleteTodoRequest,
  todoListController.deletetodoHandler
);

module.exports = router;
