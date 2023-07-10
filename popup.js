document.addEventListener("DOMContentLoaded", function(){
    // alert("The content has loaded");

    document.getElementById("button1").addEventListener("click", function(){
        // alert("You clicked the button");

        let body = document.getElementsByTagName("body")[0].style.backgroundColor = "aqua";
    });
});