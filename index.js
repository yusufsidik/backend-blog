import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"

const app = express()

// middleware to read json
app.use(express.json())

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

// we use this middleware so we cannot write try catch anymore in controller if something error in api
app.use((error, req, res, next) => {

  res.status(error.status || 500)

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack
  })
})


app.listen(3000, () => {
  connectDB()
  console.log("server is running")
})