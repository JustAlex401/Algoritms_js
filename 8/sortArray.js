let arr1 = [1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]];


let array = function(arr) {
  if (Array.isArray(arr)) {
  return arr.reduce(function(done,curr){
    return done.concat(array(curr));
    }, []);
  } else {
    return arr;
  }
}

let res= new Array();
res=array(arr1);
res.sort((a, b) => (a - b));
alert(res);



