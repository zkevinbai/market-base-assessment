// input: string with numbers
// output: array of all possible letter combinations

let dictionary = {
    1: [""],
    2: ["a","b","c"],
    3: ["d","e","f"],
    4: ["g","h","i"],
    5: ["j","k","l"],
    6: ["m","n","o"],
    7: ["p","q","r","s"],
    8: ["t","u","v"],
    9: ["w", "x", "y", "z"],
}

function letterCombinations(str) {

}

function letterArray(str) {
    let dictionary = {
        "1": [""],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    let letArr = [];

    for (let i = 0; i < str.length; i++) {
        const number = str[i];
        if (number !== "1"){
            letArr = letArr.concat(dictionary[number]);
        }
    }
    
    return letArr;
}