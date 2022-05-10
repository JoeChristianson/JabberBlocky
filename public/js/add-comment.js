console.log("working")
const form = $("#add-comment-form");
const comment = $("#new-comment");
const commentSection = $(".comments")

form.on("submit",async (e)=>{
    e.preventDefault()
    // const postId = window.location.href.split("/")[-1];
    const postId = window.location.href.split("/")[4]
    console.log(postId)
    const resp = await fetch("/api/comment",{
        method:"POST",
        body:JSON.stringify({
            text:comment.val(),
            postId
        }),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await resp.json();
    console.log(data)
    commentSection.append(`
    <article>
        <h3>${data.user_name} comments:</h3>
        <h5 class="date ">${new Date()}</h5>
        <p>${comment.val()}</p>
    </article>
    
    
    `)
})

