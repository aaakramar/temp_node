const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            return;
        }
        console.log(result)
        const second = result;
        writeFile('./content/result-async.txt',
            `Here us ther result : ${first} , ${second}`,
            (err, result) => {
                if (err) {
                    return;
                }
                console.log(result)
            })
    })
})
