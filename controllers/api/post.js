const router = require("express").Router()
const req = require("express/lib/request")
const {Post} = require("../../models")

router.get("/:id",async (req,res)=>{
    try{
        const post = await Post.findByPk(req.params.id);
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post("/",async(req,res)=>{
    try{
        if (!req.session.loggedIn){
            res.status(200).json("Must log in")
        }
        const newPost = await Post.create({
            user_id:req.session.userId,
            text:req.body.text,
            title:req.body.title
        });
        res.status(200).json(newPost)
    }catch(err) {res.status(500).json(err)}
})

router.get("/all",async(req,res)=>{
    try{
        const allPosts = await Post.findAll();
        res.status(200).json(allPosts)
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/edit",async (req,res)=>{
    try{
        const updatedPost = await Post.update({
            text:req.body.text
        },{
            where:{
                id:req.body.id
            }
        });
        res.status(200).json(updatedPost)
    }catch(err){
        req.status(500).json(err)
    }
})

router.delete("/",async (req,res)=>{
    try{
        const deleted = Post.destroy({
            where:{
                id:req.body.id
            }
        })
        res.status(200).json(deleted)
    }catch(err){
        res.status(500).json()
    }
})

module.exports = router;