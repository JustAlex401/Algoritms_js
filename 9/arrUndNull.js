

let arr=[1, undefined, null, 2, 3]

function callbF(err, arr) {
    if(err){
        console.warn(err);
    }else{
        arr=arr.filter((element)=>{
            return element !== null && element !== undefined;
        })
        console.log(arr);
    }
}


function arrF(arr, callback){
    if(Array.isArray(arr)){
        err=null;
    }else{
        err="Wrong type of arr"
    }
    setTimeout(()=>callback(err, arr), 5000);
}

arrF(arr, callbF);
