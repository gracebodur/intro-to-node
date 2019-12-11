const fs = require('fs')
const path = require('path')

const source = process.argv[2]
const target = process.argv[3]

//read contents of source
const contentsOfSource = fs.readFileSync(source, 'utf-8')

//get lines of source into an array, romove empty lines
const linesInSource = contentsOfSource.split('.\n').filter(Boolean)

//make the target directory if it doesnt exist
if(!fs.existsSync(target)) {
    fs.mkdirSync(target)
}

//iterate over the lines
linesInSource.forEach(line => {
    //get the content of the lines, first word is a file name, rest is content
    const [ filename, ...contentArr ] = line.split(' ')
    //construct the full path of the path to create
    const newFilePath = path.join(__dirname, target, filename)

    //write the file and its contents
    fs.writeFileSync(
        newFilePath,
        contentArr,
        { flag: 'w+', encoding: 'utf-8' }
    )
})