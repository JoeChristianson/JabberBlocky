const {Post,Comment,User} = require("../../models")
const router = require("express").Router()

router.get("/:id",async (req,res)=>{
    const postDetails = await Post.findByPk(req.params.id,{
        include:{model:Comment,include:{model:User}}
    })
    console.log(postDetails)
    res.status(200).render("singlepost",{comments:postDetails.comments,postDetails,user:req.session.params})
})

module.exports = router;