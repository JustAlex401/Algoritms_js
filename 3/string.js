let str1 = prompt('Input first string', "");
let str2 = prompt('Input second string', "");


// first method
// ----------------------------------------------------
function caseInsensitiveSearch(str1, str2){
    str1= str1.toLowerCase();
    str2= str2.toLowerCase();
    if(str1.indexOf(str2) == -1){
        alert("Not Matched");
    } else {
        alert("Matched");
    }
}

caseInsensitiveSearch(str1, str2);
// ----------------------------------------------------


// second method
// ----------------------------------------------------
function caseInsensitiveSearch(str1, str2){
    let result = str1.search(new RegExp(str2, "i"));
    if(result > 0){
        alert("Matched");
    } else{
        alert("Not Matched");
    }
}

caseInsensitiveSearch(str1, str2);
// ----------------------------------------------------
