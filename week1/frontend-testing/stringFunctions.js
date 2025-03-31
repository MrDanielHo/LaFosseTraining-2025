function getLonger (str1, str2) {
    if (typeof(str1) == "string" && typeof(str2) == "string") {
        if (str1.length > str2.length) {
            return str1
        }   else {
            return str2
        }
    } else if (str1 === undefined || str2 === undefined) {
        throw "This function requires two arguments!"
    } else if (typeof(str1) != String && typeof(str2) != String) {
        throw "Arguments must be strings!"
    }
}

function greet (namen) {
    if (!namen || namen.length == 0) {
        return "Hi!"
    } else {
        return `Hello, ${namen}!` 
    }
}


function isSubstring (str1, str2) {
    if (typeof(str1) == "string" && typeof(str2) == "string") {
        if (str1.length == 0 || str2.length == 0) {
        throw "Arguments must have a length greater than zero!"
        }
        if (str1.includes(str2)) {
            return true
        }   else {
            return false
        }
    } else if (str1 === undefined || str2 === undefined) {
        throw "This function requires two arguments!"
    } else if (typeof(str1) != String && typeof(str2) != String) {
        throw "Arguments must be strings!"
    }
}

module.exports = {
    getLonger,
    greet,
    isSubstring
}