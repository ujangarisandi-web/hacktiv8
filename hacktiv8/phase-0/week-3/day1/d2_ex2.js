/*
    input "hello world!"
    output
"!dlrow olleh" 

 */

function balikKata(str) {
    var newString = '';
    for (var i = str.length - 1; i--;) {
        newString += str[i]

    }
    return newString;
}
console.log(balikKata('hello world!')); // !dlrow olleh