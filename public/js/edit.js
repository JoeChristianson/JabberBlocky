const deleteBtn = $("#delete")
const editBtn = $("#edit");
const postListing = $(".post-listing");
const content = $("p")

deleteBtn.on("click",async e=>{
    console.log(e.target.dataset)
    const resp = await fetch("../api/post/"+e.target.dataset.postId,{
        method:"DELETE",
    });
    window.location.href = "../dashboard"
})

editBtn.on("click",e=>{
    const id = e.target.dataset.postId
    const inp = $("<textarea>");
    const btn = $("<button>")
    const cont = content.html();
    btn.addClass("center")
    inp.addClass("center")
    inp.html(cont);
    postListing.append(inp)
    postListing.append(btn)
    btn.on("click",e=>{
        edit(id,inp.val())
    })
    btn.html("Make changes")
})

async function edit(id,text){
    const resp = await fetch("../api/post/edit",{
        method:"PUT",
        body:JSON.stringify({
            id:id,text:text
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    location.reload();
}