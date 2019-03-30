// input: string, lowercase
// output: string of numbers

function numberCombinations(str) {
    let revDictonary = reverseDictionary();
    
    let strArr = str.split("");

    let answer = "";

    strArr.forEach( letter => {
        answer += revDictonary[letter];
    } )

    return answer;
}

function reverseDictionary(){
    let dictionary = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    let keys = Object.keys(dictionary);

    let newObject = {};

    keys.forEach( key => {
        let letters = dictionary[key];

        letters.forEach( letter => {
            newObject[letter] = key;
        })

    } );

    newObject[" "] = "";

    return newObject;
}