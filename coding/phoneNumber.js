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
    let array = str.split("");

    let combinations = [];
    let shift = array.shift();
    let possibles = dictionary[shift];
    combinations = combinations.concat(possibles)

    while (array.length) {
        shift = array.shift();
        possibles = dictionary[shift];
        
        let replacements = [];
        
        while (possibles.length) {
            newLetter = possibles.shift();
            for (let i = 0; i < combinations.length; i++) {
                let oldLetter = combinations[i]
                replacements.push( oldLetter + newLetter )
            }
        }
        
        combinations = replacements;
    }

    return combinations.sort();
}

// function letterArray(str) {
//     let dictionary = {
//         "1": [""],
//         "2": ["a", "b", "c"],
//         "3": ["d", "e", "f"],
//         "4": ["g", "h", "i"],
//         "5": ["j", "k", "l"],
//         "6": ["m", "n", "o"],
//         "7": ["p", "q", "r", "s"],
//         "8": ["t", "u", "v"],
//         "9": ["w", "x", "y", "z"],
//     }
//     let letArr = [];

//     for (let i = 0; i < str.length; i++) {
//         const number = str[i];
//         if (number !== "1"){
//             letArr = letArr.concat(dictionary[number]);
//         }
//     }
    
//     return letArr;
// }

// function subSets(arr) {
//     let res = [""];
//     for (let i = 0; i < arr.length; i++) {
//         const number = arr[i];
//         let newStrs = [];
//         for (let j = 0; j < res.length; j++) {
//             const subStr = res[j];
//             newStrs.push( subStr + number )
//         }
//         res = res.concat(newStrs);
//     }

//     return res;
// }

// function permutations(arr) {
//     if (arr.length < 2) return arr;

    
// }