const titleInput = $("#title");
const textInput = $("#text");
const form = $("form")

form.on("submit",async e=>{
    e.preventDefault();
    const title = titleInput.val()
    const text = textInput.val()
    if (title.length<1 || text.length<1){
        alert("fill in all fields before submitting");
        return
    };
    const resp = await fetch("./api/post",{
        method:"POST",
        body:JSON.stringify({
            text,title
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
})