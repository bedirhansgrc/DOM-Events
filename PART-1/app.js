const filterInput = document.getElementById("filter")

// filterInput.addEventListener("focus",function(e){
//     console.log("naber");
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.target.placeholder)
//     console.log(e.target.className)
    
// })
// filterInput.onfocus = function(){
//     console.log("Naber")
// }


const todoForm = document.getElementById("todo-form")

todoForm.addEventListener("submit", submitForm)

function submitForm(e){
    console.log("Submit Eventi");



    e.preventDefault()
}






