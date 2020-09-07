// First method
function valueKey(obj){
    if (isObject(obj)){
        let keys = new Array();
        for(let key in obj){
             keys.push(key);
        }
        
        let length = keys.length;
        let result = Array(length);

        for (let i=0; i<length; i++){
            result[i]=[keys[i], obj[keys[i]]];
        }

        alert(JSON.stringify(result));
    }
    else{
        alert("Error object");
    }
}

function isObject (obj){
    if(typeof(obj) === 'object'){
        return true;
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////

// Second method

function valueKey2(obj){
    if(isObject(obj)){
        // alert(Object.entries([key, value]));
        Object.entries(obj).map(([key, value]) => {
            alert(`${key}: ${value}`)
        })
    } else {
        alert("Error object");
    }
}

valueKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"});
valueKey2({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"});