let str= prompt('Input string', "helloWorld");
let separator = prompt('Input separator', "-");

function strUnc(str, separator) {
  if(typeof(separator) == "undefined") {
    separator = " ";
  }
  str = str.replace(/[A-Z]/g, function (letter) 
  {
    return separator + letter.toLowerCase();
  });
  let arr = str.split(separator);
  arr=arr.map(element => {
    return element.toLowerCase();
  });
  str = arr.join(separator);
  console.log(str);
  alert(str);
}

strUnc(str, separator);

