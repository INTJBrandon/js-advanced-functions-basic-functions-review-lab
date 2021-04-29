// Your code here

function saturdayFun(actvity = "roller-skate") {
    return `This Saturday, I want to ${actvity}!`;
}

function mondayWork(actvity = 'go to the office') {
    return `This Monday, I will ${actvity}.`;
}

function wrapAdjective(flair = "*") {
    return function(e = 'special') {
        console.log(`You are ${flair}${e}${flair}`)
        return `You are ${flair}${e}${flair}!`
    }
}

const Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
}
function actionApplyer(int, functs) {
    if (functs.length === 0) {
        return int
    } else {
        let result = int
        functs.forEach(funct => {
            result = funct(result)
         });
        return result
        }
    }
// wrapAdjective()