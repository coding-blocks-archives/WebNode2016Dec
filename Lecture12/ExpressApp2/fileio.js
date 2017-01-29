/**
 * Created by championswimmer on 29/01/17.
 */
const fs = require('fs');

fs.writeFile("myfile.txt", "SOme data goes here", (err) => {
    if (err) throw err;

    console.log("Written successfully");

});

fs.readFile("myfile.txt", (err, data) => {
    if (err) throw err;

    console.log("File was read, data = ");
    console.log(data.toString());
});

console.log("hello");