//Klavye Eventleri

//keypress
// document.addEventListener("keypress", run)


// function run(e) {
//     // console.log(e.which)         //which tıklayınca ascii tablosu
//     console.log(e.key)              // key bastıgn tus 
// }


//keydown
// document.addEventListener("keydown", run)       //arrowup vs. gösteriyor 
                                                   // bastıgın an

// function run(e) {
//     // console.log(e.which)
//     console.log(e.key)
// }


//keyup                                         // bıraktıgın an tetikleniyor

// document.addEventListener("keyup", run)


// function run(e) {
//     // console.log(e.which)
//     console.log(e.key)
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText)

function changeText(e){
    header.textContent = e.target.value
    console.log(e.target.value);
}