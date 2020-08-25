const arrayOfObjects = [{ x: 1 }, { y: 2 }, { z: 3 }, { z: 4}];

const reducer = (accumultor, currentValue) => {
    const currentValueKey = Object.keys(currentValue)[0];
    const currentValueValue = Object.values(currentValue)[0];
    return Object.assign(accumultor, {[currentValueKey] : currentValueValue} )
}
const arrayObject = arrayOfObjects.reduce(reducer, {})

console.log(arrayObject)