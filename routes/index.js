const express = require("express") 
const router = express.Router()  


router.get("/",(req, res) => {
        res.render("login",{
            layout:"login"


        })

})



router.get("/dashboard", (req, res)=> {
    res.render("dashboard")
})

router.get('/things', (req, res)=>{
    res.send("things")
})













module.exports = router