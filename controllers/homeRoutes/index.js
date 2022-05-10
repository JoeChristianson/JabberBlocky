const { Post,User } = require('../../models');
const postRoutes = require("./post.js")
const loginRoutes = require("./login.js")
const router = require('express').Router();
const newPostRoutes = require("./newpost.js")
const dashboardRoutes = require("./dashboard.js")

router.use("/login",loginRoutes)
router.use("/newpost",newPostRoutes)
router.use("/post",postRoutes)
router.use("/dashboard",dashboardRoutes)

router.get("/",async (req,res)=>{
    const local = true;
    const posts = await Post.findAll({include:{model:User},
        order: [
        ['createdAt', 'DESC'],
    ],})
    res.render('homepage',{loggedIn:req.session.loggedIn,posts});
})

module.exports = router;