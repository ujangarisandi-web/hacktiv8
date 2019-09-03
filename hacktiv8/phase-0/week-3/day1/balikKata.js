/*
    input "hello world!"
    output
 "!dlrow olleh" 
 
 */

function balikKata(str) {
    var balikKata = str;
    var newString = '';
    for (let i = str.length - 1; i--;) {
        // newString = newString + balikKata[i];
        newString += balikKata[i]

    }
    return newString;
}
console.log(balikKata('hello world!')); // !dlrow olleh