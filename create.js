const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector (".btn");
let notes = document.querySelectorAll(".input-box");


function updateData(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

/* Create Notes Par Click Karne Par Input Box Ko Create Karna  */
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});


/* Input Box par Delete Option Par Click Kar Par Input Box Delete Karna */
notesContainer.addEventListener("click", function(pihu){
    if(pihu.target.tagName == "IMG"){
        pihu.target.parentElement.remove();
        updateData();
    }
});