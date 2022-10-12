const makeBoxes = function () {
    for (let div = 1; div <= 16; div++){
    const div = document.createElement('div');
    div.setAttribute('class', 'selection');
    document.getElementById('gridContainer').appendChild(div);
    }
}

makeBoxes();

const colorBox = document.querySelectorAll('.selection');

colorBox.forEach(selection => {
    selection.addEventListener('mouseenter', function handleMouseEnter(event) {
    selection.setAttribute('style', 'background-color: black;');
    });
});




