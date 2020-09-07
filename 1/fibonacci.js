let num = prompt('Input number', 10);
num=Number(num);

function fibonacci(num) 
    { 
        if(num<0){
            alert("Error, value must be more or equally then 0")
        }
        let arr= new Array();
        arr[0]=0;
        arr[1]=1;
        if (num === 0){
            alert();
        }
        if(num === 1) {
            alert(arr[0]);
        }
        let i=2; 
        while (arr[i-1]<num && (arr[i-1]+arr[i-2])<num)   
        { 
            arr.push(arr[i-1]+arr[i-2]);
            i+=1; 
        } 
        alert(arr) 
    } 

 fibonacci(num);



