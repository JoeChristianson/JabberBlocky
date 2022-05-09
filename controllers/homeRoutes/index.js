const { Post,User } = require('../../models');
const postRoutes = require("./post.js")
const loginRoutes = require("./login.js")
const router = require('express').Router();
const newPostRoutes = require("./newpost.js")

router.use("/login",loginRoutes)
router.use("/newpost",newPostRoutes)
router.use("/post",postRoutes)

router.get("/",async (req,res)=>{
    const local = true;
    const posts = await Post.findAll({include:{model:User}})
    console.log(posts)
    res.render('homepage',{loggedIn:req.session.loggedIn,posts});
})

module.exports = router;