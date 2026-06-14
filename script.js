function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const button = document.getElementById("theme-toggle");

// reusable function that closes all galleries
function closeAllGalleries() {
    const galleries = document.querySelectorAll('.full-gallery');
    galleries.forEach(g => g.style.display = 'none');
}

//lightmode button
button.addEventListener("click", function(){
    console.log("The button was clicked!");
    
    var bodyElement = document.body;
    bodyElement.classList.toggle("lightmode");
    
});

//full gallery spread for init gallery opening
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

document.getElementById('ddB').addEventListener('click', function () {
    openGalleryInModal('DragonsDogmaGallery');
});

document.getElementById('mB').addEventListener('click', function () {
    openGalleryInModal('MetroidGallery');
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


//function for modal logic
function openGalleryInModal(galleryId) {
    const modal = document.getElementById("GalleryModal");
    const modalContent = document.getElementById("ModalGalleryContent");
    const gallery = document.getElementById(galleryId);

    //copy html gallery
    modalContent.innerHTML = gallery.innerHTML;

    //show modal
    modal.style.display = "block";
}

//close modal logic
document.getElementById("CloseModal").onclick = function () {
    document.getElementById("GalleryModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("GalleryModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}