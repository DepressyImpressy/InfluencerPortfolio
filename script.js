function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const button = document.getElementById("theme-toggle");

button.addEventListener("click", function(){
    console.log("The button was clicked!");
    
    var bodyElement = document.body;
    bodyElement.classList.toggle("darkmode");

    var elements = document.getElementsByClassName("textchunk")
    
    for(var element of elements){
        console.log(element)
        element.classList.toggle("darkmodetextchunk");
    }
   
});