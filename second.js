// Process line for taking input
// commands [ node second.js add orange.txt 'this is a fruit']
// commands from remove [node second.js remove add]
const fs = require('fs');

const input = process.argv;
fs.writeFileSync(input[2],input[3])

if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4])
}
else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid input")
}