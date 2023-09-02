document.getElementById("myButton").addEventListener("click", function() {
    var input1 = parseInt(document.getElementById("myText1").value);
    var input2 = parseInt(document.getElementById("myText2").value);
    document.querySelector(".sum").innerHTML = input1 + input2;
});
