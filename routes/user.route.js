import express from "express"


const router = express.Router()

router.get("/", (req, res) => {

  const dataUser = [
    {
      id: 122,
      name: "yusuf",
      email: "yusufsidik36@gmail.com"
    },
    {
      id: 123,
      name: "ammar",
      email: "ammarsidik@gmail.com"
    },
    {
      id: 124,
      name: "sidik",
      email: "sidik@gmail.com"
    },
    {
      id: 125,
      name: "kholid",
      email: "kholid@gmail.com"
    },
    {
      id: 126,
      name: "narsih",
      email: "narsih@gmail.com"
    },
  ]

  

  res.status(200).send(JSON.stringify(dataUser))
})

export default router