const MissionUtils = require("@woowacourse/mission-utils");
const {GAME_MESSAGE,GAME_RESULT, ERROR_MESSAGE} = require("./constants.js");
const checkUserInput = require("./checkUserInput.js");
const {randomGenerateNumber,print} = require("./util.js");
const Computer = require("./Computer.js");

class Game {
    constructor(){
        this.computer = new Computer();
    }
    
    play(){
        this.printIntro();
        this.computerNumber = randomGenerateNumber();   
        this.computer.initCount();
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
            this.computer.printGameResult(this.computerNumber,this.user);
            this.finishGame();
            this.getUserInput(message);
        })
    }


    finishGame(){
        if(this.computer.strike===3){
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