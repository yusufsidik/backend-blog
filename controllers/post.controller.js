import postModel from "../models/post.model.js"

// get all data
export const getPosts = async (req, res) => {
  const posts = await postModel.find() 
  res.status(200).json(posts)
}

//  get a single data
// parameter slug yg dikirimkan dari route akan diterima oleh req, akses nya menggunakan req.params.[nama param]
export const getPost = async (req, res) => {
  const post = await postModel.findOne({ slug:req.params.slug })

  res.status(200).json(post)
}