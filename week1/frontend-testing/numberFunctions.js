function getBigger (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function getSmallest (arr) {
    if (!arr || arr.length == 0) {
        return null
    }

    let smallest = arr[0]
    for (let i=1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

function countValue (arr, val) {
    if (!arr || arr.length == 0) {
        return 0
    }

    if (!val && val !== 0) {
        return null
    }

    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (val == arr[i]) {
            counter++
        }
    }
    return counter 
}

module.exports = {
    getBigger,
    getSmallest,
    countValue
}