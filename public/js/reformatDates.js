const dateEls = document.querySelectorAll(".date");

dateEls.forEach(el=>{
    const index = el.innerHTML.indexOf(":",20)
    console.log(index)
    el.innerHTML = el.innerHTML.substring(0,index+3);
})