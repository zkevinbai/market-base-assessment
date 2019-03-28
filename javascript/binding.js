Function.prototype.myBind = function (context, args) {
    let func = this;
    let bindTime = args;

    return (callTime) => {
        let all = bindTime.concat(callTime);
        func(all)
    };
}

// Function.prototype.myBind = function () {
//     let func = this;
//     let args = Array.from(arguments);
//     let context = args[0];
//     let bindTime = args.slice(1);

//     return function (...callTime) {
//         return func.apply(context, bindTime.concat(callTime));
//     };
// };