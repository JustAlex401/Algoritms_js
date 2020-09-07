let arrRes = [];
let arrCity = ["Minsk", "Madrid" , "Rome"];
let arrCity2 = ["Paris", "Nice"];

function exec(arr){
    arr.forEach(element => {
        let prom = fetch(`http://geocode.xyz/${element}?json=1&auth=184542953872419335146x127582`);
        arrRes.push(prom);
    });
}

//////////////////////////////////////////////////////////////

function promAll(arrRes, arrCity){
    exec(arrCity);
    Promise.all(arrRes).then(data => {
    data.forEach((el) => {    
        el.json().then(value => {
            if (value.error) {
                let error = new Error(value.msg);
                error.response=value;
                throw error;
            } else {
                const { alt: { loc: { countryname, city } } } = value
                console.log(city+": " +countryname);
            }            
        }).catch(err => console.error(err));
    }); 
});
}

///////////////////////////////////////////////////////////////////////

function promRace(arrRes, arrCity2){
    exec(arrCity2)
    Promise.race(arrRes).then(data => {
        const obj = data.json().then(value => {
            if (value.error) {
                let error = new Error(value.msg);
                error.response=value;
                throw error;
            } else {
                const { alt: { loc: { countryname, city } } } = value
                console.log(city+": " +countryname)
            }
        }).catch(err => console.error(err));
    }); 
}

/////////////////////////////////////////////////////////////////////

function part3(arrCity, arrRes){
    const aaa = new Promise((res, rej) => {
        setTimeout(()=>{
            res(arrCity);
        }, 3000)
    });

    aaa.then((res)=> {
       promAll(arrRes, res)
    });
}

///////////////////////////////////////////////////////////////////

// promAll(arrRes, arrCity);

// promRace(arrRes, arrCity2);


// part3(arrCity, arrRes);

