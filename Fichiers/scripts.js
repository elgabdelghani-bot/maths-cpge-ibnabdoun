document.addEventListener("DOMContentLoaded", function () {
    const numberOfPi = 10;
    const container = document.getElementById("animation-container");

    for (let i = 0; i < numberOfPi; i++) {
        createBubble(container);
    }
});

function createBubble(container) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    const piElement = document.createElement("div");
    piElement.className = "pi-animation";
    piElement.textContent = "π";
    
    bubble.appendChild(piElement);

    const randomX = Math.random() * (container.clientWidth - 60);
    const randomY = Math.random() * (container.clientHeight - 60);
    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;

    container.appendChild(bubble);
}
