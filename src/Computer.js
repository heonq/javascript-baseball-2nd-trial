const {print} = require("./util.js");
const {GAME_RESULT} = require("./constants.js");

class Computer {

    countStrike(computerNumber,userNumber){
        return computerNumber.filter((number,index)=>{
            return Number(number)===Number(userNumber[index])
        }).length;
    }
    countBall(computerNumber,userNumber){
        return computerNumber.filter((number,index)=>{
            return number!==Number(userNumber[index]) && userNumber.includes(number);
        }).length;
    }

    printGameResult(computerNumber,userNumber){
        this.strike = this.countStrike(computerNumber,userNumber);
        this.ball = this.countBall(computerNumber,userNumber);
        print(this.strike);
        print(this.ball);
        if(this.strike===0&&this.ball>0){
            return print(GAME_RESULT.BALL[this.ball]);
        }
        print((`${GAME_RESULT.BALL[this.ball]} ${GAME_RESULT.STRIKE[this.strike]}`).trim());
    }

    initCount(){
        this.ball=0;
        this.strike=0;
    }
}

module.exports = Computer;