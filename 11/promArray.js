const promArr = function (promArray) {
    return promArray.forEach(element => {
        element.then((value) => console.log(value))
    });
};

const useProm = function (time) {
    return new Promise(function(resolve){
        setTimeout(() => {
            return resolve('done')
        }, time);
    });
};


promArr([useProm(3000), useProm(5000)]);
