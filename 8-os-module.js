// 54:00 ----->>> Built in Modules

// os module

const  os = require('os')

// info about current user
const user = os.userInfo()
// console.log(user);

// return the system uptime in seconds
console.log(`The system up time is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


console.log(currentOS)

// module.exports = currentOS