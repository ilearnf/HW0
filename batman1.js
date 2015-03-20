// javascript:
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
/*globals readline, print, printErr */

var inputs = readline().split(' ');
var width = parseInt(inputs[0], 10); // width of the building.
var height = parseInt(inputs[1], 10); // height of the building.
var turns = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var x = parseInt(inputs[0], 10);
var y = parseInt(inputs[1], 10);
var minX = 0;
var minY = 0;
var bombDirection = 'a';
// game loop
while (true) {
    bombDirection = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    switch (bombDirection) {
    case 'UR':
        minX = x + 1;
        height = y - 1;
        x = Math.floor((x + 1 + width) / 2);
        y = Math.floor((y - 1 + minY) / 2);
        break;
    case 'UL':
        width = x - 1;
        height = y - 1;
        x = Math.floor((x - 1 + minX) / 2);
        y = Math.floor((y - 1 + minY) / 2);
        break;
    case 'DR':
        minX = x + 1;
        minY = y + 1;
        x = Math.floor((x + 1 + width) / 2);
        y = Math.floor((y + 1 + height) / 2);
        break;
    case 'DL':
        width = x - 1;
        minY = y + 1;
        x = Math.floor((x - 1 + minX) / 2);
        y = Math.floor((y + 1 + height) / 2);
        break;
    case 'U':
        height = y - 1;
        y = Math.floor((y - 1 + minY) / 2);
        break;
    case 'D':
        minY = y + 1;
        y = Math.floor((y + 1 + height) / 2);
        break;
    case 'L':
        width = x - 1;
        x = Math.floor((x - 1 + minX) / 2);
        break;
    case 'R':
        width = x + 1;
        x = Math.floor((x + 1 + width) / 2);
        break;
    default:
        printErr(bombDirection);
    }
    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(x, y); // the location of the next window Batman should jump to.
}