function changeColor() {
    document.getElementById("findBtn").style.color="red";
}

myParagraph = document.getElementById("findBtn");
myParagraph.addEventListener("click", changeColor);