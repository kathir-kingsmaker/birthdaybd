const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % photos.length;
    document.getElementById("slideshow").src = photos[index];
}, 3000);

document.getElementById("startBtn").addEventListener("click", function () {
    alert("❤️ Happy Birthday My Love ❤️");
});