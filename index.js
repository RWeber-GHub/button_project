const startingColors = [];
const buttonContainer = document.getElementById('buttonContainer');

let colors = ["#FF5733", "#0334FF", "#0EFF03", "#ECFF03", "#FFBE03", "#03FBFF", "#9C03FF ", "#F703FF", "#299C29 ", "#B3B3B3 "]

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function createButtons() {
    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button')
        const color = getRandomColor()
            button.style.backgroundColor = color
            button.className = 'button'
            button.textContent = `Button ${i + 1}`
            buttonContainer.appendChild(button)
            startingColors.push(color)
    }
}

function changeButtonColor() {
    const selectedColor = document.getElementById("colorSelect").value
    const buttons = document.querySelectorAll(".button")

    buttons.forEach(function(button, index) {
        if (selectedColor === "random") {
            button.style.backgroundColor = getRandomColor();
        } 
        
        else if (selectedColor === "reset") {
            button.style.backgroundColor = startingColors[index];
        } 
        
        else if (selectedColor) {
            button.style.backgroundColor = selectedColor;
        }
    }
)
    

    document.getElementById("colorSelect").selectedIndex = 0;
}
    createButtons();