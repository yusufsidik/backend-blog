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

export const createPost = async (req, res) => {
  
  const newPost = new postModel(req.body)
  const post = await newPost.save()
  res.status(200).json(post)

}

export const deletePost = async (req, res) => {
  
  await postModel.findByIdAndDelete(req.params.id)

  res.status(200).json("Data has been delete")
}