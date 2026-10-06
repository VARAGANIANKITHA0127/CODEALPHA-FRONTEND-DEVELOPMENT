const images = [
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1016/800/600",
    "https://picsum.photos/id/1025/800/600",
    "https://picsum.photos/id/1035/800/600",
    "https://picsum.photos/id/1043/800/600",
    "https://picsum.photos/id/1069/800/600"
];

let currentImage = 0;


function openLightbox(index) {

    currentImage = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightboxImage").src =
        images[currentImage];
}


function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}


function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src =
        images[currentImage];
}


function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightboxImage").src =
        images[currentImage];
}


document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

});