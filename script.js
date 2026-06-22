updateHeaderUI();

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

//profile logic

const pIcon = document.getElementById("pIcon");

if (pIcon){
    pIcon.addEventListener("click", () =>{
        window.location.href = "account.html";
    })
}


//logout button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
}

//lightmode button
button.addEventListener("click", function(){
    console.log("The button was clicked!");
    
    var bodyElement = document.body;
    bodyElement.classList.toggle("lightmode");    
});

function showMemberContent() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("MemberArea").style.display = "block";
    }
}

//pseudo login button
document.getElementById("openLogin").addEventListener("click", () => {
    document.getElementById("LoginModal").style.display = "block";
});

//registerAccount
document.getElementById("register").addEventListener("click", () => {
    window.location.href = "create-account.html";
});

document.getElementById("CloseLogin").onclick = () => {
    document.getElementById("LoginModal").style.display = "none";
}

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

//Dragon's Dogma Gallery Buttons
document.getElementById('ddB').addEventListener('click', function () {
    openGalleryInModal('DragonsDogmaGallery');
});
document.getElementById('ddB_modal').addEventListener('click', function () {
    openGalleryInModal('DragonsDogmaGallery');
})

//Metroid Gallery Buttons
document.getElementById('mB').addEventListener('click', function () {
    openGalleryInModal('MetroidGallery');
});
document.getElementById('mB_modal').addEventListener('click', function () {
    openGalleryInModal('MetroidGallery');
});

//Monster Hunter ""
document.getElementById('mhB').addEventListener('click', function () {
    console.log("Monster Hunter!");
    openGalleryInModal('MonsterHunterGallery');
});
document.getElementById('mhB_modal').addEventListener('click', function () {
    openGalleryInModal('MonsterHunterGallery');
});


//Resident Evil""
document.getElementById('reB').addEventListener('click', function () {
    console.log("Resident Evil!");
    openGalleryInModal('ResidentEvilGallery');
});
document.getElementById('reB_modal').addEventListener('click', function () {
    openGalleryInModal('ResidentEvilGallery');
});

//Sons of the forest ""
document.getElementById('sotfB').addEventListener('click', function () {
    console.log("Sons of the forest!");
    openGalleryInModal("SotfGallery");
});
document.getElementById('sotfB_modal').addEventListener('click', function () {
    openGalleryInModal('SotfGallery');
});

//Xenoblade ""
document.getElementById('xB').addEventListener('click', function () {
    console.log("Xenoblade!");
    openGalleryInModal("XenobladeGallery");
});
document.getElementById('xB_modal').addEventListener('click', function () {
    openGalleryInModal('XenobladeGallery');
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

    enableImageClicks();
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

//Lightbox logic

let currentImages = [];
let currentIndex = 0;

function enableImageClicks() {
    const images = document.querySelectorAll('#ModalGalleryContent img');

    currentImages = Array.from(images);

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

function openLightbox(index) {
    currentIndex = index;

    const lightbox = document.getElementById("Lightbox");
    const lImage = document.getElementById("LImage");

    lImage.src = currentImages[currentIndex].src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("Lightbox").style.display = "none";
}

document.getElementById("LPrevious").onclick = () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    openLightbox(currentIndex);
};

document.getElementById("LNext").onclick = () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    openLightbox(currentIndex);
};

document.getElementById("LightboxClose").onclick = () => {
    closeLightbox();
};

document.addEventListener('keydown', (e) => {
    if (document.getElementById("Lightbox").style.display === "flex") {
        if (e.key === "ArrowLeft") document.getElementById("LPrevious").click();
        if (e.key === "ArrowRight") document.getElementById("LNext").click();
        if (e.key === "Escape") closeLightbox();
    }
});


