let string = prompt("L");
reverseString(string);
function reverseString(str){
    let rev = '';
    for(let i = str.length-1;i>=0;i--){
        rev+=str[i];
    }
    alert(`${string} => ${rev}`);
}
console.log(getArithmeticMean(1,3,5));
function getArithmeticMean(...args){
    return args.reduce((a,b) => a+=b)/args.length;
}