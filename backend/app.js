import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { readUsers, readSelectUsers } from "./crud-read.js";
import { createUsers } from "./crud-create.js";
import { updateUsers } from './crud-update.js'
import { deleteUsers } from "./crud-delete.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/list", async (req, res) => {
  try {
    const users = await readUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

app.get("/list/:id", async (req, res) => {
  try {
    const users = await readSelectUsers({ employee_id: req.params.id });
    res.status(200).json(users);
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

app.post("/add", async (req, res) => {
  try {
    await createUsers(req.body);
    res.status(200).json({
      message: "success",
    });
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    await updateUsers({employee_id: req.params.id}, req.body);
    res.status(200).json({
      message: "success",
    });
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await deleteUsers({ employee_id: req.params.id });
    res.status(200).json({
      message: "success",
    });
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

export default app
export const handler = serverless(app);

