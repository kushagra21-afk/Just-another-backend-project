import express from "express"
import router from "./api/routes"
import { json } from "body-parser";
const app=express()
app.use(express.json())
app.use("/", router);
export default app;