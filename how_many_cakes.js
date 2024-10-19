let receipe = {apple:3 ,flour: 500, sugar: 200, eggs: 1, oil: 100}
let ingredients = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}

function cakes(receipe, available) {
    let totalCake = 0;
    let canMake = true;
    
    while(canMake) {
        for (let item in receipe) {
            if(!available.hasOwnProperty(item)) return 0;
            if(available[item] >= receipe[item]) {
                available[item] -= receipe[item];
            } else {
                canMake = false;
                break;
            }
        }
        console.log(available)
        if(canMake) totalCake++;
    }

    return totalCake;
}

console.log(cakes(receipe, ingredients))