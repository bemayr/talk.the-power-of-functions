const os = require("os")


// Examples of Getters
// () => T

const random = Math.random()
const now = Date.now()
const hostname = os.hostname()

console.log({random, now, hostname})



// Examples of Setters
// T => ()
console.log("hello world")
document.write("<h1>hello world</h1>")
localStorage.setItem("hello", "world")

// this is how you do Side Effects (I/O)
