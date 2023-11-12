document.addEventListener('DOMContentLoaded', function() {
    const squareSelector = document.querySelector('.squareSelector');
    const eraser = document.querySelector('.eraser');
    const colorChangeButton = document.querySelector('.colorChangeButton');
    const container = document.querySelector('.container');
    let squares = 16; // Valor predeterminado

    // Llamada inicial para crear el grid predeterminado
    createGrid();

    squareSelector.addEventListener('click', () => {
        squares = prompt('Please write the grid size (0-100)');
        squares = parseInt(squares) || 16; // Si el valor no es válido, utiliza 16 como predeterminado
        createGrid();
    });

    function createGrid() {
        // Limpiar el contenedor antes de agregar un nuevo grid
        container.innerHTML = '';

        let cellSize = 500 / squares;

        for (let i = 0; i < squares; i++) {
            for (let j = 0; j < squares; j++) {
                let cell = document.createElement('div');
                cell.style.width = cellSize + 'px';
                cell.style.height = cellSize + 'px';
                cell.classList.add('cell');
                container.appendChild(cell);

                cell.addEventListener('mouseenter', () => {
                let currentColor = container.dataset.currentColor || 'black';
                cell.style.backgroundColor = currentColor;
                });

                eraser.addEventListener("click",()=>{
                cell.style.backgroundColor = "white";
                });
            }     
        }
    }

    colorChangeButton.addEventListener('click', () => {
        let newColor = prompt('Please enter a color (e.g., red, #00ff00)');
        container.dataset.currentColor = newColor;
    });


    
    


});
