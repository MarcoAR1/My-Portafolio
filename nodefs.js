const fs = require('fs')
/* const range0to10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fs.mkdir('./text', (data) => {
    fs.appendFileSync('./text/nodefs.js', JSON.stringify(range0to10))
})
fs.open('./text/nodefs.js', 'r', (err, fd) => {
    if (err) {
        console.error('open file error: ', err)
        return
    }
    fs.read(fd, (err, data) => {
        if (err) {
            console.error('read file error: ', err)
            return
        }
        console.log(data)
    })
}) */

const file = fs.readdirSync('./text', 'utf8')
console.log(file)