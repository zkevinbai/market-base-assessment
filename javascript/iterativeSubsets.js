function iterativeSubsets(array){
    let res = [[]];

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        const newArrs = [];
        for (let j = 0; j < res.length; j++) {
            let curr = res[j].slice(0);
            curr.push(number);
            newArrs.push(curr);
        }
        res = res.concat( newArrs );
    }

    return res;
}

let array = [1, 2, 3];
