import express from "express"
import userRouter from "./routes/user.route.js"


const app = express()

// app.get("/test", (req, res) => {
//   res.status(200).send("it works")
// })

app.use("/users", userRouter)

app.listen(3000, () => {
  console.log("server is running")
})