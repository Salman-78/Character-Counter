const textArea = document.getElementById("id1");
const totalChar = document.getElementById("id2");
const remainChar = document.getElementById("id3");

textArea.addEventListener("keyup", ()=>{
    updateCounter();
})

updateCounter();

function updateCounter() {
    totalChar.innerText = textArea.value.length
    remainChar.innerText =  textArea.getAttribute("maxLength") - textArea.value.length
}
