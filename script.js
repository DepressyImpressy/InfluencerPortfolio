function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const button = document.getElementById("theme-toggle");

button.addEventListener("click", function(){
    console.log("The button was clicked!");
    
    var bodyElement = document.body;
    bodyElement.classList.toggle("lightmode");
    
});

document.getElementById('fullGalleryButton').addEventListener('click', function(){
    
    const buttonSpread = document.getElementById('gCategoryButtons');

    //toggles button visiblity
    if(buttonSpread.style.display === 'none'){
        buttonSpread.style.display = 'block';
        this.textContent = 'Close Gallery'; //changes button text 
    }
    else{
        buttonSpread.style.display = 'none';
        this.textContent = 'Full Moment Gallery';
    }
});