const {Post} = require("../../models")
const router = require("express").Router()

router.get("/",async(req,res)=>{
    try{
        res.status(200).render("newpost")
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;