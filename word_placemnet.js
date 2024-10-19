let str = "is2 Thi1s 5website a3 goo4d";
let str2 = "3a He1 i2s bo4y"

function order(words) {
    let arr = [];
    words = words.split(" ");

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(Number(words[i][j])) {
                arr[Number(words[i][j]) - 1] = words[i];
                break;
            }
        }
    }
    
    return arr
}

console.log(order(str2))
