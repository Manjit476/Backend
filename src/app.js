import express from 'express';
import cors from "cors"
import cookieParser from 'cookie-parser';

// console.log("THIS APP.JS IS LOADED");

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())



// app.get("/test", (req, res) => {
//     console.log("Test route hit");
//     res.json({
//         message: "App.js is working"
//     });
// });

//routes import

import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/users/register

export { app };