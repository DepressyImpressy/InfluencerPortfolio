function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const button = document.getElementById("theme-toggle");

function closeAllGalleries() {
    const galleries = document.querySelectorAll('.full-gallery');
    galleries.forEach(g => g.style.display = 'none');
}

button.addEventListener("click", function(){
    console.log("The button was clicked!");
    
    var bodyElement = document.body;
    bodyElement.classList.toggle("lightmode");
    
});

document.getElementById('fullGalleryButton').addEventListener('click', function () {

    const buttonSpread = document.getElementById('gCategoryButtons');

    //toggles button visiblity
    if (buttonSpread.style.display === 'none') {
        buttonSpread.style.display = 'block';
        this.textContent = 'Close Gallery'; //changes button text 
    }
    else{ 
        buttonSpread.style.display = 'none';
        this.textContent = 'Full Moment Gallery';

        closeAllGalleries();
    }
});

//accesses the Dragon's dogma full
document.getElementById('ddB').addEventListener('click', function () {
    closeAllGalleries();
    const ddG = document.getElementById('DragonsDogmaGallery');
    const elements = document.getElementsByClassName("column");

    ddG.style.display = 'block';
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
});

document.getElementById('mB').addEventListener('click', function () {
    console.log("Metroid!");
    closeAllGalleries();
    const mG = document.getElementById('MetroidGallery');
    const elements = document.getElementsByClassName("column");

    mG.style.display = 'block';
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
});

document.getElementById('mhB').addEventListener('click', function () {
    console.log("Monster Hunter!");
});

document.getElementById('reB').addEventListener('click', function () {
    console.log("Resident Evil!")
});

document.getElementById('sotfB').addEventListener('click', function () {
    console.log("Sons of the forest!");
});

document.getElementById('xB').addEventListener('click', function () {
    console.log("Xenoblade!");
});