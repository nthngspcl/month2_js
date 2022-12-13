var i = 0;
while(i<=20){
    if(i%2===0 && i!==0){
        console.log(i);
    }
    i++;
}
var sum = 0;
do{
    var num = Number(prompt("Num"));
    if(num>=0){
        sum+=num;
    }
    else if(num<0){
        console.log("Сумма чисел -",sum);
        break;
    }
}while(true);