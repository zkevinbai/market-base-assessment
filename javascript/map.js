function myMap(arr, callback) {
    if(!callback){
        return arr.slice(0);
    }

    let newArr = [];

    arr.forEach(element => {
        newArr.push(callback(element))
    });

    return newArr;
}