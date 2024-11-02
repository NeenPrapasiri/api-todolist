const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const todoListSchema = new mongoose.Schema(
  {
    todoLabel: {
      type: String,
    },
    active: {
      type: Number,
      default: 0,
    },
    deleteFlag: {
      type: Number,
      default: 0,
    },
    create_dt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.todoId = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);
const TodoListModel = mongoose.model("TodoListModel", todoListSchema);

module.exports = TodoListModel;
