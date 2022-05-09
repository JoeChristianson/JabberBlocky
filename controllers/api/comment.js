const router = require('express').Router();
const {Comment} = require("../../models")

// Get all comments for a post

router.get("/",async (req,res)=>{
    try{
        const comments = Comment.findAll({
            where:{
                post_id:req.body.post_id
            }
        })
    }catch(err){
        res.status(500).json(err)
    }
})

// post comment

router.post("/",async (req,res)=>{
    try{
        const newComment = Comment.create({
            user_id:req.session.userId,
            post_id:req.body.postId,
            text:req.body.text
        });
        res.status(200).json(newComment)
    }catch(err){
        res.status(500).json(err)
    }
})

// edit comment

router.put("/",async (req,res)=>{
    try{
        const updatedComment = Comment.update({
            text:req.body.text
        },{
            where:{
                id:req.body.id
            }
        });
        res.status(200).json(updatedComment)
    }catch(err){
        res.status(500).json()
    }
})

module.exports = router