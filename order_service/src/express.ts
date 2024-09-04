import express from "express"
import cors from "cors"
// import router from "./api/routes"
import { json } from "body-parser";
const app=express()
app.use(cors())
app.use(express.json())
// app.use("/", router);
export default app;