const makeBoxes = function () {
    for (let div = 1; div <= 16; div++){
    const div = document.createElement('div');
    div.setAttribute('id', div);
    document.getElementById('gridContainer').appendChild(div);
    }
}

makeBoxes();

