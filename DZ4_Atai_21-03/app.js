var tags = ["li","span","div","h3","a","div","span","li","div","div"];
var count = {
    li:null,
    span:null,
    div:null,
    a:null,
    h3:null
}
for(var i of tags){
    switch (i){
        case "li":
            count.li++;
            break;
        case "div":
            count.div++;
            break;
        case "span":
            count.span++;
            break;
        case "a":
            count.a++;
            break;
        case "h3":
            count.h3++;
            break;
    }
}
console.log(count);
var arr1 = Object.entries(count);
bubbleSortConcept1(arr1);
var counted = Object.fromEntries(arr1);
console.log(counted)

function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i][1] < arr[i + 1][1]) {
          let temp = arr[i][1];
          arr[i][1] = arr[i + 1][1];
          arr[i + 1][1] = temp;
        }
      }
    }
  }
