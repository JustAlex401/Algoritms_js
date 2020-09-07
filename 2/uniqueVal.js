let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, [2], [3, [[4]]],[5,6]];


let array = function(arr) {
  if (Array.isArray(arr)) {
  return arr.reduce(function(done,curr){
    return done.concat(array(curr));
    }, []);
  } else {
    return arr;
  }
}
arr1= array(arr1);
arr2 = array(arr2);



// FIRST METHOD
// ------------------------------------------
let res = arr1.concat(arr2);
let set = Array.from(new Set(res));
alert(set);
// ------------------------------------------




// SECOND METHOD
// ------------------------------------------
let arr = arr1.concat(arr2);
function unique(arr) {
    let result = [];
  
    for (let ind of arr) {
      if (!result.includes(ind)) {
        result.push(ind);
      }
    }
  
    return result;
  }
  
alert(JSON.stringify(unique(arr)));
// ------------------------------------------
