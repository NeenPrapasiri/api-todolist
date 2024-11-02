const { body, validationResult, param } = require("express-validator");
const { failure } = require("../helper/http-response");

const createTodoRequest = [
  body("todoLabel")
    .notEmpty()
    .withMessage("todoLabel is required")
    .isString()
    .withMessage("todoLabel is not string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const updateTodoRequest = [
  param("todoId")
    .notEmpty()
    .withMessage("todoId must not be empty")
    .isString()
    .withMessage("todoId is not a UUID"),
  body("todoLabel")
    .notEmpty()
    .withMessage("todoLabel is required")
    .isString()
    .withMessage("todoLabel is not string"),
  body("active")
    .notEmpty()
    .withMessage("active is required")
    .isNumeric()
    .withMessage("active is not number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const deleteTodoRequest = [
  param("todoId")
    .notEmpty()
    .withMessage("todoId must not be empty")
    .isString()
    .withMessage("todoId is not a UUID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
module.exports = {
  createTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
};
