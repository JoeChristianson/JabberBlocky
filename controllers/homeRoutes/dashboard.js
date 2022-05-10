const {Post,User} = require("../../models")
const router = require("express").Router()

router.get("/",async(req,res)=>{
    try{
        const userPosts = await Post.findAll({
            where:{
                user_id:req.session.userId
            },include:{model:User}
        })
        res.status(200).render("dashboard",{posts:userPosts,loggedIn:req.session.loggedIn})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router