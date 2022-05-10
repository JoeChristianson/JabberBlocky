const loginBtn = $(".loginBtn")
const logoutBtn = $("#logoutBtn");
const homeBtn = $(".homeBtn");
const dashboardBtn = $("#dashboardBtn");
const newPostBtn = $("#new-post-btn")

logoutBtn.on("click",async e=>{
    const logout = await fetch("../api/user/logout");
    window.location = "/"
    console.log(logout)
})

loginBtn.on("click",e=>{
    window.location = "../login"
})

homeBtn.on("click",e=>{
    window.location = "../"
})

dashboardBtn.on("click",e=>{
    window.location = "../dashboard"
})

newPostBtn.on("click",e=>{
    window.location = "../newpost"
})