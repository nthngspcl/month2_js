var tags = ["li","span","div","h3","a","div","span","li","div","div","div"];
var tags_uniq = Array.from(new Set(tags));
var arrToObj = [];
for (var x = 0;x<=tags_uniq.length-1;x++){
    arrToObj[x] = [tags_uniq[x],null]
}
var count = Object.fromEntries(arrToObj);

//считает повторные
for(var key in count){
    for(var tag of tags){
        if(key === tag){
            count[key]++    
        }
    }
}
console.log(count);

//сортировка
var objToArr = Object.entries(count);
bubbleSortConcept1(objToArr);
console.log(objToArr);
var counted = Object.fromEntries(objToArr);
console.log(counted)

function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i][1] < arr[i + 1][1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
  }
