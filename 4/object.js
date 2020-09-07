// First method
function valueKey(obj){
    if (isObject(obj)){
        let keys = new Array();
        for(let key in obj){
            keys.push(key);
        }
        let result = {};
        let val;
        for (let i=0; i<keys.length; i++){
            val=obj[keys[i]];
            result[val]=keys[i];
        }

        alert(JSON.stringify(result));
    }
    else{
        alert("Error object");
    }

}


////////////////////////////////////////////

// Second method
function valueKey2(obj){
    if (isObject(obj)){
        let keys = Object.keys(obj);
        let aaa=keys.reduce((res, key)=>{
            res[obj[key]]=key;
            return res;
        }, {})
        alert(JSON.stringify(aaa));

    }
    else{
        alert("Error object");
    }
}


/////////////////////////////////////////////

function isObject (obj){
    if(typeof(obj) === 'object'){
        return true;
    } else {
        return false;
    }
}





valueKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"});