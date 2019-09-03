/*
    input "hello world!"
    output
 "!dlrow olleh" 
 
 */

function balikKata(str) {
    // var balikKata = str;
    var newString = '';
    for (var i = str.length - 1; i--;) {
        // newString = newString + balikKata[i];
        newString += str[i]

    }
    return newString;
}
console.log(balikKata('hello world!')); // !dlrow olleh