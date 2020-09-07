function aaa(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
                res("Hello");
        }, 6000);
    });
}


aaa().then((res) =>console.log(res));
