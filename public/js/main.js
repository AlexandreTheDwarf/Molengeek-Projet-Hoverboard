let square = document.querySelectorAll("div")

let color = ["orange", "red", "blue", "purple", "green"];

function RandomColor() {
    return color[Math.floor(Math.random() * color.length)];
}


square.forEach(element => {
    element.addEventListener("mouseover", () => {
        const colorClass = RandomColor();
        element.classList.add(colorClass);
        
        // Enlever la classe après 1 seconde (1000 ms)
        setTimeout(() => {
            element.classList.remove(colorClass);
        }, 500);
    });
});
