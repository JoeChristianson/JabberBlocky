const {Post,Comment,User} = require("../../models")
const router = require("express").Router()

router.get("/:id",async (req,res)=>{
    const postDetails = await Post.findByPk(req.params.id,{
        include:[{model:Comment,include:{model:User}},{model:User}]
    })
    console.log(postDetails)
    res.status(200).render("singlepost",{comments:postDetails?.comments,postDetails,user:req.session.params,loggedIn:req.session.loggedIn})
})

module.exports = router;