const MissionUtils = require("@woowacourse/mission-utils");
const {GAME_MESSAGE,GAME_RESULT} = require("./constants.js");
const checkUserInput = require("./checkUserInput.js");

class Game {
    constructor() {
        this.computer = this.randomGenerateNumber();
    }

    play(){
        this.printIntro();
        this.getUserInput(GAME_MESSAGE.INPUT);
    }

    printIntro(){
        print(GAME_MESSAGE.INTRO);
    }
    
    randomGenerateNumber() {
        const computer = [];
        while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    getUserInput(message){
        MissionUtils.Console.readLine(message,(answer)=>{
            this.user = answer;
            checkUserInput(this.user);
            this.printGameResult();
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

    initCount(){
        this.strike =0;
        this.ball = 0;
    }

    printGameResult(){
        this.strike = this.countStrike();
        this.ball = this.countBall();
        print(this.strike);
        print(this.ball);
        if(this.strike===0&&this.ball>0){
            return print(GAME_RESULT.BALL[this.ball]);
        }
        print((`${GAME_RESULT.BALL[this.ball]} ${GAME_RESULT.STRIKE[this.strike]}`).trim());
    }
}

const print=(message)=>MissionUtils.Console.print(message);

module.exports = Game;