document.getElementById("myButton").onclick = function() {

    document.querySelector("#myButton").addEventListener("click", ()=> {
        document.querySelector(".sum").innerHTML = +document.querySelector("#myText1").value + +document.querySelector("#myText2").value
        })
}