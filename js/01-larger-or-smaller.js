// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

var x = prompt('Enter a number between 1 an 100');
var y = prompt('Enter a second number between 1 an 100');
if (x > y) {
    document.write(x)
} else if (y > x) {
    document.write(y)
} else if (x == y) {
    document.write(x)
}

