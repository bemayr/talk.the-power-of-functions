// utilizing getters and setters, on the way to purity

function chain(...args) {
    return () => {
        console.log("chain")
        for (const action of args)
            action()
    }
}
function shuffle(...args) {
    return () => {
        console.log("shuffle")
        for (const action of args.sort(() => 0.5 - Math.random()))
            action()
    }
}

const getLog1 = () => console.log(1)
const getLog2 = () => console.log(2)
const getLog3 = () => console.log(3)

chain(getLog1, getLog2, getLog3, shuffle(getLog1, getLog2))()
