//Dialect Javascript Doc 

//Word Count
//Source: http://jsfiddle.net/7DT5z/9/
$(document).ready(function() {
    $("#word_count").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 200) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 200).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(200-words);
        }
    });
 }); 

 //Change button color when mouse over
 function changeButtonCol() {
    document.getElementById("findBtn").style.color="red";
}
function changeButtonColBack() {
    document.getElementById("findBtn").style.color="black";
}

//Event handlers for button color change
changeCol=document.getElementById("findBtn");
changeCol.addEventListener("mouseover",changeButtonCol);
changeColBack=document.getElementById("findBtn");
changeColBack.addEventListener("mouseout",changeButtonColBack);


//split input string into array
function splitInput() {
    var txt=document.getElementById("word_count");
    var str=txt.value.split(/(?=[.\s]|\b)/); 
    document.getElementById("out").innerHTML = str;
}


 find=document.getElementById("findBtn");
 find.addEventListener("click",splitInput);


