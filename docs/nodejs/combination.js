function combination(arr) {


}

var data = ["apple", "banana", "lemon", "mango", "water melon", "peach"];
const combinations = [];
for(let i = 0; i < data.length -2; i++){
  for(let j = i + 1; j < data.length -1; j++){
    for(let k = j + 1; k < data.length; k++){
      combinations.push([data[i],data[j],data[k]])
    }
  }
}
console.log(combinations);