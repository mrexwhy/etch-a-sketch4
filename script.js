const gridContainer = document.getElementById('grid-container');
const btn = document.getElementById('btn');
const input = document.querySelector('input');

function createGrid(size) {
    const containerWidth = gridContainer.clientWidth;
    const gridWidth = Math.floor(containerWidth / size) - 1;
    const containerHeight = gridContainer.clientHeight;
    const gridHeight = Math.floor(containerHeight / size) - 1;

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

       for (let j = 0; j < size; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.width = gridWidth + 'px';
            gridItem.style.height = gridHeight + 'px';
            row.appendChild(gridItem);

            gridItem.addEventListener('mouseover', function () {
                let color = randomColor();
                gridItem.style.backgroundColor = color;
                gridItem.style.opacity = 1.1;
            }, {once: true});
            gridItem.addEventListener('mouseover', function() {
                gridItem.style.opacity -= 0.1;
                if(gridItem.style.opacity <= 0) {
                    gridItem.removeEventListener('mouseover');
                } 
            });
        }
        gridContainer.appendChild(row);
    }
}


btn.addEventListener('click', () => {
    let gridInput = input.value;

    gridInput = parseInt(gridInput);
    if (isNaN(gridInput) || gridInput < 1 || gridInput > 100) {
        alert('Please enter valid number!');
        return;
    }

    if (gridInput) {
        gridContainer.innerHTML = '';
        return createGrid(gridInput);
    }
});

function randomColor(gridItem) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(10);