// Reste du code

let square = document.querySelectorAll("div")

let color = ["orange", "red", "blue", "purple", "green"];

function RandomColor() {
    return color[Math.floor(Math.random() * color.length)];
}

square.forEach(element => {
    element.addEventListener("mouseover", () => {
        const colorClass = RandomColor();
        element.classList.add(colorClass);
        // playSound(randomSound()); Commenter pour le bien commun ;)

        // Enlever la classe après 1 seconde (1000 ms)
        setTimeout(() => {
            element.classList.remove(colorClass);
        }, 500);
    });
});

let sound = ["buble1.wav", "buble2.wav", "buble3.wav", "buble4.wav", "buble5.wav"]

function playSound(soundFile) {
    audioSource.src = "./public/sound/" + soundFile; // Change la source du son
    audioPlayer.load();           // Recharge l'élément audio avec la nouvelle source
    audioPlayer.play();           // Joue le son
}

function randomSound (){
    return sound[Math.floor(Math.random() * sound.length)]
}