const router = require('express').Router();
const {Comment} = require("../../models")

// Get all comments for a post

router.get("/",async (req,res)=>{
    try{
        const comments = await Comment.findAll({
            where:{
                post_id:req.body.postId
            }
        });
        res.status(200).json(comments)
    }catch(err){
        res.status(500).json(err)
    }
})

// post comment

router.post("/",async (req,res)=>{
    try{
        const newComment = await Comment.create({
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
        const updatedComment = await Comment.update({
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

router.delete("/",async (req,res)=>{
    try{
        const deletedComment = await Comment.destroy({
            where:{
                id:req.body.id
            }
        });
        res.status(200).json(deletedComment)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router