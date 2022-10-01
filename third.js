const fs = require('fs');
const path = require ('path');
const dirPath = path.join(__dirname,'files');
const filePath = `{$dirPath}/apple.txt`;
fs.writeFileSync(filePath,'This is a Simple Text File');
// read function
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item)
})
// Update or Rename Function

// fs.appendFile(filePath,`and file name is apple.txt`,(err)=>{
//     if(!err) console.log("File is Updated")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("File is Updated")
// })

//Delete Function
// fs.unlinkSync(`${dirPath}/fruit.txt`)
// for(i = 0; i <=5; i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file")
// }
