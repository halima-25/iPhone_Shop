const selectedColor = document.getElementById("selectedColor");
const phoneName = document.getElementById("phoneName");
const phoneImage = document.getElementById("phoneImage");

const DeepBlue = document.getElementById("DeepBlue");
const CosmicOrange = document.getElementById("CosmicOrange");
const SoftPink = document.getElementById("SoftPink");
const Lavender = document.getElementById("Lavender");
const SkyBlue = document.getElementById("SkyBlue");
const Pink = document.getElementById("Pink");


 
DeepBlue.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17 pro max";
    phoneImage.src ="images/deep-blue.jpg";
    selectedColor.innerHTML = "Deep Blue";
});

CosmicOrange.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17 pro ";
    phoneImage.src ="images/cosmic-orange.jpg";
    selectedColor.innerHTML = "Cosmic Orange";
});

SoftPink.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17e";
    phoneImage.src ="images/soft-Pink.jpg";
    selectedColor.innerHTML = "Soft Pink";
});

Lavender.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17";
    phoneImage.src ="images/lavender.jpg";
    selectedColor.innerHTML = "Lavender";
});

SkyBlue.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone Air";
    phoneImage.src ="images/Sky-blue.jpg";
    selectedColor.innerHTML = "Sky Blue";
});

Pink.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 16";
    phoneImage.src ="images/Pink.jpg";
    selectedColor.innerHTML = "Pink";
});