module.exports.randomNum = function randomNum(a, b) {
    if(isNaN(a) === true || isNaN(b) === true) {
        console.log("Please enter only numbers for the arguments.")
    } 
    if(a > b){
        return Math.floor(Math.random() * a) + b;
    } else {
        return Math.floor(Math.random() * b) + a;
    }
    
};

