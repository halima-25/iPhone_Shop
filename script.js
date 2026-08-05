const selectedColor = document.getElementById("selectedColor");
const phoneName = document.getElementById("phoneName");
const phoneImage = document.getElementById("phoneImage");
const phone_description = document.getElementById("phone_description");
const main_container = document.getElementById("main_container");
const body = document.body;


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
    phone_description.innerHTML = ` 6.9-inch Super Retina XDR display <br>
       A19 Pro chip <br>
       48MP Pro camera <br>
       Titanium design <br>
       All-day battery life`;
    body.style.background = "rgb(103, 130, 172)";
});

CosmicOrange.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17 pro ";
    phoneImage.src ="images/cosmic-orange.jpg";
    selectedColor.innerHTML = "Cosmic Orange";
    body.style.background = "rgb(248, 167, 105)";
    main_container.style.boxShadow = " 0 0 50px rgb(24, 23, 22)";
    phone_description.innerHTML = ` A19 Pro chip <br>
       6.3-inch Super Retina XDR display <br>
       48MP Pro camera system <br>
       Fast wireless charging <br>
       Lightweight titanium design`;
});

SoftPink.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17e";
    phoneImage.src ="images/soft-Pink.jpg";
    selectedColor.innerHTML = "Soft Pink";
    body.style.background = "rgb(249, 132, 163)";
    phone_description.innerHTML =  `  A18 chip <br>
       6.1-inch OLED display <br>
       48MP Fusion camera <br>
       Long battery life <br>
       Excellent everyday performance`;
});

Lavender.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 17";
    phoneImage.src ="images/lavender.jpg";
    selectedColor.innerHTML = "Lavender";
    body.style.background = "rgb(233, 203, 255)";
    phone_description.innerHTML =  `  A19 chip <br>
       6.3-inch Super Retina XDR display <br>
       Advanced dual-camera system <br>
       Dynamic Island <br>
       USB-C connectivity`;
});

SkyBlue.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone Air";
    phoneImage.src ="images/Sky-blue.jpg";
    selectedColor.innerHTML = "Sky Blue";
    body.style.background = "rgb(153, 208, 250)";
    phone_description.innerHTML =  `  Ultra-thin design <br>
       6.6-inch OLED display <br>
       A19 chip <br>
       48MP main camera <br>
       All-day battery life`;
});

Pink.addEventListener("click", function(){
    phoneName.innerHTML = "iPhone 16";
    phoneImage.src ="images/Pink.jpg";
    selectedColor.innerHTML = "Pink";
    body.style.background = "rgb(238, 158, 211)";
    phone_description.innerHTML =  ` A18 chip <br>
       6.1-inch Super Retina XDR display <br>
       48MP Fusion camera <br>
       Action Button <br>
       Apple Intelligence ready `;
});