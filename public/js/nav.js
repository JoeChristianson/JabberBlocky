const loginBtn = $("#loginBtn")
const logoutBtn = $("#logoutBtn");
const homeBtn = $("#homeBtn");
const dashboardBtn = $("#dashboardBtn");
const newPostBtn = $("#new-post-btn");
const main = $("main")

logoutBtn.on("click",async e=>{
    const logOutURL = window.location.href.includes("/post")?"../api/user/logout":"./api/user/logout";
    const logout = await fetch(logOutURL);
    alert(logout)
    window.location = "/"
    console.log(logout)
})

loginBtn.on("click",e=>{
    window.location = "./login"
})

homeBtn.on("click",e=>{
    window.location = "./"
})

dashboardBtn.on("click",e=>{
    window.location = "./dashboard"
})

newPostBtn.on("click",e=>{
    window.location = "./newpost"
})

main.on("click",".post-listing",(e)=>{
    const id = e.currentTarget.dataset.postId;
    console.log(e)
    window.location = "./post/"+id;
})