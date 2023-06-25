const MissionUtils = require("@woowacourse/mission-utils");
const {GAME_MESSAGE,GAME_RESULT, ERROR_MESSAGE} = require("./constants.js");
const checkUserInput = require("./checkUserInput.js");
const {randomGenerateNumber,print} = require("./util.js");

class Game {

    play(){
        this.printIntro();
        this.computer = randomGenerateNumber();
        this.initCount();
        this.getUserInput(GAME_MESSAGE.INPUT);
    }

    printIntro(){
        print(GAME_MESSAGE.INTRO);
    }

    getUserInput(message){
        MissionUtils.Console.readLine(message,(answer)=>{
            this.user = answer;
            if(message===GAME_MESSAGE.RESTART){
                return this.chooseStartOrFinish();
            }
            checkUserInput(this.user);
            this.printGameResult();
            this.finishGame();
            this.getUserInput(message);
        })
    }

    countStrike(){
        return this.computer.filter((number,index)=>{
            return Number(number)===Number(this.user[index])
        }).length;
    }
    countBall(){
        return this.computer.filter((number,index)=>{
            return number!==Number(this.user[index]) && this.user.includes(number);
        }).length;
    }

    printGameResult(){
        this.strike = this.countStrike();
        this.ball = this.countBall();
        if(this.strike===0&&this.ball>0){
            return print(GAME_RESULT.BALL[this.ball]);
        }
        print((`${GAME_RESULT.BALL[this.ball]} ${GAME_RESULT.STRIKE[this.strike]}`).trim());
    }

    initCount(){
        this.ball=0;
        this.strike=0;
    }

    finishGame(){
        if(this.strike===3){
            print(GAME_RESULT.CORRECT);
            this.getUserInput(GAME_MESSAGE.RESTART);
        }
    }

    chooseStartOrFinish(){
        if(this.user==="1") this.play();
        if(this.user==="2") MissionUtils.Console.close();
        else throw new Error(ERROR_MESSAGE.ONEORTWO);
    }
}


module.exports = Game;