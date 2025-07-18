

let correct = 0;
for(i=0;i<100;i++){
    let a = Boolean(Math.round(Math.random()));
    let b = Boolean(Math.round(Math.random()));

    if(a == b){
        correct++
    }
}
console.log("results --> "+ correct.toString()+"%")


