var h = 10;
var l = 10;

var elements = [
    [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '],
    ['1', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '1'],
    ['2', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '2'],
    ['3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '3'],
    ['4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4'],
    ['5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '5'],
    ['6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '6'],
    ['7', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '7'],
    ['8', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '8'],
    [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' ']
];
window.onload = init;

function init() {
    prepareGameField();
}

function prepareGameField() {

    var board = document.createElement('table');


    for (var i = 0; i < h; i++) {

        var row = document.createElement('tr');

        for (var j = 0; j < l; j++) {

            var cell = document.createElement('td');
            if (i == 0 || j == 0 || i == h - 1 || j == l - 1) {

                if (j == l - 1 || i == 0) {
                    cell.className += 'rotate ';
                }
            }
            else {
                cell.className = (i + j) % 2 == 0 ? 'white-cell' : 'black-cell';
            }
            cell.innerHTML = elements[i][j];

            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    document.getElementById('board').appendChild(board);
}