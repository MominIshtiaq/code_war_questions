// Rules for playing the game
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

let roll = [5,1,3,1,4]
let roll2 = [1,1,1,3,1]
let roll3 = [2, 3, 4, 6, 2]
let roll4 = [4,4,4,3,3]
let roll5 = [2, 4, 4, 5, 4]

function score( dice ) {
    let totalScore = 0;
    let obj = {};
    
    for(let i = 0; i < dice.length; i++) {
        obj[dice[i]] = obj.hasOwnProperty(dice[i]) ? obj[dice[i]]+1 : 1
    }

    for(let num in obj) {
        if(obj[num] >= 3) {
            switch (num) {
                case "1":
                    totalScore += 1000
                    break;
                case "2":
                    totalScore += 200
                    break;
                case "3":
                    totalScore += 300
                    break;
                case "4":
                    totalScore += 400
                    break;
                case "5":
                    totalScore += 500
                    break;
                case "6":
                    totalScore += 600
                    break;
            }
            obj[num] = obj[num] - 3
        }
        if(num === '1') {
            while(obj[num] > 0) {
                totalScore += 100
                obj[num]--
                console.log(obj)
            }
        }
        if(num === '5') {
            while(obj[num] > 0){
                totalScore += 50
                obj[num]--
            }
        }
    }

    return totalScore
}

console.log(score(roll5))
