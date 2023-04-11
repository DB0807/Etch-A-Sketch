//function to create grid of div's
const gridContainer = document.querySelector ('.gridContainer');
let gridDiv

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridContainer.appendChild(gridDiv);
        
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.classList.add('gridHover');
        });
    }
}

onload = () => createGrid();