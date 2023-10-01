import model from "../model/todo.js";
import asyncWrapper from "../utils/wrapper.js";
import {customError} from "../errors/error.js";

const getAllTasks = asyncWrapper(async (req, res) => {

  const tasks = await model.find({})
  return res.status(200).json({ status: "success", data: { tasks, count: tasks.length } });

});

const getSingleTask = asyncWrapper(async (req, res, next) => {

  const { id: TaskId } = req.params;  // id has been renamed to TaskId from now on
  const specific_task = await model.findOne({ _id: TaskId });

  if (!specific_task) {
    return next(customError(`No task with id: ${TaskId}`, 404));
  }
  return res.status(200).json({ status: "success", data: specific_task });

});

const createTask = asyncWrapper(async (req, res) => {

  const task = await model.create(req.body)
  return res.status(200).json({ status: "success", data: task });

});

const updateTask = asyncWrapper(async (req, res, next) => {

  const { id: TaskId } = req.params;  // id has been renamed to TaskId from now on
  const specific_task = await model.findOneAndUpdate({ _id: TaskId }, req.body,
    {
      new: true, // this will return the updated data as a response in postman
      runValidators: true, // when we update the data, we want to run the validators again so that we can check if the data is in the correct format or not
    }

  );

  if (!specific_task) {
    return next(customError(`No task with id: ${TaskId}`, 404));
  }
  return res.status(200).json({ status: "success", data: specific_task });

});

const deleteTask = asyncWrapper(async (req, res) => {

  const { id: TaskId } = req.params;  // id has been renamed to TaskId from now on
  const specific_task = await model.findOneAndDelete({ _id: TaskId });

  if (!specific_task) {
    return next(customError(`No task with id: ${TaskId}`, 404));
  }
  return res.status(200).json({ status: "Task deleted successfully" });

});

export { getAllTasks, getSingleTask, createTask, updateTask, deleteTask };
