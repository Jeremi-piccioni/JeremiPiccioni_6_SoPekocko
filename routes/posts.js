const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Get back all the posts
router.get('/', async (req, res) => {
    try{ 
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({message: err})
    }
})

// Submit a post
router.post('/', async (req,res) => {
    const post = new Post({
        email: req.body.email,
        password: req.body.password
    }) 

    try{
   const savedPost = await post.save()
    res.json(savedPost)
    }catch(err){
        res.json({message: err})

    }
})

//Get a spesific post
router.get('/:postId', async (req, res) => {
    
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(err) {
        res.json({message: err})
    }
})

//Delete a specific post
router.delete('/:postId', async (req, res) => {
    
    try{
        const removedPost = await Post.remove({ _id: req.params.postId})
        res.json(removedPost)
    }catch(err) {
        res.json({message: err})
    }
})

//Update a post
router.patch('/:postId', async (req, res) => {
    
    try{
        const updatedPost = await Post.updateOne({ _id: req.params.postId},
                                                 { $set: {password: req.body.password} } 
                                                )
        res.json(updatedPost)
    }catch(err) {
        res.json({message: err})
    }
})

module.exports = router

