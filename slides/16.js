// Getters are abstractions
const nodeVersion = process.version
const getNodeVersion = () => {
    console.log("getting the node version")
    return "node-berry:" + process.version;
}

console.log(nodeVersion)
console.log(getNodeVersion())





// Benefits:
// - Laziness
// - Hooks for Side Effects
// - Implementation Flexibility
