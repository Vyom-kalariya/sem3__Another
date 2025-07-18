function selectEngine(engine) {
    document.getElementById('selected-engine').textContent = "Selected Engine: " + engine;
    const buttons = document.querySelectorAll('.engine');
    buttons.forEach(button => button.classList.remove('btn-success'));
    buttons.forEach(button => button.classList.add('btn-primary'));
    const selectedButton = Array.from(buttons).find(button => button.textContent === engine);
    if (selectedButton) {
        selectedButton.classList.remove('btn-primary');
        selectedButton.classList.add('btn-success');
    }
}

function playSound() {
    let sound = new Audio("prebtn.mp3");
    sound.play().catch(error => console.log("Audio play failed:", error));
}
function bodys() {
    let sound = new Audio("body_sound.wav");
    sound.play().catch(error => console.log("Audio play failed:", error));
}
function colors() {
    let sound = new Audio("color_sound.wav");
    sound.play().catch(error => console.log("Audio play failed:", error));
}

function selectBody(body) {
    document.getElementById("selected-body").innerText = "Selected Body: " + body;
    playSound("body_sound.wav");
}

let selectedColor = "None";

function selectColor(color) {
    selectedColor = color;
    localStorage.setItem('selectedColor', color);
    document.getElementById("selected-color").innerText = "Selected Color: " + color;
    updateCarImage();
    updatePlayerCarColor(color);
    playSound("color_sound.wav");
}

function updateCarImage() {
    const carImage = document.getElementById('car-image');

    if (selectedColor === "Red") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_red.png";
    } else if (selectedColor === "Blue") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_blue.png";
    } else if (selectedColor === "Green") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_green.png";
    } else if (selectedColor === "Yellow") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_yellow.png";
    } else if (selectedColor === "Black") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_black.png";
    } else if (selectedColor === "White") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_white.png";
    } else if (selectedColor === "Orange") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_orange.png";
    } else if (selectedColor === "Purple") {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_purple.png";
    } else {
        carImage.src = "C:/Users/vyom2/Downloads/GROUP FSD PROJECETNew folder/cars/car_base.png";
    }
}

function showSection(section) {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

window.addEventListener('DOMContentLoaded', (event) => {
    const selectedColor = localStorage.getItem('selectedColor');
    if (selectedColor) {
        updatePlayerCarColor(selectedColor);
    }
});

function updatePlayerCarColor(color) {
    const playerCar = document.getElementById('player-car');
    let backgroundColor;

    if (color === "Red") {
        backgroundColor = "red";
    } else if (color === "Blue") {
        backgroundColor = "blue";
    } else if (color === "Green") {
        backgroundColor = "green";
    } else if (color === "Yellow") {
        backgroundColor = "yellow";
    } else if (color === "Black") {
        backgroundColor = "black";
    } else if (color === "White") {
        backgroundColor = "white";
    } else if (color === "Orange") {
        backgroundColor = "orange";
    } else if (color === "Purple") {
        backgroundColor = "purple";
    } else {
        backgroundColor = "";
    }

    playerCar.style.backgroundColor = backgroundColor;
}